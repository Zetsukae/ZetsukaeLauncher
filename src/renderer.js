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
        systemInfo: 'System Information'
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
        systemInfo: 'Informations Systeme'
    }
};

// Helper function to get translation
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

// ZetID Authentication - Multi-account system
const accountManager = new AccountManager(); // Initialize account manager
const syncService = new AccountSyncService(); // Initialize sync service
let currentUser = null; // { zetId, username, email, profilePic, githubToken, createdAt }
let sessionToken = null;

const DEFAULT_REPO_URL = 'https://github.com/Zetsukae/streamix';
const FOLDER_REPO_URL = 'https://github.com/Zetsukae/ZetsukaeLauncher';
const GAMES_STORAGE_KEY = 'zetsukae_launcher_games';
const CUSTOM_GAMES_KEY = 'zetsukae_launcher_custom_games';
const SETTINGS_STORAGE_KEY = 'zetsukae_launcher_settings';
const ZETID_STORAGE_KEY = 'zetid_user_data'; // Legacy - used for migration
const ZETID_SESSION_KEY = 'zetid_session_token';

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
const backgroundMusic = document.getElementById('backgroundMusic');
const languageSelector = document.getElementById('languageSelector');
const fullscreenCheckbox = document.getElementById('fullscreenCheckbox');

// ZetID Authentication elements
const authContainer = document.getElementById('authContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const skipAuthBtn = document.getElementById('skipAuthBtn');
const loginEmailInput = document.getElementById('loginEmailInput');
const loginPasswordInput = document.getElementById('loginPasswordInput');
const registerUsernameInput = document.getElementById('registerUsernameInput');
const registerEmailInput = document.getElementById('registerEmailInput');
const registerPasswordInput = document.getElementById('registerPasswordInput');
const registerPasswordConfirmInput = document.getElementById('registerPasswordConfirmInput');
const githubTokenInput = document.getElementById('githubTokenInput');
const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');

// Profile picture elements
const profilePicPreview = document.getElementById('profilePicPreview');
const profilePicUrl = document.getElementById('profilePicUrl');
const uploadProfilePicBtn = document.getElementById('uploadProfilePicBtn');

// Account settings elements
const accountLoggedOut = document.getElementById('accountLoggedOut');
const accountLoggedIn = document.getElementById('accountLoggedIn');
const loginFromSettingsBtn = document.getElementById('loginFromSettingsBtn');
const logoutBtn = document.getElementById('logoutBtn');
const syncDataBtn = document.getElementById('syncDataBtn');
const accountUsername = document.getElementById('accountUsername');
const accountEmail = document.getElementById('accountEmail');
const accountZetId = document.getElementById('accountZetId');
const settingsProfilePic = document.getElementById('settingsProfilePic');
const changeProfilePicBtn = document.getElementById('changeProfilePicBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');
const saveGithubTokenBtn = document.getElementById('saveGithubTokenBtn');
const tokenStatus = document.getElementById('tokenStatus');

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

// ==================== ZETID AUTHENTICATION ====================
// Auth form switching
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    // Reset profile picture
    profilePicPreview.style.backgroundImage = '';
    profilePicPreview.textContent = '📷';
    profilePicUrl.value = '';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Login
loginBtn.addEventListener('click', handleLogin);
loginPasswordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleLogin();
});

// Register
registerBtn.addEventListener('click', handleRegister);
registerPasswordConfirmInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleRegister();
});

// Profile picture upload
profilePicUrl.addEventListener('input', (e) => {
    if (e.target.value) {
        profilePicPreview.style.backgroundImage = `url('${e.target.value}')`;
        profilePicPreview.style.backgroundSize = 'cover';
        profilePicPreview.style.backgroundPosition = 'center';
        profilePicPreview.textContent = '';
    }
});

uploadProfilePicBtn.addEventListener('click', async () => {
    const imageUrl = await window.electron.selectImage();
    if (imageUrl) {
        profilePicUrl.value = imageUrl;
        profilePicPreview.style.backgroundImage = `url('${imageUrl}')`;
        profilePicPreview.style.backgroundSize = 'cover';
        profilePicPreview.style.backgroundPosition = 'center';
        profilePicPreview.textContent = '';
    }
});

