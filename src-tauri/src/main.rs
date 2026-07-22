#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::collections::HashSet;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;
use serde::Serialize;

fn resolve_game_path(clean_path: &str) -> PathBuf {
    let target_path = PathBuf::from(clean_path);

    // If an absolute path is provided (e.g. C:\Users\...), return it immediately!
    if target_path.is_absolute() {
        return target_path;
    }

    // Fallback logic for relative paths
    if let Ok(mut current_dir) = std::env::current_dir() {
        if current_dir.ends_with("src-tauri") {
            if let Some(parent) = current_dir.parent() {
                current_dir = parent.to_path_buf();
            }
        }

        let direct_path = current_dir.join(clean_path);
        if direct_path.exists() {
            return direct_path;
        }

        let games_subfolder_path = current_dir.join("games").join(clean_path);
        if games_subfolder_path.exists() {
            return games_subfolder_path;
        }

        return direct_path;
    }

    target_path
}

#[tauri::command]
fn open_game_file(path: String) -> Result<(), String> {
    let clean_path = path.trim();

    // Handle URLs
    if clean_path.starts_with("http://") || clean_path.starts_with("https://") || clean_path.starts_with("steam://") {
        #[cfg(target_os = "windows")]
        Command::new("cmd").args(["/C", "start", "", clean_path]).spawn().map_err(|e| e.to_string())?;

        #[cfg(target_os = "linux")]
        Command::new("xdg-open").arg(clean_path).spawn().map_err(|e| e.to_string())?;

        #[cfg(target_os = "macos")]
        Command::new("open").arg(clean_path).spawn().map_err(|e| e.to_string())?;

        return Ok(());
    }

    let resolved_path = resolve_game_path(clean_path);

    if !resolved_path.exists() {
        return Err(format!(
            "File not found on disk: \"{}\"",
            resolved_path.display()
        ));
    }

    let parent_dir = resolved_path.parent().unwrap_or(&resolved_path);

    #[cfg(target_os = "windows")]
    {
        if resolved_path
            .extension()
            .and_then(|s| s.to_str())
            .unwrap_or("")
            .eq_ignore_ascii_case("exe")
        {
            Command::new(&resolved_path)
                .current_dir(parent_dir)
                .spawn()
                .map_err(|e| format!("Error launching executable: {}", e))?;
        } else {
            Command::new("explorer")
                .arg(&resolved_path)
                .spawn()
                .map_err(|e| format!("Error opening file with explorer: {}", e))?;
        }
    }

    #[cfg(target_os = "linux")]
    {
        if Command::new(&resolved_path).current_dir(parent_dir).spawn().is_err() {
            Command::new("xdg-open")
                .arg(&resolved_path)
                .spawn()
                .map_err(|e| format!("Error launching on Linux: {}", e))?;
        }
    }

    #[cfg(target_os = "macos")]
    {
        Command::new("open")
            .arg(&resolved_path)
            .spawn()
            .map_err(|e| format!("Error launching on macOS: {}", e))?;
    }

    Ok(())
}

#[derive(Serialize)]
struct SteamGame {
    name: String,
    title: String,
    path: String,
    icon: String,
    appid: String,
}

#[cfg(target_os = "windows")]
fn get_steam_install_dir() -> Option<PathBuf> {
    use winreg::enums::HKEY_CURRENT_USER;
    use winreg::RegKey;

    if let Ok(hkcu) = RegKey::predef(HKEY_CURRENT_USER).open_subkey("Software\\Valve\\Steam") {
        if let Ok(path_value) = hkcu.get_value::<String, _>("SteamPath") {
            let steam_path = PathBuf::from(path_value);
            if steam_path.exists() {
                return Some(steam_path);
            }
        }
    }

    let default_path = PathBuf::from(r"C:\Program Files (x86)\Steam");
    if default_path.exists() {
        return Some(default_path);
    }

    None
}

#[cfg(not(target_os = "windows"))]
fn get_steam_install_dir() -> Option<PathBuf> {
    None
}

fn parse_app_manifest(manifest_path: &Path) -> Option<(String, String)> {
    let content = fs::read_to_string(manifest_path).ok()?;
    let mut appid = None;
    let mut name = None;

    for line in content.lines() {
        let line = line.trim();
        if !line.starts_with('"') {
            continue;
        }

        let parts: Vec<&str> = line.split('"').collect();
        if parts.len() < 4 {
            continue;
        }

        let key = parts[1];
        let value = parts[3];

        match key {
            "appid" => appid = Some(value.to_string()),
            "name" => name = Some(value.to_string()),
            _ => {}
        }
    }

    Some((appid?, name?))
}

fn load_steam_libraries(steam_dir: &Path) -> Vec<PathBuf> {
    let mut libraries = Vec::new();
    let steamapps_dir = steam_dir.join("steamapps");
    if steamapps_dir.exists() {
        libraries.push(steamapps_dir.clone());
    }

    let library_file = steamapps_dir.join("libraryfolders.vdf");
    if let Ok(content) = fs::read_to_string(library_file) {
        for line in content.lines() {
            let trimmed = line.trim();
            if trimmed.starts_with('"') {
                let parts: Vec<&str> = trimmed.split('"').collect();
                if parts.len() >= 4 {
                    let key = parts[1];
                    let value = parts[3];
                    if key.chars().all(|c| c.is_ascii_digit()) {
                        let lib_path = PathBuf::from(value);
                        if lib_path.exists() {
                            let steamapps = lib_path.join("steamapps");
                            if steamapps.exists() && !libraries.contains(&steamapps) {
                                libraries.push(steamapps);
                            }
                        }
                    }
                }
            }
        }
    }

    libraries
}

#[tauri::command]
fn detect_steam_games() -> Result<Vec<SteamGame>, String> {
    let steam_dir = get_steam_install_dir().ok_or_else(|| "Steam install directory not found".to_string())?;
    let libraries = load_steam_libraries(&steam_dir);

    if libraries.is_empty() {
        return Ok(Vec::new());
    }

    let mut seen = HashSet::new();
    let mut games = Vec::new();

    for library in libraries {
        if let Ok(entries) = fs::read_dir(&library) {
            for entry in entries.flatten() {
                let path = entry.path();
                if let Some(name) = path.file_name().and_then(|n| n.to_str()) {
                    if name.starts_with("appmanifest_") && name.ends_with(".acf") {
                        if let Some((appid, title)) = parse_app_manifest(&path) {
                            if !seen.insert(appid.clone()) {
                                continue;
                            }
                            let icon = format!("https://cdn.cloudflare.steamstatic.com/steam/apps/{}/header.jpg", appid);
                            games.push(SteamGame {
                                name: title.clone(),
                                title,
                                path: format!("steam://rungameid/{}", appid),
                                icon,
                                appid,
                            });
                        }
                    }
                }
            }
        }
    }

    Ok(games)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init()) // Native File Dialog Enabled
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![open_game_file, detect_steam_games])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}