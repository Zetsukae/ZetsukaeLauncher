// Retrieve Tauri v2 global API references safely
const tauri = window.__TAURI__ || {};
const shell = tauri.shell || (window.__TAURI_PLUGIN_SHELL__ ? window.__TAURI_PLUGIN_SHELL__ : {});
const dialog = tauri.dialog || (window.__TAURI_PLUGIN_DIALOG__ ? window.__TAURI_PLUGIN_DIALOG__ : {});
const os = tauri.os || {};
const path = tauri.path || {};
const tauriWindow = tauri.window || {};
const core = tauri.core || (window.__TAURI__ ? window.__TAURI__.core : null);
const appWindow = typeof tauriWindow.getCurrentWindow === 'function' ? tauriWindow.getCurrentWindow() : null;

// DOM Elements
const grid = document.querySelector('#gameGrid');
const dockItems = Array.from(document.querySelectorAll('.dock-item[data-view]'));
const pages = Array.from(document.querySelectorAll('.content-page'));
const gameModal = document.getElementById('gameModal');
const gameModalBackdrop = document.getElementById('gameModalBackdrop');
const gameModalClose = document.getElementById('gameModalClose');
const gameModalHero = document.getElementById('gameModalHero');
const gameModalTitle = document.getElementById('gameModalTitle');
const gameModalPrice = document.getElementById('gameModalPrice');
const chooseLocationButton = document.getElementById('chooseLocationButton');
const chosenLocationText = document.getElementById('chosenLocationText');
const gameWebsiteLink = document.getElementById('gameWebsiteLink');
const launchGameButton = document.getElementById('launchGameButton');
const steamGrid = document.getElementById('steamGrid');
const steamFallbackMessage = document.getElementById('steamFallbackMessage');
const savedGamesGrid = document.getElementById('savedGamesGrid');
const savedGamesMessage = document.getElementById('savedGamesMessage');
const savedGamesSection = document.getElementById('savedGamesSection');
const settingsButton = document.querySelector('.dock-item.settings-item');
const settingsModal = document.getElementById('settingsModal');
const settingsModalBackdrop = document.getElementById('settingsModalBackdrop');
const settingsModalClose = document.getElementById('settingsModalClose');
const autoDetectSteamToggle = document.getElementById('autoDetectSteamToggle');
const clearSavedPathsButton = document.getElementById('clearSavedPathsButton');
const clearSteamCacheButton = document.getElementById('clearSteamCacheButton');
const reloadSteamButton = document.getElementById('reloadSteamButton');
const backgroundStyleSelect = document.getElementById('backgroundStyleSelect');
const backgroundImageInput = document.getElementById('backgroundImageInput');
const backgroundSoundToggle = document.getElementById('backgroundSoundToggle');

// State variables
let lastScroll = window.scrollY;
let throttled = false;
let activeGame = null;
let activeGamePath = '';
let steamGamesByTitle = new Map();
let localGames = [];

const GAMES_REPO_URL = 'https://api.github.com/repos/Zetsukae/ZetsukaeLauncher/contents/games';
const GAMES_LOCAL_INDEX = 'games/index.json';
const GAME_PATH_STORAGE_PREFIX = 'zetsukae_launcher_game_path_';
const SETTINGS_STORAGE_KEY = 'zetsukae_launcher_settings';

function normalizeStorageKey(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_-]/g, '');
}

function getSavedGamePath(game) {
  try {
    const key = `${GAME_PATH_STORAGE_PREFIX}${normalizeStorageKey(game.name || game.title || '')}`;
    return window.localStorage?.getItem(key) || '';
  } catch (error) {
    console.warn('Unable to read saved game path:', error);
    return '';
  }
}

function saveGamePath(game, gamePath) {
  try {
    const key = `${GAME_PATH_STORAGE_PREFIX}${normalizeStorageKey(game.name || game.title || '')}`;
    if (!gamePath || /^(steam:\/\/|https?:\/\/)/i.test(gamePath)) {
      window.localStorage?.removeItem(key);
      renderSavedGames();
      return;
    }
    window.localStorage?.setItem(key, gamePath);
    renderSavedGames();
  } catch (error) {
    console.warn('Unable to save game path:', error);
  }
}

