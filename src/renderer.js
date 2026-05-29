// ==================== TRANSLATIONS ====================
const translations = {
    en: {
        // Settings
        generalSettings: 'General Settings',
        generalDesc: 'General application configuration.',
        clientLanguage: 'Client Language',
        english: 'English',
        french: 'French',
        customization: 'Customization',
        customizationDesc: 'Customize the appearance of your launcher.',
        darkTheme: 'Dark Theme',
        launchFullScreen: 'Always Fullscreen',
        showPrices: 'Show Prices',
        backgroundMusic: 'Background Music',
        myAccount: 'My Account',
        accountDesc: 'Manage your ZetID account.',
        createAccount: 'Create Account',
        logout: 'Logout',
        deleteAccount: 'Delete Account',
        settings: 'Settings',
        cache: 'Cache',
        cacheDesc: 'Clear cache to remove all saved game paths and custom games.',
        clearCache: 'Clear Cache',
        about: 'About',
        aboutZetsukae: 'About Zetsukae Launcher',
        version: 'Version',
        versionText: 'A simple and efficient game launcher built with Electron.',
        info: 'Info',
        github: 'GitHub Token',
        saveToken: 'Save Token',
        searchInStore: 'Search in store',
        fullyDevelopedBy: 'Fully developed by Zetsukae',
        specifyLocation: 'Specify a location',
        information: 'Information',
        general: 'General',
        
        // Store & Library
        store: 'Store',
        library: 'Library',
        community: 'Community',
        searchGames: 'Search games...',
        
        // Game modal
        download: 'Download',
        launch: 'Launch',
        changePath: 'Specify Path',
        website: 'Website',
        deleteGame: 'Delete',
        installed: 'Installed',
        
        // Auth
        noAccountConnected: 'No account connected.',
        signIn: 'Sign In',
        register: 'Register',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        continueWithout: 'Continue Without Account',
        switchToRegister: 'Don\'t have an account? Register',
        switchToLogin: 'Already have an account? Sign In',
        
        // Account section
        accountUsername: 'Username:',
        accountEmail: 'Email:',
        accountZetId: 'ZetID:',
        accountCreated: 'Created:',
        changeProfilePic: 'Change',
        resendEmail: 'Resend Email',
        
        // Errors
        invalidEmail: 'Invalid email address',
        passwordMismatch: 'Passwords do not match',
        missingFields: 'Please fill in all fields',
        accountAlreadyExists: 'This email or username is already in use',
        invalidCredentials: 'Invalid credentials',
        invalidTokenFormat: 'Invalid format. Token must start with "ghp_"',
        tokenNotFound: 'Error: Token field not found',
        mustBeLoggedIn: 'You must be logged in to add a GitHub token',
        confirmDeleteToken: 'Do you want to delete your GitHub token?',
        errorSavingToken: 'Error saving GitHub token',
        loginError: 'Login error',
        registerError: 'Registration error',
        clearCacheConfirm: 'Are you sure you want to clear the cache? This action will delete all saved game paths.',
        
        // Success messages
        accountCreatedSuccess: 'Account created successfully!',
        tokenSaved: 'Token saved successfully',
        tokenSavedSuccess: 'Token saved successfully!',
        tokenDeleted: 'Token deleted.',
        cacheClearedSuccess: 'Cache cleared successfully',
        cacheClearedAlert: 'Cache cleared successfully!',
        fillAllFields: 'Please fill in all fields',
        fillRequiredFields: 'Please fill in all required fields',
        invalidEmailShort: 'Invalid email',
        usernameMinLength: 'Username must contain at least 3 characters',
        passwordMinLength: 'Password must contain at least 6 characters',
        passwordsNoMatch: 'Passwords do not match',
        clickToReveal: 'Click to reveal',
        tokenRegistered: 'A GitHub token is registered',
        noTokenRegistered: 'No GitHub token registered',
        existingToken: 'Existing token',
        confirmLogout: 'Are you sure you want to log out?',
        loggedOut: 'You have been logged out',
        profilePicUpdated: 'Profile picture updated successfully!',
        errorChangingPhoto: 'Error changing profile picture',
        mustBeLoggedInDelete: 'You must be logged in to delete your account',
        deleteAccountWarning: 'This action is permanent!\n\nYou are about to delete your ZetID account ({zetId}).\n\nAre you absolutely sure?',
        deleteAccountFinal: 'FINAL CONFIRMATION\n\nAll your data will be deleted:\n- ZetID Account\n- Profile and photo\n- Game history\n\nConfirm deletion?',
        accountDeleted: 'Your account has been permanently deleted.\n\nGoodbye!',
        errorDeletingAccount: 'Error deleting account',
        needTokenToSync: 'You need a GitHub token to sync your data',
        dataSynced: 'Data synchronized successfully!',
        syncError: 'Error during synchronization',
        unknown: 'Unknown',
        errorLoadingGames: 'Error loading games',
        noGamesFound: 'No games found',
        free: 'Free',
        launchCaps: 'LAUNCH',
        downloadVerb: 'Download',
        buyVerb: 'Buy',
        specifyLocation: 'Specify location',
        errorSelectingPath: 'Error selecting path',
        gamePathUndefined: 'Game path not defined',
        errorLaunchingGame: 'Error launching game',
        fillNameAndPath: 'Please fill in the game name and location',
        gameAdded: 'Game added successfully!',
        cantDeleteGame: 'Cannot delete this game',
        confirmDeleteGame: 'Are you sure you want to delete "{title}"?',
        gameDeleted: 'Game deleted successfully',
        untitledGame: 'Untitled game',
        connectToInternet: 'Please connect to the internet to see posters!',
        learnMore: 'Learn More',
        recommended: 'Recommended',
        loadingLibrary: 'Loading your library...',
        communityComingSoon: 'Community section coming soon...',
        searchInStore: 'Search in store',
        addCustomGame: 'Add a Custom Game',
        gameName: 'Game Name',
        gameVersion: 'Version',
        gameDescription: 'Description',
        gameIcon: 'Game Icon',
        bgImage: 'Background Image',
        executablePath: 'Executable path:',
        browse: 'Browse',
        fileBtn: 'File',
        addTheGame: 'Add the game',
        cancel: 'Cancel',
        refresh: 'Refresh',
        systemInfo: 'System Information',
        consoleLibrary: 'Library',
        consoleStoreTitle: 'Zetsukae Store',
        consoleHome: 'Home',
        consoleMenu: 'Menu',
        consoleDetails: 'Details',
        consolePlay: 'Play',
        consoleMenuResume: 'Resume',
        consoleMenuSettings: 'Settings',
        consoleMenuExitConsole: 'Exit console mode',
        consoleMenuQuit: 'Quit application',
        consoleEmptyLibrary: 'No games in library',
        consoleStoreTile: 'Zetsukae Store',
        theme: 'Theme',
        portableTheme: 'Portable',
        consoleTheme: 'Console',
        loadingApps: 'Loading applications...',
        owned: 'Owned',
        platform: 'Platform',
        language: 'Language'
    },
    fr: {
        // Settings
        generalSettings: 'Parametres Generaux',
        generalDesc: 'Configuration generale de l\'application.',
        clientLanguage: 'Langue du Client',
        english: 'English',
        french: 'Francais',
        customization: 'Customisation',
        customizationDesc: 'Personnalisez l\'apparence de votre lanceur.',
        darkTheme: 'Theme sombre',
        launchFullScreen: 'Lancer en mode plein ecran',
        showPrices: 'Afficher les prix',
        backgroundMusic: 'Musique de fond',
        myAccount: 'Mon Compte',
        accountDesc: 'Gerez votre compte ZetID.',
        createAccount: 'Creer un compte',
        logout: 'Deconnexion',
        deleteAccount: 'Supprimer le compte',
        settings: 'Parametres',
        cache: 'Cache',
        cacheDesc: 'Vider le cache pour supprimer tous les chemins des jeux sauvegardes et les jeux personnalises.',
        clearCache: 'Vider le cache',
        about: 'A propos',
        aboutZetsukae: 'A propos de Zetsukae Launcher',
        version: 'Version',
        versionText: 'Un lanceur de jeux simple et efficace construit avec Electron.',
        info: 'Infos',
        github: 'Token GitHub',
        saveToken: 'Sauvegarder le token',
        searchInStore: 'Chercher dans le magasin',
        fullyDevelopedBy: 'Entierement developpe par Zetsukae',
        specifyLocation: 'Specifier un emplacement',
        information: 'Informations',
        general: 'General',
        
        // Store & Library
        store: 'Boutique',
        library: 'Bibliotheque',
        community: 'Communaute',
        searchGames: 'Rechercher des jeux...',
        
        // Game modal
        download: 'Telecharger',
        launch: 'Lancer',
        changePath: 'Specifier le chemin',
        website: 'Site web',
        deleteGame: 'Supprimer',
        installed: 'Installee',
        
        // Auth
        noAccountConnected: 'Aucun compte connecte.',
        signIn: 'Se connecter',
        register: 'S\'inscrire',
        username: 'Nom d\'utilisateur',
        email: 'Email',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        continueWithout: 'Continuer sans compte',
        switchToRegister: 'Pas encore de compte? S\'inscrire',
        switchToLogin: 'Vous avez deja un compte? Se connecter',
        
        // Account section
        accountUsername: 'Nom d\'utilisateur:',
        accountEmail: 'Email:',
        accountZetId: 'ZetID:',
        accountCreated: 'Cree:',
        changeProfilePic: 'Changer',
        resendEmail: 'Renvoyer l\'email',
        
        // Errors
        invalidEmail: 'Adresse email invalide',
        passwordMismatch: 'Les mots de passe ne correspondent pas',
        missingFields: 'Remplissez tous les champs',
        accountAlreadyExists: 'Cet email ou nom d\'utilisateur est deja utilise',
        invalidCredentials: 'Identifiants invalides',
        invalidTokenFormat: 'Format invalide. Le token doit commencer par "ghp_"',
        tokenNotFound: 'Erreur: Champ token non trouve',
        mustBeLoggedIn: 'Vous devez etre connecte pour ajouter un token GitHub',
        confirmDeleteToken: 'Voulez-vous supprimer votre token GitHub?',
        errorSavingToken: 'Erreur lors de la sauvegarde du token GitHub',
        loginError: 'Erreur lors de la connexion',
        registerError: 'Erreur lors de l\'inscription',
        clearCacheConfirm: 'Etes-vous sur de vouloir vider le cache ? Cette action supprimera tous les chemins des jeux sauvegardes.',
        
        // Success messages
        accountCreatedSuccess: 'Compte cree avec succes!',
        tokenSaved: 'Token enregistre avec succes',
        tokenSavedSuccess: 'Token sauvegarde avec succes!',
        tokenDeleted: 'Token supprime.',
        cacheClearedSuccess: 'Cache vide avec succes',
        cacheClearedAlert: 'Cache vide avec succes !',
        fillAllFields: 'Veuillez remplir tous les champs',
        fillRequiredFields: 'Veuillez remplir tous les champs obligatoires',
        invalidEmailShort: 'Email invalide',
        usernameMinLength: 'Le nom d\'utilisateur doit contenir au moins 3 caracteres',
        passwordMinLength: 'Le mot de passe doit contenir au moins 6 caracteres',
        passwordsNoMatch: 'Les mots de passe ne correspondent pas',
        clickToReveal: 'Cliquez pour afficher',
        tokenRegistered: 'Un token GitHub est enregistre',
        noTokenRegistered: 'Aucun token GitHub enregistre',
        existingToken: 'Token existant',
        confirmLogout: 'Etes-vous sur de vouloir vous deconnecter?',
        loggedOut: 'Vous avez ete deconnecte',
        profilePicUpdated: 'Photo de profil mise a jour avec succes!',
        errorChangingPhoto: 'Erreur lors du changement de photo',
        mustBeLoggedInDelete: 'Vous devez etre connecte pour supprimer votre compte',
        deleteAccountWarning: 'Cette action est definitive!\n\nVous etes sur le point de supprimer votre compte ZetID ({zetId}).\n\nEtes-vous absolument certain?',
        deleteAccountFinal: 'DERNIERE CONFIRMATION\n\nTous vos donnees seront supprimees:\n- Compte ZetID\n- Profil et photo\n- Historique de jeux\n\nConfirmer la suppression?',
        accountDeleted: 'Votre compte a ete supprime de maniere definitive.\n\nAu revoir!',
        errorDeletingAccount: 'Erreur lors de la suppression du compte',
        needTokenToSync: 'Vous devez avoir un token GitHub pour synchroniser vos donnees',
        dataSynced: 'Donnees synchronisees avec succes!',
        syncError: 'Erreur lors de la synchronisation',
        unknown: 'Inconnu',
        errorLoadingGames: 'Erreur lors du chargement des jeux',
        noGamesFound: 'Aucun jeu trouve',
        free: 'Gratuit',
        launchCaps: 'LANCER',
        downloadVerb: 'Telecharger',
        buyVerb: 'Acheter',
        specifyLocation: 'Specifier l\'emplacement',
        errorSelectingPath: 'Erreur lors de la selection du chemin',
        gamePathUndefined: 'Chemin du jeu non defini',
        errorLaunchingGame: 'Erreur lors du lancement du jeu',
        fillNameAndPath: 'Veuillez remplir le nom et l\'emplacement du jeu',
        gameAdded: 'Jeu ajoute avec succes!',
        cantDeleteGame: 'Impossible de supprimer ce jeu',
        confirmDeleteGame: 'Etes-vous sur de vouloir supprimer "{title}" ?',
        gameDeleted: 'Jeu supprime avec succes',
        untitledGame: 'Jeu sans titre',
        connectToInternet: 'Veuillez vous connecter a internet pour voir les affiches!',
        learnMore: 'En Savoir Plus',
        recommended: 'Recommandees',
        loadingLibrary: 'Chargement de votre bibliotheque...',
        communityComingSoon: 'Section communaute bientot disponible...',
        searchInStore: 'Chercher dans le magasin',
        addCustomGame: 'Ajouter un Jeu Personnalise',
        gameName: 'Nom du jeu',
        gameVersion: 'Version',
        gameDescription: 'Description',
        gameIcon: 'Icone du jeu',
        bgImage: 'Image de fond',
        executablePath: 'Chemin de l\'executable:',
        browse: 'Parcourir',
        fileBtn: 'Fichier',
        addTheGame: 'Ajouter le jeu',
        cancel: 'Annuler',
        refresh: 'Rafraichir',
        systemInfo: 'Informations Système',
        consoleLibrary: 'Bibliothèque',
        consoleStoreTitle: 'Zetsukae Store',
        consoleHome: 'Accueil',
        consoleMenu: 'Menu',
        consoleDetails: 'Détails',
        consolePlay: 'Jouer',
        consoleMenuResume: 'Reprendre',
        consoleMenuSettings: 'Paramètres',
        consoleMenuExitConsole: 'Quitter le mode console',
        consoleMenuQuit: 'Quitter l\'application',
        consoleEmptyLibrary: 'Aucun jeu dans la bibliothèque',
        consoleStoreTile: 'Zetsukae Store',
        theme: 'Thème',
        portableTheme: 'Portable',
        consoleTheme: 'Console',
        loadingApps: 'Chargement des applications...',
        owned: 'En possession',
        platform: 'Plateforme',
        language: 'Langue'
    }
};

