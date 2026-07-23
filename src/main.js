import { initSupabaseAuth, openSupabaseSignIn, signOutSupabase } from './supabase-auth.js';

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
const gridShell = document.querySelector('.grid-shell');
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
const addCustomGameButton = document.getElementById('addCustomGameButton');
const customGameModal = document.getElementById('customGameModal');
const customGameModalBackdrop = document.getElementById('customGameModalBackdrop');
const customGameModalClose = document.getElementById('customGameModalClose');
const customGameForm = document.getElementById('customGameForm');
const customGameNameInput = document.getElementById('customGameNameInput');
const customGameImageInput = document.getElementById('customGameImageInput');
const customGamePathButton = document.getElementById('customGamePathButton');
const customGamePathText = document.getElementById('customGamePathText');
const customGameCancelButton = document.getElementById('customGameCancelButton');
const autoDetectSteamToggle = document.getElementById('autoDetectSteamToggle');
const clearSavedPathsButton = document.getElementById('clearSavedPathsButton');
const clearSteamCacheButton = document.getElementById('clearSteamCacheButton');
const reloadSteamButton = document.getElementById('reloadSteamButton');
const backgroundStyleSelect = document.getElementById('backgroundStyleSelect');
const backgroundImageInput = document.getElementById('backgroundImageInput');
const backgroundSoundToggle = document.getElementById('backgroundSoundToggle');
const supabaseLoginButton = document.getElementById('supabaseLoginButton');
const supabaseLogoutButton = document.getElementById('supabaseLogoutButton');
const supabaseStatusText = document.getElementById('supabaseStatusText');
const discordRichPresenceToggle = document.getElementById('discordRichPresenceToggle');
const logoRing = document.querySelector('.logo-ring');
const titleText = document.querySelector('.title');
const userSubtitle = document.getElementById('userSubtitle');
const dockIndicator = document.querySelector('.dock-indicator');

// State variables
let lastScroll = window.scrollY;
let throttled = false;
let activeGame = null;
let activeGamePath = '';
let steamGamesByTitle = new Map();
let localGames = [];
let supabaseSession = null;
let isViewAnimating = false;
let customGamePath = '';

const GAMES_REPO_URL = 'https://api.github.com/repos/Zetsukae/ZetsukaeLauncher/contents/games';
const GAMES_LOCAL_INDEX = 'games/index.json';
const GAME_PATH_STORAGE_PREFIX = 'zetsukae_launcher_game_path_';
const GAME_ICON_STORAGE_PREFIX = 'zetsukae_launcher_game_icon_';
const GAME_META_STORAGE_PREFIX = 'zetsukae_launcher_game_meta_';
const SETTINGS_STORAGE_KEY = 'zetsukae_launcher_settings';