function loadSettings() {
  try {
    const saved = window.localStorage?.getItem(SETTINGS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed) {
        return {
          autoDetectSteam: typeof parsed.autoDetectSteam === 'boolean' ? parsed.autoDetectSteam : true,
          backgroundStyle: typeof parsed.backgroundStyle === 'string' ? parsed.backgroundStyle : 'white',
          backgroundImage: typeof parsed.backgroundImage === 'string' ? parsed.backgroundImage : '',
          backgroundSound: typeof parsed.backgroundSound === 'boolean' ? parsed.backgroundSound : false
        };
      }
    }
  } catch (error) {
    console.warn('Unable to load settings:', error);
  }
  return { autoDetectSteam: true, backgroundStyle: 'white', backgroundImage: '', backgroundSound: false };
}

function saveSettings(settings) {
  try {
    window.localStorage?.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.warn('Unable to save settings:', error);
  }
}

function getCurrentBackgroundStyle() {
  switch (appSettings.backgroundStyle) {
    case 'gradient':
      return 'gradient';
    case 'night':
      return 'night';
    case 'custom':
      return 'custom';
    default:
      return 'white';
  }
}

function applyBackgroundStyle() {
  const style = getCurrentBackgroundStyle();
  document.body.classList.remove('background-white', 'background-gradient', 'background-night', 'background-custom');
  document.body.classList.add(`background-${style}`);

  if (style === 'custom' && appSettings.backgroundImage) {
    document.body.style.setProperty('--custom-bg-image', `url('${appSettings.backgroundImage}')`);
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
  } else {
    document.body.style.removeProperty('--custom-bg-image');
    document.body.style.removeProperty('background-size');
    document.body.style.removeProperty('background-position');
    document.body.style.removeProperty('background-repeat');
  }
}

let backgroundAudio = null;

function updateBackgroundSound() {
  if (backgroundAudio && typeof backgroundAudio.pause === 'function') {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
    backgroundAudio = null;
  }

  if (appSettings.backgroundSound) {
    backgroundAudio = new Audio('/assets/sounds/comeaux.mp3');
    backgroundAudio.loop = true;
    backgroundAudio.volume = 0.45;
    backgroundAudio.play().catch((error) => {
      console.warn('Unable to play background audio:', error);
    });
  }
}

function openSettings() {
  if (!settingsModal) return;
  settingsModal.classList.remove('hidden');
  settingsModal.setAttribute('aria-hidden', 'false');
  if (autoDetectSteamToggle) {
    autoDetectSteamToggle.checked = appSettings.autoDetectSteam;
  }
  if (backgroundStyleSelect) {
    backgroundStyleSelect.value = appSettings.backgroundStyle || 'white';
  }
  if (backgroundImageInput) {
    backgroundImageInput.value = '';
  }
  if (backgroundSoundToggle) {
    backgroundSoundToggle.checked = Boolean(appSettings.backgroundSound);
  }
}

function closeSettings() {
  if (!settingsModal) return;
  settingsModal.classList.add('hidden');
  settingsModal.setAttribute('aria-hidden', 'true');
}

function clearSavedGamePaths() {
  try {
    for (const key of Object.keys(window.localStorage || {})) {
      if (key.startsWith(GAME_PATH_STORAGE_PREFIX)) {
        window.localStorage.removeItem(key);
      }
    }
    renderSavedGames();
    alert('Saved game paths cleared.');
  } catch (error) {
    console.error('Unable to clear saved paths:', error);
    alert('Unable to clear saved paths.');
  }
}

function clearSteamCache() {
  try {
    window.localStorage?.removeItem('zetsukae_launcher_steam_games');
    steamGamesByTitle.clear();
    if (steamFallbackMessage) {
      steamFallbackMessage.textContent = 'Steam cache cleared. Refresh the detection.';
      steamFallbackMessage.style.display = 'flex';
    }
  } catch (error) {
    console.error('Unable to clear Steam cache:', error);
  }
}

function renderSavedGames() {
  if (!savedGamesGrid || !savedGamesMessage) return;

  const savedEntries = [];
  for (const key of Object.keys(window.localStorage || {})) {
    if (!key.startsWith(GAME_PATH_STORAGE_PREFIX)) continue;
    const path = window.localStorage.getItem(key);
    if (!path) continue;
    const rawName = key.slice(GAME_PATH_STORAGE_PREFIX.length).replace(/_/g, ' ');
    const title = rawName.replace(/\b\w/g, char => char.toUpperCase());
    savedEntries.push({ title, path, saved: true });
  }

  if (savedEntries.length === 0) {
    if (savedGamesSection) savedGamesSection.style.display = 'none';
    savedGamesGrid.replaceChildren();
    savedGamesMessage.textContent = 'No saved games yet.';
    savedGamesMessage.style.display = 'none';
    return;
  }

  if (savedGamesSection) savedGamesSection.style.display = 'block';
  savedGamesMessage.style.display = 'none';
  const fragment = document.createDocumentFragment();
  savedEntries.forEach(entry => {
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';

    const icon = document.createElement('div');
    icon.className = 'card-icon fallback';
    icon.textContent = (entry.title || '?').charAt(0).toUpperCase();

    const label = document.createElement('div');
    label.className = 'card-name';
    label.textContent = entry.title;

    card.appendChild(icon);
    card.appendChild(label);

    card.addEventListener('click', async () => {
      activeGame = { title: entry.title, steamInstalled: false };
      activeGamePath = entry.path;
      if (chosenLocationText) chosenLocationText.textContent = entry.path;
      updateLaunchButtonState();
      await launchGame();
    });

    card.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      showSavedGamePathOverlay(entry.path, event.pageX, event.pageY);
    });

    fragment.appendChild(card);
  });

  savedGamesGrid.replaceChildren(fragment);
}