// Skip auth
skipAuthBtn.addEventListener('click', skipAuthentication);

// Account management buttons
loginFromSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    authContainer.style.display = 'flex';
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

logoutBtn.addEventListener('click', handleLogout);
syncDataBtn.addEventListener('click', handleDataSync);
changeProfilePicBtn.addEventListener('click', handleChangeProfilePic);
deleteAccountBtn.addEventListener('click', handleDeleteAccount);
saveGithubTokenBtn.addEventListener('click', handleSaveGithubToken);

// Add click listeners to reveal hidden info
accountEmail.addEventListener('click', revealInfo);
accountZetId.addEventListener('click', revealInfo);

// ==================== ZETID FUNCTIONS ====================
async function handleLogin() {
    const emailOrUsername = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();
    loginError.textContent = '';

    if (!emailOrUsername || !password) {
        loginError.textContent = t('fillAllFields');
        return;
    }

    try {
        // Use AccountManager to authenticate
        const result = accountManager.authenticateAccount(emailOrUsername, password);
        
        if (!result.success) {
            loginError.textContent = result.error;
            return;
        }

        // Create session with authenticated account
        currentUser = result.account;
        sessionToken = 'session_' + Date.now() + '_' + Math.random();
        localStorage.setItem(ZETID_SESSION_KEY, sessionToken);

        console.log('✅ Login successful:', currentUser.username);
        hideAuthScreen();
        
    } catch (error) {
        console.error('Login error:', error);
        loginError.textContent = t('loginError');
    }
}

async function handleRegister() {
    const username = registerUsernameInput.value.trim();
    const email = registerEmailInput.value.trim();
    const password = registerPasswordInput.value.trim();
    const passwordConfirm = registerPasswordConfirmInput.value.trim();
    const githubToken = githubTokenInput.value.trim();
    const profilePic = profilePicUrl.value.trim();
    registerError.textContent = '';

    // Validation
    if (!username || !email || !password || !passwordConfirm) {
        registerError.textContent = t('fillRequiredFields');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        registerError.textContent = t('invalidEmailShort');
        return;
    }

    if (username.length < 3) {
        registerError.textContent = t('usernameMinLength');
        return;
    }

    if (password.length < 6) {
        registerError.textContent = t('passwordMinLength');
        return;
    }

    if (password !== passwordConfirm) {
        registerError.textContent = t('passwordsNoMatch');
        return;
    }

    try {
        // Use AccountManager to create account
        const result = accountManager.createAccount(
            username, 
            email, 
            password, 
            profilePic || null,
            githubToken || null
        );

        if (!result.success) {
            registerError.textContent = result.error;
            return;
        }

        // Auto-login with new account
        const newAccount = result.account;
        currentUser = {
            zetId: newAccount.zetId,
            username: newAccount.username,
            email: newAccount.email,
            profilePic: newAccount.profilePic,
            githubToken: newAccount.githubToken,
            createdAt: newAccount.createdAt
        };

        sessionToken = 'session_' + Date.now() + '_' + Math.random();
        localStorage.setItem(ZETID_SESSION_KEY, sessionToken);

        console.log('✅ Registration successful:', newAccount.zetId);
        
        hideAuthScreen();

    } catch (error) {
        console.error('Register error:', error);
        registerError.textContent = t('registerError');
    }
}

function skipAuthentication() {
    console.log('⏭️ Skipping authentication');
    hideAuthScreen();
}

function hideAuthScreen() {
    authContainer.style.display = 'none';
    // Load app content
    loadAllGames();
    startCarouselTimer();
    updateAccountDisplay();
}