const translations = {
  en: {
    welcome: 'Welcome', signInPersonalize: 'Sign in with Discord to personalize', myGames: 'My games',
    noSavedGames: 'No saved games yet.', deleteSavedGame: 'Delete game', confirmDeleteSavedGame: 'Delete {value} from My games?', addCustomGame: 'Add custom game', customGameName: 'Name', customGameImage: 'Image',
    customGamePath: 'Path', cancel: 'Cancel', add: 'Add', steamGames: 'Steam games', detectingSteam: 'Detecting Steam games...',
    comingSoon: 'Coming soon', gameDetails: 'Game details', choosePath: 'Choose path', noPathSelected: 'No path selected',
    website: 'Website:', noWebsite: 'No website', launch: 'Launch', settings: 'Settings', general: 'General',
    discord: 'Discord', steam: 'Steam', appearance: 'Appearance', about: 'About', language: 'Language',
    languageDescription: 'Choose the language used throughout the launcher.', clearSavedPaths: 'Clear saved game paths',
    clearSavedPathsDescription: 'Remove all locally saved game file locations.', enableDiscordRichPresence: 'Enable Discord Rich Presence',
    discordDescription: 'Show your launcher activity in Discord.', connectDiscord: 'Connect with Discord',
    disconnect: 'Disconnect', notConnectedDiscord: 'Not connected to Discord.', autoDetectSteam: 'Auto-detect Steam games',
    autoDetectSteamDescription: 'Automatically detect installed Steam games on startup.', clearSteamCache: 'Clear Steam cache',
    clearSteamCacheDescription: 'Force Steam game re-detection on next refresh.', refreshSteamGames: 'Refresh Steam games',
    appBackground: 'App background', white: 'White', blueGradient: 'Blue Gradient', night: 'Night', customImage: 'Custom image',
    backgroundDescription: 'Choose an app background style or use your own image.', customBackgroundImage: 'Custom background image',
    customBackgroundDescription: 'Pick an image file to use as the app background when Custom image is selected.',
    enableBackgroundSound: 'Enable background sound', backgroundSoundDescription: 'Play the OG song on loop when enabled.',
    version: 'Version', links: 'Links', aboutTitle: 'Welcome to the central hub of the Zetsukae ecosystem',
    aboutDescription: "Built with Tauri for maximum performance and lightweight efficiency, the official Zetsukae Launcher brings all my games, apps, and community creations together under one roof. Stay in the loop with real-time updates, patch notes, and news on all my ongoing projects, everything you need, right at your fingertips.",
    connectedAs: 'Connected as {value}', connectingDiscord: 'Connecting to Discord...', unableConnect: 'Unable to connect to Discord.',
    unableDisconnect: 'Unable to disconnect from Discord.', signedInAs: 'Signed in as {value}',
    savedPathsCleared: 'Saved game paths cleared.', unableClearPaths: 'Unable to clear saved paths.',
    steamCacheCleared: 'Steam cache cleared. Refresh the detection.', steamDisabled: 'Steam game detection is disabled.',
    detectingSteamError: 'Unable to detect Steam games.', loadingGames: 'Loading games...', loadingLocalGames: 'Loading local games...',
    unableLoadGames: 'Unable to load games', price: 'Price: {value}', free: 'Free', openWebsite: 'Open website',
    playing: 'Playing {value}', launchingGame: 'Launching a game', saved: '{value} (saved)', detected: '{value} (detected)', steamPath: 'Steam: {value}',
    pleaseSelectPath: 'Please select a game path first!', tauriUnavailable: 'Tauri core API is unavailable.'
  },
  fr: {
    welcome: 'Bienvenue', signInPersonalize: 'Connectez-vous avec Discord pour personnaliser', myGames: 'Mes jeux',
    noSavedGames: "Aucun jeu enregistré pour le moment.", deleteSavedGame: 'Supprimer le jeu', confirmDeleteSavedGame: 'Supprimer {value} de Mes jeux ?', addCustomGame: 'Ajouter un jeu personnalisé', customGameName: 'Nom', customGameImage: 'Image',
    customGamePath: 'Chemin', cancel: 'Annuler', add: 'Ajouter', steamGames: 'Jeux Steam', detectingSteam: 'Détection des jeux Steam...',
    comingSoon: 'Bientôt disponible', gameDetails: 'Détails du jeu', choosePath: 'Choisir un chemin', noPathSelected: 'Aucun chemin sélectionné',
    website: 'Site web :', noWebsite: 'Aucun site web', launch: 'Lancer', settings: 'Paramètres', general: 'Général',
    discord: 'Discord', steam: 'Steam', appearance: 'Apparence', about: 'À propos', language: 'Langue',
    languageDescription: 'Choisissez la langue utilisée dans le launcher.', clearSavedPaths: 'Effacer les chemins enregistrés',
    clearSavedPathsDescription: 'Supprimer tous les emplacements de jeux enregistrés localement.', enableDiscordRichPresence: 'Activer Discord Rich Presence',
    discordDescription: 'Afficher votre activité dans Discord.', connectDiscord: 'Se connecter avec Discord',
    disconnect: 'Se déconnecter', notConnectedDiscord: 'Non connecté à Discord.', autoDetectSteam: 'Détecter automatiquement les jeux Steam',
    autoDetectSteamDescription: 'Détecter automatiquement les jeux Steam installés au démarrage.', clearSteamCache: 'Effacer le cache Steam',
    clearSteamCacheDescription: 'Forcer une nouvelle détection des jeux Steam au prochain rafraîchissement.', refreshSteamGames: 'Actualiser les jeux Steam',
    appBackground: 'Arrière-plan de l’application', white: 'Blanc', blueGradient: 'Dégradé bleu', night: 'Nuit', customImage: 'Image personnalisée',
    backgroundDescription: 'Choisissez un arrière-plan ou utilisez votre propre image.', customBackgroundImage: 'Image d’arrière-plan personnalisée',
    customBackgroundDescription: 'Choisissez une image à utiliser comme arrière-plan lorsque l’image personnalisée est sélectionnée.',
    enableBackgroundSound: 'Activer le son d’arrière-plan', backgroundSoundDescription: 'Lire la chanson originale en boucle lorsqu’elle est activée.',
    version: 'Version', links: 'Liens', aboutTitle: 'Bienvenue dans le hub central de l’écosystème Zetsukae',
    aboutDescription: "Construit avec Tauri pour offrir performance et légèreté, le launcher officiel Zetsukae réunit tous mes jeux, applications et créations de la communauté. Restez informé des mises à jour, notes de version et actualités de mes projets, avec tout ce dont vous avez besoin à portée de main.",
    connectedAs: 'Connecté en tant que {value}', connectingDiscord: 'Connexion à Discord...', unableConnect: 'Impossible de se connecter à Discord.',
    unableDisconnect: 'Impossible de se déconnecter de Discord.', signedInAs: 'Connecté en tant que {value}',
    savedPathsCleared: 'Chemins de jeux effacés.', unableClearPaths: 'Impossible d’effacer les chemins enregistrés.',
    steamCacheCleared: 'Cache Steam effacé. Actualisez la détection.', steamDisabled: 'La détection des jeux Steam est désactivée.',
    detectingSteamError: 'Impossible de détecter les jeux Steam.', loadingGames: 'Chargement des jeux...', loadingLocalGames: 'Chargement des jeux locaux...',
    unableLoadGames: 'Impossible de charger les jeux', price: 'Prix : {value}', free: 'Gratuit', openWebsite: 'Ouvrir le site web',
    playing: 'Joue à {value}', launchingGame: 'Lancement d’un jeu', saved: '{value} (enregistré)', detected: '{value} (détecté)', steamPath: 'Steam : {value}',
    pleaseSelectPath: 'Veuillez d’abord sélectionner un chemin de jeu !', tauriUnavailable: 'L’API Tauri est indisponible.'
  }
};