function hideSavedGamePathOverlay() {
  const existing = document.querySelector('.saved-game-path-overlay');
  if (existing) {
    existing.remove();
  }
}

function showSavedGamePathOverlay(path, x, y) {
  hideSavedGamePathOverlay();

  const overlay = document.createElement('div');
  overlay.className = 'saved-game-path-overlay';
  overlay.textContent = path;
  overlay.style.left = `${x + 10}px`;
  overlay.style.top = `${y + 10}px`;
  overlay.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  document.body.appendChild(overlay);
}

window.addEventListener('click', hideSavedGamePathOverlay);
window.addEventListener('scroll', hideSavedGamePathOverlay);

function reloadSteamGames(force = false) {
  if (!force && !appSettings.autoDetectSteam) {
    if (steamFallbackMessage) {
      steamFallbackMessage.textContent = 'Steam game detection is disabled.';
      steamFallbackMessage.style.display = 'flex';
    }
    return;
  }
  clearSteamCache();
  loadSteamGames(true);
}

let appSettings = loadSettings();
saveSettings(appSettings);

function normalizeGameKey(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, '');
}

function getSteamMatchForGame(game) {
  const key = normalizeGameKey(game.title || game.name || '');
  return steamGamesByTitle.get(key) || null;
}

function annotateGameWithSteam(game) {
  const steamMatch = getSteamMatchForGame(game);
  if (!steamMatch) return game;
  return {
    ...game,
    steamInstalled: true,
    steamPath: steamMatch.path,
    steamAppId: steamMatch.appid
  };
}

function annotateLocalGamesWithSteam(games) {
  return games.map(game => annotateGameWithSteam(game));
}

/**
 * Parse metadata from custom key-value format or XML-like tags
 */
function parseGameMetadata(content) {
  const metadata = {};
  const normalizedContent = content.replace(/\r\n/g, '\n');

  // Parse [key] = value format
  for (const match of normalizedContent.matchAll(/^\[([^\]]+)\]\s*=(.*)$/gm)) {
    metadata[match[1].trim().toLowerCase()] = match[2].trim();
  }

  if (Object.keys(metadata).length > 0) {
    return {
      title: metadata.title || metadata['title-fr'] || metadata['title-eng'] || 'Unknown game',
      icon: metadata.icon || '',
      bg_icon: metadata.bg_icon || '',
      website: metadata.website || '',
      price: metadata.price || '',
      windowspath: metadata.windowspath || '',
      linuxpath: metadata.linuxpath || '',
      macpath: metadata.macpath || ''
    };
  }

  // Fallback: Parse <key>value</key> XML tags
  const tagMatches = normalizedContent.matchAll(/<([a-z0-9_-]+)>([^<]*)<\/\1>/gi);
  const tags = {};

  for (const match of tagMatches) {
    tags[match[1].toLowerCase()] = match[2].trim();
  }

  return {
    title: tags.title || tags['title-fr'] || tags['title-eng'] || 'Unknown game',
    icon: tags.icon || '',
    bg_icon: tags.bg_icon || '',
    website: tags.website || '',
    price: tags.price || '',
    windowspath: tags.windowspath || '',
    linuxpath: tags.linuxpath || '',
    macpath: tags.macpath || ''
  };
}

/**
 * Load remote games from GitHub repository
 */
