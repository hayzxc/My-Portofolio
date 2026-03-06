/**
 * Socket.IO chat event handler
 * Manages real-time chat events between visitors and the backend
 */
import config from '../config.js';
import { formatMessage, generateWhatsAppLink } from '../utils/whatsapp.js';

/**
 * Register chat-related socket events
 * @param {import('socket.io').Server} io - Socket.IO server instance
 */
export function registerChatHandler(io) {
    io.on('connection', (socket) => {
        console.log(`[Chat] Client connected: ${socket.id}`);

        // Send greeting on connect
        socket.emit('bot_message', {
            id: `greeting-${Date.now()}`,
            sender: 'bot',
            text: config.greetingMessage,
            timestamp: Date.now(),
        });

        // Handle message
        socket.on('send_message', (data) => {
            const { name, email, message } = data;

            // Validate required fields
            if (!name || !message) {
                socket.emit('error_message', {
                    text: '⚠️ Name and message are required.',
                });
                return;
            }

            console.log(`[Chat] Message from ${name}: ${message}`);

            // Format and generate WhatsApp link
            const formatted = formatMessage(name, email || 'Not provided', message);
            const waLink = generateWhatsAppLink(config.whatsappNumber, formatted);

            // Send auto-reply
            socket.emit('bot_message', {
                id: `reply-${Date.now()}`,
                sender: 'bot',
                text: config.autoReplyMessage,
                timestamp: Date.now(),
            });

            // Send whatsapp 
            socket.emit('wa_redirect', {
                url: waLink,
                timestamp: Date.now(),
            });
        });

        socket.on('disconnect', () => {
            console.log(`[Chat] Client disconnected: ${socket.id}`);
        });
    });
}