function t(key, values = {}) {
  const language = translations[appSettings?.language] ? appSettings.language : 'en';
  let text = translations[language][key] || translations.en[key] || key;
  Object.entries(values).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, value ?? '');
  });
  return text;
}

function applyLanguage(language = appSettings.language) {
  appSettings.language = translations[language] ? language : 'en';
  document.documentElement.lang = appSettings.language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) languageSelect.value = appSettings.language;
  updateSupabaseStatus();
  applyHeaderUserState(supabaseSession?.user);
}

function normalizeStorageKey(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_-]/g, '');
}

function getSavedGameStorageKey(game) {
  return normalizeStorageKey(game.name || game.title || '');
}

function getSavedGameMetadata(key) {
  try {
    const raw = window.localStorage?.getItem(`${GAME_META_STORAGE_PREFIX}${key}`);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('Unable to parse saved game metadata:', error);
    return null;
  }
}

function saveSavedGameMetadata(key, metadata) {
  try {
    if (!key) return;
    window.localStorage?.setItem(`${GAME_META_STORAGE_PREFIX}${key}`, JSON.stringify(metadata || {}));
  } catch (error) {
    console.warn('Unable to save saved game metadata:', error);
  }
}

function removeSavedGameMetadata(key) {
  try {
    if (!key) return;
    window.localStorage?.removeItem(`${GAME_META_STORAGE_PREFIX}${key}`);
    window.localStorage?.removeItem(`${GAME_ICON_STORAGE_PREFIX}${key}`);
  } catch (error) {
    console.warn('Unable to remove saved game metadata:', error);
  }
}

async function cacheSavedGameIcon(key, iconUrl) {
  if (!key || !iconUrl || typeof window.localStorage?.getItem !== 'function') return;
  try {
    const cacheKey = `${GAME_ICON_STORAGE_PREFIX}${key}`;
    if (window.localStorage.getItem(cacheKey)) return;

    const response = await fetch(iconUrl, { mode: 'cors' });
    if (!response.ok) {
      return;
    }

    const blob = await response.blob();
    const reader = new FileReader();
    await new Promise((resolve, reject) => {
      reader.onloadend = () => resolve();
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    const dataUrl = reader.result;
    if (typeof dataUrl === 'string' && dataUrl.startsWith('data:')) {
      window.localStorage.setItem(cacheKey, dataUrl);
    }
  } catch (error) {
    console.warn('Unable to cache saved game icon:', error);
  }
}

function getSavedGameIconSource(key) {
  const cacheKey = `${GAME_ICON_STORAGE_PREFIX}${key}`;
  const cached = window.localStorage?.getItem(cacheKey);
  if (cached) return cached;
  const metadata = getSavedGameMetadata(key);
  return metadata?.icon || metadata?.bg_icon || '';
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
    const storageKey = getSavedGameStorageKey(game);
    const pathKey = `${GAME_PATH_STORAGE_PREFIX}${storageKey}`;

    if (!gamePath || /^(steam:\/\/|https?:\/\/)/i.test(gamePath)) {
      window.localStorage?.removeItem(pathKey);
      removeSavedGameMetadata(storageKey);
      renderSavedGames();
      return;
    }

    window.localStorage?.setItem(pathKey, gamePath);

    if (storageKey) {
      saveSavedGameMetadata(storageKey, {
        title: game.title || game.name || '',
        name: game.name || game.title || '',
        icon: game.icon || '',
        bg_icon: game.bg_icon || ''
      });

      if (game.icon) {
        cacheSavedGameIcon(storageKey, game.icon);
      } else if (game.bg_icon) {
        cacheSavedGameIcon(storageKey, game.bg_icon);
      }
    }

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
          language: parsed.language === 'fr' ? 'fr' : 'en',
          backgroundStyle: typeof parsed.backgroundStyle === 'string' ? parsed.backgroundStyle : 'white',
          backgroundImage: typeof parsed.backgroundImage === 'string' ? parsed.backgroundImage : '',
          backgroundSound: typeof parsed.backgroundSound === 'boolean' ? parsed.backgroundSound : false,
          discordRichPresence: typeof parsed.discordRichPresence === 'boolean' ? parsed.discordRichPresence : true
        };
      }
    }
  } catch (error) {
    console.warn('Unable to load settings:', error);
  }
  return {
    autoDetectSteam: true,
    language: 'en',
    backgroundStyle: 'white',
    backgroundImage: '',
    backgroundSound: false,
    discordRichPresence: true
  };
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