async function loadSteamGames(force = false) {
  if (!steamGrid) return;

  if (!force && !appSettings.autoDetectSteam) {
    steamGrid.replaceChildren();
    if (steamFallbackMessage) {
      steamFallbackMessage.textContent = 'Steam game detection is disabled.';
      steamFallbackMessage.style.display = 'flex';
    }
    return;
  }

  if (steamFallbackMessage) {
    steamFallbackMessage.textContent = 'Detecting Steam games...';
    steamFallbackMessage.style.display = 'flex';
  }

  const steamGameList = window.localStorage?.getItem('zetsukae_launcher_steam_games');
  if (steamGameList) {
    try {
      const games = JSON.parse(steamGameList);
      if (Array.isArray(games) && games.length > 0) {
        steamGamesByTitle.clear();
        games.forEach((steamGame) => {
          if (steamGame && steamGame.title) {
            steamGamesByTitle.set(normalizeGameKey(steamGame.title), steamGame);
          }
        });

        if (localGames.length > 0) {
          localGames = annotateLocalGamesWithSteam(localGames);
          renderGames(localGames);
        }

        renderSteamGames(games);
        return;
      }
    } catch (error) {
      console.warn('Invalid cached Steam game list:', error);
    }
  }

  try {
    if (!core || typeof core.invoke !== 'function') {
      throw new Error('Tauri core API unavailable');
    }

    core.invoke('detect_steam_games')
      .then((result) => {
        let games = result;
        if (typeof result === 'string') {
          games = JSON.parse(result);
        }

        if (!Array.isArray(games)) {
          throw new Error('Steam game data is not an array');
        }

        steamGamesByTitle.clear();
        games.forEach((steamGame) => {
          if (steamGame && steamGame.title) {
            steamGamesByTitle.set(normalizeGameKey(steamGame.title), steamGame);
          }
        });

        if (localGames.length > 0) {
          localGames = annotateLocalGamesWithSteam(localGames);
          renderGames(localGames);
        }

        window.localStorage?.setItem('zetsukae_launcher_steam_games', JSON.stringify(games));
        renderSteamGames(games);
      })
      .catch((error) => {
        console.warn('Unable to detect Steam games:', error);
        if (steamFallbackMessage) {
          steamFallbackMessage.textContent = 'Impossible de détecter les jeux Steam.';
        }
      });
  } catch (error) {
    console.warn('Unable to detect Steam games:', error);
    if (steamFallbackMessage) {
      steamFallbackMessage.textContent = 'Impossible de détecter les jeux Steam.';
    }
  }
}

async function loadGamesFromGitHub() {
  if (!grid) return;

  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'page-message';
  loadingMessage.textContent = 'Loading games...';
  grid.replaceChildren(loadingMessage);

  try {
    const response = await fetch(GAMES_REPO_URL);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const entries = await response.json();
    const xmlFiles = entries.filter(entry => entry.name && entry.name.toLowerCase().endsWith('.xml'));

    const games = await Promise.all(xmlFiles.map(async entry => {
      const fileResponse = await fetch(entry.download_url);

      if (!fileResponse.ok) {
        throw new Error(`Unable to load ${entry.name}`);
      }

      const content = await fileResponse.text();
      const metadata = parseGameMetadata(content);

      return {
        name: metadata.title || entry.name.replace(/\.xml$/i, ''),
        title: metadata.title || entry.name.replace(/\.xml$/i, ''),
        icon: metadata.icon || '',
        bg_icon: metadata.bg_icon || '',
        website: metadata.website || '',
        price: metadata.price || '',
        windowspath: metadata.windowspath || '',
        linuxpath: metadata.linuxpath || '',
        macpath: metadata.macpath || ''
      };
    }));

    renderGames(games);
  } catch (error) {
    console.warn('Unable to load games from GitHub, falling back to local:', error);
    await loadGamesFromLocal();
  }
}

/**
 * Fallback: Load local games index
 */
async function loadGamesFromLocal() {
  if (!grid) return;

  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'page-message';
  loadingMessage.textContent = 'Loading local games...';
  grid.replaceChildren(loadingMessage);

  try {
    const response = await fetch(GAMES_LOCAL_INDEX);
    if (!response.ok) {
      throw new Error(`Unable to load local manifest: ${response.status}`);
    }

    const files = await response.json();
    if (!Array.isArray(files) || files.length === 0) {
      throw new Error('No local game entries found');
    }

    const games = await Promise.all(files.map(async fileName => {
      const fileUrl = `games/${encodeURIComponent(fileName)}`;
      const fileResponse = await fetch(fileUrl);
      if (!fileResponse.ok) {
        throw new Error(`Unable to load local game file: ${fileName}`);
      }

      const content = await fileResponse.text();
      const metadata = parseGameMetadata(content);

      return {
        name: metadata.title || fileName.replace(/\.xml$/i, ''),
        title: metadata.title || fileName.replace(/\.xml$/i, ''),
        icon: metadata.icon || '',
        bg_icon: metadata.bg_icon || '',
        website: metadata.website || '',
        price: metadata.price || '',
        windowspath: metadata.windowspath || '',
        linuxpath: metadata.linuxpath || '',
        macpath: metadata.macpath || ''
      };
    }));

    renderGames(games);
  } catch (error) {
    console.error('Unable to load local games:', error);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'page-message';
    errorMessage.textContent = 'Unable to load games';
    grid.replaceChildren(errorMessage);
  }
}

