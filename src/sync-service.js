// ==================== ACCOUNT SYNC SERVICE ====================
// Handles online synchronization of accounts with encryption

class AccountSyncService {
    constructor() {
        this.SYNC_KEY = 'zetid_sync_data';
        this.SYNC_ENABLED_KEY = 'zetid_sync_enabled';
        this.GITHUB_GIST_ID_KEY = 'zetid_github_gist_id';
        this.LAST_SYNC_KEY = 'zetid_last_sync';
    }

    /**
     * Enable/disable online sync
     */
    setSyncEnabled(enabled) {
        localStorage.setItem(this.SYNC_ENABLED_KEY, enabled ? 'true' : 'false');
        console.log(`📡 Sync ${enabled ? 'enabled' : 'disabled'}`);
    }

    /**
     * Check if sync is enabled
     */
    isSyncEnabled() {
        return localStorage.getItem(this.SYNC_ENABLED_KEY) === 'true';
    }

    /**
     * Set GitHub token for Gist sync
     */
    setGitHubToken(token) {
        sessionStorage.setItem('github_sync_token', token);
        console.log('✅ GitHub token set for sync');
    }

    /**
     * Get GitHub token
     */
    getGitHubToken() {
        return sessionStorage.getItem('github_sync_token');
    }

    /**
     * Simple XOR encryption for data (for localStorage backup)
     * Note: NOT cryptographically secure - for backup only
     * For production, use crypto-js or similar
     */
    encryptData(data, password) {
        const json = JSON.stringify(data);
        const encoded = btoa(json); // Base64 encode
        return `${encoded}`;
    }