function maskEmail(email) {
  if (!email || typeof email !== 'string') return '';
  const [local, domain] = email.split('@');
  if (!domain) return email;
  const firstChar = local.charAt(0) || '';
  return `${firstChar}***@${domain}`;
}

function getUserDisplayName(user) {
  if (!user) return 'Guest';
  const meta = user.user_metadata || {};
  return (
    meta.full_name ||
    meta.name ||
    meta.preferred_username ||
    meta.username ||
    meta.login ||
    (user.email ? user.email.split('@')[0] : null) ||
    user.id ||
    'Guest'
  );
}

function getUserAvatarUrl(user) {
  if (!user) return null;
  const meta = user.user_metadata || {};
  return (
    meta.avatar_url ||
    meta.picture ||
    meta.avatar ||
    meta.image ||
    meta.profile_image_url ||
    null
  );
}

function applyHeaderUserState(user) {
  const displayName = getUserDisplayName(user);
  const maskedEmail = maskEmail(user?.email);

  if (titleText) {
    titleText.textContent = user ? `${t('welcome')}, ${displayName}` : t('welcome');
  }

  if (userSubtitle) {
    userSubtitle.textContent = user
      ? t('signedInAs', { value: maskedEmail || displayName })
      : t('signInPersonalize');
  }

  if (logoRing) {
    const avatarUrl = getUserAvatarUrl(user);
    if (avatarUrl) {
      logoRing.style.backgroundImage = `url('${avatarUrl}')`;
      logoRing.style.backgroundSize = 'cover';
      logoRing.style.backgroundPosition = 'center';
      logoRing.classList.add('avatar');
    } else {
      logoRing.style.backgroundImage = '';
      logoRing.style.background = 'radial-gradient(circle at 35% 35%, #60b7ff, #b9f2ff 60%)';
      logoRing.classList.remove('avatar');
    }
  }
}

function updateSupabaseStatus() {
  const user = supabaseSession?.user;
  const isConnected = Boolean(user);

  if (supabaseLoginButton) supabaseLoginButton.classList.toggle('hidden', isConnected);
  if (supabaseLogoutButton) supabaseLogoutButton.classList.toggle('hidden', !isConnected);
  if (supabaseStatusText) {
    const maskedEmail = maskEmail(user?.email);
    supabaseStatusText.textContent = isConnected
      ? t('connectedAs', { value: maskedEmail || getUserDisplayName(user) })
      : t('notConnectedDiscord');
  }

  applyHeaderUserState(user);
}

async function initDiscordPresence() {
  if (!core || typeof core.invoke !== 'function') {
    console.warn('Tauri core invoke is unavailable for Discord presence.');
    return;
  }

  try {
    await core.invoke('init_discord_presence');
    await setDiscordActivity('Browsing the launcher', 'Zetsukae Launcher');
  } catch (error) {
    console.warn('Unable to initialize Discord Rich Presence:', error);
  }
}

async function clearDiscordActivity() {
  if (!core || typeof core.invoke !== 'function') {
    return;
  }

  try {
    await core.invoke('clear_discord_activity');
  } catch (error) {
    console.warn('Unable to clear Discord Rich Presence:', error);
  }
}

async function setDiscordActivity(details, stateText) {
  if (!core || typeof core.invoke !== 'function') {
    return;
  }

  try {
    await core.invoke('set_discord_activity', {
      details: details || '',
      state_text: stateText || ''
    });
  } catch (error) {
    console.warn('Unable to update Discord Rich Presence:', error);
  }
}

function clearSavedGamePaths() {
  try {
    for (const key of Object.keys(window.localStorage || {})) {
      if (key.startsWith(GAME_PATH_STORAGE_PREFIX)) {
        const storageKey = key.slice(GAME_PATH_STORAGE_PREFIX.length);
        window.localStorage.removeItem(key);
        removeSavedGameMetadata(storageKey);
      }
    }
    renderSavedGames();
    alert(t('savedPathsCleared'));
  } catch (error) {
    console.error('Unable to clear saved paths:', error);
    alert(t('unableClearPaths'));
  }
}