/**
 * Create a UI card element for a game
 */
function createGameCard(game) {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';

  const icon = document.createElement('div');
  icon.className = 'card-icon';

  if (game.icon) {
    const image = document.createElement('img');
    image.className = 'card-icon-image';
    image.src = game.icon;
    image.alt = game.title || game.name || 'Game icon';
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';

    const fallback = document.createElement('span');
    fallback.className = 'fallback';
    fallback.textContent = (game.title || game.name || '?').charAt(0).toUpperCase();

    image.addEventListener('error', () => {
      image.remove();
      icon.classList.add('fallback');
      icon.appendChild(fallback);
    });

    icon.appendChild(image);
    icon.setAttribute('aria-label', game.title || game.name || 'Game icon');
  } else {
    icon.classList.add('fallback');
    const fallback = document.createElement('span');
    fallback.className = 'fallback';
    fallback.textContent = (game.title || game.name || '?').charAt(0).toUpperCase();
    icon.appendChild(fallback);
  }

  const label = document.createElement('div');
  label.className = 'card-name';
  label.textContent = game.title || game.name;

  card.appendChild(icon);
  card.appendChild(label);

  card.addEventListener('click', () => {
    openGameDetails(game);
  });

  return card;
}

/**
 * Get system executable path based on detected platform
 */
function getDetectedPathForOS(game, platform) {
  const normalized = String(platform || '').toLowerCase();
  if ((normalized.includes('windows') || normalized.includes('win')) && game.windowspath) {
    return game.windowspath;
  }
  if ((normalized.includes('linux') || normalized.includes('unix')) && game.linuxpath) {
    return game.linuxpath;
  }
  if ((normalized.includes('darwin') || normalized.includes('mac') || normalized.includes('osx')) && game.macpath) {
    return game.macpath;
  }
  return '';
}

/**
 * Expand system environment variables (~, %LOCALAPPDATA%, %USERPROFILE%)
 */
async function expandGamePath(gamePath) {
  if (!gamePath) return gamePath;

  let resolvedPath = gamePath.trim();

  // Normalize backslashes for Windows paths
  resolvedPath = resolvedPath.replace(/\//g, '\\');

  if (resolvedPath.startsWith('~') && typeof path.homeDir === 'function') {
    const home = await path.homeDir();
    resolvedPath = `${home}${resolvedPath.slice(1)}`;
  }

  if (resolvedPath.includes('%LOCALAPPDATA%') && typeof path.homeDir === 'function') {
    const home = await path.homeDir();
    const localAppData = home ? `${home}\\AppData\\Local` : '';
    resolvedPath = resolvedPath.replace(/%LOCALAPPDATA%/gi, localAppData);
  }

  if (resolvedPath.includes('%USERPROFILE%') && typeof path.homeDir === 'function') {
    const home = await path.homeDir();
    resolvedPath = resolvedPath.replace(/%USERPROFILE%/gi, home || '');
  }

  return resolvedPath;
}

/**
 * Toggle launch button state depending on path availability
 */
function updateLaunchButtonState() {
  if (launchGameButton) {
    launchGameButton.disabled = !activeGamePath;
  }
}

/**
 * Open modal view with game details
 */
async function openGameDetails(game) {
  activeGame = game;
  activeGamePath = '';
  
  if (gameModal) {
    gameModal.classList.remove('hidden');
    gameModal.setAttribute('aria-hidden', 'false');
  }

  // Preload hero background image with no-referrer
  if (gameModalHero) {
    if (game.bg_icon && game.bg_icon.trim() !== '') {
      const cleanBgUrl = game.bg_icon.trim();
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        gameModalHero.style.backgroundImage = `url("${cleanBgUrl}")`;
        gameModalHero.style.backgroundSize = 'cover';
        gameModalHero.style.backgroundPosition = 'center';
      };
      img.onerror = () => {
        gameModalHero.style.backgroundImage = 'none';
      };
      img.src = cleanBgUrl;
    } else {
      gameModalHero.style.backgroundImage = 'none';
    }
  }

  if (gameModalTitle) gameModalTitle.textContent = game.title || game.name;
  if (gameModalPrice) gameModalPrice.textContent = `Price: ${game.price === '0' || game.price === '0.0' || game.price === '' ? 'Free' : game.price}`;

  // Website link setup
  if (gameWebsiteLink) {
    const hasWebsite = Boolean(game.website && game.website.trim() !== '');
    gameWebsiteLink.textContent = hasWebsite ? 'Open website' : 'No website';
    gameWebsiteLink.href = hasWebsite ? game.website : '#';
    if (!hasWebsite) {
      gameWebsiteLink.setAttribute('aria-disabled', 'true');
      gameWebsiteLink.style.pointerEvents = 'none';
      gameWebsiteLink.style.opacity = '0.5';
    } else {
      gameWebsiteLink.removeAttribute('aria-disabled');
      gameWebsiteLink.style.pointerEvents = 'auto';
      gameWebsiteLink.style.opacity = '1';
    }
  }

  let detectedPath = '';
  try {
    if (os && typeof os.platform === 'function') {
      const osPlatform = await os.platform();
      detectedPath = getDetectedPathForOS(game, osPlatform);
      if (detectedPath) {
        detectedPath = await expandGamePath(detectedPath);
      }
    }
  } catch (error) {
    console.warn('Unable to detect OS path for game:', error);
  }

  const savedPath = activeGame ? getSavedGamePath(activeGame) : '';
  const steamPath = activeGame && activeGame.steamInstalled ? activeGame.steamPath : '';

  if (savedPath) {
    activeGamePath = savedPath;
    if (chosenLocationText) chosenLocationText.textContent = `${savedPath} (saved)`;
  } else if (steamPath) {
    activeGamePath = steamPath;
    if (chosenLocationText) chosenLocationText.textContent = `Steam: ${steamPath}`;
  } else if (detectedPath) {
    activeGamePath = detectedPath;
    if (chosenLocationText) chosenLocationText.textContent = `${detectedPath} (detected)`;
  } else {
    if (chosenLocationText) chosenLocationText.textContent = 'No path selected';
  }

  updateLaunchButtonState();
}

