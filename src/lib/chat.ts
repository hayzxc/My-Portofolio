/**
 * Chat types and configuration
 * Single source of truth for all chat-related constants
 */

export interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    timestamp: number;
}

export interface WaRedirect {
    url: string;
    timestamp: number;
}

export const CHAT_CONFIG = {
    socketUrl: import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001',
    headerTitle: 'Chat with Hayu',
    headerSubtitle: 'Usually replies instantly via WhatsApp',
    inputPlaceholder: 'Type your message...',
    namePlaceholder: 'Your name...',
    emailPlaceholder: 'Your email (optional)...',
} as const;

/**
 * Format a timestamp into a readable time string (HH:MM)
 */
export function formatTimestamp(ts: number): string {
    return new Date(ts).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
}