function clearSteamCache() {
  try {
    window.localStorage?.removeItem('zetsukae_launcher_steam_games');
    steamGamesByTitle.clear();
    if (steamFallbackMessage) {
      steamFallbackMessage.textContent = t('steamCacheCleared');
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
    const storageKey = key.slice(GAME_PATH_STORAGE_PREFIX.length);
    const metadata = getSavedGameMetadata(storageKey) || {};
    const rawName = storageKey.replace(/_/g, ' ');
    const fallbackTitle = rawName.replace(/\b\w/g, char => char.toUpperCase());
    savedEntries.push({
      title: metadata.title || metadata.name || fallbackTitle,
      path,
      icon: metadata.icon || metadata.bg_icon || '',
      storageKey,
      saved: true
    });
  }

  if (savedEntries.length === 0) {
    if (savedGamesSection) savedGamesSection.style.display = 'block';
    savedGamesGrid.replaceChildren();
    savedGamesMessage.textContent = t('noSavedGames');
    savedGamesMessage.style.display = 'flex';
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
    icon.className = 'card-icon';

    const iconSource = entry.icon || getSavedGameIconSource(getSavedGameStorageKey({ title: entry.title, name: entry.title }));

    if (iconSource) {
      const image = document.createElement('img');
      image.className = 'card-icon-image';
      image.src = iconSource;
      image.alt = entry.title || 'Saved game icon';
      image.loading = 'lazy';
      image.referrerPolicy = 'no-referrer';
      image.addEventListener('error', () => {
        image.remove();
        icon.classList.add('fallback');
      });
      icon.appendChild(image);
    } else {
      icon.classList.add('fallback');
    }

    const label = document.createElement('div');
    label.className = 'card-name';
    label.textContent = entry.title;

    card.appendChild(icon);
    card.appendChild(label);
    addCardHoverOverlay(card);

    card.addEventListener('click', async () => {
      activeGame = { title: entry.title, steamInstalled: false };
      activeGamePath = entry.path;
      if (chosenLocationText) chosenLocationText.textContent = entry.path;
      updateLaunchButtonState();
      await launchGame();
    });

    card.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      showSavedGamePathOverlay(entry, event.pageX, event.pageY);
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

function showSavedGamePathOverlay(entry, x, y) {
  hideSavedGamePathOverlay();

  const overlay = document.createElement('div');
  overlay.className = 'saved-game-path-overlay';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'saved-game-delete-button';
  deleteButton.type = 'button';
  deleteButton.textContent = t('deleteSavedGame');
  deleteButton.addEventListener('click', () => {
    const confirmed = window.confirm(t('confirmDeleteSavedGame', { value: entry.title }));
    if (!confirmed) return;

    window.localStorage?.removeItem(`${GAME_PATH_STORAGE_PREFIX}${entry.storageKey}`);
    removeSavedGameMetadata(entry.storageKey);
    hideSavedGamePathOverlay();
    renderSavedGames();
  });

  const pathText = document.createElement('div');
  pathText.className = 'saved-game-path-text';
  pathText.textContent = entry.path;

  overlay.appendChild(deleteButton);
  overlay.appendChild(pathText);
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
      steamFallbackMessage.textContent = t('steamDisabled');
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
      steamFallbackMessage.textContent = t('steamDisabled');
      steamFallbackMessage.style.display = 'flex';
    }
    return;
  }

  if (steamFallbackMessage) {
    steamFallbackMessage.textContent = t('detectingSteam');
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
          steamFallbackMessage.textContent = t('detectingSteamError');
        }
      });
  } catch (error) {
    console.warn('Unable to detect Steam games:', error);
    if (steamFallbackMessage) {
      steamFallbackMessage.textContent = t('detectingSteamError');
    }
  }
}

async function loadGamesFromGitHub() {
  if (!grid) return;

  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'page-message';
  loadingMessage.textContent = t('loadingGames');
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
  loadingMessage.textContent = t('loadingLocalGames');
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
    errorMessage.textContent = t('unableLoadGames');
    grid.replaceChildren(errorMessage);
  }
}

