# Système ZetID - Documentation Complète

## Vue d'ensemble

**ZetID** est un système d'authentification intégré au **Zetsukae Launcher** permettant aux utilisateurs de:
- Créer un compte personnel
- Se connecter avec Email/Username
- Synchroniser leurs données (paramètres, jeux, favoris)
- Gérer plusieurs profils

---

## Architecture

### Composants

```
┌─────────────────────────────────────────┐
│       Zetsukae Launcher (Electron)      │
├─────────────────────────────────────────┤
│  Frontend (HTML/CSS/JS)                 │
│  ├─ Auth Screen (Login/Register)        │
│  ├─ Account Settings UI                 │
│  └─ Data Sync Integration               │
├─────────────────────────────────────────┤
│  Backend Storage                        │
│  ├─ localStorage (Local Data)           │
│  ├─ sessionToken (Session Management)   │
│  └─ [Future] GitHub Gist (Cloud Backup) │
└─────────────────────────────────────────┘
```

### Données Stockées

**Par utilisateur:**
```javascript
{
  username: "string",
  email: "string",
  password: "string (hashed in production)",
  zetId: "ZET-XXXXXXXX (generated)",
  githubToken: "string (optional)",
  createdAt: "ISO timestamp"
}
```

**Données synchronisées:**
- `games` (jeux du magasin + cache)
- `customGames` (jeux personnalisés)
- `settings` (préférences utilisateur)
- `syncedAt` (timestamp dernière synchro)

---

## Utilisation

### 1. Créer un compte

1. Au démarrage du launcher → écran **ZetID**
2. Cliquer "S'inscrire"
3. Remplir:
   - **Nom d'utilisateur** (min 3 caractères)
   - **Email** (format valide)
   - **Mot de passe** (min 6 caractères)
   - **Token GitHub** (optionnel - pour sync cloud)
4. Cliquer "S'inscrire"
5. Connexion automatique une fois le compte créé

### 2. Se connecter

1. **Écran ZetID** → "Connexion"
2. Entrer **Email** ou **Nom d'utilisateur**
3. Entrer **Mot de passe**
4. Cliquer "Connexion"

### 3. Gérer le compte

1. **Paramètres** (☰) → **Mon Compte**
2. Voir:
   - Nom d'utilisateur
   - Email
   - ZetID (identifiant unique)
3. Actions:
   - 🔄 **Synchroniser les données** (avec GitHub Gist)
   - **Déconnexion**

### 4. Continuer sans compte

Cliquer **"Continuer sans compte"** pour utiliser le launcher localement

---

## Sécurité

### Phase actuelle (v1 - Local)
- Stockage localStorage (chiffrement simple)
- Session token (expiré à la fermeture)
- Validation email/username
- Mot de passe stocké en clair (DEV ONLY)

### Phase 2 (Cloud sync - À implémenter)
- Chiffrement AES-256 des données
- OAuth GitHub pour authentification
- Token authentication JWT
- Stockage sécurisé GitHub Gist (privé)

### Phase 3 (Production)
- Backend Node.js sécurisé
- Base de données (MongoDB/PostgreSQL)
- Hachage bcrypt des mots de passe
- 2FA (Two-factor authentication)

---

## Développement

### Constantes clés

```javascript
ZETID_STORAGE_KEY = 'zetid_user_data'      // localStorage key pour données user
ZETID_SESSION_KEY = 'zetid_session_token'  // localStorage key pour session
```

### Fonctions principales

#### Authentification
- `handleLogin()` - Valide credentials, crée session
- `handleRegister()` - Crée nouveau compte ZetID
- `handleLogout()` - Efface session et données
- `checkAuthStatus()` - Restore session au démarrage

#### Gestion compte
- `updateAccountDisplay()` - Refresh UI compte
- `handleDataSync()` - Synchro cloud (WIP)
- `generateZetId()` - Crée identifiant ZET-XXXX

#### UI
- `hideAuthScreen()` - Affiche app principale
- `skipAuthentication()` - Mode local

### DOM Elements

```html
<!-- Auth Screen -->
<div id="authContainer">
  <div id="loginForm">...</div>
  <div id="registerForm">...</div>
</div>

<!-- Settings Section -->
<div data-section="account">
  <div id="accountLoggedOut">...</div>
  <div id="accountLoggedIn">...</div>
</div>
```

### CSS Classes

```css
.auth-container          /* Full-screen auth overlay */
.auth-modal              /* Modal form container */
.auth-input              /* Text input styling */
.btn-auth                /* Authentication button */
.account-section         /* Account panel */
.account-info            /* Account details grid */
```

---

## Roadmap

### Complété (v1.0)
- [x] Écran de login/register
- [x] Création de compte ZetID
- [x] Session management
- [x] Section compte dans paramètres
- [x] UI/UX complet

### 🚧 En cours (v1.5)
- [ ] Synchronisation GitHub Gist
- [ ] Chiffrement données
- [ ] Restore de profil

### 📋 Prévu (v2.0)
- [ ] Backend serveur Node.js
- [ ] OAuth GitHub/Google/Apple
- [ ] Deux profils cloud par défaut
- [ ] Partage de profils entre utilisateurs
- [ ] Statistiques jeux (heures jouées, etc)

---

## Troubleshooting

### "Compte introuvable"
→ L'email/username n'existe pas. Vérifiez l'orthographe ou inscrivez-vous

### "Les mots de passe ne correspondent pas"
→ Confirmez que vous avez tapé le même mot de passe deux fois

### "Erreur lors de la synchronisation"
→ Avez-vous un Personal Access Token GitHub? Régénérez-en un:
https://github.com/settings/tokens

### Session perdue après fermeture
→ Normal en mode développement. En production, la session sera persistante

---

## Fichiers concernés

```
src/
├── index.html          ← Auth UI + Account section
├── renderer.js         ← Auth logic (250+ lignes)
└── styles.css          ← Auth + Account styling

ZETID_DOCUMENTATION.md  ← Ce fichier
```

---

## API Future (à implémenter)

```javascript
// Pseudo-code pour sync GitHub Gist

async function syncToGist(user, data) {
  const gistId = user.gistId; // Créé lors de l'inscription
  
  // Préparer données chiffrées
  const encrypted = AES256.encrypt(data, user.zetId);
  
  // Upload vers GitHub
  return fetch(`https://api.github.com/gists/${gistId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.githubToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      files: {
        'launcher-profile.json': {
          content: encrypted
        }
      }
    })
  });
}

async function restoreFromGist(user) {
  const gistId = user.gistId;
  const response = await fetch(`https://api.github.com/gists/${gistId}`, {
    headers: { 'Authorization': `Bearer ${user.githubToken}` }
  });
  
  const gist = await response.json();
  const encrypted = gist.files['launcher-profile.json'].content;
  
  return AES256.decrypt(encrypted, user.zetId);
}
```

---

## Support & Contribution

Pour des questions ou bugs:
1. Vérifiez console (DevTools - Ctrl+Shift+I)
2. Consultez les logs de démarrage
3. Ouvrez une issue sur GitHub

---

**Version**: 1.0 (Alpha)  
**Dernière mise à jour**: 19 mars 2026  
**Développeur**: Zetsukae