// Helper function to get translation
const APP_VERSION = 'release-abf-1.0';

function t(key) {
    return translations[userLanguage]?.[key] || translations.en[key] || key;
}

// Mapping of French text to translation keys (for DOM traversal)
const textToKeyMapping = {
    // Auth screen
    'Synchronisez vos données avec ZetID': 'authSync',
    'Connexion': 'signIn',
    'Email ou Nom d\'utilisateur': 'emailOrUsername',
    'Email ou username': 'emailOrUsername',
    'Mot de passe': 'password',
    'Pas encore de compte? S\'inscrire': 'switchToRegister',
    'Continuer sans compte': 'continueWithout',
    'Créer un compte ZetID': 'createAccountHeader',
    'Photo de Profil (optionnel)': 'profilePicLabel',
    'URL de l\'image': 'imageUrlPlaceholder',
    'Parcourir un fichier': 'browseFile',
    'Nom d\'utilisateur': 'username',
    'Email': 'email',
    'Confirmer le mot de passe': 'confirmPassword',
    'Token GitHub Personnel (optionnel)': 'githubTokenLabel',
    'Votre Personal Access Token GitHub': 'githubTokenPlaceholder',
    'Pour synchroniser vos données.': 'forSync',
    'Créer un token': 'createToken',
    'Vous avez déjà un compte? Connectez-vous': 'switchToLogin',
    'Paramètres': 'settings',
    'Forcer à quitter': 'forceQuit',
    'Boutique': 'store',
    'Bibliothèque': 'library',
    'Communauté': 'community',
    'Rechercher des jeux...': 'searchGames',
    'Aucun compte connecté.': 'noAccountConnected',
    'Nom d\'utilisateur:': 'accountUsername',
    'Email:': 'accountEmail',
    'ID ZetID:': 'accountZetId',
    'Créé:': 'accountCreated',
    'Changer': 'changeProfilePic',
    'Gestion du Cache': 'cache',
    'Vider le cache pour supprimer tous les chemins des jeux sauvegardés et les jeux personnalisés.': 'cacheDesc',
    'Vider le cache': 'clearCache',
    'À propos de Zetsukae Launcher': 'aboutZetsukae',
    'Un lanceur de jeux simple et efficace construit avec Electron.': 'versionText',
    'Déconnexion': 'logout',
    'Supprimer le compte': 'deleteAccount',
    'Mon Compte ZetID': 'myAccount'
};

// Add additional translations for French
translations.en.authSync = 'Synchronize your data with ZetID';
translations.en.emailOrUsername = 'Email or Username';
translations.en.imageUrlPlaceholder = 'Enter image URL';
translations.en.browseFile = 'Browse File';
translations.en.createAccountHeader = 'Create a ZetID Account';
translations.en.profilePicLabel = 'Profile Picture (optional)';
translations.en.githubTokenLabel = 'GitHub Personal Token (optional)';
translations.en.githubTokenPlaceholder = 'Your GitHub Personal Access Token';
translations.en.forSync = 'To synchronize your data.';
translations.en.createToken = 'Create a token';
translations.en.forceQuit = 'Force Quit';
translations.en.myAccountZetId = 'My ZetID Account';

translations.fr.authSync = 'Synchronisez vos donnees avec ZetID';
translations.fr.emailOrUsername = 'Email ou Nom d\'utilisateur';
translations.fr.imageUrlPlaceholder = 'Entrez l\'URL de l\'image';
translations.fr.browseFile = 'Parcourir un fichier';
translations.fr.createAccountHeader = 'Creer un compte ZetID';
translations.fr.profilePicLabel = 'Photo de Profil (optionnel)';
translations.fr.githubTokenLabel = 'Token GitHub Personnel (optionnel)';
translations.fr.githubTokenPlaceholder = 'Votre Personal Access Token GitHub';
translations.fr.forSync = 'Pour synchroniser vos donnees.';
translations.fr.createToken = 'Creer un token';
translations.fr.forceQuit = 'Forcer a quitter';
translations.fr.myAccountZetId = 'Mon Compte ZetID';
translations.fr.launchFullScreen = 'Toujours en Fullscreen';

// ==================== DATA & STATE ====================
let games = [];
let allGames = [];
let currentCarouselIndex = 0;
let currentSelectedGame = null;
let carouselInterval = null;
let userLanguage = localStorage.getItem('userLanguage') || 'en'; // Default to English
let isOnline = true; // Start as online, checkConnection will verify
let showPrices = true; // Show prices in game cards by default
let backgroundMusicEnabled = true; // Background music enabled by default

let currentUser = null; // { zetId, username, email, profilePic, githubToken, createdAt }
let sessionToken = null;
let steamGames = [];
let appTheme = 'portable';
let consoleFocusedIndex = 0;
let consoleShelfItems = [];
let storeAppOpen = false;
let consoleMenuOpen = false;
let consoleMenuIndex = 0;
let consoleShelfReady = false;
let lastConsoleFocusIndex = -1;
let gamepadConnected = false;

const DEFAULT_REPO_URL = 'https://github.com/Zetsukae/streamix';
const FOLDER_REPO_URL = 'https://github.com/Zetsukae/ZetsukaeLauncher';
const GAMES_STORAGE_KEY = 'zetsukae_launcher_games';
const CUSTOM_GAMES_KEY = 'zetsukae_launcher_custom_games';
const SETTINGS_STORAGE_KEY = 'zetsukae_launcher_settings';

// ==================== DOM ELEMENTS ====================
const storeView = document.getElementById('storeView');
const libraryView = document.getElementById('libraryView');
const communityView = document.getElementById('communityView');
const gamesGrid = document.getElementById('gamesGrid');
const libraryGrid = document.getElementById('libraryGrid');
const gameModal = document.getElementById('gameModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalOverlay = document.getElementById('closeModalOverlay');
const gameSearchInput = document.getElementById('gameSearchInput');

// Modal elements
const downloadBtn = document.getElementById('downloadBtn');
const launchBtn = document.getElementById('launchBtn');
const changePathBtn = document.getElementById('changePathBtn');
const websiteBtn = document.getElementById('websiteBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Carousel elements
const carouselImage = document.getElementById('carouselImage');
const carouselTitle = document.getElementById('carouselTitle');
const carouselDesc = document.getElementById('carouselDesc');
const carouselActionBtn = document.getElementById('carouselActionBtn');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

// Add custom game modal
const addGameModal = document.getElementById('addGameModal');
const addGameBtn = document.getElementById('addCustomGameBtn');
const closeAddGameBtn = document.getElementById('closeAddGameBtn');
const closeAddGameOverlay = document.getElementById('closeAddGameOverlay');
const addGameForm = document.getElementById('addGameForm');
const browseBtn = document.getElementById('browseBtn');
const cancelAddGameBtn = document.getElementById('cancelAddGameBtn');

// Settings modal
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const closeSettingsOverlay = document.getElementById('closeSettingsOverlay');
const clearCacheBtn = document.getElementById('clearCacheBtn');

// Settings dropdown menu
const settingsDropdown = document.getElementById('settingsDropdown');
const openSettingsBtn = document.getElementById('openSettingsBtn');
const quitAppBtn = document.getElementById('quitAppBtn');

// Settings customisation
const showPricesCheckbox = document.getElementById('showPricesCheckbox');
const backgroundMusicCheckbox = document.getElementById('backgroundMusicCheckbox');
const themeSelector = document.getElementById('themeSelector');
const backgroundMusic = document.getElementById('backgroundMusic');
const swapSound = document.getElementById('swapSound');
const languageSelector = document.getElementById('languageSelector');
const fullscreenCheckbox = document.getElementById('fullscreenCheckbox');

function escapeForOnclick(text) {
    return text.replace(/'/g, "\\'");
}

async function detectSteamGames() {
    try {
        const detected = await window.electron.detectSteamGames();
        steamGames = Array.isArray(detected) ? detected : [];
        console.log(`✅ Steam games detected: ${steamGames.length}`, steamGames);
        refreshConsoleHomeIfNeeded();
    } catch (error) {
        console.error('Erreur lors de la détection des jeux Steam:', error);
        steamGames = [];
    }
}

// ==================== EVENT LISTENERS ====================
// Window controls
document.getElementById('minimizeBtn').addEventListener('click', () => {
    window.electron.windowMinimize();
});

document.getElementById('maximizeBtn').addEventListener('click', () => {
    window.electron.windowMaximize();
});

document.getElementById('closeBtn').addEventListener('click', () => {
    window.electron.windowClose();
});

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const section = link.dataset.section;
        switchSection(section);
    });
});

