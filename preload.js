const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  fetchGames: (url) => ipcRenderer.invoke('fetch-games', url),
  downloadGame: (url, gameName) => ipcRenderer.invoke('download-game', url, gameName),
  launchGame: (gamePath) => ipcRenderer.invoke('launch-game', gamePath),
  getOS: () => ipcRenderer.invoke('get-os'),
  selectPath: (gameName) => ipcRenderer.invoke('select-path', gameName),
  openUrl: (url) => ipcRenderer.invoke('open-url', url),
  windowMinimize: () => ipcRenderer.invoke('window-minimize'),
  windowMaximize: () => ipcRenderer.invoke('window-maximize'),
  windowClose: () => ipcRenderer.invoke('window-close'),
  selectImage: () => ipcRenderer.invoke('select-image'),
  setFullscreen: (isFullscreen) => ipcRenderer.invoke('set-fullscreen', isFullscreen),
});
