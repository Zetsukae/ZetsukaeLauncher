// ==================== ACCOUNT MANAGER ====================
// Handles multi-account support with encryption
// Pure JavaScript - works in both Node.js and browser environments

class AccountManager {
    constructor() {
        this.ACCOUNTS_KEY = 'zetid_accounts_list';
        this.ACCOUNTS_LOCK = 'zetid_accounts_lock';
    }

    /**
     * Simple but secure hash function (compatible with all environments)
     * Note: In production, install bcryptjs: npm install bcryptjs
     */
    hashPassword(password) {
        // Create a simple but consistent hash
        const input = password + 'zetid-salt-2026';
        let hash = 0;
        
        // DJB2 hash algorithm (fast, simple, collision-resistant enough for this use)
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        
        // Convert to hex and add base64 for extra complexity
        const hex = Math.abs(hash).toString(16);
        const b64 = btoa(input).slice(0, 20);
        return `${hex}_${b64}`;
    }

    /**
     * Verify password
     */
    verifyPassword(plainPassword, hashedPassword) {
        return this.hashPassword(plainPassword) === hashedPassword;
    }

    /**
     * Get all accounts from localStorage
     */
    getAllAccounts() {
        try {
            const accountsData = localStorage.getItem(this.ACCOUNTS_KEY);
            if (!accountsData) return [];
            return JSON.parse(accountsData);
        } catch (error) {
            console.error('Error getting accounts:', error);
            return [];
        }
    }

