const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const os = require('os');
const { dialog, shell } = require('electron');
const { spawn, exec } = require('child_process');
const fs = require('fs');

const STEAM_LIB_FOLDER_NAME = 'steamapps';

function getPossibleSteamRoots() {
  const home = os.homedir();
  const roots = [];

  if (process.platform === 'win32') {
    const programFilesX86 = process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)';
    const programFiles = process.env['PROGRAMFILES'] || 'C:\\Program Files';
    roots.push(path.join(programFilesX86, 'Steam'));
    roots.push(path.join(programFiles, 'Steam'));
    roots.push(path.join(home, 'Desktop', 'Steam'));
  } else if (process.platform === 'linux') {
    roots.push(path.join(home, '.steam', 'steam'));
    roots.push(path.join(home, '.local', 'share', 'Steam'));
    roots.push(path.join(home, '.var', 'app', 'com.valvesoftware.Steam', 'data', 'Steam'));
  } else if (process.platform === 'darwin') {
    roots.push(path.join(home, 'Library', 'Application Support', 'Steam'));
  }

  return roots.filter(root => fs.existsSync(root));
}

function parseKeyValuePairs(text) {
  const map = {};
  const regex = /"([^"]+)"\s*"([^"]*)"/g;
  let match;
  while ((match = regex.exec(text))) {
    map[match[1]] = match[2];
  }
  return map;
}

function findSteamLibraryFolders(steamRoot) {
  const libraryFoldersPath = path.join(steamRoot, STEAM_LIB_FOLDER_NAME, 'libraryfolders.vdf');
  if (!fs.existsSync(libraryFoldersPath)) {
    return [steamRoot];
  }

  const content = fs.readFileSync(libraryFoldersPath, 'utf-8');
  const folderPaths = [];
  const regex = /"(\d+)"\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content))) {
    let libraryPath = match[2];
    if (!path.isAbsolute(libraryPath)) {
      libraryPath = path.resolve(path.join(steamRoot, STEAM_LIB_FOLDER_NAME), libraryPath);
    }
    if (fs.existsSync(libraryPath)) {
      folderPaths.push(libraryPath);
    }
  }

  folderPaths.push(steamRoot);
  return Array.from(new Set(folderPaths));
}

function parseSteamAppManifest(content) {
  const match = content.match(/"AppState"\s*\{([\s\S]*?)\n\}/);
  const block = match ? match[1] : content;
  const values = parseKeyValuePairs(block);
  if (!values.appid) return null;
  return {
    appid: values.appid,
    name: values.name || '',
    installdir: values.installdir || ''
  };
}

function isSteamGameApp(appInfo) {
  const title = (appInfo.name || '').toLowerCase();
  const dir = (appInfo.installdir || '').toLowerCase();
  const skipKeywords = [
    'runtime',
    'proton',
    'compatibility',
    'steamworks',
    'shadercache',
    'tools',
    'tool',
    'htmlcache',
    'vulkan',
    'sdk',
    'support',
    'vr',
    'package',
    'workshop',
    'redistributables',
    'depots'
  ];
  const skipNames = [
    'steam linux runtime',
    'steam runtime',
    'proton experimental',
    'proton',
    'steamworks common redistributables',
    'compatibility tools',
    'steam play compatibility tool',
    'steam client bootstrapper'
  ];

  if (!appInfo.installdir) {
    return false;
  }

  for (const keyword of skipKeywords) {
    if (dir.includes(keyword) || title.includes(keyword)) {
      return false;
    }
  }

  for (const name of skipNames) {
    if (title.includes(name)) {
      return false;
    }
  }

  return true;
}

function detectSteamInstalledGames() {
  const roots = getPossibleSteamRoots();
  const steamGames = [];
  const seenAppIds = new Set();

  for (const root of roots) {
    const libraryRoots = findSteamLibraryFolders(root);
    for (const libRoot of libraryRoots) {
      const steamAppsFolder = path.join(libRoot, STEAM_LIB_FOLDER_NAME);
      if (!fs.existsSync(steamAppsFolder)) continue;

      const files = fs.readdirSync(steamAppsFolder).filter(name => /^appmanifest_\d+\.acf$/.test(name));
      for (const fileName of files) {
        try {
          const manifestPath = path.join(steamAppsFolder, fileName);
          const content = fs.readFileSync(manifestPath, 'utf-8');
          const appInfo = parseSteamAppManifest(content);
          if (!appInfo || !appInfo.appid || seenAppIds.has(appInfo.appid) || !isSteamGameApp(appInfo)) continue;

          seenAppIds.add(appInfo.appid);
          const title = appInfo.name || `Steam App ${appInfo.appid}`;
          steamGames.push({
            title,
            appid: appInfo.appid,
            installdir: appInfo.installdir,
            steamLaunchUrl: `steam://rungameid/${appInfo.appid}`,
            steamPageUrl: `steam://store/${appInfo.appid}`,
            website: `https://store.steampowered.com/app/${appInfo.appid}`,
            icon: `https://cdn.cloudflare.steamstatic.com/steam/apps/${appInfo.appid}/header.jpg`,
            bg_icon: `https://cdn.cloudflare.steamstatic.com/steam/apps/${appInfo.appid}/page_bg_generated.jpg`,
            source: 'steam'
          });
        } catch (error) {
          console.warn('Unable to parse Steam manifest:', fileName, error);
        }
      }
    }
  }

  return steamGames;
}


