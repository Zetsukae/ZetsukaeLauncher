# Système Multi-Compte ZetID

## Vue d'ensemble

Le nouveau système ZetID supporte **plusieurs comptes** stockés localement avec **cryptage** et une **synchronisation en ligne** optionnelle.

## Changements depuis l'ancienne version

### Avant (Single-Account)
```javascript
{
  email: "user@example.com",
  username: "john",
  password: "...",
  zetId: "ZET-ABC123"
}
```
Un seul compte - créer un 2e compte écrasait le 1er

### Maintenant (Multi-Account)
```javascript
[
  {
    zetId: "ZET-ABC123",
    email: "user@example.com",
    username: "john",
    password: "hashedPassword...",
    profilePic: "...",
    createdAt: "2026-03-19T12:00:00Z"
  },
  {
    zetId: "ZET-DEF456",
    email: "user2@example.com",
    username: "jane",
    password: "hashedPassword...",
    profilePic: "...",
    createdAt: "2026-03-19T13:00:00Z"
  }
]
```
**Plusieurs comptes** - chacun est conservé

## Sécurité

### Hachage des Mots de Passe
- **Avant**: Mots de passe stockés en clair
- **Maintenant**: Hachés avec DJB2 + salt ZetID

```javascript
hashPassword("motdepasse123")
// Résultat: "e4f5d2b_bW90ZGVwYXNz..."
```

### Cryptage au Repos
- Sauvegarde locale chiffrée en Base64
- Pour production: utiliser `crypto-js` (npm install crypto-js)

### Cryptage en Transit
- Synchronisation HTTPS avec GitHub Gist
- Token GitHub stocké en `sessionStorage` (non-persistant)

## Utilisation Multi-Compte

### Créer 2e compte
```
1. Cliquer "S'inscrire"
2. Email/Username différent du 1er
3. Le nouveau compte est créé sans écraser le 1er
4. Connexion automatique au nouveau compte
```

### Basculer entre comptes
```
1. Se déconnecter (à implémenter)
2. Écran de login
3. Saisir email/username du 1er compte
4. Saisir mot de passe
5. Connecté au 1er compte
```

### Voir tous ses comptes
```javascript
const allAccounts = accountManager.listAccounts();
allAccounts.forEach(acc => {
  console.log(`${acc.username} (${acc.email}) - Created ${acc.createdAt}`);
});
```

## Synchronisation en Ligne

### Option 1: Sauvegarde Locale
```javascript
// Sauvegarder tous les comptes localement
const accounts = accountManager.getAllAccounts();
syncService.backupLocally(accounts);
// Sauvegarde créée: 2 accounts
```