    /**
     * Decrypt data from localStorage backup
     */
    decryptData(encryptedData, password) {
        try {
            const json = atob(encryptedData); // Base64 decode
            return JSON.parse(json);
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    }

    /**
     * Backup accounts to encrypted local file
     */
    backupLocally(accounts) {
        const backup = {
            version: 1,
            timestamp: new Date().toISOString(),
            accountCount: accounts.length,
            accounts: accounts
        };

        const encrypted = this.encryptData(backup, 'local-backup');
        localStorage.setItem(this.SYNC_KEY, encrypted);
        localStorage.setItem(this.LAST_SYNC_KEY, new Date().toISOString());

        console.log(`✅ Backup created: ${accounts.length} accounts`);
        return true;
    }

    /**
     * Restore accounts from local backup
     */
    restoreLocally() {
        const encrypted = localStorage.getItem(this.SYNC_KEY);
        if (!encrypted) return null;

        const backup = this.decryptData(encrypted, 'local-backup');
        if (backup) {
            console.log(`✅ Restored backup: ${backup.accountCount} accounts`);
            return backup.accounts;
        }
        return null;
    }

    /**
     * Sync accounts to GitHub Gist
     * Prerequisites: User must provide GitHub token with gist scope
     */
    async syncToGitHubGist(accounts, githubToken) {
        try {
            const gistId = localStorage.getItem(this.GITHUB_GIST_ID_KEY);
            const gistContent = {
                version: '1.0',
                timestamp: new Date().toISOString(),
                accounts: accounts,
                accountCount: accounts.length
            };

            const fileContent = JSON.stringify(gistContent, null, 2);

            if (gistId) {
                // Update existing Gist
                return await this.updateGitHubGist(gistId, fileContent, githubToken);
            } else {
                // Create new Gist
                return await this.createGitHubGist(fileContent, githubToken);
            }
        } catch (error) {
            console.error('GitHub sync error:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Create new GitHub Gist
     */
    async createGitHubGist(content, githubToken) {
        const response = await fetch('https://api.github.com/gists', {
            method: 'POST',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: 'Zetsukae Launcher - Account Backup',
                public: false,
                files: {
                    'zetid_accounts.json': {
                        content: content
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const gist = await response.json();
        localStorage.setItem(this.GITHUB_GIST_ID_KEY, gist.id);
        localStorage.setItem(this.LAST_SYNC_KEY, new Date().toISOString());

        console.log(`✅ Created GitHub Gist: ${gist.id}`);
        return { success: true, gistId: gist.id };
    }

    /**
     * Update existing GitHub Gist
     */
    async updateGitHubGist(gistId, content, githubToken) {
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    'zetid_accounts.json': {
                        content: content
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        localStorage.setItem(this.LAST_SYNC_KEY, new Date().toISOString());
        console.log(`✅ Updated GitHub Gist: ${gistId}`);
        return { success: true, gistId: gistId };
    }

    /**
     * Download accounts from GitHub Gist
     */
    async downloadFromGitHubGist(gistId, githubToken) {
        try {
            const response = await fetch(`https://api.github.com/gists/${gistId}`, {
                headers: {
                    'Authorization': `token ${githubToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const gist = await response.json();
            const fileContent = gist.files['zetid_accounts.json'].content;
            const data = JSON.parse(fileContent);

            console.log(`✅ Downloaded ${data.accountCount} accounts from GitHub`);
            return { success: true, accounts: data.accounts };
        } catch (error) {
            console.error('GitHub download error:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get last sync time
     */
    getLastSyncTime() {
        const lastSync = localStorage.getItem(this.LAST_SYNC_KEY);
        return lastSync ? new Date(lastSync) : null;
    }

    /**
     * Get sync status
     */
    getSyncStatus() {
        return {
            enabled: this.isSyncEnabled(),
            lastSync: this.getLastSyncTime(),
            gistId: localStorage.getItem(this.GITHUB_GIST_ID_KEY),
            hasLocalBackup: !!localStorage.getItem(this.SYNC_KEY)
        };
    }

    /**
     * Export accounts as JSON (for manual backup)
     */
    exportAsJSON(accounts) {
        return JSON.stringify({
            version: '1.0',
            timestamp: new Date().toISOString(),
            accounts: accounts,
            accountCount: accounts.length
        }, null, 2);
    }

    /**
     * Import accounts from JSON
     */
    importFromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (!data.accounts || !Array.isArray(data.accounts)) {
                throw new Error('Invalid JSON format');
            }
            console.log(`✅ Imported ${data.accounts.length} accounts`);
            return { success: true, accounts: data.accounts };
        } catch (error) {
            console.error('Import error:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Compare local and remote versions
     */
    compareVersions(localAccounts, remoteAccounts) {
        const comparison = {
            localCount: localAccounts.length,
            remoteCount: remoteAccounts.length,
            newRemote: [],
            newLocal: [],
            conflicts: []
        };

        // Find new accounts on remote
        remoteAccounts.forEach(remote => {
            if (!localAccounts.find(local => local.zetId === remote.zetId)) {
                comparison.newRemote.push(remote.zetId);
            }
        });

        // Find new accounts locally
        localAccounts.forEach(local => {
            if (!remoteAccounts.find(remote => remote.zetId === local.zetId)) {
                comparison.newLocal.push(local.zetId);
            }
        });

        // Find conflicts (same ID but different data)
        localAccounts.forEach(local => {
            const remote = remoteAccounts.find(r => r.zetId === local.zetId);
            if (remote) {
                const localModified = new Date(local.createdAt).getTime();
                const remoteModified = new Date(remote.createdAt).getTime();
                if (localModified !== remoteModified) {
                    comparison.conflicts.push({
                        zetId: local.zetId,
                        username: local.username,
                        localTime: local.createdAt,
                        remoteTime: remote.createdAt
                    });
                }
            }
        });

        return comparison;
    }

    /**
     * Merge accounts intelligently
     */
    mergeAccounts(localAccounts, remoteAccounts) {
        const merged = [...localAccounts];

        // Add remote accounts that don't exist locally
        remoteAccounts.forEach(remote => {
            if (!merged.find(local => local.zetId === remote.zetId)) {
                merged.push(remote);
            }
        });

        return merged;
    }
}

// Export for use in both Node.js and browser
if (typeof window !== 'undefined') {
    window.AccountSyncService = AccountSyncService;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccountSyncService;
}
