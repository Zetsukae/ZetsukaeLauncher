# 🧪 Guide de Test - Système ZetID

## Données de test prédéfinies

Pour tester rapidement le système ZetID sans créer un compte, exécutez ceci dans la console (DevTools):

```javascript
// Créer un compte de test
const testUser = {
  username: "testeur",
  email: "test@example.com",
  password: "test123",
  zetId: "ZET-TEST01",
  githubToken: null,
  createdAt: new Date().toISOString()
};

localStorage.setItem('zetid_user_data', JSON.stringify(testUser));
localStorage.setItem('zetid_session_token', 'session_' + Date.now() + '_test');

// Rafraîchir la page
location.reload();
```

## Scénarios de test

### Test 1: Création de compte
1. Lancez l'app
2. Cliquez "S'inscrire"
3. Entrez:
   - Username: `mon_username`
   - Email: `mon@email.com`
   - Mot de passe: `monpass123`
   - Confirmation: `monpass123`
4. Cliquez "S'inscrire"
5. Vérifiez que vous êtes connecté automatiquement

**Vérification:**
```javascript
// Dans la console
JSON.parse(localStorage.getItem('zetid_user_data'))
// Doit afficher l'utilisateur créé
```

### Test 2: Connexion
1. Ouvrez DevTools (Ctrl+Shift+I)
2. Console → Exécutez le script de test ci-dessus
3. Rafraîchissez (F5)
4. Vérifiez que vous êtes automatiquement connecté
   - Le screen d'auth doit disparaître
   - "Mon Compte" doit afficher vos infos

### Test 3: Paramètres → Mon Compte
1. Cliquez ☰ (hamburger)
2. Cliquez "Paramètres"
3. Allez à "Mon Compte"
4. Vérifiez:
   - ✓ Username affiché
   - ✓ Email affiché
   - ✓ ZetID affiché (ZET-XXXXXXXX)
   - ✓ Boutons "Synchroniser" et "Déconnexion" visibles

### Test 4: Déconnexion
1. Allez Paramètres → Mon Compte
2. Cliquez "Déconnexion"
3. Confirmez
4. Vérifiez:
   - ✓ Section affiche "Aucun compte connecté"
   - ✓ localStorage['zetid_session_token'] est supprimé

```javascript
// Vérifier que la session est bien supprimée
localStorage.getItem('zetid_session_token') // Result: null
```

### Test 5: Continuer sans compte
1. Lancez l'app (sans session)
2. Cliquez "Continuer sans compte"
3. Vérifiez:
   - ✓ L'écran d'auth disparaît
   - ✓ Le launcher se charge normalement
   - ✓ currentUser reste `null`

```javascript
// Dans la console
currentUser // Result: null
```

### Test 6: Persistance de session
1. Créez un compte ou connectez-vous
2. Fermez l'app (Alt+F4)
3. Rouvrez l'app
4. Vérifiez que vous êtes automatiquement connecté (pas besoin de relancer le login)

```javascript
// Au démarrage, checkAuthStatus() doit restaurer la session
sessionToken // Doit contenir la session précédente
```

### Test 7: Synchronisation (placeholder)
1. Connectez-vous avec un compte
2. Allez Paramètres → Mon Compte
3. Cliquez "Synchroniser les données"
4. Actuellement: affiche "Données synchronisées avec succès!"
5. À l'avenir: sincronisera avec GitHub Gist

```javascript
// Les données à synchro
{
  games: localStorage.getItem('zetsukae_launcher_games'),
  customGames: localStorage.getItem('zetsukae_launcher_custom_games'),
  settings: localStorage.getItem('zetsukae_launcher_settings'),
  syncedAt: new Date().toISOString()
}
```

### Test 8: Validation des erreurs
1. Écran register
2. Testez chaque validation:
   - Email vide → "Veuillez remplir tous les champs"
   - Email invalide → "Email invalide"
   - Username < 3 chars → "au moins 3 caractères"
   - Mot de passe < 6 chars → "au moins 6 caractères"
   - Mots de passe différents → "ne correspondent pas"
   - Email/username existe → "est déjà utilisé"

## Commandes console utiles

### Afficher l'utilisateur courant
```javascript
console.log(currentUser);
```

### Afficher le token de session
```javascript
console.log(sessionToken);
console.log(localStorage.getItem('zetid_session_token'));
```

### Afficher toutes les données ZetID
```javascript
console.log({
  user: JSON.parse(localStorage.getItem('zetid_user_data')),
  session: localStorage.getItem('zetid_session_token'),
  currentUser: currentUser,
  sessionToken: sessionToken
});
```

### Réinitialiser tout (reset complet)
```javascript
localStorage.removeItem('zetid_user_data');
localStorage.removeItem('zetid_session_token');
currentUser = null;
sessionToken = null;
location.reload();
```

### Créer plusieurs comptes de test
```javascript
// Compte 1
localStorage.setItem('zetid_user_data', JSON.stringify({
  username: "alice",
  email: "alice@test.com",
  password: "alice123",
  zetId: "ZET-ALICE1",
  githubToken: null,
  createdAt: new Date().toISOString()
}));

// Compte 2 (décommenter quand on supporte plusieurs comptes)
// localStorage.setItem('zetid_user_data_2', JSON.stringify({...}));
```

## Performance & Storage

### Vérifier l'usage localStorage
```javascript
// Afficher taille estimée
let total = 0;
for (let key in localStorage) {
  total += localStorage[key].length;
}
console.log('localStorage usage:', (total / 1024).toFixed(2) + ' KB');
```

### Limites actuelles
- **localStorage**: ~5-10MB (varie selon navigateur/Electron)
- **Session token**: ~50 bytes
- **User data**: ~200-500 bytes
- **Games cache**: 1-5MB (dépend du nombre de jeux)

## Bugs connus & TODOs

### Phase 1 (Actuelle)
- Mot de passe pas chiffré (utiliser bcrypt en production)
- Sync cloud pas implémentée
- No 2FA support
- No password recovery

### Phase 2 (À faire)
- [ ] Intégration GitHub Gist réelle
- [ ] Chiffrement AES-256
- [ ] Backup/Restore automatique
- [ ] Profils multiples

### Phase 3 (Production)
- [ ] Backend Node.js sécurisé
- [ ] OAuth GitHub/Google/Apple  
- [ ] JWT tokens
- [ ] Rate limiting
- [ ] Audit logs

## Architecture de test locale

```
LocalStorage (navigateur)
├─ zetid_user_data (1 user actuellement)
│  └─ {username, email, password, zetId, githubToken, createdAt}
├─ zetid_session_token (session active)
│  └─ session_1234567890_xxxxx
├─ zetsukae_launcher_settings
├─ zetsukae_launcher_games
└─ zetsukae_launcher_custom_games
```

En production (future):

```
GitHub Gist (privé)
├─ Gist ID: user.gistId
└─ Files:
   ├─ launcher-profile.json (chiffré)
   ├─ game-library.json (chiffré)
   └─ sync-metadata.json

Backend Database
├─ Users table
├─ Sessions table
└─ Audit logs
```

## Checklist avant livraison

- [ ] Tous les tests passent
- [ ] Pas de console errors
- [ ] Session persiste après fermeture de l'app
- [ ] Déconnexion efface bien la session
- [ ] Validation des formulaires fonctionne
- [ ] UI responsive (test sur différentes résolutions)
- [ ] Performance localStorage OK
- [ ] Documentation à jour

---

**Dernière mise à jour**: 19 mars 2026
