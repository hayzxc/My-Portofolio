import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatInputProps {
    onSend: (text: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

/**
 * Reusable chat text input with send button
 */
export default function ChatInput({ onSend, disabled = false, placeholder = 'Type a message...' }: ChatInputProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed || disabled) return;
        onSend(trimmed);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-white/10 bg-[#0c0c14]">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={disabled}
                placeholder={placeholder}
                className="flex-1 bg-[#1a1a24] text-white text-sm font-bold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-[var(--cd-whatsapp)] transition-colors placeholder:text-gray-500"
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={disabled || !text.trim()}
                className="p-3 bg-[var(--cd-whatsapp)] text-black rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
                <Send className="w-5 h-5" />
            </motion.button>
        </form>
    );
}
