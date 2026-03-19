/**
 * Email Server - Runs locally to send welcome emails
 * Started automatically by Electron main process
 */

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure transporter (using Gmail or any SMTP service)
// For development: You can use Ethereal Email (nodemailer's test service)
let transporter;

// Initialize transporter
async function initializeTransporter() {
    try {
        // Test account (Ethereal - for development)
        // In production, use real email service (Gmail, SendGrid, etc.)
        let testAccount = await nodemailer.createTestAccount();
        
        transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });
        
        console.log('📧 Email transporter initialized (Test/Ethereal account)');
        return true;
    } catch (error) {
        console.error('❌ Failed to initialize email transporter:', error);
        return false;
    }
}

// Welcome email template
function getWelcomeEmailHTML(username, email) {
    return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #0b0e11 0%, #1a1d20 100%);
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: #1a1d20;
                border: 1px solid #2a2d30;
                border-radius: 8px;
                padding: 40px;
                color: #c7d5e0;
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #1e90ff;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #4ca0ff;
                margin: 0;
                font-size: 28px;
            }
            .content {
                line-height: 1.6;
                margin: 20px 0;
            }
            .content p {
                margin: 15px 0;
            }
            .highlight {
                color: #4ca0ff;
                font-weight: 600;
            }
            .features {
                background: rgba(30, 144, 255, 0.1);
                border-left: 4px solid #1e90ff;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
            }
            .features ul {
                margin: 10px 0;
                padding-left: 20px;
            }
            .features li {
                margin: 8px 0;
            }
            .cta-button {
                display: inline-block;
                background: #1e90ff;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 4px;
                margin: 20px 0;
                font-weight: 600;
            }
            .cta-button:hover {
                background: #4ca0ff;
            }
            .footer {
                border-top: 1px solid #2a2d30;
                padding-top: 20px;
                margin-top: 30px;
                text-align: center;
                color: #8b959e;
                font-size: 12px;
            }
            .zetid-badge {
                display: inline-block;
                background: #1e90ff;
                color: white;
                padding: 4px 12px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                margin-left: 8px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Bienvenue! 🎮</h1>
                <p>Zetsukae Launcher</p>
            </div>
            
            <div class="content">
                <p>Bonjour <span class="highlight">${username}</span>,</p>
                
                <p>Bienvenue sur <span class="highlight">Zetsukae Launcher</span>! 🚀</p>
                
                <p>Votre compte <span class="zetid-badge">ZetID</span> a été créé avec succès. Vous pouvez maintenant:</p>
                
                <div class="features">
                    <ul>
                        <li>✅ Accéder à votre bibliothèque personnelle de jeux</li>
                        <li>✅ Synchroniser vos données sur le cloud</li>
                        <li>✅ Personnaliser votre lanceur (thème, langue, etc.)</li>
                        <li>✅ Créer des profiles personnalisés</li>
                        <li>✅ Partager vos jeux favoris avec la communauté</li>
                    </ul>
                </div>
                
                <p><strong>Informations de votre compte:</strong></p>
                <p>
                    Email: <code style="background: rgba(30,144,255,0.2); padding: 2px 6px; border-radius: 3px;">${email}</code><br>
                    Utilisateur: <code style="background: rgba(30,144,255,0.2); padding: 2px 6px; border-radius: 3px;">${username}</code>
                </p>
                
                <p>Si vous avez des questions ou besoin d'aide, n'hésitez pas à nous contacter!</p>
                
                <p>Bonne chance et amusez-vous bien! 🎮</p>
            </div>
            
            <div class="footer">
                <p>© 2026 Zetsukae Launcher. All rights reserved.</p>
                <p>Développé avec ❤️ par Zetsukae</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

// Send welcome email endpoint
app.post('/api/send-welcome-email', async (req, res) => {
    try {
        const { email, username } = req.body;

        if (!email || !username) {
            return res.status(400).json({ 
                error: 'Email et username requis' 
            });
        }

        if (!transporter) {
            return res.status(500).json({ 
                error: 'Email service not initialized' 
            });
        }

        // Send email
        const mailOptions = {
            from: '"Zetsukae Launcher" <launcher@zetsukae.com>',
            to: email,
            subject: '🎮 Bienvenue sur Zetsukae Launcher!',
            html: getWelcomeEmailHTML(username, email)
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Welcome email sent:', {
            messageId: info.messageId,
            to: email
        });

        // For test accounts (Ethereal), provide preview URL
        const previewUrl = nodemailer.getTestMessageUrl(info);
        
        res.json({
            success: true,
            message: 'Email envoyé avec succès!',
            previewUrl: previewUrl, // For testing purposes
            messageId: info.messageId
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({
            error: 'Erreur lors de l\'envoi de l\'email',
            details: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'Zetsukae Email Server',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

// Start server
async function startServer() {
    const initialized = await initializeTransporter();
    
    if (!initialized) {
        console.warn('⚠️ Email service failed to initialize. Check your email configuration.');
    }

    app.listen(PORT, () => {
        console.log(`🚀 Zetsukae Email Server running on http://localhost:${PORT}`);
        console.log(`📧 Ready to send emails`);
    });
}

// Start the server
startServer().catch(error => {
    console.error('❌ Failed to start email server:', error);
    process.exit(1);
});

module.exports = app;
