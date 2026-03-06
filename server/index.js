/**
 * Portfolio Chat Server
 * Express + Socket.IO server for WhatsApp live chat
 */
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import config from './config.js';
import { registerChatHandler } from './handlers/chat.js';

// Initialize Express
const app = express();
app.use(cors({ origin: config.frontendUrl }));
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: Date.now() });
});

// Create HTTP server and attach Socket.IO
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: config.frontendUrl,
        methods: ['GET', 'POST'],
    },
});

// Register chat handlers
registerChatHandler(io);

// Start server
httpServer.listen(config.port, () => {
    console.log(`\n🚀 Chat server running on http://localhost:${config.port}`);
    console.log(`📱 WhatsApp number: ${config.whatsappNumber || '⚠️  NOT SET — update .env'}`);
    console.log(`🌐 Accepting connections from: ${config.frontendUrl}\n`);
});