/**
 * Close game modal view
 */
function closeGameDetails() {
  activeGame = null;
  activeGamePath = '';
  if (gameModal) {
    gameModal.classList.add('hidden');
    gameModal.setAttribute('aria-hidden', 'true');
  }
}

/**
 * Open file picker dialog to let user select game location manually using native Tauri dialog
 */
async function chooseGameLocation() {
  try {
    let selectedPath = '';

    // 1. Primary approach: Native Tauri Dialog (returns full absolute path)
    if (dialog && typeof dialog.open === 'function') {
      const selected = await dialog.open({
        multiple: false,
        directory: false,
        filters: [
          {
            name: 'Executable',
            extensions: ['exe', 'app', 'sh', 'bin']
          }
        ]
      });

      if (Array.isArray(selected)) {
        selectedPath = selected[0] || '';
      } else if (typeof selected === 'string') {
        selectedPath = selected;
      } else if (selected && selected.path) {
        selectedPath = selected.path;
      }
    } else if (window.__TAURI_PLUGIN_DIALOG__ && typeof window.__TAURI_PLUGIN_DIALOG__.open === 'function') {
      const selected = await window.__TAURI_PLUGIN_DIALOG__.open({
        multiple: false,
        directory: false,
        filters: [
          {
            name: 'Executable',
            extensions: ['exe', 'app', 'sh', 'bin']
          }
        ]
      });

      if (Array.isArray(selected)) {
        selectedPath = selected[0] || '';
      } else if (typeof selected === 'string') {
        selectedPath = selected;
      } else if (selected && selected.path) {
        selectedPath = selected.path;
      }
    }

    // 2. Fallback: Browser file input (Browsers restrict full path access for privacy)
    if (!selectedPath) {
      selectedPath = await new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
          const file = e.target.files[0];
          resolve(file ? (file.path || file.name) : '');
        };
        input.click();
      });
    }

    if (!selectedPath) return;

    activeGamePath = selectedPath;
    if (chosenLocationText) chosenLocationText.textContent = selectedPath;
    if (activeGame) saveGamePath(activeGame, selectedPath);
    updateLaunchButtonState();
  } catch (error) {
    console.error('Unable to select game location:', error);
    if (!activeGamePath && chosenLocationText) {
      chosenLocationText.textContent = 'No path selected';
    }
  }
}

/**
 * Execute game executable via Rust command and close launcher on success
 */
