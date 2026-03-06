import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { io, Socket } from 'socket.io-client';
import { CHAT_CONFIG, type Message, type WaRedirect } from '../../lib/chat';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';

/** Chat flow steps */
type ChatStep = 'ask_name' | 'ask_email' | 'chatting';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [step, setStep] = useState<ChatStep>('ask_name');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [waLink, setWaLink] = useState<string | null>(null);
    const socketRef = useRef<Socket | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    /** Auto-scroll to bottom when new messages appear */
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    /** Connect socket when widget opens */
    useEffect(() => {
        if (!isOpen) return;

        const socket = io(CHAT_CONFIG.socketUrl, { transports: ['websocket', 'polling'] });
        socketRef.current = socket;

        socket.on('bot_message', (msg: Message) => {
            setMessages((prev) => [...prev, msg]);
        });

        socket.on('wa_redirect', (data: WaRedirect) => {
            setWaLink(data.url);
            window.open(data.url, '_blank');
        });

        socket.on('error_message', (data: { text: string }) => {
            setMessages((prev) => [
                ...prev,
                { id: `err-${Date.now()}`, sender: 'bot', text: data.text, timestamp: Date.now() },
            ]);
        });

        return () => {
            socket.disconnect();
            socketRef.current = null;
        };
    }, [isOpen]);

    /** Add a user message to chat */
    const addUserMessage = useCallback((text: string) => {
        const msg: Message = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text,
            timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, msg]);
        return msg;
    }, []);

    /** Handle message send based on current step */
    const handleSend = useCallback(
        (text: string) => {
            if (step === 'ask_name') {
                addUserMessage(text);
                setUserName(text);
                setStep('ask_email');
                // Ask for email
                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            id: `bot-email-${Date.now()}`,
                            sender: 'bot',
                            text: `Nice to meet you, ${text}! 🎮\n\nWhat's your email? (optional — type "skip" to skip)`,
                            timestamp: Date.now(),
                        },
                    ]);
                }, 500);
                return;
            }

            if (step === 'ask_email') {
                addUserMessage(text);
                const email = text.toLowerCase() === 'skip' ? '' : text;
                setUserEmail(email);
                setStep('chatting');
                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            id: `bot-ready-${Date.now()}`,
                            sender: 'bot',
                            text: `Perfect! 🚀 Now type your message and I'll send it straight to Hayu's WhatsApp.`,
                            timestamp: Date.now(),
                        },
                    ]);
                }, 500);
                return;
            }

            // Chatting step — send to backend
            addUserMessage(text);
            socketRef.current?.emit('send_message', {
                name: userName,
                email: userEmail,
                message: text,
            });
        },
        [step, userName, userEmail, addUserMessage]
    );

    /** Toggle widget open/close */
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => {
            if (prev) {
                // Reset on close
                setMessages([]);
                setStep('ask_name');
                setUserName('');
                setUserEmail('');
                setWaLink(null);
            }
            return !prev;
        });
    }, []);

    /** Get placeholder based on step */
    const getPlaceholder = () => {
        if (step === 'ask_name') return CHAT_CONFIG.namePlaceholder;
        if (step === 'ask_email') return CHAT_CONFIG.emailPlaceholder;
        return CHAT_CONFIG.inputPlaceholder;
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="absolute bottom-20 right-0 w-[360px] max-h-[500px] rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col bg-[#0c0c14]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[var(--cd-whatsapp)] border-b-2 border-black">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-black uppercase tracking-tight leading-none">
                                        {CHAT_CONFIG.headerTitle}
                                    </h4>
                                    <p className="text-[10px] font-bold text-black/60 uppercase tracking-wider">
                                        {CHAT_CONFIG.headerSubtitle}
                                    </p>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleOpen}
                                className="p-1.5 bg-black/20 rounded-full"
                            >
                                <X className="w-4 h-4 text-white" />
                            </motion.button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[340px] scrollbar-thin">
                            {messages.map((msg) => (
                                <ChatBubble key={msg.id} message={msg} />
                            ))}

                            {/* WhatsApp link fallback */}
                            {waLink && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center"
                                >
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--cd-whatsapp)] text-black text-xs font-black uppercase rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 transition-all"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Open WhatsApp
                                    </a>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <ChatInput
                            onSend={handleSend}
                            placeholder={getPlaceholder()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={!isOpen ? { y: [0, -5, 0] } : {}}
                transition={!isOpen ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
                onClick={toggleOpen}
                className="w-16 h-16 bg-[var(--cd-whatsapp)] text-black rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                            <X className="w-7 h-7" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                            <MessageCircle className="w-7 h-7" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
