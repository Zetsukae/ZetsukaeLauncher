# ZetID - Démarrage Rapide

## Installation / Configuration

Aucune installation requise! Le système ZetID est **intégré** au launcher.

Au démarrage du launcher, vous verrez l'écran ZetID.

---

## Créer votre compte ZetID

### Étape 1: Allez à "S'inscrire"
```
┌─────────────────────────────────────────┐
│  Zetsukae Launcher                   │
│  Synchronisez vos données avec ZetID    │
│                                         │
│  [ Email ou Nom d'utilisateur ]         │
│  [ Mot de passe          ]              │
│  [ Connexion            ]               │
│                                         │
│  Pas encore de compte? [S'inscrire]     │
│  [ Continuer sans compte ]              │
└─────────────────────────────────────────┘
```

Cliquez "S'inscrire"

### Étape 2: Remplissez le formulaire

```
Nom d'utilisateur*
↓ Min 3 caractères
[ alice_gaming ]

Email*
↓ Format valide
[ alice@email.com ]

Mot de passe*
↓ Min 6 caractères
[ ••••••••• ]

Confirmer le mot de passe*
[ ••••••••• ]

Github Token (optionnel)
↓ Pour sync cloud (laissez vide si vous n'avez pas)
[ ]                                [Créer un token]

[ S'inscrire ]
Vous avez déjà un compte? [Connectez-vous]
```

### Étape 3: Confirmez
Cliquez "S'inscrire" et **vous êtes automatiquement connecté!**

Vous recevrez un **ZetID unique** comme: `ZET-A1B2C3D4`

---

## Se connecter

### Écran principal ZetID
```
[ Connexion ]
[ Se connecter ]
```

### Remplissez:
```
Email ou Nom d'utilisateur
[ alice_gaming ] ou [ alice@email.com ]

Mot de passe
[ ••••••••• ]

[ Connexion ]
```

---

## Gérer votre compte

### Accédez à "Mon Compte"
1. Cliquez **☰** (hamburger) en haut à gauche
2. Cliquez **"Paramètres"**
3. Allez à **"Mon Compte"**

### Vous verrez:
```
┌─────────────────────────────────────┐
│  Mon Compte ZetID                   │
│                                     │
│  Nom d'utilisateur: alice_gaming    │
│  Email: alice@email.com             │
│  ZetID: ZET-A1B2C3D4                │
│                                     │
│  [🔄 Synchroniser les données]      │
│  [Déconnexion]                      │
└─────────────────────────────────────┘
```

---

## 💾 Synchroniser vos données

**Bientôt disponible!** 

Pour le moment, cliquer "Synchroniser les données" affiche un message de succès.

À l'avenir, cela sauvegarderas automatiquement:
- Vos paramètres
- Vos jeux personnalisés
- Vos favoris
- Vos collections

---

## 🚪 Se déconnecter

### Allez à Paramètres → Mon Compte
1. Cliquez le bouton **"Déconnexion"**
2. Confirmez

Vous serez **déconnecté** et redirigé vers l'écran ZetID au prochain démarrage.

---

## Continuer sans compte

Vous ne voulez pas créer de compte?

Cliquez simplement **"Continuer sans compte"** et utilisez le launcher normalement.

**Note**: Vos données resteront **locales** sur cet ordinateur.

---

## ❓ Aide & Troubleshooting

### "Compte introuvable"
→ L'email/username n'existe pas. Vérifiez l'orthographe.

### "Mot de passe incorrect"
→ Vérifiez que vous avez tapé correctement. Les majuscules comptent!

### "Les emails ne correspondent pas"
→ Entrez un format d'email valide (ex: `exemple@domaine.com`)

### "Les mots de passe ne correspondent pas"
→ Tapez le même mot de passe dans les deux champs.

### "Les mots de passe sont trop courts"
→ Le mot de passe doit contenir au moins 6 caractères.

### Je suis connecté mais pas arrivé à synchroniser
→ Accédez à Paramètres → Mon Compte pour ajouter votre GitHub Token.