async function launchGame() {
  try {
    const pathToLaunch = String(activeGamePath || '').trim();

    if (!pathToLaunch) {
      alert("Please select a game path first!");
      return;
    }

    console.log("Launching game at path:", pathToLaunch);

    let launchSuccess = false;

    if (pathToLaunch.startsWith('http://') || pathToLaunch.startsWith('https://')) {
      if (shell && typeof shell.open === 'function') {
        await shell.open(pathToLaunch);
        launchSuccess = true;
      } else {
        window.open(pathToLaunch, '_blank');
        launchSuccess = true;
      }
    } else {
      // Invoke custom Rust command open_game_file for local paths and custom protocols such as steam://
      if (core && typeof core.invoke === 'function') {
        await core.invoke('open_game_file', { path: pathToLaunch });
        launchSuccess = true;
      } else if (window.__TAURI_INTERNALS__ && typeof window.__TAURI_INTERNALS__.invoke === 'function') {
        await window.__TAURI_INTERNALS__.invoke('open_game_file', { path: pathToLaunch });
        launchSuccess = true;
      } else {
        alert('Tauri core API is unavailable.');
      }
    }

    if (launchSuccess) {
      if (activeGame) saveGamePath(activeGame, pathToLaunch);
      setTimeout(async () => {
        try {
          if (appWindow && typeof appWindow.close === 'function') {
            await appWindow.close();
          }
        } catch (error) {
          console.error('Unable to close launcher:', error);
        }
      }, 500);
    }

  } catch (error) {
    console.error("Unable to launch game:", error);
    alert(`Failed to launch game: ${error}`);
  }
}

/**
 * Bind modal UI event listeners
 */
function bindGameModal() {
  if (gameModalClose) gameModalClose.addEventListener('click', closeGameDetails);
  if (gameModalBackdrop) gameModalBackdrop.addEventListener('click', closeGameDetails);
  if (chooseLocationButton) chooseLocationButton.addEventListener('click', chooseGameLocation);
  if (launchGameButton) launchGameButton.addEventListener('click', launchGame);

  if (gameWebsiteLink) {
    gameWebsiteLink.addEventListener('click', async (event) => {
      event.preventDefault();
      
      if (!activeGame || !activeGame.website) return;

      try {
        if (shell && typeof shell.open === 'function') {
          await shell.open(activeGame.website);
        } else {
          window.open(activeGame.website, '_blank');
        }
      } catch (err) {
        console.error('Failed to open URL in browser:', err);
        window.open(activeGame.website, '_blank');
      }
    });
  }
}

function createSteamCard(game) {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';

  const icon = document.createElement('div');
  icon.className = 'card-icon';

  if (game.icon) {
    const image = document.createElement('img');
    image.className = 'card-icon-image';
    image.src = game.icon;
    image.alt = game.title || game.name || 'Steam game icon';
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';

    const fallback = document.createElement('span');
    fallback.className = 'fallback';
    fallback.textContent = (game.title || game.name || '?').charAt(0).toUpperCase();

    image.addEventListener('error', () => {
      image.remove();
      icon.classList.add('fallback');
      icon.appendChild(fallback);
    });

    icon.appendChild(image);
    icon.setAttribute('aria-label', game.title || game.name || 'Steam game icon');
  } else {
    icon.classList.add('fallback');
    const fallback = document.createElement('span');
    fallback.className = 'fallback';
    fallback.textContent = (game.title || game.name || '?').charAt(0).toUpperCase();
    icon.appendChild(fallback);
  }

  const label = document.createElement('div');
  label.className = 'card-name';
  label.textContent = game.title || game.name;

  card.appendChild(icon);
  card.appendChild(label);

  card.addEventListener('click', async () => {
    activeGame = game;
    activeGamePath = game.path || '';
    if (chosenLocationText) chosenLocationText.textContent = game.path || 'No path selected';
    updateLaunchButtonState();
    if (game.path) await launchGame();
  });

  return card;
}

function renderSteamGames(games = []) {
  if (!steamGrid) return;

  if (steamFallbackMessage) steamFallbackMessage.style.display = 'none';
  const fragment = document.createDocumentFragment();
  games.forEach(game => fragment.appendChild(createSteamCard(game)));
  steamGrid.replaceChildren(fragment);
}

/**
 * Render games array into DOM grid
 */
function renderGames(games = []) {
  if (!grid) return;

  localGames = Array.isArray(games) ? games.slice() : [];
  const annotatedGames = steamGamesByTitle.size > 0 ? annotateLocalGamesWithSteam(localGames) : localGames;

  const fragment = document.createDocumentFragment();
  annotatedGames.forEach(game => {
    fragment.appendChild(createGameCard(game));
  });

  grid.replaceChildren(fragment);
}

/**
 * Switch active navigation page view
 */