### Option 2: GitHub Gist (Recommandé)
#### Prérequis
- Compte GitHub
- Token GitHub avec scope `gist`
- [Créer token](https://github.com/settings/tokens) → gist scope

#### Synchroniser vers GitHub
```javascript
// Configuration
syncService.setGitHubToken('ghp_xxxxxxxxxxxx');

// Synchroniser
const result = await syncService.syncToGitHubGist(
  accounts,
  'ghp_xxxxxxxxxxxx'
);

if (result.success) {
  console.log(`Gist créé: ${result.gistId}`);
}
```

#### Restaurer depuis GitHub
```javascript
const result = await syncService.downloadFromGitHubGist(
  'gist_id_here',
  'ghp_xxxxxxxxxxxx'
);

if (result.success) {
  accountManager.saveAllAccounts(result.accounts);
  console.log(`Restauré ${result.accounts.length} comptes`);
}
```

### Option 3: Export Manuel
```javascript
// Exporter en JSON
const json = syncService.exportAsJSON(accounts);
// Sauvegarder à la main dans un fichier

// Importer depuis JSON
const result = syncService.importFromJSON(jsonString);
if (result.success) {
  accountManager.saveAllAccounts(result.accounts);
}
```

## 🔄 Migration depuis Ancien Système

Le nouveau système détecte automatiquement les anciens comptes et les migre:

```javascript
// À l'initialisation (dans checkAuthStatus)
const migrationResult = accountManager.migrateFromSingleAccount();
if (migrationResult.migrated) {
  console.log('Ancien compte migré:', migrationResult.zetId);
}
```

## 📊 API AccountManager

### Créer un compte
```javascript
const result = accountManager.createAccount(
  'username',
  'email@example.com',
  'password123',
  'https://.../pic.png', // profilePic
  'github_token'          // githubToken (optionnel)
);
if (result.success) console.log(result.account.zetId);
```

### Se connecter
```javascript
const result = accountManager.authenticateAccount('email@example.com', 'password123');
if (result.success) {
  currentUser = result.account;
  // Utilisateur connecté!
}
```

### Lister les comptes
```javascript
const accounts = accountManager.listAccounts();
// [{ zetId, username, email, profilePic, createdAt, lastLogin }]
```

### Changer mot de passe
```javascript
const result = accountManager.changePassword(
  'ZET-ABC123',
  'old_password',
  'new_password'
);
```

### Supprimer un compte
```javascript
const result = accountManager.deleteAccount('ZET-ABC123');
if (result.success) console.log('Compte supprimé');
```

## 🛡️ Statut de Synchronisation

```javascript
const status = syncService.getSyncStatus();
console.log(status);
// {
//   enabled: true,
//   lastSync: Date,
//   gistId: 'abc123...',
//   hasLocalBackup: true
// }
```

## 📋 Comparaison Locale vs Distante

```javascript
const comparison = syncService.compareVersions(
  localAccounts,
  remoteAccounts
);
console.log(comparison);
// {
//   localCount: 2,
//   remoteCount: 3,
//   newRemote: ['ZET-XYZ789'],
//   newLocal: [],
//   conflicts: []
// }
```

## 🔀 Fusionner les comptes

```javascript
const merged = syncService.mergeAccounts(
  localAccounts,
  remoteAccounts
);
// Combine smartly sans dupliquer
```

## ⚠️ Importantes Considérations

### Sécurité
- Ne **jamais** partager votre GitHub token publiquement
- Ne **jamais** stocker le token en localStorage
- Utiliser sessionStorage ou config locale
- Activer 2FA sur votre compte GitHub

### Sauvegarde
- 📌 Faire une sauvegarde locale régulièrement
- 📌 Tester la restauration
- 📌 Garder une copie hors ligne

### Synchronisation
- 🔄 GitHub Gist est **public par défaut** - créer privé
- 🔄 Ne synchroniser que les données nécessaires
- 🔄 Résoudre les conflits manuellement

## 📝 Stockage Local

Les comptes sont stockés dans `localStorage`:

**Clé**: `zetid_accounts_list`
```json
[
  {
    "zetId": "ZET-ABC123",
    "username": "john",
    "email": "john@example.com",
    "password": "hashedPassword...",
    "profilePic": null,
    "githubToken": null,
    "createdAt": "2026-03-19T12:00:00Z",
    "lastLogin": "2026-03-19T14:00:00Z"
  }
]
```

## Prochaines Étapes (Roadmap)

- [ ] UI pour sélectionner un compte au login
- [ ] Déconnexion sans fermer l'app
- [ ] Synchronisation automatique périodique
- [ ] Résolution de conflits automatique
- [ ] Authentification à 2 facteurs (2FA)
- [ ] Récupération de mot de passe par email
- [ ] Vue pour gérer plusieurs comptes
- [ ] Export/Import UI dans les paramètres

## 🐛 Troubleshooting

### "Compte introuvable"
- Vérifiez l'email/username exact
- Vérifiez la casse (maiuscules/minuscules)
- Utilisez "S'inscrire" pour créer un nouveau compte

### "Mot de passe incorrect"
- Vérifiez les accents et caractères spéciaux
- Capitales/minuscules importants
- Réinitialiser le mot de passe (à implémenter)

### Synchronisation GitHub échoue
- Vérifiez le token (commandes: `git config --list`)
- Token expiré? Créer un nouveau
- Scope `gist` activé?
- Connexion Internet?

### Comptes dupliqués
- Vérifiez `localStorage.getItem('zetid_accounts_list')`
- Utiliser `accountManager.deleteAccount()` pour supprimer les doublons

## 📚 Ressources

- [GitHub PAT Tokens](https://github.com/settings/tokens)
- [GitHub Gist API](https://docs.github.com/en/rest/gists)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

---

**Version**: 2.0 (Multi-Account)  
**Date**: 19 mars 2026  
**Statut**: ✅ Stable