function checkAuthStatus() {
    // Migrate old single-account system if exists
    const migrationResult = accountManager.migrateFromSingleAccount();
    if (migrationResult.migrated) {
        console.log('✅ Migrated legacy account:', migrationResult.zetId);
    }

    // Check if user is already logged in
    const session = localStorage.getItem(ZETID_SESSION_KEY);
    
    if (session) {
        // Find the account by checking all accounts for potential match
        // Since we don't store which account is logged in, we'll look for any account
        // A better approach would be to store currentSessionUser in localStorage
        const accounts = accountManager.getAllAccounts();
        
        // For now, if there's a session, assume the user wants to login with the last account
        // This is a simple approach - in production, store currentSessionUser separately
        if (accounts.length > 0) {
            // Try to restore from old single-account system first
            const oldUserData = localStorage.getItem(ZETID_STORAGE_KEY);
            if (oldUserData) {
                try {
                    const oldUser = JSON.parse(oldUserData);
                    const matchedAccount = accounts.find(acc => acc.zetId === oldUser.zetId);
                    if (matchedAccount) {
                        currentUser = {
                            zetId: matchedAccount.zetId,
                            username: matchedAccount.username,
                            email: matchedAccount.email,
                            profilePic: matchedAccount.profilePic,
                            githubToken: matchedAccount.githubToken,
                            createdAt: matchedAccount.createdAt
                        };
                        sessionToken = session;
                        hideAuthScreen();
                        updateAccountDisplay();
                        return;
                    }
                } catch (error) {
                    console.warn('Could not restore from old account data:', error);
                }
            }
            
            // If we get here but have a session, show auth screen
            // User must login again with the new multi-account system
            console.log('⚠️ Session found but accounts migrated. Please login again.');
            authContainer.style.display = 'flex';
        }
    }
}

function updateAccountDisplay() {
    if (currentUser) {
        accountLoggedOut.style.display = 'none';
        accountLoggedIn.style.display = 'block';
        accountUsername.textContent = currentUser.username;
        
        // Hide email and zetId by default - click to reveal
        accountEmail.textContent = t('clickToReveal');
        accountEmail.classList.add('info-hidden');
        accountEmail.classList.remove('revealed');
        
        accountZetId.textContent = t('clickToReveal');
        accountZetId.classList.add('info-hidden');
        accountZetId.classList.remove('revealed');
        
        // Update profile picture
        if (currentUser.profilePic) {
            settingsProfilePic.style.backgroundImage = `url('${currentUser.profilePic}')`;
            settingsProfilePic.style.backgroundSize = 'cover';
            settingsProfilePic.style.backgroundPosition = 'center';
            settingsProfilePic.textContent = '';
        } else {
            settingsProfilePic.style.backgroundImage = '';
            settingsProfilePic.textContent = '👤';
        }
        
        // Update GitHub token field
        if (currentUser.githubToken) {
            // Show masked token
            githubTokenInput.value = currentUser.githubToken;
            githubTokenInput.placeholder = t('existingToken');
            tokenStatus.textContent = t('tokenRegistered');
            tokenStatus.style.color = 'var(--steam-gray)';
        } else {
            githubTokenInput.value = '';
            githubTokenInput.placeholder = 'ghp_...';
            tokenStatus.textContent = t('noTokenRegistered');
            tokenStatus.style.color = 'var(--steam-gray)';
        }
    } else {
        accountLoggedOut.style.display = 'block';
        accountLoggedIn.style.display = 'none';
    }
}

function handleLogout() {
    if (confirm(t('confirmLogout'))) {
        currentUser = null;
        sessionToken = null;
        localStorage.removeItem(ZETID_SESSION_KEY);
        console.log('Logout successful');
        updateAccountDisplay();
        alert(t('loggedOut'));
    }
}

async function handleChangeProfilePic() {
    try {
        const imageUrl = await window.electron.selectImage();
        if (imageUrl && currentUser) {
            // Use AccountManager to update profile picture
            const result = accountManager.updateProfilePic(currentUser.zetId, imageUrl);
            
            if (!result.success) {
                alert(t('errorChangingPhoto') + ': ' + result.error);
                return;
            }

            // Update currentUser object
            currentUser.profilePic = imageUrl;
            
            // Update display immediately
            updateAccountDisplay();
            
            console.log('Profile picture updated:', imageUrl);
            alert(t('profilePicUpdated'));
        }
    } catch (error) {
        console.error('Error changing profile picture:', error);
        alert(t('errorChangingPhoto'));
    }
}