function setActiveView(viewName) {
  pages.forEach(page => {
    page.classList.toggle('active', page.dataset.page === viewName);
  });

  dockItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  if (viewName === 'me') {
    renderSavedGames();
  }
}

/**
 * Bind navigation bar listeners
 */
function bindNavigation() {
  dockItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.dataset.view) {
        setActiveView(item.dataset.view);
      }
    });
  });

  if (settingsButton) {
    settingsButton.addEventListener('click', openSettings);
  }
}

/**
 * Bind custom titlebar control buttons
 */
function bindWindowControls() {
  const minimizeBtn = document.getElementById('minimizeBtn');
  const maximizeBtn = document.getElementById('maximizeBtn');
  const closeBtn = document.getElementById('closeBtn');

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', async () => {
      if (appWindow && typeof appWindow.minimize === 'function') await appWindow.minimize();
    });
  }

  if (maximizeBtn) {
    maximizeBtn.addEventListener('click', async () => {
      if (appWindow && typeof appWindow.toggleMaximize === 'function') await appWindow.toggleMaximize();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', async () => {
      if (appWindow && typeof appWindow.close === 'function') await appWindow.close();
    });
  }
}

// Scroll animation throttling
window.addEventListener('scroll', () => {
  if (throttled) return;
  throttled = true;
  window.requestAnimationFrame(() => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll + 10) {
      document.body.classList.add('scrolling-down');
      document.body.classList.remove('scrolling-up');
    } else if (currentScroll < lastScroll - 10) {
      document.body.classList.add('scrolling-up');
      document.body.classList.remove('scrolling-down');
    }
    lastScroll = currentScroll;
    throttled = false;
  });
});

/**
 * Application initialization
 */
function bindSettings() {
  if (settingsModalClose) settingsModalClose.addEventListener('click', closeSettings);
  if (settingsModalBackdrop) settingsModalBackdrop.addEventListener('click', closeSettings);
  if (autoDetectSteamToggle) {
    autoDetectSteamToggle.checked = appSettings.autoDetectSteam;
    autoDetectSteamToggle.addEventListener('change', (event) => {
      appSettings.autoDetectSteam = event.target.checked;
      saveSettings(appSettings);
      if (appSettings.autoDetectSteam) {
        loadSteamGames(true);
      } else {
        steamGrid.replaceChildren();
        if (steamFallbackMessage) {
          steamFallbackMessage.textContent = 'Steam game detection is disabled.';
          steamFallbackMessage.style.display = 'flex';
        }
      }
    });
  }
  if (clearSavedPathsButton) clearSavedPathsButton.addEventListener('click', clearSavedGamePaths);
  if (clearSteamCacheButton) clearSteamCacheButton.addEventListener('click', clearSteamCache);
  if (reloadSteamButton) reloadSteamButton.addEventListener('click', () => reloadSteamGames(true));
  if (backgroundStyleSelect) {
    backgroundStyleSelect.value = appSettings.backgroundStyle || 'white';
    backgroundStyleSelect.addEventListener('change', (event) => {
      appSettings.backgroundStyle = event.target.value;
      saveSettings(appSettings);
      applyBackgroundStyle();
    });
  }
  if (backgroundImageInput) {
    backgroundImageInput.addEventListener('change', async (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          appSettings.backgroundStyle = 'custom';
          appSettings.backgroundImage = reader.result;
          if (backgroundStyleSelect) {
            backgroundStyleSelect.value = 'custom';
          }
          saveSettings(appSettings);
          applyBackgroundStyle();
        }
      };
      reader.readAsDataURL(file);
    });
  }
  if (backgroundSoundToggle) {
    backgroundSoundToggle.checked = Boolean(appSettings.backgroundSound);
    backgroundSoundToggle.addEventListener('change', (event) => {
      appSettings.backgroundSound = event.target.checked;
      saveSettings(appSettings);
      updateBackgroundSound();
    });
  }

  const sidebarItems = Array.from(document.querySelectorAll('.settings-sidebar-item'));
  sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.toggle('active', i === item));
      const section = item.dataset.settingsSection;
      document.querySelectorAll('.settings-section').forEach(sec => {
        sec.classList.toggle('active', sec.dataset.settingsSection === section);
      });
    });
  });
}

function init() {
  document.body.classList.add('scrolling-up');
  applyBackgroundStyle();
  bindWindowControls();
  bindNavigation();
  bindGameModal();
  bindSettings();
  setActiveView('home');
  loadGamesFromGitHub();
  loadSteamGames();
  renderSavedGames();
  updateBackgroundSound();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}