function addCardHoverOverlay(card) {
  const hoverFrame = document.createElement('img');
  hoverFrame.className = 'card-hover-frame';
  hoverFrame.src = 'assets/icons/app-hover.png';
  hoverFrame.alt = '';
  hoverFrame.setAttribute('aria-hidden', 'true');
  card.appendChild(hoverFrame);
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

    image.addEventListener('error', () => {
      image.remove();
      icon.classList.add('fallback');
      icon.setAttribute('aria-label', game.title || game.name || 'Unknown game icon');
    });

    icon.appendChild(image);
    icon.setAttribute('aria-label', game.title || game.name || 'Game icon');
  } else {
    icon.classList.add('fallback');
    icon.setAttribute('aria-label', game.title || game.name || 'Unknown game icon');
  }

  const label = document.createElement('div');
  label.className = 'card-name';
  label.textContent = game.title || game.name;

  card.appendChild(icon);
  card.appendChild(label);
  addCardHoverOverlay(card);

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
  if (gameModalPrice) gameModalPrice.textContent = t('price', { value: game.price === '0' || game.price === '0.0' || game.price === '' ? t('free') : game.price });

  // Website link setup
  if (gameWebsiteLink) {
    const hasWebsite = Boolean(game.website && game.website.trim() !== '');
    gameWebsiteLink.textContent = hasWebsite ? t('openWebsite') : t('noWebsite');
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
    if (chosenLocationText) chosenLocationText.textContent = t('saved', { value: savedPath });
  } else if (steamPath) {
    activeGamePath = steamPath;
    if (chosenLocationText) chosenLocationText.textContent = t('steamPath', { value: steamPath });
  } else if (detectedPath) {
    activeGamePath = detectedPath;
    if (chosenLocationText) chosenLocationText.textContent = t('detected', { value: detectedPath });
  } else {
    if (chosenLocationText) chosenLocationText.textContent = t('noPathSelected');
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
async function selectGamePath() {
  let selectedPath = '';

  if (dialog && typeof dialog.open === 'function') {
    const selected = await dialog.open({
      multiple: false,
      directory: false,
      filters: [{ name: 'Executable', extensions: ['exe', 'app', 'sh', 'bin'] }]
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
      filters: [{ name: 'Executable', extensions: ['exe', 'app', 'sh', 'bin'] }]
    });

    if (Array.isArray(selected)) {
      selectedPath = selected[0] || '';
    } else if (typeof selected === 'string') {
      selectedPath = selected;
    } else if (selected && selected.path) {
      selectedPath = selected.path;
    }
  }

  if (!selectedPath) {
    selectedPath = await new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = (event) => {
        const file = event.target.files[0];
        resolve(file ? (file.path || file.name) : '');
      };
      input.click();
    });
  }

  return selectedPath;
}

async function chooseGameLocation() {
  try {
    const selectedPath = await selectGamePath();

    if (!selectedPath) return;

    activeGamePath = selectedPath;
    if (chosenLocationText) chosenLocationText.textContent = selectedPath;
    if (activeGame) saveGamePath(activeGame, selectedPath);
    updateLaunchButtonState();
  } catch (error) {
    console.error('Unable to select game location:', error);
    if (!activeGamePath && chosenLocationText) {
      chosenLocationText.textContent = t('noPathSelected');
    }
  }
}

function setCustomGameModalOpen(isOpen) {
  if (!customGameModal) return;
  customGameModal.classList.toggle('hidden', !isOpen);
  customGameModal.setAttribute('aria-hidden', String(!isOpen));
  if (isOpen) {
    customGameNameInput?.focus();
  }
}

function resetCustomGameForm() {
  customGameForm?.reset();
  customGamePath = '';
  if (customGamePathText) customGamePathText.textContent = t('noPathSelected');
}

function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function addCustomGame(event) {
  event.preventDefault();
  const title = customGameNameInput?.value.trim() || '';

  if (!title || !customGamePath) {
    alert(t('pleaseSelectPath'));
    return;
  }

  try {
    const imageFile = customGameImageInput?.files?.[0];
    const icon = await readImageAsDataUrl(imageFile);
    saveGamePath({ title, name: title, icon, bg_icon: icon }, customGamePath);
    setCustomGameModalOpen(false);
    resetCustomGameForm();
  } catch (error) {
    console.error('Unable to add custom game:', error);
  }
}

function bindCustomGameModal() {
  addCustomGameButton?.addEventListener('click', () => {
    resetCustomGameForm();
    setCustomGameModalOpen(true);
  });
  customGameModalClose?.addEventListener('click', () => {
    setCustomGameModalOpen(false);
  });
  customGameModalBackdrop?.addEventListener('click', () => {
    setCustomGameModalOpen(false);
  });
  customGameCancelButton?.addEventListener('click', () => {
    setCustomGameModalOpen(false);
  });
  customGamePathButton?.addEventListener('click', async () => {
    try {
      const selectedPath = await selectGamePath();
      if (!selectedPath) return;
      customGamePath = selectedPath;
      if (customGamePathText) customGamePathText.textContent = selectedPath;
    } catch (error) {
      console.error('Unable to select custom game path:', error);
    }
  });
  customGameForm?.addEventListener('submit', addCustomGame);
}