let mainWindow;
let windowBoundsBeforeFullscreen = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'src/index.html'));

  // Remove the menu bar
  Menu.setApplicationMenu(null);

  // Uncomment the line below to open DevTools in development
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC Handlers
ipcMain.handle('get-os', () => {
  const platform = process.platform;
  if (platform === 'win32') return 'WIN';
  if (platform === 'linux') return 'LIN';
  if (platform === 'darwin') return 'MAC';
  return 'WIN';
});

ipcMain.handle('select-path', async (event, gameName) => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: `Sélectionner l'exécutable de ${gameName}`,
    defaultPath: os.homedir(),
    properties: ['openFile'],
    filters: [
      { name: 'Exécutables', extensions: ['exe', 'msi', 'AppImage', 'deb', 'rpm', 'dmg', 'app'] },
      { name: 'Tous les fichiers', extensions: ['*'] }
    ]
  });

  if (!result.canceled && result.filePaths.length > 0) {
    return result.filePaths[0];
  }
  
  return null;
});

ipcMain.handle('open-url', async (event, url) => {
  try {
    await shell.openExternal(url);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'ouverture de l\'URL:', error);
    return false;
  }
});

ipcMain.handle('detect-steam-games', () => {
  try {
    return detectSteamInstalledGames();
  } catch (error) {
    console.error('Erreur lors de la détection des jeux Steam:', error);
    return [];
  }
});

ipcMain.handle('launch-game', async (event, gamePath) => {
  try {
    if (!gamePath || !fs.existsSync(gamePath)) {
      throw new Error('Chemin de l\'exécutable non trouvé');
    }

    const platform = process.platform;
    
    if (platform === 'win32') {
      // Windows: lancer directement le .exe
      spawn(gamePath, [], { detached: true });
    } else if (platform === 'linux') {
      // Linux: rendre executable et lancer (AppImage, etc.)
      fs.chmodSync(gamePath, '755');
      spawn(gamePath, [], { detached: true });
    } else if (platform === 'darwin') {
      // macOS: lancer avec open command
      exec(`open "${gamePath}"`);
    }
    
    console.log('Application lancée:', gamePath);
    return true;
  } catch (error) {
    console.error('Erreur lors du lancement de l\'application:', error);
    throw error;
  }
});

// Window controls
ipcMain.handle('window-minimize', () => {
  mainWindow.minimize();
});

ipcMain.handle('window-maximize', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.handle('window-close', () => {
  mainWindow.close();
});

ipcMain.handle('select-image', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Sélectionner une image',
    defaultPath: os.homedir(),
    properties: ['openFile'],
    filters: [
      { name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'] },
      { name: 'Tous les fichiers', extensions: ['*'] }
    ]
  });

  if (!result.canceled && result.filePaths.length > 0) {
    // Return file:// URL
    return 'file://' + result.filePaths[0];
  }
  
  return null;
});

// Fullscreen support — save/restore bounds so Linux/Wayland exits cleanly
ipcMain.handle('set-fullscreen', (event, isFullscreen) => {
  if (!mainWindow) return false;

  if (isFullscreen) {
    if (!mainWindow.isFullScreen()) {
      windowBoundsBeforeFullscreen = mainWindow.getBounds();
    }
    mainWindow.setFullScreen(true);
  } else {
    mainWindow.setFullScreen(false);
    if (windowBoundsBeforeFullscreen) {
      mainWindow.setBounds(windowBoundsBeforeFullscreen);
      windowBoundsBeforeFullscreen = null;
    } else if (!mainWindow.isMaximized()) {
      mainWindow.unmaximize();
      mainWindow.setSize(1200, 800);
      mainWindow.center();
    }
  }

  return mainWindow.isFullScreen();
});

ipcMain.handle('is-fullscreen', () => {
  return mainWindow ? mainWindow.isFullScreen() : false;
});
