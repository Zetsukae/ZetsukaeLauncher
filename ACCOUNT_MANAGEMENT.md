# Gestion du Compte - Suppression & Renvoi Email

## Nouvelles Fonctionnalités

Deux nouvelles options disponibles dans **Paramètres → Mon Compte**:

### 1. Renvoyer l'Email
**Bouton**: "Renvoyer l'email"

**Utilité**: 
- Vous n'avez pas reçu l'email de bienvenue?
- Vous avez supprimé l'email par accident?
- Vous voulez vérifier que l'email fonctionne?

**Workflow**:
```
1. Cliquer "Renvoyer l'email"
   ↓
2. Confirmation: "Êtes-vous sûr?"
   ↓
3. Email envoyé immédiatement
   ↓
4. Bouton affiche "Envoi en cours..."
   ↓
5. Confirmation: "Email renvoyé avec succès!"
```

**Détails**:
- Non-bloquant (ne ralentit pas l'app)
- Le même email de bienvenue est renvoyé
- Peut être utilisé autant de fois que vous le voulez
- Fonctionne même si le serveur email initial a échoué

---

### 2. Supprimer le Compte
**Bouton**: "Supprimer le compte"

**ATTENTION**: Cette action est **DÉFINITIVE ET IRRÉVERSIBLE**

**Workflow**:
```
1. Cliquer "Supprimer le compte"
   ↓
2. Première confirmation: "Cette action est définitive!"
   ↓
3. Deuxième confirmation: "DERNIÈRE CONFIRMATION"
   ↓
4. Compte complètement supprimé
   ↓
5. Retour à l'écran de connexion
```

**Ce qui est supprimé**:
- Compte ZetID
- Photo de profil
- Email enregistré
- Token GitHub (s'il y en avait un)
- Historique de login
- Toutes les données du compte

**Ce qui N'EST PAS supprimé**:
- Jeux téléchargés sur l'ordinateur
- Fichiers de configuration locaux
- Cache des jeux

**À faire après suppression**:
- Vous pouvez créer un nouvel compte avec le même email
- Ou un compte complètement différent
- Toute trace de l'ancien compte sera effacée

---

## Implémentation Technique

### Fichiers modifiés

```
src/index.html
├─ Ajouter boutons "Renvoyer l'email" et "Supprimer le compte"

src/renderer.js
├─ async function handleResendEmail()
├─ function handleDeleteAccount()
├─ Event listeners pour les deux boutons

src/styles.css
├─ .btn-secondary (style pour "Renvoyer l'email")
└─ .btn-delete-account (style rouge pour "Supprimer le compte")
```

### Functions JavaScript

#### `handleResendEmail()`
```javascript
async function handleResendEmail() {
    // Vérifie que l'utilisateur est connecté
    // Demande confirmation
    // Affiche état "Envoi en cours..."
    // Appelle sendWelcomeEmail()
    // Affiche succès
}
```

**Exemple d'usage**:
```javascript
// L'utilisateur clique sur "Renvoyer l'email"
// La fonction:
// 1. Confirme: "Êtes-vous sûr?"
// 2. Change le texte du bouton: "📧 Envoi en cours..."
// 3. Désactive le bouton (disabled = true)
// 4. Appelle: sendWelcomeEmail(currentUser.email, currentUser.username)
// 5. Réinitialise le bouton
// 6. Affiche: "✅ Email renvoyé avec succès!"
```

#### `handleDeleteAccount()`
```javascript
function handleDeleteAccount() {
    // Double confirmation (évite accidents)
    // Première: "⚠️ Cette action est définitive!"
    // Deuxième: "🔴 DERNIÈRE CONFIRMATION"
    // Suprime localStorage
    // Efface session
    // Retourne à l'écran login
}
```

**Exemple d'usage**:
```javascript
// L'utilisateur clique sur "Supprimer le compte"
// Deux confirmations s'affichent
// Si oui aux deux:
// 1. localStorage.removeItem(ZETID_STORAGE_KEY)
// 2. localStorage.removeItem(ZETID_SESSION_KEY)
// 3. currentUser = null
// 4. authContainer.style.display = 'flex'
// 5. Utilisateur voit écran de connexion
```

---

## Design & UX

### Bouton "Renvoyer l'email"
- **Couleur**: Bleu clair (secondaire)
- **Texte**: "Renvoyer l'email"
- **Hover**: Fond plus clair
- **État désactivé**: Opacité réduite pendant envoi

### Bouton "Supprimer le compte"
- **Couleur**: Rouge (danger)
- **Texte**: "Supprimer le compte"
- **Hover**: Fond rouge plus clair
- **Position**: En bas (moins accidentellement cliquable)

### Messages de Confirmation

**Renvoi d'email**:
```
Êtes-vous sûr de vouloir renvoyer l'email de bienvenue à user@example.com?
[OK] [ANNULER]
```

**Suppression du compte** (Confirmation 1):
```
Cette action est définitive!

Vous êtes sur le point de supprimer votre compte ZetID (ZET-ABC123).

Êtes-vous absolument certain?
[OK] [ANNULER]
```

**Suppression du compte** (Confirmation 2):
```
DERNIÈRE CONFIRMATION

Tous vos données seront supprimées:
- Compte ZetID
- Profil et photo
- Historique de jeux

Tapez OUI pour confirmer la suppression:
[OK] [ANNULER]
```

---

## Sécurité

### Protection contre les suppression accidentelles
- Première confirmation: "Êtes-vous sûr?"
- Deuxième confirmation: "Tapez OUI pour confirmer"
- Message explicite des données supprimées

### Protection des données
- Suppression définitive (pas de backup caché)
- Pas de período de récupération
- Pas d'email de confirmation (n'interfère pas avec email service)

### Non-blocking
- Chaque action est asynchrone
- Renvoi d'email n'affecte pas performance
- Même si email échoue, bouton fonctionne

---

## Cas d'Usage Courants

### "Je n'ai pas reçu l'email"
```
1. Allez à Paramètres → Mon Compte
2. Cliquez "Renvoyer l'email"
3. Confirmez
4. L'email est renvoyé
5. Vérifiez votre boîte de réception (et spam)
```

### "Je veux supprimer mon compte"
```
1. Allez à Paramètres → Mon Compte
2. Cliquez "Supprimer le compte"
3. Confirmez deux fois
4. Créez un nouveau compte si vous le souhaitez
```

### "Je veux changer d'email"
```
1. Supprimez le compte actuel
2. Créez un nouveau compte avec le nouvel email
3. Nouvel email de bienvenue sera envoyé
```

---

## Troubleshooting

### "Le bouton 'Renvoyer l'email' ne fonctionne pas"
- Vérifiez que vous êtes connecté
- Vérifiez la console pour les erreurs

### "Je ne reçois jamais l'email"
- Vérifiez votre dossier SPAM
- Vérifiez l'adresse email enregistrée
- Utilisez "Renvoyer l'email" pour essayer à nouveau

### "Je veux récupérer mon compte supprimé"
- **Impossible** - La suppression est définitive
- Créez un nouveau compte avec le même email

---

## Statistiques

| Action | Temps | Impact |
|--------|-------|--------|
| Renvoyer email | ~2-3 secondes | Très faible |
| Supprimer compte | ~100ms | Nul (local only) |
| Double confirmation | Instant | UX |

---

## Roadmap Futur

### Complété
- Renvoyer l'email
- Supprimer le compte
- Double confirmation
- Support complet

### À considérer
- Période de 30 jours avant suppression
- Email de confirmation avant suppression
- Backup automatique avant suppression
- Récupération d'account (support uniquement)

---

**Dernière mise à jour**: 19 mars 2026  
**Version**: 1.2  
**Développeur**: Zetsukae