/**
 * Execute game executable via Rust command and close launcher on success
 */
async function launchGame() {
  try {
    const pathToLaunch = String(activeGamePath || '').trim();

    if (!pathToLaunch) {
      alert(t('pleaseSelectPath'));
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
        alert(t('tauriUnavailable'));
      }
    }

    if (launchSuccess) {
      if (activeGame) saveGamePath(activeGame, pathToLaunch);
      await setDiscordActivity(
        activeGame?.title ? t('playing', { value: activeGame.title }) : t('launchingGame'),
        'Zetsukae Launcher'
      );
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

    image.addEventListener('error', () => {
      image.remove();
      icon.classList.add('fallback');
      icon.setAttribute('aria-label', game.title || game.name || 'Unknown game icon');
    });

    icon.appendChild(image);
    icon.setAttribute('aria-label', game.title || game.name || 'Steam game icon');
  } else {
    icon.classList.add('fallback');
    icon.setAttribute('aria-label', game.title || game.name || 'Unknown game icon');
  }

  const label = document.createElement('div');
  label.className = 'card-name';
  label.textContent = game.title || game.name;

  card.appendChild(icon);
  card.appendChild(label);
  addCardHoverOverlay(card);

  card.addEventListener('click', async () => {
    activeGame = game;
    activeGamePath = game.path || '';
    if (chosenLocationText) chosenLocationText.textContent = game.path || t('noPathSelected');
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

  updateDockIndicator(viewName);

  if (viewName === 'me') {
    renderSavedGames();
  }
}

/**
 * Bind navigation bar listeners
 */
function bindNavigation() {
  dockItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (!item.dataset.view) return;
      // Use animated transition between views
      animateToView(item.dataset.view);
    });
  });

  window.addEventListener('resize', () => {
    const activeItem = dockItems.find(item => item.classList.contains('active'));
    if (activeItem) updateDockIndicator(activeItem.dataset.view);
  });

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
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = appSettings.language;
    languageSelect.addEventListener('change', (event) => {
      appSettings.language = event.target.value === 'fr' ? 'fr' : 'en';
      saveSettings(appSettings);
      applyLanguage(appSettings.language);
    });
  }
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
          steamFallbackMessage.textContent = t('steamDisabled');
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
  if (supabaseLoginButton) {
    supabaseLoginButton.addEventListener('click', async () => {
      if (supabaseStatusText) supabaseStatusText.textContent = t('connectingDiscord');
      try {
        await openSupabaseSignIn();
      } catch (error) {
        console.error('Unable to sign in with Discord:', error);
        if (supabaseStatusText) {
          supabaseStatusText.textContent = error?.message || t('unableConnect');
        }
      }
    });
  }
  if (supabaseLogoutButton) {
    supabaseLogoutButton.addEventListener('click', async () => {
      try {
        await signOutSupabase();
      } catch (error) {
        console.error('Unable to sign out from Discord:', error);
        if (supabaseStatusText) {
          supabaseStatusText.textContent = error?.message || t('unableDisconnect');
        }
      }
    });
  }
  if (discordRichPresenceToggle) {
    discordRichPresenceToggle.checked = appSettings.discordRichPresence;
    discordRichPresenceToggle.addEventListener('change', async (event) => {
      appSettings.discordRichPresence = event.target.checked;
      saveSettings(appSettings);
      if (appSettings.discordRichPresence) {
        await initDiscordPresence();
      } else {
        await clearDiscordActivity();
      }
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

  document.querySelectorAll('.about-link-button[data-external-url]').forEach((button) => {
    button.addEventListener('click', async () => {
      const url = button.dataset.externalUrl;
      if (!url) return;

      try {
        if (shell && typeof shell.open === 'function') {
          await shell.open(url);
        } else {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      } catch (error) {
        console.error('Unable to open external link:', error);
      }
    });
  });
}

async function init() {
  document.body.classList.add('scrolling-up');
  applyLanguage(appSettings.language);
  applyBackgroundStyle();
  bindWindowControls();
  bindNavigation();
  bindGameModal();
  bindCustomGameModal();
  bindSettings();
  await initSupabaseAuth((session) => {
    supabaseSession = session;
    updateSupabaseStatus();
  });
  if (appSettings.discordRichPresence) {
    await initDiscordPresence();
  }
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

/**
 * Animate transition between views with a directional swipe.
 * direction: 'right' means target is located to the right of current
 */
async function animateToView(targetView) {
  if (!gridShell || !targetView || isViewAnimating) return;
  const currentPage = pages.find(p => p.classList.contains('active'));
  const targetPage = pages.find(p => p.dataset.page === targetView);
  if (!currentPage || !targetPage || currentPage === targetPage) {
    return setActiveView(targetView);
  }

  isViewAnimating = true;

  const order = dockItems.map(item => item.dataset.view);
  const currentIndex = order.indexOf(currentPage.dataset.page);
  const targetIndex = order.indexOf(targetView);
  const targetEntersFrom = targetIndex > currentIndex ? 'right' : 'left';
  const shellHeight = gridShell.getBoundingClientRect().height;
  const previousShellHeight = gridShell.style.height;
  const previousShellTransition = gridShell.style.transition;

  const previousStyles = new Map();
  [currentPage, targetPage].forEach(page => {
    previousStyles.set(page, {
      position: page.style.position,
      top: page.style.top,
      left: page.style.left,
      width: page.style.width,
      height: page.style.height,
      zIndex: page.style.zIndex,
      display: page.style.display,
      transition: page.style.transition,
      transform: page.style.transform,
      willChange: page.style.willChange,
      visibility: page.style.visibility
    });
  });

  // Measure the target page while it is still in normal document flow.
  currentPage.style.display = 'none';
  targetPage.style.display = 'block';
  targetPage.style.position = 'static';
  targetPage.style.height = 'auto';
  targetPage.style.visibility = 'hidden';
  gridShell.style.height = '';
  const targetShellHeight = gridShell.getBoundingClientRect().height;

  [currentPage, targetPage].forEach(page => {
    const saved = previousStyles.get(page);
    if (!saved) return;
    page.style.position = saved.position;
    page.style.top = saved.top;
    page.style.left = saved.left;
    page.style.width = saved.width;
    page.style.height = saved.height;
    page.style.zIndex = saved.zIndex;
    page.style.display = saved.display;
    page.style.transition = saved.transition;
    page.style.transform = saved.transform;
    page.style.willChange = saved.willChange;
    page.style.visibility = saved.visibility;
  });

  [currentPage, targetPage].forEach(page => {
    page.style.position = 'absolute';
    page.style.top = '0';
    page.style.left = '0';
    page.style.width = '100%';
    page.style.height = `${shellHeight}px`;
    page.style.display = 'block';
    page.style.willChange = 'transform';
  });

  gridShell.style.height = `${shellHeight}px`;
  gridShell.style.transition = 'none';
  targetPage.style.zIndex = 2;
  currentPage.style.zIndex = 1;

  targetPage.style.transition = 'none';
  currentPage.style.transition = 'none';
  targetPage.style.transform = targetEntersFrom === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
  currentPage.style.transform = 'translateX(0)';

  void targetPage.offsetWidth;

  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 360;
  const transition = `transform ${duration}ms cubic-bezier(.22,.61,.36,1)`;
  targetPage.style.transition = transition;
  currentPage.style.transition = transition;
  gridShell.style.transition = `height ${duration}ms cubic-bezier(.22,.61,.36,1)`;
  targetPage.style.transform = 'translateX(0)';
  currentPage.style.transform = targetEntersFrom === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
  gridShell.style.height = `${targetShellHeight}px`;

  await new Promise(resolve => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      targetPage.removeEventListener('transitionend', onEnd);
      clearTimeout(timeoutId);
      resolve();
    };
    const onEnd = (e) => {
      if (e.target !== targetPage) return;
      finish();
    };
    const timeoutId = setTimeout(finish, duration + 50);
    targetPage.addEventListener('transitionend', onEnd);
  });

  currentPage.style.position = '';
  currentPage.style.top = '';
  currentPage.style.left = '';
  currentPage.style.width = '';
  currentPage.style.height = '';
  currentPage.style.zIndex = '';
  currentPage.style.transition = '';
  currentPage.style.transform = '';
  currentPage.style.display = 'none';
  currentPage.style.willChange = '';
  currentPage.style.visibility = '';

  targetPage.style.position = '';
  targetPage.style.top = '';
  targetPage.style.left = '';
  targetPage.style.width = '';
  targetPage.style.height = '';
  targetPage.style.zIndex = '';
  targetPage.style.transition = '';
  targetPage.style.transform = '';
  targetPage.style.display = '';
  targetPage.style.willChange = '';
  targetPage.style.visibility = '';

  gridShell.style.height = previousShellHeight;
  gridShell.style.transition = previousShellTransition;
  setActiveView(targetView);
  isViewAnimating = false;
}

function updateDockIndicator(viewName) {
  if (!dockIndicator) return;
  const activeItem = dockItems.find(item => item.dataset.view === viewName);
  if (!activeItem) return;

  dockIndicator.style.width = `${activeItem.offsetWidth}px`;
  dockIndicator.style.transform = `translateX(${activeItem.offsetLeft}px)`;
  dockIndicator.classList.add('ready');
}