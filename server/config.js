import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: parseInt(process.env.PORT || '3001', 10),
    whatsappNumber: process.env.WHATSAPP_NUMBER || '',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
    botName: 'HK Bot',
    greetingMessage: 'Hey there! 👋 I\'m Hayu\'s assistant. Type your message and I\'ll forward it straight to his WhatsApp!',
    autoReplyMessage: '✅ Message received! Opening WhatsApp for you now. If it doesn\'t open automatically, click the link below.',
};

export default config;