// Modal controls
closeModalBtn.addEventListener('click', closeModal);
closeModalOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'closeModalOverlay') closeModal();
});

// Modal buttons
downloadBtn.addEventListener('click', downloadGame);
launchBtn.addEventListener('click', launchGame);
changePathBtn.addEventListener('click', changePath);
websiteBtn.addEventListener('click', openWebsite);
deleteBtn.addEventListener('click', deleteCustomGame);

// Carousel
carouselPrev.addEventListener('click', previousCarouselSlide);
carouselNext.addEventListener('click', nextCarouselSlide);
carouselActionBtn.addEventListener('click', () => {
    openGameModal(currentCarouselIndex);
});

// Start carousel auto-change
startCarouselTimer();

// Search
gameSearchInput.addEventListener('input', filterGames);

// Add custom game modal
addGameBtn.addEventListener('click', () => {
    addGameModal.classList.add('active');
});

closeAddGameBtn.addEventListener('click', () => {
    addGameModal.classList.remove('active');
    addGameForm.reset();
});

closeAddGameOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'closeAddGameOverlay') {
        addGameModal.classList.remove('active');
        addGameForm.reset();
    }
});

cancelAddGameBtn.addEventListener('click', () => {
    addGameModal.classList.remove('active');
    addGameForm.reset();
});

browseBtn.addEventListener('click', async () => {
    const filePath = await window.electron.selectPath();
    if (filePath) {
        document.getElementById('gameExePath').value = filePath;
    }
});

// Settings dropdown menu event listeners
settingsBtn.addEventListener('click', () => {
    settingsDropdown.classList.toggle('active');
});

openSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('active');
    settingsDropdown.classList.remove('active');
});

quitAppBtn.addEventListener('click', () => {
    window.electron.windowClose();
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.settings-menu-container')) {
        settingsDropdown.classList.remove('active');
    }
});

closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('active');
});

closeSettingsOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'closeSettingsOverlay') {
        settingsModal.classList.remove('active');
    }
});

clearCacheBtn.addEventListener('click', () => {
    if (confirm(t('clearCacheConfirm'))) {
        localStorage.removeItem('zetsukae_launcher_games');
        localStorage.removeItem('zetsukae_launcher_custom_games');
        alert(t('cacheClearedAlert'));
        settingsModal.classList.remove('active');
    }
});

// Settings sections navigation
document.querySelectorAll('.settings-nav-item').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        switchSettingsSection(section);
    });
});