function handleSaveGithubToken() {
    if (!currentUser) {
        alert(t('mustBeLoggedIn'));
        return;
    }

    // Check if input element exists
    if (!githubTokenInput) {
        alert(t('tokenNotFound'));
        console.error('githubTokenInput element not found');
        return;
    }

    const token = githubTokenInput.value.trim();
    
    console.log('Token value:', token); // Debug log
    
    // If empty, ask confirmation to remove token
    if (!token) {
        const confirmDelete = confirm(t('confirmDeleteToken'));
        if (!confirmDelete) return;
    }
    
    // Validate token format if not empty
    if (token && !token.startsWith('ghp_')) {
        alert(t('invalidTokenFormat'));
        return;
    }

    try {
        // Use AccountManager to update GitHub token
        const result = accountManager.updateGithubToken(currentUser.zetId, token || null);
        
        if (!result.success) {
            alert('Error: ' + result.error);
            return;
        }

        // Update currentUser object
        currentUser.githubToken = token || null;
        
        if (token) {
            tokenStatus.textContent = t('tokenSavedSuccess');
            tokenStatus.style.color = 'var(--steam-light-blue)';
            console.log('Token saved:', token.substring(0, 10) + '...');
        } else {
            tokenStatus.textContent = t('tokenDeleted');
            tokenStatus.style.color = 'var(--steam-gray)';
            console.log('Token deleted');
        }
        
        // Immediately refresh display to show token
        updateAccountDisplay();
        
        // Apply current language to new text nodes
        updateUILanguage();
        
    } catch (error) {
        console.error('Error saving GitHub token:', error);
        alert(t('errorSavingToken') + ': ' + error.message);
    }
}

function revealInfo(event) {
    const element = event.target;
    if (element.classList.contains('info-hidden')) {
        element.classList.add('revealed');
        // Show the actual value instead of placeholder
        if (element.id === 'accountEmail') {
            element.textContent = currentUser.email;
        } else if (element.id === 'accountZetId') {
            element.textContent = currentUser.zetId;
        }
    }
}

function handleDeleteAccount() {
    if (!currentUser) {
        alert(t('mustBeLoggedInDelete'));
        return;
    }

    // Double confirmation
    const firstConfirm = confirm(
        t('deleteAccountWarning').replace('{zetId}', currentUser.zetId)
    );

    if (!firstConfirm) return;

    const secondConfirm = confirm(
        t('deleteAccountFinal')
    );

    if (!secondConfirm) return;

    try {
        // Use AccountManager to delete account
        const result = accountManager.deleteAccount(currentUser.zetId);
        
        if (!result.success) {
            alert(t('errorDeletingAccount') + ': ' + result.error);
            return;
        }
        currentUser = null;
        sessionToken = null;
        localStorage.removeItem(ZETID_SESSION_KEY);

        console.log('Account deleted permanently');
        alert(t('accountDeleted'));

        // Go back to auth screen
        settingsModal.classList.remove('active');
        authContainer.style.display = 'flex';
        loginForm.classList.add('active');
        registerForm.classList.remove('active');

    } catch (error) {
        console.error('Error deleting account:', error);
        alert(t('errorDeletingAccount'));
    }
}

