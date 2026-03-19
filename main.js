const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const os = require('os');
const { dialog, shell } = require('electron');
const { spawn, exec } = require('child_process');
const fs = require('fs');

let mainWindow;

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

// Fullscreen support
ipcMain.handle('set-fullscreen', (event, isFullscreen) => {
  if (mainWindow) {
    mainWindow.setFullScreen(isFullscreen);
    return true;
  }
  return false;
});
