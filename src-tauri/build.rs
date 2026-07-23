fn main() {
  println!("cargo:rerun-if-changed=../.env");
  println!("cargo:rerun-if-changed=../src/.env");

  for (key, rust_key) in [
    ("NEXT_PUBLIC_SUPABASE_URL", "ZETSUPABASE_URL"),
    ("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY", "ZETSUPABASE_PUBLISHABLE_KEY"),
  ] {
    if let Some(value) = load_env_value(key) {
      println!("cargo:rustc-env={rust_key}={value}");
    }
  }

  tauri_build::build()
}

fn load_env_value(key: &str) -> Option<String> {
  for candidate in ["../.env", "../src/.env"] {
    let Ok(content) = std::fs::read_to_string(candidate) else {
      continue;
    };

    for line in content.lines() {
      let line = line.trim();
      if line.is_empty() || line.starts_with('#') {
        continue;
      }
      let Some((candidate_key, value)) = line.split_once('=') else {
        continue;
      };
      if candidate_key.trim() == key {
        return Some(value.trim().trim_matches('"').to_string());
      }
    }
  }
  None
}