// Function to switch settings sections
function switchSettingsSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.settings-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active from all nav items
    document.querySelectorAll('.settings-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    const activeSection = document.querySelector(`.settings-section[data-section="${sectionName}"]`);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Set active nav item
    const activeNavItem = document.querySelector(`.settings-nav-item[data-section="${sectionName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

document.getElementById('browseIconBtn').addEventListener('click', async () => {
    const imageUrl = await window.electron.selectImage();
    if (imageUrl) {
        document.getElementById('gameIcon').value = imageUrl;
    }
});

document.getElementById('browseBgIconBtn').addEventListener('click', async () => {
    const imageUrl = await window.electron.selectImage();
    if (imageUrl) {
        document.getElementById('gameBgIcon').value = imageUrl;
    }
});

addGameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addCustomGame();
});

// Initial load
window.addEventListener('load', async () => {
    loadSettings(); // Load user preferences including language
    updateUILanguage(); // Apply language to UI
    await detectSteamGames();
    refreshConsoleHomeIfNeeded();
    switchSection(isConsoleMode() ? 'library' : 'store');
    checkConnection();
    populateSettingsInfo();
    initConsoleControls();
});

// Populate settings info
async function populateSettingsInfo() {
    try {
        const platform = await window.electron.getOS();
        const platformMap = {
            'WIN': 'Windows',
            'LIN': 'Linux',
            'MAC': 'macOS'
        };
        
        document.getElementById('platformInfo').textContent = platformMap[platform] || t('unknown');
        document.getElementById('languageInfo').textContent = userLanguage === 'fr' ? 'Français' : 'English';
        
        // Load user settings
        loadSettings();
    } catch (error) {
        console.error('Error populating settings info:', error);
    }
}

// Load settings from localStorage
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY)) || {};
    showPrices = settings.showPrices !== undefined ? settings.showPrices : true;
    backgroundMusicEnabled = settings.backgroundMusicEnabled !== undefined ? settings.backgroundMusicEnabled : true;
    
    if (showPricesCheckbox) {
        showPricesCheckbox.checked = showPrices;
    }
    
    if (backgroundMusicCheckbox) {
        backgroundMusicCheckbox.checked = backgroundMusicEnabled;
    }
    
    if (themeSelector) {
        appTheme = settings.appTheme || 'portable';
        themeSelector.value = appTheme;
    }
    
    // Initialize language selector
    if (languageSelector) {
        languageSelector.value = userLanguage;
    }
    
    // Initialize fullscreen checkbox
    if (fullscreenCheckbox) {
        const fullscreenMode = localStorage.getItem('fullscreenMode') === 'true';
        fullscreenCheckbox.checked = fullscreenMode || appTheme === 'console';
    }
    
    applyTheme();
    
    // Play or pause music based on setting
    if (backgroundMusic) {
        if (backgroundMusicEnabled) {
            backgroundMusic.play().catch(err => {
                console.log('Autoplay prevented by browser:', err);
            });
        } else {
            backgroundMusic.pause();
        }
    }
}

// Save settings to localStorage
function saveSettings() {
    const settings = {
        showPrices: showPrices,
        backgroundMusicEnabled: backgroundMusicEnabled,
        appTheme: appTheme
    };
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

function applyThemeClasses() {
    const themeLink = document.getElementById('themeStylesheet');
    if (themeLink) {
        themeLink.href = appTheme === 'console' ? 'console.css' : 'portable.css';
    }

    document.body.classList.remove('portable-theme', 'console-theme');
    document.body.classList.add(appTheme === 'console' ? 'console-theme' : 'portable-theme');
}

async function syncFullscreenState({ forceOff = false } = {}) {
    const wantsFullscreen = !forceOff && (
        appTheme === 'console' || localStorage.getItem('fullscreenMode') === 'true'
    );

    if (fullscreenCheckbox) {
        fullscreenCheckbox.checked = wantsFullscreen;
    }

    if (window.electron?.setFullscreen) {
        await window.electron.setFullscreen(wantsFullscreen).catch(() => {});
    }
}

async function applyTheme(options = {}) {
    applyThemeClasses();
    updateP55Clock();

    if (isConsoleMode()) {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
        showConsoleHome();
    } else {
        storeAppOpen = false;
        storeView.classList.remove('p55-store-active');
        libraryView.classList.remove('p55-home-active');
        document.querySelector('.p55-bottom-hints')?.style.removeProperty('display');
        const activeSection = document.querySelector('.nav-link.active')?.dataset.section || 'store';
        switchSection(activeSection);
    }

    await syncFullscreenState(options);
}

function isConsoleMode() {
    return appTheme === 'console';
}

function updateP55Clock() {
    const clockEl = document.getElementById('p55Clock');
    if (!clockEl) return;

    const tick = () => {
        if (!document.body.classList.contains('console-theme')) return;
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    tick();
    if (!window._p55ClockInterval) {
        window._p55ClockInterval = setInterval(tick, 10000);
    }
}

const CONSOLE_MENU_ACTIONS = ['resume', 'settings', 'exit-console', 'quit'];

function getSteamArtUrls(appid) {
    const id = String(appid);
    return {
        thumb: [
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`,
            `https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg`,
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/capsule_616x353.jpg`,
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/library_600x900.jpg`
        ],
        cover: [
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/library_hero.jpg`,
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/page_bg_generated.jpg`,
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`
        ]
    };
}

function getConsoleGameThumb(game) {
    if (game.appid) {
        const urls = getSteamArtUrls(game.appid);
        return game.icon || urls.thumb[0];
    }
    return game.icon || game.bg_icon || '';
}

function getConsoleGameCover(game) {
    if (game.appid) {
        const urls = getSteamArtUrls(game.appid);
        return game.bg_icon || urls.cover[0];
    }
    return game.bg_icon || game.icon || '';
}

function handleConsoleTileImageError(img) {
    const appid = img.dataset.appid;
    const kind = img.dataset.artKind || 'thumb';
    const urls = appid ? getSteamArtUrls(appid)[kind] : [];
    const nextIndex = parseInt(img.dataset.tryIndex || '0', 10) + 1;
    img.dataset.tryIndex = String(nextIndex);

    if (nextIndex < urls.length) {
        img.src = urls[nextIndex];
        return;
    }

    img.onerror = null;
    img.src = 'data:image/svg+xml,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect fill="#2a2d35" width="100%" height="100%"/><text x="50%" y="50%" text-anchor="middle" dy=".35em" fill="#8b959e" font-family="sans-serif" font-size="13">Pas d\'image</text></svg>'
    );
}

window.handleConsoleTileImageError = handleConsoleTileImageError;

function getAllLibraryGames() {
    const customGames = getCustomGames();
    const cachedGames = isOnline ? [] : getCachedGames();
    const steamTitles = new Set(steamGames.map(game => game.title));
    const cachedTitles = new Set(cachedGames.map(game => game.title));
    const isOwnedLauncherGame = (game) => {
        return !!steamGames.find(s => s.title === game.title) || !!getGamePath(game.title);
    };
    const storeGamesWithoutDuplicates = games.filter(game =>
        isOwnedLauncherGame(game) &&
        !steamTitles.has(game.title) &&
        !cachedTitles.has(game.title)
    );
    return [...steamGames, ...storeGamesWithoutDuplicates, ...customGames, ...cachedGames];
}

function buildConsoleShelfItems() {
    const libraryGames = getAllLibraryGames();
    const items = libraryGames.map(game => ({
        type: 'game',
        game,
        title: game.title,
        thumb: getConsoleGameThumb(game),
        cover: getConsoleGameCover(game)
    }));
    items.push({ type: 'store', title: 'Zetsukae Store', thumb: null, cover: null });
    return items;
}

function renderConsoleStoreTile(focused, index) {
    return `
        <div class="p55-tile p55-tile-store ${focused ? 'p55-tile-focused' : ''}" data-index="${index}" data-type="store" role="listitem">
            <div class="p55-tile-store-inner">
                <span class="p55-store-icon" aria-hidden="true">🛒</span>
                <span class="p55-tile-store-label">${t('consoleStoreTile')}</span>
            </div>
        </div>
    `;
}

function displayConsoleHomeShelf() {
    const shelf = document.getElementById('consoleHomeShelf');
    if (!shelf || !isConsoleMode()) return;

    consoleShelfItems = buildConsoleShelfItems();

    if (consoleFocusedIndex >= consoleShelfItems.length) {
        consoleFocusedIndex = 0;
    }

    const gameTiles = consoleShelfItems.slice(0, -1).map((item, i) => {
        const appid = item.game?.appid ? String(item.game.appid) : '';
        const thumb = item.thumb || '';
        return `
            <div class="p55-tile p55-tile-game ${i === consoleFocusedIndex ? 'p55-tile-focused' : ''}"
                 data-index="${i}" data-type="game" role="listitem">
                <img src="${thumb}" alt="${item.title}" referrerpolicy="no-referrer"
                     data-appid="${appid}" data-art-kind="thumb" data-try-index="0"
                     onerror="handleConsoleTileImageError(this)">
            </div>`;
    }).join('');

    const storeIndex = consoleShelfItems.length - 1;
    const storeTile = renderConsoleStoreTile(storeIndex === consoleFocusedIndex, storeIndex);

    if (consoleShelfItems.length === 1) {
        shelf.innerHTML = storeTile + `<div class="p55-shelf-empty">${t('consoleEmptyLibrary')}</div>`;
    } else {
        shelf.innerHTML = gameTiles + storeTile;
    }

    bindConsoleShelfEvents();
    consoleShelfReady = false;
    setConsoleFocus(consoleFocusedIndex, false);
    consoleShelfReady = true;
}

function bindConsoleShelfEvents() {
    document.querySelectorAll('#consoleHomeShelf .p55-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            setConsoleFocus(parseInt(tile.dataset.index, 10));
            activateConsoleSelection();
        });
        tile.addEventListener('mouseenter', () => {
            setConsoleFocus(parseInt(tile.dataset.index, 10), false);
        });
    });
}

function setConsoleFocus(index, scroll = true) {
    if (!isConsoleMode() || consoleShelfItems.length === 0) return;

    const previousIndex = consoleFocusedIndex;
    consoleFocusedIndex = Math.max(0, Math.min(index, consoleShelfItems.length - 1));

    if (consoleShelfReady && previousIndex !== consoleFocusedIndex) {
        playSwapSound();
    }

    document.querySelectorAll('#consoleHomeShelf .p55-tile').forEach(tile => {
        tile.classList.toggle('p55-tile-focused', parseInt(tile.dataset.index, 10) === consoleFocusedIndex);
    });

    const item = consoleShelfItems[consoleFocusedIndex];
    const titleEl = document.getElementById('p55FocusedTitle');
    if (titleEl) {
        titleEl.textContent = item?.type === 'game' ? item.title : '';
    }

    updateConsoleBackground(item);

    if (scroll) {
        document.querySelector('#consoleHomeShelf .p55-tile-focused')
            ?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

function updateConsoleBackground(item) {
    const bgImg = document.getElementById('p55BgImage');
    if (!bgImg) return;

    if (!item || item.type !== 'game' || !item.cover) {
        bgImg.removeAttribute('src');
        bgImg.style.opacity = '0';
        return;
    }

    const appid = item.game?.appid;
    const coverUrls = appid
        ? getSteamArtUrls(appid).cover
        : [item.cover];
    let urlIndex = 0;

    const tryNext = () => {
        if (urlIndex >= coverUrls.length) {
            bgImg.classList.remove('is-changing');
            return;
        }
        const img = new Image();
        img.referrerPolicy = 'no-referrer';
        img.onload = () => {
            bgImg.src = coverUrls[urlIndex];
            bgImg.classList.remove('is-changing');
            bgImg.style.opacity = '1';
        };
        img.onerror = () => {
            urlIndex += 1;
            tryNext();
        };
        img.src = coverUrls[urlIndex];
    };

    bgImg.classList.add('is-changing');
    tryNext();
}

function getConsoleFocusedItem() {
    return consoleShelfItems[consoleFocusedIndex] || null;
}

function activateConsoleSelection() {
    const item = getConsoleFocusedItem();
    if (!item) return;

    if (item.type === 'store') {
        openStoreApp();
    } else if (item.game) {
        launchGameFromCard(item.game.title);
    }
}

function showConsoleDetails() {
    const item = getConsoleFocusedItem();
    if (!item) return;

    if (item.type === 'store') {
        openStoreApp();
    } else {
        openGameModalByTitle(item.game.title);
    }
}

function showConsoleHome() {
    storeAppOpen = false;
    storeView.classList.remove('p55-store-active');
    storeView.style.display = 'none';
    communityView.style.display = 'none';
    libraryView.style.display = 'flex';
    libraryView.classList.add('p55-home-active');
    document.querySelector('.p55-bottom-hints')?.style.removeProperty('display');
    displayConsoleHomeShelf();
}

function openStoreApp() {
    if (!isOnline) return;

    closeConsoleSystemMenu();
    storeAppOpen = true;
    libraryView.classList.remove('p55-home-active');
    libraryView.style.display = 'none';
    communityView.style.display = 'none';
    storeView.style.display = 'flex';
    storeView.classList.add('p55-store-active');
    document.querySelector('.p55-bottom-hints')?.style.setProperty('display', 'none');
    displayGameCards(storeView.querySelector('#gamesGrid'), games);
}

function closeStoreApp() {
    if (!isConsoleMode()) return;
    showConsoleHome();
}

function playSwapSound() {
    if (!swapSound) return;
    swapSound.currentTime = 0;
    swapSound.volume = 0.4;
    swapSound.play().catch(() => {});
}

function updateGamepadHints() {
    const pads = navigator.getGamepads?.() || [];
    const connected = [...pads].some(pad => pad && pad.connected);
    if (connected === gamepadConnected) return;
    gamepadConnected = connected;
    document.body.classList.toggle('gamepad-active', connected);
}

function initGamepadDetection() {
    updateGamepadHints();
    window.addEventListener('gamepadconnected', updateGamepadHints);
    window.addEventListener('gamepaddisconnected', updateGamepadHints);
    setInterval(updateGamepadHints, 2000);
}

function updateConsoleUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[userLanguage]?.[key] || translations.en[key]) {
            el.textContent = t(key);
        }
    });

    const versionEl = document.querySelector('.version-text');
    if (versionEl) {
        versionEl.textContent = APP_VERSION;
    }

    refreshConsoleHomeIfNeeded();
}

function refreshConsoleHomeIfNeeded() {
    if (isConsoleMode() && !storeAppOpen) {
        displayConsoleHomeShelf();
    }
}

function isConsoleOverlayOpen() {
    return consoleMenuOpen
        || settingsModal.classList.contains('active')
        || gameModal.classList.contains('active')
        || addGameModal.classList.contains('active');
}

function setConsoleMenuIndex(index) {
    const items = document.querySelectorAll('.console-menu-item');
    if (!items.length) return;

    consoleMenuIndex = Math.max(0, Math.min(index, items.length - 1));
    items.forEach((item, i) => {
        item.classList.toggle('active', i === consoleMenuIndex);
    });
}

function openConsoleSystemMenu() {
    const menu = document.getElementById('consoleSystemMenu');
    if (!menu || !isConsoleMode()) return;

    consoleMenuOpen = true;
    consoleMenuIndex = 0;
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    setConsoleMenuIndex(0);
}

function closeConsoleSystemMenu() {
    const menu = document.getElementById('consoleSystemMenu');
    if (!menu) return;

    consoleMenuOpen = false;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
}

function activateConsoleMenuItem() {
    const action = CONSOLE_MENU_ACTIONS[consoleMenuIndex];
    closeConsoleSystemMenu();

    if (action === 'resume') return;
    if (action === 'settings') {
        settingsModal.classList.add('active');
        return;
    }
    if (action === 'exit-console') {
        exitConsoleMode();
        return;
    }
    if (action === 'quit') {
        window.electron.windowClose();
    }
}

function initConsoleControls() {
    document.getElementById('storeAppBackBtn')?.addEventListener('click', closeStoreApp);

    document.getElementById('p55HintMenu')?.addEventListener('click', openConsoleSystemMenu);
    document.getElementById('p55HintDetails')?.addEventListener('click', showConsoleDetails);
    document.getElementById('p55HintPlay')?.addEventListener('click', activateConsoleSelection);

    document.querySelectorAll('.console-menu-item').forEach((item, index) => {
        item.addEventListener('mouseenter', () => setConsoleMenuIndex(index));
        item.addEventListener('click', () => {
            setConsoleMenuIndex(index);
            activateConsoleMenuItem();
        });
    });

    document.querySelector('.console-system-menu-backdrop')?.addEventListener('click', closeConsoleSystemMenu);

    initGamepadDetection();

    document.addEventListener('keydown', (e) => {
        if (!isConsoleMode()) return;

        if (e.key === 'Escape') {
            if (consoleMenuOpen) {
                closeConsoleSystemMenu();
                e.preventDefault();
                return;
            }
            if (!isConsoleOverlayOpen()) {
                openConsoleSystemMenu();
                e.preventDefault();
            }
            return;
        }

        if (consoleMenuOpen) {
            if (e.key === 'ArrowDown') {
                setConsoleMenuIndex(consoleMenuIndex + 1);
                e.preventDefault();
            } else if (e.key === 'ArrowUp') {
                setConsoleMenuIndex(consoleMenuIndex - 1);
                e.preventDefault();
            } else if (e.key === 'Enter') {
                activateConsoleMenuItem();
                e.preventDefault();
            }
            return;
        }

        if (storeAppOpen || isConsoleOverlayOpen()) return;

        if (e.key === 'ArrowRight') {
            setConsoleFocus(consoleFocusedIndex + 1);
            e.preventDefault();
        } else if (e.key === 'ArrowLeft') {
            setConsoleFocus(consoleFocusedIndex - 1);
            e.preventDefault();
        } else if (e.key === 'Enter') {
            activateConsoleSelection();
            e.preventDefault();
        } else if (e.key === 'i' || e.key === 'I') {
            showConsoleDetails();
            e.preventDefault();
        }
    });
}

async function exitConsoleMode() {
    closeConsoleSystemMenu();
    appTheme = 'portable';
    if (themeSelector) {
        themeSelector.value = 'portable';
    }
    localStorage.setItem('fullscreenMode', 'false');
    saveSettings();
    storeAppOpen = false;
    storeView.classList.remove('p55-store-active');
    libraryView.classList.remove('p55-home-active');
    applyThemeClasses();
    switchSection('store');
    await syncFullscreenState({ forceOff: true });
}

// Event listener for show prices checkbox
if (showPricesCheckbox) {
    showPricesCheckbox.addEventListener('change', () => {
        showPrices = showPricesCheckbox.checked;
        saveSettings();
        // Refresh game cards to show/hide prices
        displayGameCards(storeView.querySelector('#gamesGrid'), games);
    });
}

// Event listener for background music checkbox
if (backgroundMusicCheckbox) {
    backgroundMusicCheckbox.addEventListener('change', () => {
        backgroundMusicEnabled = backgroundMusicCheckbox.checked;
        saveSettings();
        
        if (backgroundMusicEnabled) {
            backgroundMusic.play().catch(err => {
                console.log('Could not play music:', err);
            });
        } else {
            backgroundMusic.pause();
        }
    });
}

// Event listener for theme selector
if (themeSelector) {
    themeSelector.addEventListener('change', async () => {
        const previousTheme = appTheme;
        appTheme = themeSelector.value;
        if (previousTheme === 'console' && appTheme === 'portable') {
            localStorage.setItem('fullscreenMode', 'false');
        }
        saveSettings();
        await applyTheme();
    });
}

// Event listener for language selector
if (languageSelector) {
    languageSelector.addEventListener('change', () => {
        userLanguage = languageSelector.value;
        localStorage.setItem('userLanguage', userLanguage);
        // Update UI text to match new language
        updateUILanguage();
    });
}

// Event listener for fullscreen checkbox
if (fullscreenCheckbox) {
    fullscreenCheckbox.addEventListener('change', async () => {
        const isFullscreen = fullscreenCheckbox.checked;
        localStorage.setItem('fullscreenMode', isFullscreen ? 'true' : 'false');
        // Apply fullscreen using electron API
        if (window.electron && window.electron.setFullscreen) {
            try {
                await window.electron.setFullscreen(isFullscreen);
                console.log('Fullscreen mode:', isFullscreen ? 'enabled' : 'disabled');
            } catch (error) {
                console.error('Error setting fullscreen:', error);
            }
        }
    });
}

// Function to update UI language
function updateUILanguage() {
    applyLanguageToDOM();
    updateConsoleUI();
    
    // Update language selector
    if (languageSelector) {
        languageSelector.value = userLanguage;
    }
    
    // Refresh game descriptions with new language
    if (currentSelectedGame) {
        try {
            carouselDesc.textContent = getDescription(currentSelectedGame, 0) || 'No description';
        } catch (error) {
            console.log('Error updating game description:', error);
        }
    }
    
    console.log('Language updated to:', userLanguage);
}

// Function to apply language translations to entire DOM
function applyLanguageToDOM() {
    // Text node mapping for all UI elements (French to English)
    const domTranslations = {
        'Synchronisez vos données avec ZetID': 'Synchronize your data with ZetID',
        'Connexion': 'Sign In',
        'Email ou Nom d\'utilisateur': 'Email or Username',
        'Mot de passe': 'Password',
        'Pas encore de compte? S\'inscrire': 'Don\'t have an account? Sign Up',
        'Continuer sans compte': 'Continue Without Account',
        'Créer un compte ZetID': 'Create a ZetID Account',
        'Photo de Profil (optionnel)': 'Profile Picture (optional)',
        'Parcourir un fichier': 'Browse File',
        'Nom d\'utilisateur': 'Username',
        'Email': 'Email',
        'Confirmer le mot de passe': 'Confirm Password',
        'Token GitHub Personnel (optionnel)': 'GitHub Personal Token (optional)',
        'Votre Personal Access Token GitHub': 'Your GitHub Personal Access Token',
        'Pour synchroniser vos données.': 'To synchronize your data.',
        'Créer un token': 'Create a token',
        'Vous avez déjà un compte? Connectez-vous': 'Already have an account? Sign In',
        'Paramètres': 'Settings',
        'Forcer à quitter': 'Force Quit',
        'Boutique': 'Store',
        'Bibliothèque': 'Library',
        'Communauté': 'Community',
        'Recommandées': 'Recommended',
        'Rechercher des jeux...': 'Search games...',
        'Aucun compte connecté.': 'No account connected.',
        'Nom d\'utilisateur:': 'Username:',
        'Email:': 'Email:',
        'ID ZetID:': 'ZetID:',
        'Créé:': 'Created:',
        'Changer': 'Change',
        'Gestion du Cache': 'Cache',
        'Vider le cache pour supprimer tous les chemins des jeux sauvegardés et les jeux personnalisés.': 'Clear cache to remove all saved game paths and custom games.',
        'Vider le cache': 'Clear Cache',
        'À propos de Zetsukae Launcher': 'About Zetsukae Launcher', 
        'Un lanceur de jeux simple et efficace construit avec Electron.': 'A simple and efficient game launcher built with Electron.',
        'Déconnexion': 'Logout',
        'Supprimer le compte': 'Delete Account',
        'Mon Compte ZetID': 'My ZetID Account',
        'Toujours en Fullscreen': 'Always Fullscreen',
        'Paramètres Généraux': 'General Settings',
        'Configuration générale de l\'application.': 'General application configuration.',
        'Langue du Client': 'Client Language',
        'Customisation': 'Customization',
        'Personnalisez l\'apparence de votre lanceur.': 'Customize the appearance of your launcher.',
        'Thème sombre': 'Dark Theme',
        'Afficher les prix': 'Show Prices',
        'Musique de fond': 'Background Music',
        'Mon Compte': 'My Account',
        'Gérez votre compte ZetID.': 'Manage your ZetID account.',
        'Ajouter un jeu': 'Add Game',
        'URL de l\'image': 'Image URL',
        'Token GitHub': 'GitHub Token',
        'Optionnel - Pour la synchronisation en ligne de vos données.': 'Optional - To synchronize your data online.',
        'Votre Token:': 'Your Token:',
        'Sauvegarder le token': 'Save Token',
        'Token existant': 'Existing token',
        'Un token GitHub est enregistré': 'A GitHub token is registered',
        'Aucun token GitHub enregistré': 'No GitHub token registered',
        'Token sauvegardé avec succès!': 'Token saved successfully!',
        'Token supprimé.': 'Token deleted.',
        'Synchroniser les données': 'Sync Data',
        'Cliquez pour afficher': 'Click to reveal',
        'S\'inscrire': 'Sign Up',
        'Se connecter': 'Sign In',
        'Entrée invalide': 'Invalid input',
        'Jeux ajoutés': 'Games added',
        'Aucun jeu trouvé': 'No games found',
        'Chemin invalide': 'Invalid path',
        'Erreur lors du chargement': 'Loading error',
        'Connecté': 'Signed In',
        'Application fermée': 'Application closed',
        'Offline': 'Offline',
        'En ligne': 'Online',
        'Version': 'Version',
        'Appuyez sur Entrée pour rechercher': 'Press Enter to search',
        'Ma Bibliothèque': 'My Library',
        'BIBLIOTHÈQUE': 'LIBRARY',
        'Bibliothèque': 'Library',
        'Accueil': 'Home',
        'Reprendre': 'Resume',
        'Quitter le mode console': 'Exit console mode',
        'Quitter l\'application': 'Quit application',
        'Jouer': 'Play',
        'Détails': 'Details',
        'Connectez-vous': 'Sign In',
        'Email ou username': 'Email or username',
        'BOUTIQUE': 'STORE',
        'COMMUNAUTÉ': 'COMMUNITY',
        'Surnom': 'Nickname',
        'Comment ca marche?': 'How it works?',
        'Aide': 'Help',
        'OK': 'OK',
        'Annuler': 'Cancel',
        'Quitter': 'Quit',
        'Lancer': 'Launch',
        'Télécharger': 'Download',
        'Installer': 'Install',
        'Supprimer de la bibliothèque': 'Remove from library',
        'Site Web': 'Website',
        'Code source': 'Source code',
        'Retour à la bibliothèque': 'Back to library',
        'Chercher dans le magasin': 'Search in store',
        'Chercher dans le magasin...': 'Search in store...',
        'MAGASIN': 'STORE',
        'TELECHARGER': 'DOWNLOAD',
        'Spécifier un emplacement': 'Specify a location',
        'Entièrement développé par Zetsukae': 'Fully developed by Zetsukae',
        'Entièrement développé par Zetsukae avec': 'Fully developed by Zetsukae with',
        'Informations': 'Information',
        'Informations Système': 'System Information',
        'Général': 'General',
        'A propos': 'About',

        // Extra static texts from src/index.html
        'Langue:': 'Language:',
        'Plateforme:': 'Platform:',
        'Rechercher des jeux...': 'Search games...',
        'Fichier': 'File',
        'Parcourir': 'Browse',
        'Rafraichir': 'Refresh',
        'Supprimer': 'Delete',
        '+ Ajouter un jeu': '+ Add a game',
        'Ajouter un Jeu Personnalisé': 'Add a Custom Game',
        'Ajouter le jeu': 'Add the game',
        'Chemin de l\'exécutable:': 'Executable path:',
        'Image de couverture URL:': 'Background image URL:',
        'Nom du jeu:': 'Game Name:',
        'Site web (optionnel):': 'Website (optional):',
        'Changer l\'emplacement': 'Change location',
        'Pas encore de compte?': "Don't have an account?",
        'Vous avez déjà un compte?': 'Already have an account?',
        '♦ Spécifier l\'emplacement': '♦ Specify location',
        '▶ LANCER': '▶ LAUNCH',
        'En Savoir Plus': 'Learn More',
        'À Propos': 'About',
        'À propos': 'About',
        'Chargement des applications...': 'Loading applications...',
        'Chargement de votre bibliothèque...': 'Loading your library...',
        'Section communauté bientôt disponible...': 'Community section coming soon...',
        'Francais': 'French'
    };
    
    // Walk through all text nodes
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    const nodesToUpdate = [];
    
    while (node = walker.nextNode()) {
        const text = node.textContent.trim();
        if (text.length > 0 && text.length < 200) {
            nodesToUpdate.push(node);
        }
    }
    
    // Apply translations
    nodesToUpdate.forEach(node => {
        // Use trimmed text for lookup: HTML formatting can introduce leading/trailing spaces.
        const rawText = node.textContent;
        const text = rawText.trim();
        
        if (userLanguage === 'en' && domTranslations[text]) {
            // Translate French to English
            node.textContent = domTranslations[text];
        } else if (userLanguage === 'fr') {
            // Translate English to French (reverse lookup)
            for (const [fr, en] of Object.entries(domTranslations)) {
                if (text === en) {
                    node.textContent = fr;
                    break;
                }
            }
        }
    });
    
    // Also update placeholders and attributes
    updatePlaceholdersAndAttributes();
}

// Function to update placeholders and other attributes
function updatePlaceholdersAndAttributes() {
    const placeholderMap = {
        en: {
            'Email ou username': 'Email or username',
            'Mot de passe': 'Password',
            'Confirmer le mot de passe': 'Confirm Password',
            'Nom d\'utilisateur': 'Username',
            'Entrez l\'URL de l\'image': 'Enter image URL',
            'Votre Personal Access Token GitHub': 'Your GitHub Personal Access Token',
            'URL de l\'image': 'Image URL',
            'ghp_...': 'ghp_...',
            'Rechercher des jeux...': 'Search games...',
            'Chercher dans le magasin...': 'Search in store...'
        }
    };
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (userLanguage === 'en' && input.placeholder) {
            // Look for matching placeholders
            for (const [fr, en] of Object.entries(placeholderMap.en)) {
                if (input.placeholder === fr) {
                    input.placeholder = en;
                }
            }
        }
    });
}

// ==================== CONNECTION CHECK ====================
const offlineOverlay = document.getElementById('offlineOverlay');
const refreshBtn = document.getElementById('refreshBtn');

refreshBtn.addEventListener('click', checkConnection);

// Listen for online/offline events
window.addEventListener('online', () => {
    isOnline = true;
    hideOfflineScreen();
    loadAllGames();
});

window.addEventListener('offline', () => {
    isOnline = false;
    showOfflineScreenWithLibrary();
});

// Unmute music when user returns to launcher (focus event)
window.addEventListener('focus', () => {
    if (backgroundMusicEnabled && backgroundMusic && backgroundMusic.muted) {
        console.log('Window focused - unumuting music');
        backgroundMusic.muted = false;
    }
});

async function checkConnection() {
    try {
        console.log('\n=== 🔌 CHECKING CONNECTION ===');
        
        // Test connection with multiple endpoints as fallback
        const endpoints = [
            'https://api.github.com/repos/Zetsukae/ZetsukaeLauncher/contents/games',
            'https://api.github.com',
            'https://github.com',
            'https://google.com'
        ];
        
        for (const endpoint of endpoints) {
            try {
                console.log(`🌐 Testing endpoint: ${endpoint}`);
                
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
                
                const response = await fetch(endpoint, { 
                    method: 'HEAD',
                    signal: controller.signal,
                    mode: 'no-cors'
                });
                
                clearTimeout(timeoutId);
                
                // For no-cors requests, opaque responses are successful
                console.log(`✅ Connection successful via ${endpoint}`);
                isOnline = true;
                hideOfflineScreen();
                await loadAllGames();
                console.log('=== ✅ CONNECTION OK ===\n');
                return;
            } catch (err) {
                console.log(`❌ Endpoint ${endpoint} failed: ${err.message}, trying next...`);
                continue;
            }
        }
        
        // All endpoints failed
        throw new Error('No endpoint reachable');
    } catch (error) {
        console.error('❌ Connection check failed:', error);
        isOnline = false;
        showOfflineScreenWithLibrary();
        console.log('=== ⚠️  OFFLINE MODE ===\n');
    }
}

function showOfflineScreenWithLibrary() {
    offlineOverlay.classList.add('show');

    if (isConsoleMode()) {
        showConsoleHome();
        return;
    }

    const customGames = getCustomGames();
    const cachedGames = getCachedGames();
    const offlineGames = [...customGames, ...cachedGames];

    displayGameCards(libraryGrid, offlineGames);

    storeView.style.display = 'none';
    libraryView.style.display = 'block';
    communityView.style.display = 'none';
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-section="library"]').classList.add('active');
}

function hideOfflineScreen() {
    offlineOverlay.classList.remove('show');
}

// ==================== FUNCTIONS ====================

// Parse global.xml format: [key]=value or [key]+value
function parseGlobalXML(content) {
    const regex = /\[([^\]]+)\][=+]([^\n]*)/g;
    const result = {};
    let match;
    
    while ((match = regex.exec(content)) !== null) {
        const key = match[1].trim();
        const value = match[2].trim();
        
        if (result[key]) {
            if (!Array.isArray(result[key])) {
                result[key] = [result[key]];
            }
            result[key].push(value);
        } else {
            result[key] = value;
        }
    }
    
    return result;
}

// Convert GitHub URL to raw content URL
function getGitHubRawUrl(repoUrl) {
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return null;
    
    const owner = match[1];
    const repo = match[2];
    return `https://raw.githubusercontent.com/${owner}/${repo}/main/launcher/global.xml`;
}

// Load games from GitHub repo
async function loadGames(repoUrl) {
    try {
        // Try both main and master branches
        const branches = ['main', 'master'];
        let response = null;
        let content = null;
        
        const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) {
            console.error('Invalid GitHub URL');
            return;
        }
        
        const owner = match[1];
        const repo = match[2];
        
        for (const branch of branches) {
            const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/launcher/global.xml`;
            response = await fetch(rawUrl);
            if (response.ok) {
                content = await response.text();
                break;
            }
        }
        
        if (!content) {
            console.error('global.xml not found in any branch');
            return;
        }
        
        const data = parseGlobalXML(content);
        
        // Parse game data
        games = [];
        
        // Count games
        const gameCount = data['title'] ? (Array.isArray(data['title']) ? data['title'].length : 1) : 0;
        
        for (let i = 0; i < gameCount; i++) {
            const game = {
                title: Array.isArray(data['title']) ? data['title'][i] : data['title'],
                version: (Array.isArray(data['version']) ? data['version'][i] : data['version']) || '1.0.0',
                description: getDescription(data, i),
                downloadWIN: getArrayItem(data, 'downloadWIN', i),
                downloadLIN: getArrayItem(data, 'downloadLIN', i),
                downloadMAC: getArrayItem(data, 'downloadMAC', i),
                icon: getArrayItem(data, 'icon', i),
                bg_icon: getArrayItem(data, 'bg_icon', i),
                website: getArrayItem(data, 'website', i),
                bg_colorHEX: getArrayItem(data, 'bg_colorHEX', i) || '1e90ff',
                price: getArrayItem(data, 'price', i) || '0'
            };
            games.push(game);
        }
        
        // Display store
        displayGameCards(storeView.querySelector('#gamesGrid'), games);
        updateCarousel();
        
    } catch (error) {
        console.error('Error loading games:', error);
        gamesGrid.innerHTML = '<div class="loading"><p>' + t('errorLoadingGames') + '</p></div>';
    }
}

// Load all games from both sources
async function loadAllGames() {
    try {
        console.log('\n\n=== 🚀 STARTING LOADALLGAMES ===');
        console.log('Starting to load games from all sources...');
        
        // Load games from both Streamix and Folder repo
        console.log('\n📦 Loading from Streamix...');
        const streamixGames = await fetchGamesFromRepository(DEFAULT_REPO_URL);
        console.log(`✅ Loaded ${streamixGames.length} games from Streamix`, streamixGames);
        
        console.log('\n📦 Loading from folder structure...');
        const folderGames = await fetchGamesFromFolder(FOLDER_REPO_URL);
        console.log(`✅ Loaded ${folderGames.length} games from folder structure`, folderGames);
        
        // Combine all games
        games = [...streamixGames, ...folderGames];
        console.log(`\n📊 Total games loaded: ${games.length}`);
        console.log('Combined games array:', games);
        
        // Display store
        const container = storeView.querySelector('#gamesGrid');
        console.log(`\n🎨 Displaying games in container:`, container);
        if (!container) {
            console.error('❌ Container not found!');
            return;
        }
        
        displayGameCards(container, games);
        console.log('✅ Games displayed');

        updateCarousel();
        if (isConsoleMode()) {
            displayConsoleHomeShelf();
        }
        console.log('✅ Carousel updated');
        console.log('=== ✅ LOADALLGAMES COMPLETE ===\n');
        
    } catch (error) {
        console.error('❌ Error loading games:', error);
        console.error('Stack:', error.stack);
        gamesGrid.innerHTML = '<div class="loading"><p>' + t('errorLoadingGames') + '</p></div>';
    }
}

// Fetch games from a repository (original loadGames function renamed)
async function fetchGamesFromRepository(repoUrl) {
    try {
        console.log('\n📦 fetchGamesFromRepository called with:', repoUrl);
        
        // Try both main and master branches
        const branches = ['main', 'master'];
        let response = null;
        let content = null;
        
        for (const branch of branches) {
            const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (!match) {
                console.error('❌ Invalid URL format');
                return [];
            }
            
            const owner = match[1];
            const repo = match[2];
            const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/launcher/global.xml`;
            
            console.log(`🌳 Trying branch "${branch}": ${rawUrl}`);
            response = await fetch(rawUrl);
            console.log(`📊 Response status: ${response.status}`);
            
            if (response.ok) {
                content = await response.text();
                console.log(`✅ Got content (${content.length} bytes)`);
                break;
            } else {
                console.log(`⚠️  Not OK for ${branch}, trying next...`);
            }
        }
        
        if (!content) {
            console.log('❌ No content found in any branch');
            return [];
        }
        
        const data = parseGlobalXML(content);
        console.log('📝 Parsed data:', data);
        
        // Parse game data
        const gamesList = [];
        
        // Count games
        const gameCount = data['title'] ? (Array.isArray(data['title']) ? data['title'].length : 1) : 0;
        console.log(`🎮 Found ${gameCount} games`);
        
        for (let i = 0; i < gameCount; i++) {
            const game = {
                title: Array.isArray(data['title']) ? data['title'][i] : data['title'],
                version: (Array.isArray(data['version']) ? data['version'][i] : data['version']) || '1.0.0',
                description: getDescription(data, i),
                downloadWIN: getArrayItem(data, 'downloadWIN', i),
                downloadLIN: getArrayItem(data, 'downloadLIN', i),
                downloadMAC: getArrayItem(data, 'downloadMAC', i),
                icon: getArrayItem(data, 'icon', i),
                bg_icon: getArrayItem(data, 'bg_icon', i),
                website: getArrayItem(data, 'website', i),
                bg_colorHEX: getArrayItem(data, 'bg_colorHEX', i) || '1e90ff',
                price: getArrayItem(data, 'price', i) || '0'
            };
            gamesList.push(game);
            console.log(`✅ Added: ${game.title}`);
        }
        
        console.log(`✅ Total from repository: ${gamesList.length}`);
        return gamesList;
    } catch (error) {
        console.error('Error fetching games from repository:', error);
        return [];
    }
}

