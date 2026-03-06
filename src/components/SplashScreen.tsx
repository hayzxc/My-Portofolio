import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    onComplete: () => void;
    /** Duration in ms before the exit animation begins */
    duration?: number;
}

const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'Halo', lang: 'Indonesian' },
    { text: 'こんにちは', lang: 'Japanese' },
    { text: 'مرحبا', lang: 'Arabic' },
    { text: '안녕하세요', lang: 'Korean' },
    { text: 'Bonjour', lang: 'French' },
    { text: 'Hola', lang: 'Spanish' },
    { text: 'Ciao', lang: 'Italian' },
    { text: '你好', lang: 'Chinese' },
    { text: 'Olá', lang: 'Portuguese' },
    { text: 'Привет', lang: 'Russian' },
    { text: 'Hej', lang: 'Swedish' },
    { text: 'Merhaba', lang: 'Turkish' },
    { text: 'Xin chào', lang: 'Vietnamese' },
    { text: 'Sawadee', lang: 'Thai' },
    { text: 'Namaste', lang: 'Hindi' },
];

export default function SplashScreen({ onComplete, duration = 3500 }: SplashScreenProps) {
    const [isExiting, setIsExiting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cycle through greetings
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Trigger exit after duration
    useEffect(() => {
        const timer = setTimeout(() => setIsExiting(true), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {!isExiting && (
                <motion.div
                    key="splash"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--cd-bg)]"
                >
                    {/* Grid background */}
                    <div className="absolute inset-0 bg-grid opacity-30" />

                    {/* Floating shapes */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-1/4 left-[15%] w-16 h-16 bg-[var(--cd-purple)] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl opacity-20 hidden md:block"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -15, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute bottom-1/3 right-[15%] w-20 h-20 bg-[var(--cd-green)] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full opacity-20 hidden md:block"
                    />
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-1/3 right-[25%] w-12 h-12 bg-[var(--cd-pink)] border-2 border-black rounded-full opacity-15 hidden lg:block"
                    />

                    {/* Main content */}
                    <div className="relative flex flex-col items-center gap-6">
                        {/* Multilingual Hello */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="relative h-24 md:h-32 flex items-center justify-center"
                        >
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    transition={{ duration: 0.12, ease: 'easeOut' }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--cd-yellow)] text-outline select-none"
                                >
                                    {greetings[currentIndex].text}
                                </motion.h1>
                            </AnimatePresence>
                        </motion.div>

                        {/* Language label */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.3 }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 -mt-2"
                        >
                            {greetings[currentIndex].lang}
                        </motion.p>

                        {/* Logo box */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 15,
                                delay: 0.2,
                            }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ rotate: [3, -3, 3] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-20 h-20 neo-box-yellow rounded-2xl flex items-center justify-center cursor-default"
                            >
                                <span className="text-3xl font-black">HK</span>
                            </motion.div>
                        </motion.div>

                        {/* Name text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-center"
                        >
                            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                                <span className="text-[var(--cd-yellow)]">Hayu</span>{' '}
                                <span className="text-white">Kurniawan</span>
                            </h2>
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="w-48 md:w-64"
                        >
                            <div className="h-3 bg-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{
                                        duration: (duration - 700) / 1000,
                                        delay: 0.7,
                                        ease: 'easeInOut',
                                    }}
                                    className="h-full bg-[var(--cd-yellow)] relative"
                                >
                                    <motion.div
                                        animate={{ x: [0, 200, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                        className="absolute top-0 bottom-0 left-0 w-6 bg-white/30 skew-x-12"
                                    />
                                </motion.div>
                            </div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mt-3 text-center"
                            >
                                Loading quest...
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
