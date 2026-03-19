# Zetsukae Launcher

Un launcher d'applications moderne construit avec Electron et JavaScript.

## Features

- **Intégration GitHub** : Chargez les apps directement depuis les repos GitHub
- **Format global.xml** : Support du format personnalisé `[key]=value`
- **Multilingue** : Support des descriptions en français et anglais
- **Couleurs personnalisées** : Chaque app peut avoir sa propre couleur d'arrière-plan
- **Recherche** : Recherchez les apps par nom ou description
- **Détails** : Affichage des images et descriptions complètes
- **Multi-plateforme** : Téléchargement spécifique à votre OS (Windows, Linux, Mac)
- **Responsive** : Interface adaptée à différentes tailles d'écran

## Prérequis

- Node.js (v14 ou plus)
- npm

## Installation

1. Clonez le projet ou ouvrez-le dans VS Code
2. Installez les dépendances :

```bash
npm install
```

## Utilisation

### Lancer l'application

```bash
npm start
```

### Fonctionnalités principales

1. **Charger les apps** : Entrez l'URL d'un repo GitHub pour charger les apps
2. **Spécifier l'emplacement** : Sélectionnez le chemin où l'app est installée
   - Les chemins sont sauvegardés en cache (localStorage)
   - Les apps marquées comme installées affichent "✓ Installée"
3. **Lancer l'app** : Une fois le chemin spécifié, vous pouvez lancer l'app
4. **Visiter le site web** : Cliquez sur le bouton "Site web" pour visiter le site officiel

### Format des données (global.xml)

Votre repo GitHub doit contenir un fichier `launcher/global.xml` avec la structure suivante :

```
[title]=Streamix
[version]=1.0.0
[description-eng]=Streamix is an Open-Source app to watch your favorites Series/films/Animes!
[description-fr]=Streamix est une app Open-Source pour regarder vos Séries/Films/Animés favoris!
[website]=https://streamix.buzz
[icon]=https://i.imgur.com/MUuShDP.png
[bg_colorHEX]=4F4541
[price]=0
[executable]=/path/to/app/executable
```

**Champs disponibles** :
- `title` ou `name` (obligatoire) : Nom de l'application
- `version` : Numéro de version
- `description-eng` : Description en anglais
- `description-fr` : Description en français
- `website` : URL du site web de l'application
- `downloadWIN` : URL de téléchargement pour Windows
- `downloadLIN` : URL de téléchargement pour Linux
- `downloadMAC` : URL de téléchargement pour macOS
- `icon` : URL externe ou chemin relatif de l'icône (dans le dossier launcher)
- `bg_colorHEX` : Couleur d'arrière-plan en hexadécimal (sans #)
- `executable` : Chemin de l'exécutable pour lancer l'app

### Exemple d'utilisation

1. Lancez l'application : `npm start`
2. Cliquez sur une carte pour voir les détails
3. Téléchargez ou lancez l'application

### Structure du repo GitHub

```
repo/
└── launcher/
    ├── global.xml
    ├── assets/
    │   └── icon.png
    ├── apps/
    │   └── global.xml (optionnel - app supplémentaire)
    └── tools/
        └── global.xml (optionnel - outil supplémentaire)
```

## Architecture

```
.
├── main.js              # Processus principal Electron
├── preload.js           # Script de préchargement sécurisé
├── package.json         # Dépendances et scripts
└── src/
    ├── index.html       # Structure HTML
    ├── styles.css       # Styles CSS
    └── renderer.js      # Logique de rendu
```

## Développement

Pour activer les outils de développement, décommentez cette ligne dans `main.js` :

```javascript
mainWindow.webContents.openDevTools();
```

## Build

Pour construire l'application en fichier exécutable :

```bash
npm run build
```

## License

MIT

## Auteur

Zetsukae
