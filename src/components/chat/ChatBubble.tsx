import { motion } from 'framer-motion';
import { formatTimestamp, type Message } from '../../lib/chat';

interface ChatBubbleProps {
    message: Message;
}

/**
 * Reusable chat message bubble
 * Renders differently based on sender (user vs bot)
 */
export default function ChatBubble({ message }: ChatBubbleProps) {
    const isUser = message.sender === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-bold leading-relaxed
          ${isUser
                        ? 'bg-[var(--cd-whatsapp)] text-black rounded-br-md'
                        : 'bg-[#2a2a3a] text-white rounded-bl-md border border-white/10'
                    }`}
            >
                <p className="whitespace-pre-wrap break-words">{message.text}</p>
                <span
                    className={`block text-[10px] mt-1 ${isUser ? 'text-black/50 text-right' : 'text-gray-500'
                        }`}
                >
                    {formatTimestamp(message.timestamp)}
                </span>
            </div>
        </motion.div>
    );
}