// Fetch games from folder structure (lists .global.xml files in /games directory)
async function fetchGamesFromFolder(repoUrl) {
    try {
        console.log('🔍 fetchGamesFromFolder called with:', repoUrl);
        
        // Parse owner/repo from URL
        const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) {
            console.error('❌ Could not parse URL:', repoUrl);
            return [];
        }
        
        const owner = match[1];
        const repo = match[2];
        console.log(`📦 Repo: ${owner}/${repo}`);
        
        let gameFiles = [];
        let foundBranch = null;
        
        // Try to get list of files in /games directory
        for (const branch of ['main', 'master']) {
            try {
                const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/games?ref=${branch}`;
                console.log(`🌳 Trying branch "${branch}": ${apiUrl}`);
                
                const response = await fetch(apiUrl);
                console.log(`📊 API response status: ${response.status}`);
                
                if (!response.ok) {
                    console.log(`⚠️  Not OK for ${branch}, trying next...`);
                    continue;
                }
                
                const items = await response.json();
                console.log(`📋 API returned ${items.length} items`);
                console.log('📄 Items:', items.map(i => ({ name: i.name, type: i.type })));
                
                // Filter for .global.xml files only
                gameFiles = items.filter(item => item.type === 'file' && item.name.endsWith('.global.xml'));
                foundBranch = branch;
                console.log(`✅ Found ${gameFiles.length} .global.xml files in ${branch} branch`);
                console.log('📑 Files:', gameFiles.map(f => f.name));
                break;
            } catch (error) {
                console.error(`❌ Error fetching from ${branch}:`, error.message);
                continue;
            }
        }
        
        if (gameFiles.length === 0) {
            console.log('⚠️  No .global.xml files found in either branch');
            return [];
        }
        
        // For each file, fetch and parse it
        const games = [];
        for (const file of gameFiles) {
            console.log(`\n🎮 Processing file: ${file.name}`);
            const game = await fetchGameFromFile(owner, repo, file.name, foundBranch);
            if (game) {
                console.log(`✅ Successfully loaded: ${game.title}`);
                games.push(game);
            } else {
                console.log(`❌ Failed to load game from: ${file.name}`);
            }
        }
        
        console.log(`\n✅ Total games loaded from folder: ${games.length}`);
        return games;
        
    } catch (error) {
        console.error('❌ Error fetching games from folder:', error);
        return [];
    }
}

// Helper function to fetch and parse a single game file
async function fetchGameFromFile(owner, repo, fileName, branch = 'main') {
    try {
        console.log(`  📥 Fetching file: ${fileName}`);
        
        let xmlContent = null;
        let usedBranch = null;
        
        // Try provided branch first, then fallback
        const branchesToTry = [branch, branch === 'main' ? 'master' : 'main'];
        
        for (const tryBranch of branchesToTry) {
            try {
                const xmlUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${tryBranch}/games/${fileName}`;
                console.log(`    🌐 Trying: ${xmlUrl}`);
                
                const response = await fetch(xmlUrl);
                console.log(`    📊 Status: ${response.status}`);
                
                if (response.ok) {
                    xmlContent = await response.text();
                    usedBranch = tryBranch;
                    console.log(`    ✅ Got content (${xmlContent.length} bytes)`);
                    break;
                }
            } catch (error) {
                console.log(`    ⚠️  Failed for ${tryBranch}: ${error.message}`);
                continue;
            }
        }
        
        if (!xmlContent) {
            console.warn(`  ❌ Could not fetch file: ${fileName}`);
            return null;
        }
        
        // Parse the XML data
        console.log(`  🔄 Parsing XML from ${fileName}...`);
        const data = parseGlobalXML(xmlContent);
        console.log(`  📝 Parsed keys:`, Object.keys(data));
        console.log(`  📦 Data:`, data);
        
        // Extract game name from filename (remove .global.xml extension)
        const gameName = fileName.replace('.global.xml', '');
        console.log(`  🎮 Game name from filename: ${gameName}`);
        
        // Create game object
        const game = {
            title: data['title'] || gameName,
            version: data['version'] || '1.0.0',
            description: userLanguage === 'fr' && data['description-fr'] ? data['description-fr'] : (data['description-eng'] || data['description'] || 'No description'),
            downloadWIN: data['downloadWIN'],
            downloadLIN: data['downloadLIN'],
            downloadMAC: data['downloadMAC'],
            icon: data['icon'],
            bg_icon: data['bg_icon'],
            website: data['website'],
            bg_colorHEX: data['bg_colorHEX'] || '1e90ff',
            price: data['price'] || '0'
        };
        
        console.log(`  ✅ Created game object:`, game);
        return game;
        
    } catch (error) {
        console.error(`  ❌ Error fetching game from file ${fileName}:`, error);
        return null;
    }
}