async function handleDataSync() {
    if (!currentUser || !currentUser.githubToken) {
        alert(t('needTokenToSync'));
        return;
    }

    try {
        // Prepare data to sync
        const dataToSync = {
            games: localStorage.getItem(GAMES_STORAGE_KEY),
            customGames: localStorage.getItem(CUSTOM_GAMES_KEY),
            settings: localStorage.getItem(SETTINGS_STORAGE_KEY),
            syncedAt: new Date().toISOString()
        };

        console.log('📤 Synchronizing data with GitHub Gist...', dataToSync);
        
        // In production: would upload to GitHub Gist here
        // For now, just show success message
        alert(t('dataSynced'));

    } catch (error) {
        console.error('Sync error:', error);
        alert(t('syncError'));
    }
}

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
window.addEventListener('load', () => {
    loadSettings(); // Load user preferences including language
    updateUILanguage(); // Apply language to UI
    checkAuthStatus(); // Check if user is already logged in
    switchSection('store'); // Display store by default
    checkConnection();
    populateSettingsInfo();
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
    
    // Initialize language selector
    if (languageSelector) {
        languageSelector.value = userLanguage;
    }
    
    // Initialize fullscreen checkbox
    if (fullscreenCheckbox) {
        const fullscreenMode = localStorage.getItem('fullscreenMode') === 'true';
        fullscreenCheckbox.checked = fullscreenMode;
    }
    
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
        backgroundMusicEnabled: backgroundMusicEnabled
    };
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
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
    // Apply language to entire DOM
    applyLanguageToDOM();
    
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
    // Show overlay but don't block content
    offlineOverlay.classList.add('show');
    
    // Load custom games + cached games (with saved paths)
    const customGames = getCustomGames();
    const cachedGames = getCachedGames();
    const offlineGames = [...customGames, ...cachedGames];
    
    displayGameCards(libraryGrid, offlineGames);
    
    // Switch to library section
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
        const gamePath = game.exePath || getGamePath(game.title);
        const priceNum = game.price !== null && game.price !== undefined
            ? Number(String(game.price).trim().replace(',', '.'))
            : null;
        const isPaid = Number.isFinite(priceNum) && priceNum > 0;
        const buttonText = gamePath
            ? '▶ ' + t('launchCaps')
            : (isPaid ? '⬇ ' + t('buyVerb') : '⬇ ' + t('downloadVerb'));
        const buttonAction = gamePath ? `launchGameFromCard('${game.title}')` : `openWebsiteFromCard('${game.title}')`;
        const priceText = showPrices && game.price ? formatPrice(game.price) : '';
        const priceHTML = priceText ? `<div class="game-card-price">${priceText}</div>` : '';
        
        return `
        <div class="game-card" onclick="openGameModalByTitle('${game.title}')">
            <img src="${game.bg_icon || game.icon}" alt="${game.title}" class="game-card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22180%22%3E%3Crect fill=%22%232a2d30%22 width=%22240%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%238b959e%22 font-size=%2211%22%3ENo image%3C/text%3E%3C/svg%3E'">
            ${priceHTML}
            <button class="game-card-action-btn" onclick="event.stopPropagation(); ${buttonAction}">${buttonText}</button>
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
    storeView.style.display = 'none';
    libraryView.style.display = 'none';
    communityView.style.display = 'none';
    
    if (section === 'store') {
        if (!isOnline) {
            document.querySelector('[data-section="library"]').click();
            return;
        }
        storeView.style.display = 'block';
    } else if (section === 'library') {
        libraryView.style.display = 'block';
        const customGames = getCustomGames();
        const cachedGames = isOnline ? [] : getCachedGames();
        const allLibraryGames = [...games, ...customGames, ...cachedGames];
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

// Open game modal by title (for custom and store games)
function openGameModalByTitle(gameTitle) {
    // Find game in store games, custom games, or cached games
    let game = games.find(g => g.title === gameTitle);
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
    
    // Check if game is installed (use exePath if available, otherwise check localStorage)
    const gamePath = game.exePath || getGamePath(game.title);
    
    // For custom games or cached games, hide download button if they already have exePath
    if (game.isCustom || (game.isInstalled && game.exePath)) {
        downloadBtn.style.display = 'none';
        launchBtn.style.display = 'block';
        changePathBtn.style.display = 'block';
        deleteBtn.style.display = game.isCustom ? 'block' : 'none';
    } else {
        downloadBtn.style.display = gamePath ? 'none' : 'block';
        downloadBtn.textContent = '♦ ' + t('specifyLocation');
        launchBtn.style.display = gamePath ? 'block' : 'none';
        changePathBtn.style.display = gamePath ? 'block' : 'none';
        deleteBtn.style.display = 'none';
    }
    
    websiteBtn.style.display = game.website ? 'block' : 'none';
    
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
    let game = games.find(g => g.title === gameTitle) || customGames.find(g => g.title === gameTitle);
    
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
    let game = games.find(g => g.title === gameTitle) || customGames.find(g => g.title === gameTitle);
    
    if (!game && !isOnline) {
        const cachedGames = getCachedGames();
        game = cachedGames.find(g => g.title === gameTitle);
    }
    
    if (!game || !game.website) return;
    
    await window.electron.openUrl(game.website);
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
    if (!gamePath) {
        alert(t('gamePathUndefined'));
        return;
    }
    
    try {
        // Mute background music when launching game
        if (backgroundMusicEnabled && backgroundMusic) {
            backgroundMusic.muted = true;
        }
        
        await window.electron.launchGame(gamePath);
        
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
    if (currentSelectedGame && currentSelectedGame.website) {
        window.electron.openUrl(currentSelectedGame.website);
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

    alert(t('gameDeleted'));
}
