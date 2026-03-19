# 🧪 Test Multi-Compte - Guide Rapide

## ✅ Tests à Effectuer

### Test 1: Créer 2 comptes

**Procédure**:
```
1. Cliquer "S'inscrire"
2. Créer compte 1:
   Email: test1@example.com
   Username: alice
   Password: password123
3. App auto-connecte → Paramètres
4. Se déconnecter (logout)
5. Cliquer "S'inscrire" à nouveau
6. Créer compte 2:
   Email: test2@example.com
   Username: bob
   Password: password456
7. App auto-connecte → Paramètres
```

**Résultat attendu**:
- ✅ Deux comptes créés avec ZetID différents
- ✅ Pas d'écrasement du 1er compte
- ✅ 2ème compte fonctionne normalement

---

### Test 2: Basculer entre comptes

**Procédure**:
```
1. Connecté à bob → Se déconnecter
2. Écran login
3. Saisir: alice ou test1@example.com
4. Password: password123
5. Cliquer "Se connecter"
```

**Résultat attendu**:
- ✅ Connexion réussie à alice
- ✅ Paramètres affichent alice
- ✅ ZetID d'alice (pas bob)

---

### Test 3: Supprimer un compte

**Procédure**:
```
1. Connecté à alice → Paramètres
2. Bouton "Supprimer le compte"
3. Confirmer 2 fois
4. App retour écran login
5. Essayer se reconnecter avec alice
```

**Résultat attendu**:
- ✅ Compte alice supprimé
- ❌ Login alice échoue ("Compte introuvable")
- ✅ Login bob réussit

---

### Test 4: Sauvegarde Locale

**Console**:
```javascript
// Vérifier que les comptes existent
const accounts = accountManager.getAllAccounts();
console.log(`Comptes trouvés: ${accounts.length}`);

// Créer une sauvegarde
syncService.backupLocally(accounts);

// Vérifier la sauvegarde
const backup = syncService.restoreLocally();
console.log(`Sauvegarde restaurée: ${backup.length} comptes`);
```

**Résultat attendu**:
- ✅ getAllAccounts() retourne 1 compte (bob)
- ✅ backupLocally() affiche "Backup created: 1 accounts"
- ✅ restoreLocally() retourne bien le compte

---

### Test 5: Export JSON

**Console**:
```javascript
const accounts = accountManager.getAllAccounts();
const json = syncService.exportAsJSON(accounts);
console.log(json);
```

**Résultat attendu**:
```json
{
  "version": "1.0",
  "timestamp": "2026-03-19T14:30:00Z",
  "accounts": [
    {
      "zetId": "ZET-ABC123",
      "username": "bob",
      "email": "test2@example.com",
      "profilePic": null,
      "createdAt": "2026-03-19T13:00:00Z",
      "lastLogin": "2026-03-19T14:30:00Z"
    }
  ],
  "accountCount": 1
}
```

---

### Test 6: Hachage des Mots de Passe

**Console**:
```javascript
// Hacher un mot de passe
const hash1 = accountManager.hashPassword('password123');
const hash2 = accountManager.hashPassword('password123');
const hash3 = accountManager.hashPassword('password456');

console.log('Hash 1:', hash1);
console.log('Hash 2:', hash2);
console.log('Hash 3:', hash3);

// Vérifier que hash1 === hash2 (déterministe)
console.log('Hash 1 === Hash 2?', hash1 === hash2); // ✅ true
console.log('Hash 1 === Hash 3?', hash1 === hash3); // ❌ false
```

**Résultat attendu**:
- ✅ Même password → même hash (déterministe)
- ✅ Passwords différents → hashes différents
- ✅ Hash commence par `xxxxxxxx_` (hex + base64)

---

### Test 7: Vérifier Stockage localStorage

**Console**:
```javascript
// Afficher toutes les clés ZetID
const accountsJson = localStorage.getItem('zetid_accounts_list');
const accounts = JSON.parse(accountsJson);

accounts.forEach(acc => {
  console.log(`
    ZetID: ${acc.zetId}
    Username: ${acc.username}
    Email: ${acc.email}
    Created: ${acc.createdAt}
    Password (hashed): ${acc.password.slice(0, 20)}...
  `);
});
```

**Résultat attendu**:
```
ZetID: ZET-ABC123
Username: bob
Email: test2@example.com
Created: 2026-03-19T13:00:00Z
Password (hashed): abc123def456ghi789x...
```

---

### Test 8: Vérifier Migration Ancienne Version

**Si vous aviez un compte ancien**:
```javascript
// À l'initialisation, vérifier le message
// Dans la console: "✅ Migrated legacy account: ZET-ABC123"

// Puis vérifier que le compte existe
const accounts = accountManager.getAllAccounts();
const migrated = accounts.find(acc => acc.zetId === 'ZET-ABC123');
console.log('Compte migré?', !!migrated);
```

**Résultat attendu**:
- ✅ Message migration dans console
- ✅ Ancien compte dans la liste
- ✅ Ancien compte peut se connecter

---

## 🔍 Vérifications dans les Paramètres

| Enregistrement | Valeur |
|---|---|
| **Accounts** | Doit afficher compte connecté |
| **ZetID** | Format `ZET-XXXXXX` |
| **Username** | Celui du compte |
| **Email** | Celui du compte |
| **Profile Pic** | Avatar ou défaut 👤 |

---

## 📊 Statut du localStorage

```javascript
// Voir tout ce qui est stocké
Object.keys(localStorage).forEach(key => {
  if (key.includes('zetid') || key.includes('zetid')) {
    const value = localStorage.getItem(key);
    console.log(`${key}:`, value.slice(0, 100) + '...');
  }
});

// Résultat attendu:
// zetid_accounts_list: [{"zetId":"ZET-ABC123",...
// zetid_sync_data: eyJhY2NvdW50cyI6W3...
// zetid_sync_enabled: false
```

---

## 🐛 Déboguer les Problèmes

### Console Logs Importants
```javascript
// Chercher ces messages dans la console
✅ Saved X accounts              // OK
✅ Account created: ZET-ABC123  // OK
✅ Login successful: bob         // OK
✅ Migrated legacy account      // Migration OK
❌ Account not found            // Erreur
❌ Password incorrect           // Erreur
```

### Erreurs Courantes

**Erreur**: "Cet email ou nom d'utilisateur est déjà utilisé"
```javascript
// Vérifier les doublons
const accounts = accountManager.getAllAccounts();
const emails = accounts.map(a => a.email);
console.log('Emails', emails);
// Si doublon, supprimer avec: accountManager.deleteAccount('ZET-ID')
```

**Erreur**: "Compte introuvable"
```javascript
// Vérifier l'email/username exact
const accounts = accountManager.listAccounts();
console.log('Comptes disponibles:', accounts);
```

---

## ✨ Fonctionnalités à Tester Prochainement

- [ ] GitHub Gist Sync
- [ ] Sélection de compte au login
- [ ] Déconnexion propre
- [ ] Changement de mot de passe
- [ ] Reset password par email
- [ ] Fusion de comptes après sync

---

## 📝 Notes

- Vider le cache si problèmes: `localStorage.clear()` (ATTENTION: supprime tout!)
- Ouvrir DevTools: F12 → Console
- Recharger: F5 ou Ctrl+R
- Redémarrer l'app Electron: Fermer et relancer

---

**Dernière mise à jour**: 19 mars 2026  
**Version testée**: 2.0-multi-account