function getArrayItem(data, key, index) {
    if (!data[key]) return null;
    return Array.isArray(data[key]) ? data[key][index] : (index === 0 ? data[key] : null);
}

function getDescription(data, index) {
    const key = userLanguage === 'fr' ? 'description-fr' : 'description-eng';
    const desc = getArrayItem(data, key, index);
    return desc || getArrayItem(data, 'description-eng', index) || 'No description';
}

// Formatage du prix à partir de global.xml [price]=...
// - [price]=0 => affichage en "Free"
// - [price]=1 (nombre) => affichage en "1 CHF"
function formatPrice(price) {
    if (price === null || price === undefined) return '';
    const raw = String(price).trim();
    if (!raw) return '';

    // Supporte éventuellement "1,5" dans certaines sources
    const normalized = raw.replace(',', '.');
    const num = Number(normalized);
    if (!Number.isFinite(num)) {
        // Fallback: si ce n'est pas un nombre, afficher tel quel
        return raw === '0' ? t('free') : raw;
    }

    if (num === 0) return t('free');
    return `${num} CHF`;
}

// Display games in grid
function displayGameCards(container, gamesToShow) {
    if (!container) return;
    
    if (gamesToShow.length === 0) {
        container.innerHTML = '<div class="loading" style="grid-column: 1/-1;"><p>' + t('noGamesFound') + '</p></div>';
        return;
    }
    
    container.innerHTML = gamesToShow.map((game, index) => {
        const safeTitle = escapeForOnclick(game.title || '');
        const steamMatch = steamGames.find(s => s.title === game.title);
        const hasLocalPath = !!getGamePath(game.title);
        const isOwnedFromSteam = container.id === 'gamesGrid' && !!steamMatch;
        const isOwnedByPath = container.id === 'gamesGrid' && hasLocalPath;
        const displayGame = {
            ...game,
            steamLaunchUrl: game.steamLaunchUrl || steamMatch?.steamLaunchUrl,
            steamPageUrl: game.steamPageUrl || steamMatch?.steamPageUrl,
            website: game.website || steamMatch?.website,
            icon: game.icon || steamMatch?.icon,
            bg_icon: game.bg_icon || steamMatch?.bg_icon
        };
        const gamePath = displayGame.exePath || (hasLocalPath ? getGamePath(displayGame.title) : null);
        const hasSteamLaunch = !!displayGame.steamLaunchUrl;
        const hasSteamPage = !!displayGame.steamPageUrl;
        const hasWebsite = !!displayGame.website || hasSteamPage;
        const actionType = gamePath || hasSteamLaunch ? 'launch' : hasWebsite ? 'website' : null;
        const buttonText = actionType === 'launch'
            ? '▶ ' + t('launchCaps')
            : actionType === 'website'
                ? '🌐 ' + t('website')
                : t('learnMore');
        const buttonAction = actionType === 'launch'
            ? `launchGameFromCard('${safeTitle}')`
            : `openWebsiteFromCard('${safeTitle}')`;
        const secondaryButton = hasSteamPage
            ? ` <button class="game-card-secondary-btn" onclick="event.stopPropagation(); openSteamPageFromCard('${safeTitle}')">Steam Page</button>`
            : '';
        const priceText = (isOwnedFromSteam || isOwnedByPath)
            ? t('owned')
            : (showPrices && game.price ? formatPrice(game.price) : '');
        const priceHTML = priceText ? `<div class="game-card-price${(isOwnedFromSteam || isOwnedByPath) ? ' owned' : ''}">${priceText}</div>` : '';
        
        return `
        <div class="game-card" onclick="openGameModalByTitle('${safeTitle}')">
            <img src="${displayGame.icon || displayGame.bg_icon || ''}" alt="${game.title}" class="game-card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22180%22%3E%3Crect fill=%22%232a2d30%22 width=%22240%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%238b959e%22 font-size=%2211%22%3ENo image%3C/text%3E%3C/svg%3E'">
            ${priceHTML}
            <div class="game-card-actions">
                <button class="game-card-action-btn" onclick="event.stopPropagation(); ${buttonAction}">${buttonText}</button>
                ${secondaryButton}
            </div>
            <div class="game-card-content">
                <div>
                    <div class="game-card-title">${game.title || t('untitledGame')}</div>
                    <div class="game-card-version">v${game.version || '1.0.0'}</div>
                    <p class="game-card-description">${game.description || ''}</p>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Update carousel display with fade effect
function updateCarousel() {
    if (games.length === 0) return;
    
    const game = games[currentCarouselIndex];
    
    // Add fade out effect
    carouselImage.classList.add('carousel-fade-out');
    carouselTitle.classList.add('carousel-fade-out');
    carouselDesc.classList.add('carousel-fade-out');
    
    // Update content after fade out
    setTimeout(() => {
        carouselImage.src = game.bg_icon || game.icon;
        carouselTitle.textContent = game.title;
        carouselDesc.textContent = game.description;
        
        // Remove fade out and add fade in
        carouselImage.classList.remove('carousel-fade-out');
        carouselTitle.classList.remove('carousel-fade-out');
        carouselDesc.classList.remove('carousel-fade-out');
        
        carouselImage.classList.add('carousel-fade-in');
        carouselTitle.classList.add('carousel-fade-in');
        carouselDesc.classList.add('carousel-fade-in');
        
        // Remove fade in class after animation
        setTimeout(() => {
            carouselImage.classList.remove('carousel-fade-in');
            carouselTitle.classList.remove('carousel-fade-in');
            carouselDesc.classList.remove('carousel-fade-in');
        }, 600);
    }, 300);
}

function previousCarouselSlide() {
    currentCarouselIndex = (currentCarouselIndex - 1 + games.length) % games.length;
    updateCarousel();
    resetCarouselTimer();
}

function nextCarouselSlide() {
    currentCarouselIndex = (currentCarouselIndex + 1) % games.length;
    updateCarousel();
    resetCarouselTimer();
}

// Start carousel auto-change timer
function startCarouselTimer() {
    carouselInterval = setInterval(() => {
        const nextIndex = (currentCarouselIndex + 1) % games.length;
        currentCarouselIndex = nextIndex;
        updateCarousel();
    }, 7000);
}

// Reset carousel timer when user manually navigates
function resetCarouselTimer() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    startCarouselTimer();
}

carouselActionBtn.addEventListener('click', () => {
    openGameModal(currentCarouselIndex);
});

// Switch between sections
function switchSection(section) {
    if (isConsoleMode()) {
        if (section === 'store') {
            openStoreApp();
        } else if (section === 'library') {
            showConsoleHome();
        }
        return;
    }

    storeView.style.display = 'none';
    libraryView.style.display = 'none';
    communityView.style.display = 'none';
    libraryView.classList.remove('p55-home-active');
    storeView.classList.remove('p55-store-active');
    
    if (section === 'store') {
        if (!isOnline) {
            document.querySelector('[data-section="library"]').click();
            return;
        }
        storeView.style.display = 'block';
    } else if (section === 'library') {
        libraryView.style.display = 'block';
        const allLibraryGames = getAllLibraryGames();
        displayGameCards(libraryGrid, allLibraryGames);
    } else if (section === 'community') {
        if (!isOnline) {
            document.querySelector('[data-section="library"]').click();
            return;
        }
        communityView.style.display = 'block';
    }
}

// Filter games by search
function filterGames() {
    const query = gameSearchInput.value.toLowerCase();
    const filtered = games.filter(game => 
        game.title.toLowerCase().includes(query)
    );
    displayGameCards(gamesGrid, filtered);
}

// Save game path to localStorage
function saveGamePath(gameName, gamePath, gameVersion = '1.0.0') {
    let storage = JSON.parse(localStorage.getItem(GAMES_STORAGE_KEY)) || {};
    storage[gameName] = {
        path: gamePath,
        title: gameName,
        version: gameVersion
    };
    localStorage.setItem(GAMES_STORAGE_KEY, JSON.stringify(storage));
}

// Get game path from localStorage
function getGamePath(gameName) {
    const storage = JSON.parse(localStorage.getItem(GAMES_STORAGE_KEY)) || {};
    const game = storage[gameName];
    return game ? game.path : null;
}

// Get all cached games (with saved paths) for offline mode
function getCachedGames() {
    const storage = JSON.parse(localStorage.getItem(GAMES_STORAGE_KEY)) || {};
    return Object.entries(storage).map(([gameName, gameData]) => {
        // Handle both old format (string path) and new format (object with path and title)
        const gamePath = typeof gameData === 'string' ? gameData : (gameData.path || null);
        const gameTitle = typeof gameData === 'string' ? gameName : (gameData.title || gameName);
        const gameVersion = typeof gameData === 'string' ? '1.0.0' : (gameData.version || '1.0.0');
        
        return {
            title: gameTitle,
            version: gameVersion,
            description: '',
            price: '0',
            icon: null,
            bg_icon: null,
            website: null,
            exePath: gamePath,
            isInstalled: true
        };
    });
}

// Get download URL for current OS
async function getDownloadUrl(game) {
    const os = await window.electron.getOS();
    
    if (os === 'WIN32') return game.downloadWIN;
    if (os === 'LINUX') return game.downloadLIN;
    if (os === 'DARWIN') return game.downloadMAC;
    
    return game.downloadWIN || game.downloadLIN || game.downloadMAC;
}

// Modal functions
function openGameModal(gameIndex) {
    if (gameIndex < 0 || gameIndex >= games.length) return;
    
    currentSelectedGame = games[gameIndex];
    const game = currentSelectedGame;
    
    // Update modal content
    document.getElementById('modalGameTitle').textContent = game.title;
    document.getElementById('modalGameVersion').textContent = `Version ${game.version}`;
    document.getElementById('modalGamePrice').textContent = game.price ? formatPrice(game.price) : '';
    document.getElementById('modalGameDescription').textContent = game.description;
    document.getElementById('modalHeroImage').src = game.bg_icon || game.icon;
    document.getElementById('modalScreenshot').src = game.icon;
    
    // Check if game is installed
    const gamePath = game.exePath || getGamePath(game.title);
    downloadBtn.style.display = gamePath ? 'none' : 'block';
    launchBtn.style.display = gamePath ? 'block' : 'none';
    changePathBtn.style.display = gamePath ? 'block' : 'none';
    websiteBtn.style.display = game.website ? 'block' : 'none';
    deleteBtn.style.display = 'none';
    
    // Show modal
    gameModal.classList.add('active');
}

// Open game modal by title (for custom, store, cached, and Steam games)
function openGameModalByTitle(gameTitle) {
    // Find game in Steam games, store games, custom games, or cached games
    let game = steamGames.find(g => g.title === gameTitle);
    if (!game) {
        game = games.find(g => g.title === gameTitle);
    }
    if (!game) {
        const customGames = getCustomGames();
        game = customGames.find(g => g.title === gameTitle);
    }
    if (!game && !isOnline) {
        const cachedGames = getCachedGames();
        game = cachedGames.find(g => g.title === gameTitle);
    }
    
    if (!game) {
        console.error('Game not found:', gameTitle);
        return;
    }
    
    currentSelectedGame = game;
    
    // Update modal content
    document.getElementById('modalGameTitle').textContent = game.title;
    document.getElementById('modalGameVersion').textContent = `Version ${game.version}`;
    document.getElementById('modalGamePrice').textContent = game.price ? formatPrice(game.price) : '';
    document.getElementById('modalGameDescription').textContent = game.description || '';
    document.getElementById('modalHeroImage').src = game.bg_icon || game.icon || '';
    document.getElementById('modalScreenshot').src = game.icon || '';
    
    const gamePath = game.exePath || getGamePath(game.title);
    const hasSteamLaunch = !!game.steamLaunchUrl;
    const hasSteamPage = !!game.steamPageUrl;
    const hasWebsite = !!game.website || hasSteamPage;
    
    if (game.isCustom || (game.isInstalled && game.exePath) || hasSteamLaunch) {
        downloadBtn.style.display = 'none';
        launchBtn.style.display = 'block';
        changePathBtn.style.display = gamePath ? 'block' : 'none';
        deleteBtn.style.display = game.isCustom ? 'block' : 'none';
    } else {
        downloadBtn.style.display = gamePath ? 'none' : 'block';
        downloadBtn.textContent = '♦ ' + t('specifyLocation');
        launchBtn.style.display = gamePath ? 'block' : 'none';
        changePathBtn.style.display = gamePath ? 'block' : 'none';
        deleteBtn.style.display = 'none';
    }
    
    websiteBtn.style.display = hasWebsite ? 'block' : 'none';
    websiteBtn.textContent = hasSteamPage ? '🌐 Steam Page' : '🌐 ' + t('website');
    
    // Show modal
    gameModal.classList.add('active');
}

function closeModal() {
    gameModal.classList.remove('active');
    currentSelectedGame = null;
}

// Download button (select installation path)
async function downloadGame() {
    if (!currentSelectedGame) {
        console.error('No game selected');
        return;
    }
    
    try {
        // Open file picker
        const filePath = await window.electron.selectPath();
        if (filePath) {
            saveGamePath(currentSelectedGame.title, filePath, currentSelectedGame.version);
            console.log('Game path saved:', filePath);
            
            // Update button visibility
            downloadBtn.style.display = 'none';
            launchBtn.style.display = 'block';
            changePathBtn.style.display = 'block';
            
            // Update card buttons
            const allCards = document.querySelectorAll('.game-card');
            allCards.forEach(card => {
                const title = card.querySelector('.game-card-title')?.textContent;
                if (title === currentSelectedGame.title) {
                    const btn = card.querySelector('.game-card-action-btn');
                    if (btn) {
                        btn.textContent = '▶ ' + t('launchCaps');
                        btn.setAttribute('onclick', `event.stopPropagation(); launchGameFromCard('${currentSelectedGame.title}')`);
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error selecting download path:', error);
        alert(t('errorSelectingPath'));
    }
}

// Launch game from card button
async function launchGameFromCard(gameTitle) {
    const customGames = getCustomGames();
    let game = steamGames.find(g => g.title === gameTitle) || games.find(g => g.title === gameTitle) || customGames.find(g => g.title === gameTitle);
    
    if (!game && !isOnline) {
        const cachedGames = getCachedGames();
        game = cachedGames.find(g => g.title === gameTitle);
    }
    
    if (!game) return;
    
    currentSelectedGame = game;
    await launchGame();
}

// Open website from card button
async function openWebsiteFromCard(gameTitle) {
    const customGames = getCustomGames();
    let game = steamGames.find(g => g.title === gameTitle) || games.find(g => g.title === gameTitle) || customGames.find(g => g.title === gameTitle);
    
    if (!game && !isOnline) {
        const cachedGames = getCachedGames();
        game = cachedGames.find(g => g.title === gameTitle);
    }
    
    if (!game) return;
    
    const url = game.website || game.steamPageUrl || game.launchUrl || game.steamLaunchUrl;
    if (!url) return;
    
    await window.electron.openUrl(url);
}

// Open Steam page button
async function openSteamPageFromCard(gameTitle) {
    const customGames = getCustomGames();
    let game = steamGames.find(g => g.title === gameTitle) || games.find(g => g.title === gameTitle) || customGames.find(g => g.title === gameTitle);
    
    if (!game && !isOnline) {
        const cachedGames = getCachedGames();
        game = cachedGames.find(g => g.title === gameTitle);
    }
    
    if (!game || !game.steamPageUrl) return;
    
    await window.electron.openUrl(game.steamPageUrl);
}

// Change installation path
async function changePath() {
    if (!currentSelectedGame) {
        console.error('No game selected');
        return;
    }
    
    try {
        const filePath = await window.electron.selectPath();
        if (filePath) {
            saveGamePath(currentSelectedGame.title, filePath, currentSelectedGame.version);
            console.log('Game path updated:', filePath);
            
            // Update card buttons
            const allCards = document.querySelectorAll('.game-card');
            allCards.forEach(card => {
                const title = card.querySelector('.game-card-title')?.textContent;
                if (title === currentSelectedGame.title) {
                    const btn = card.querySelector('.game-card-action-btn');
                    if (btn) {
                        btn.textContent = '▶ ' + t('launchCaps');
                        btn.setAttribute('onclick', `event.stopPropagation(); launchGameFromCard('${currentSelectedGame.title}')`);
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error selecting path:', error);
        alert(t('errorSelectingPath'));
    }
}

// Launch game
async function launchGame() {
    if (!currentSelectedGame) {
        console.error('No game selected');
        return;
    }
    
    const gamePath = currentSelectedGame.exePath || getGamePath(currentSelectedGame.title);
    const steamLaunch = currentSelectedGame.steamLaunchUrl;
    const launchTarget = gamePath || steamLaunch;
    if (!launchTarget) {
        alert(t('gamePathUndefined'));
        return;
    }
    
    try {
        // Mute background music when launching game
        if (backgroundMusicEnabled && backgroundMusic) {
            backgroundMusic.muted = true;
        }
        
        if (steamLaunch && !gamePath) {
            await window.electron.openUrl(steamLaunch);
        } else {
            await window.electron.launchGame(launchTarget);
        }
        
        window.electron.windowClose();
        
        // Unmute music when game is closed (user returns to launcher)
        backgroundMusicCheckbox.focus();
    } catch (error) {
        console.error('Error launching game:', error);
        alert(t('errorLaunchingGame'));
        
        // Unmute music on error
        if (backgroundMusicEnabled && backgroundMusic) {
            backgroundMusic.muted = false;
        }
    }
}

// Open website
function openWebsite() {
    if (!currentSelectedGame) return;
    const url = currentSelectedGame.website || currentSelectedGame.steamPageUrl || currentSelectedGame.steamLaunchUrl;
    if (url) {
        window.electron.openUrl(url);
    }
}

// ==================== CUSTOM GAMES ====================

// Add custom game
async function addCustomGame() {
    const customGame = {
        id: Date.now(),
        title: document.getElementById('gameName').value,
        version: document.getElementById('gameVersion').value,
        description: document.getElementById('gameDescription').value,
        icon: document.getElementById('gameIcon').value,
        bg_icon: document.getElementById('gameBgIcon').value,
        website: document.getElementById('gameWebsite').value,
        exePath: document.getElementById('gameExePath').value,
        isCustom: true
    };

    if (!customGame.title || !customGame.exePath) {
        alert(t('fillNameAndPath'));
        return;
    }

    // Save to localStorage
    let customGames = getCustomGames();
    customGames.push(customGame);
    saveCustomGames(customGames);

    // Save the path for launch
    saveGamePath(customGame.title, customGame.exePath, customGame.version || '1.0.0');

    // Close form and reload
    addGameModal.classList.remove('active');
    addGameForm.reset();
    
    // Refresh library view if visible
    if (libraryView.style.display === 'block') {
        const allGames = [...games, ...getCustomGames()];
        displayGameCards(libraryGrid, allGames);
    }
    refreshConsoleHomeIfNeeded();

    alert(t('gameAdded'));
}

// Get custom games from localStorage
function getCustomGames() {
    const stored = localStorage.getItem(CUSTOM_GAMES_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Save custom games to localStorage
function saveCustomGames(customGames) {
    localStorage.setItem(CUSTOM_GAMES_KEY, JSON.stringify(customGames));
}

// Delete custom game
function deleteCustomGame() {
    if (!currentSelectedGame || !currentSelectedGame.isCustom) {
        alert(t('cantDeleteGame'));
        return;
    }

    if (!confirm(t('confirmDeleteGame').replace('{title}', currentSelectedGame.title))) {
        return;
    }

    // Remove from custom games
    let customGames = getCustomGames();
    customGames = customGames.filter(g => g.id !== currentSelectedGame.id);
    saveCustomGames(customGames);

    // Remove from storage paths
    let storage = JSON.parse(localStorage.getItem(GAMES_STORAGE_KEY)) || {};
    delete storage[currentSelectedGame.title];
    localStorage.setItem(GAMES_STORAGE_KEY, JSON.stringify(storage));

    // Close modal
    closeModal();

    // Refresh library if visible
    if (libraryView.style.display === 'block') {
        const allGames = [...games, ...getCustomGames()];
        displayGameCards(libraryGrid, allGames);
    }
    refreshConsoleHomeIfNeeded();

    alert(t('gameDeleted'));
}