### Ma session est perdue après redémarrage
→ C'est normal en phase alpha. Reconnectez-vous simplement.

---

## 🔑 Gestion des données sensibles

### Votre mot de passe
- Stocké localement sur cet ordinateur
- Vue en clair (Phase 1 - dev only)
- 🔒 Chiffré en production

### Votre ZetID
- Identifiant unique généré automatiquement
- Format: `ZET-XXXXXXXX`
- Perdez jamais cet ID - c'est votre identifiant principal!

### Votre GitHub Token (optionnel)
- Sécurisé dans localStorage chiffré
- Utilisé UNIQUEMENT pour sync cloud
- Ne jamais partagé

---

## 📋 Checklist première utilisation

- [ ] Créer un compte ZetID (ou continuer sans)
- [ ] Vérifier que vous êtes connecté
- [ ] Allez à Paramètres → Mon Compte
- [ ] Notez votre ZetID (ex: ZET-XXXX)
- [ ] Ajouter GitHub Token si vous voulez sync
- [ ] Testez "Synchroniser les données"
- [ ] Déconnectez/reconnectez pour confirmer ça fonctionne

---

## 🎯 Cas d'usage

### Case 1: Utilisateur solo (un ordinateur)
```
1. L'utilisateur crée un compte ZetID
2. Se connecte automatiquement
3. Utilise le launcher normalement
4. Ses données restent synchronisées localement
5. Option: Synchroniser avec GitHub pour backup
```

### Case 2: Multi-ordinateurs (Phase 2)
```
1. Même compte ZetID sur 2 ordinateurs
2. Paramètres/jeux synchronisés automatiquement
3. Modifications sur PC1 → reflétées sur PC2
```

### Case 3: Partage de profils (Phase 3 - future)
```
1. Alice crée un profil "Gaming Setup"
2. Partage le ZetID du profil avec Bob
3. Bob importe le profil
4. Bob a maintenant le même setup que Alice
```

---

## Tips & Tricks

### Astuce 1: Garder votre ZetID en sûr
Copiez-le quelque part - c'est votre identifiant unique!
```
Mon ZetID: ZET-XXXX
```

### Astuce 2: Utiliser un email de secours
Si vous avez peur d'oublier votre mot de passe plus tard:
```
Email: alice+zetid@email.com (variante de votre email)
```

### Astuce 3: Token GitHub (recommandé)
Pour la synchronisation cloud, générez un token:
1. Allez https://github.com/settings/tokens
2. Cliquez "Generate new token"
3. Sélectionnez `gist` comme scope
4. Copier le token
5. Collez-le dans le formulaire ZetID

---

## 🔄 FAQ

**Q: Mes données vont-elles à quelque part?**  
A: Non en Phase 1. Elles restent 100% local. Plus tard si vous activez sync GitHub Gist.

**Q: Je peux avoir plusieurs comptes?**  
A: Pas encore. Phase 2 permettra 2-3 profils.

**Q: Mon mot de passe est sûr?**  
A: Phase 1 (actuelle) = local uniquement. Phase 2 ajoutera chiffrement.

**Q: Je peux importer mes données d'un autre launcher?**  
A: Pas pour le moment. À venir!

**Q: Le launcher marche sans compte?**  
A: Oui! Cliquez "Continuer sans compte" - tout fonctionne normalement.

**Q: J'ai perdu mon mot de passe, comment le récupérer?**  
A: Phase 1 (alpha) = pas de recovery. Phase 2 ajoutera email recovery.

---

## 📞 Support

Pour des problèmes:
1. Vérifiez les solutions ci-dessus (FAQ)
2. Ouvrez DevTools (Ctrl+Shift+I) → Console
3. Exécutez: `console.log(currentUser)` pour voir vos infos

---

**Version**: 1.0 Alpha  
**Dernière mise à jour**: 19 mars 2026

Bienvenue dans ZetID!