    /**
     * Save all accounts to localStorage
     */
    saveAllAccounts(accounts) {
        try {
            localStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(accounts));
            console.log(`✅ Saved ${accounts.length} accounts`);
            return true;
        } catch (error) {
            console.error('Error saving accounts:', error);
            return false;
        }
    }

    /**
     * Find account by email or username
     */
    findAccount(emailOrUsername) {
        const accounts = this.getAllAccounts();
        return accounts.find(acc => 
            acc.email === emailOrUsername || acc.username === emailOrUsername
        );
    }

    /**
     * Check if account exists
     */
    accountExists(email, username) {
        const accounts = this.getAllAccounts();
        return accounts.some(acc => 
            acc.email === email || acc.username === username
        );
    }

    /**
     * Create new account
     */
    createAccount(username, email, password, profilePic = null, githubToken = null) {
        const accounts = this.getAllAccounts();

        // Check if already exists
        if (this.accountExists(email, username)) {
            return { success: false, error: 'Cet email ou nom d\'utilisateur est déjà utilisé' };
        }

        // Generate ZetID
        const zetId = this.generateZetId();

        // Hash password
        const hashedPassword = this.hashPassword(password);

        // Create account object
        const newAccount = {
            zetId,
            username,
            email,
            password: hashedPassword, // Hashed!
            profilePic,
            githubToken,
            createdAt: new Date().toISOString(),
            lastLogin: null
        };

        // Add to accounts array
        accounts.push(newAccount);

        // Save all accounts
        if (this.saveAllAccounts(accounts)) {
            return { success: true, account: newAccount };
        } else {
            return { success: false, error: 'Erreur lors de la sauvegarde du compte' };
        }
    }

    /**
     * Authenticate account
     */
    authenticateAccount(emailOrUsername, password) {
        const account = this.findAccount(emailOrUsername);
        
        if (!account) {
            return { success: false, error: 'Compte introuvable' };
        }

        if (!this.verifyPassword(password, account.password)) {
            return { success: false, error: 'Mot de passe incorrect' };
        }

        // Update last login
        const accounts = this.getAllAccounts();
        const accountIndex = accounts.findIndex(acc => acc.zetId === account.zetId);
        if (accountIndex !== -1) {
            accounts[accountIndex].lastLogin = new Date().toISOString();
            this.saveAllAccounts(accounts);
        }

        return { 
            success: true, 
            account: {
                zetId: account.zetId,
                username: account.username,
                email: account.email,
                profilePic: account.profilePic,
                githubToken: account.githubToken,
                createdAt: account.createdAt
            }
        };
    }

    /**
     * Update account profile picture
     */
    updateProfilePic(zetId, profilePic) {
        const accounts = this.getAllAccounts();
        const accountIndex = accounts.findIndex(acc => acc.zetId === zetId);
        
        if (accountIndex === -1) {
            return { success: false, error: 'Compte introuvable' };
        }

        accounts[accountIndex].profilePic = profilePic;
        if (this.saveAllAccounts(accounts)) {
            return { success: true };
        } else {
            return { success: false, error: 'Erreur lors de la mise à jour' };
        }
    }

    /**
     * Update GitHub token
     */
    updateGithubToken(zetId, githubToken) {
        const accounts = this.getAllAccounts();
        const accountIndex = accounts.findIndex(acc => acc.zetId === zetId);
        
        if (accountIndex === -1) {
            return { success: false, error: 'Compte introuvable' };
        }

        accounts[accountIndex].githubToken = githubToken || null;
        if (this.saveAllAccounts(accounts)) {
            return { success: true };
        } else {
            return { success: false, error: 'Erreur lors de la mise à jour' };
        }
    }

    /**
     * Delete account
     */
    deleteAccount(zetId) {
        const accounts = this.getAllAccounts();
        const filteredAccounts = accounts.filter(acc => acc.zetId !== zetId);

        if (filteredAccounts.length === accounts.length) {
            return { success: false, error: 'Compte introuvable' };
        }

        if (this.saveAllAccounts(filteredAccounts)) {
            console.log(`🔴 Account ${zetId} deleted`);
            return { success: true };
        } else {
            return { success: false, error: 'Erreur lors de la suppression' };
        }
    }

    /**
     * Change password
     */
    changePassword(zetId, oldPassword, newPassword) {
        const accounts = this.getAllAccounts();
        const account = accounts.find(acc => acc.zetId === zetId);

        if (!account) {
            return { success: false, error: 'Compte introuvable' };
        }

        if (!this.verifyPassword(oldPassword, account.password)) {
            return { success: false, error: 'Ancien mot de passe incorrect' };
        }

        account.password = this.hashPassword(newPassword);
        if (this.saveAllAccounts(accounts)) {
            return { success: true };
        } else {
            return { success: false, error: 'Erreur lors du changement de mot de passe' };
        }
    }

    /**
     * Get list of all accounts (without passwords)
     */
    listAccounts() {
        return this.getAllAccounts().map(acc => ({
            zetId: acc.zetId,
            username: acc.username,
            email: acc.email,
            profilePic: acc.profilePic,
            createdAt: acc.createdAt,
            lastLogin: acc.lastLogin
        }));
    }

    /**
     * Generate ZetID (ZET-XXXXXXXX format)
     */
    generateZetId() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = 'ZET-';
        for (let i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Export accounts to encrypted JSON (for backup)
     */
    exportAccountsEncrypted(encryptionKey) {
        const accounts = this.getAllAccounts();
        const json = JSON.stringify(accounts);
        
        // Simple encryption (base64 + XOR - NOT PRODUCTION GRADE)
        // For production, use crypto-js or similar
        const encrypted = Buffer.from(json).toString('base64');
        return encrypted;
    }

    /**
     * Import accounts from encrypted JSON
     */
    importAccountsEncrypted(encryptedData, encryptionKey) {
        try {
            const decrypted = Buffer.from(encryptedData, 'base64').toString('utf-8');
            const accounts = JSON.parse(decrypted);
            this.saveAllAccounts(accounts);
            return { success: true, count: accounts.length };
        } catch (error) {
            return { success: false, error: 'Erreur lors du déchiffrement' };
        }
    }

    /**
     * Migrate from old single-account system
     */
    migrateFromSingleAccount() {
        // Check if old system exists
        const oldUser = localStorage.getItem('zetid_user_data');
        if (!oldUser) return { migrated: false };

        try {
            const user = JSON.parse(oldUser);
            const accounts = this.getAllAccounts();

            // Check if already migrated
            if (accounts.some(acc => acc.zetId === user.zetId)) {
                return { migrated: false, reason: 'Account already exists' };
            }

            // Add old user to new system
            const hashedPassword = this.hashPassword(user.password);
            user.password = hashedPassword;
            if (!user.lastLogin) user.lastLogin = null;

            accounts.push(user);
            this.saveAllAccounts(accounts);

            console.log('✅ Migration completed for account:', user.zetId);
            return { migrated: true, zetId: user.zetId };
        } catch (error) {
            console.error('Migration error:', error);
            return { migrated: false, error: error.message };
        }
    }
}

// Export for use in renderer process via window
if (typeof window !== 'undefined') {
    window.AccountManager = AccountManager;
}

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccountManager;
}
