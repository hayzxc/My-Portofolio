import { motion } from 'framer-motion';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-grid">
            {/* Background elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [-12, -5, -12]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-10 w-32 h-32 neo-box-yellow rounded-full flex items-center justify-center opacity-20 hidden md:flex"
            >
                <Terminal className="w-16 h-16" />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [12, 22, 12]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/4 right-10 w-40 h-40 bg-[var(--cd-purple)] border-black border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl opacity-20 flex items-center justify-center hidden md:flex"
            >
                <Sparkles className="w-20 h-20 text-white" />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    x: [0, 15, 0],
                    rotate: [0, 45, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/3 right-1/4 w-16 h-16 bg-[var(--cd-pink)] border-black border-2 rounded-full opacity-20 hidden lg:block"
            />
            <motion.div
                animate={{
                    y: [0, 25, 0],
                    x: [0, -15, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-[var(--cd-green)] border-black border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg rotate-45 opacity-20 hidden lg:block"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 12,
                        delay: 0.2,
                    }}
                    className="mb-8 relative"
                >
                    {/* Glow ring behind logo */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.15, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-[var(--cd-yellow)]"
                        style={{ filter: 'blur(20px)' }}
                    />
                    <motion.div
                        animate={{ rotate: [3, -3, 3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 mx-auto neo-box-yellow rounded-2xl flex items-center justify-center mb-6 cursor-pointer relative z-10"
                        whileHover={{
                            scale: 1.15,
                            rotate: 10,
                            transition: { type: 'spring', stiffness: 300, damping: 10 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="text-4xl font-black">HK</span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-8xl font-black mb-6 leading-none"
                >
                    <span className="block text-white">HI, I'M</span>
                    <span className="block text-[var(--cd-yellow)] text-outline tracking-tighter">
                        <Typewriter
                            words={['Hayu Kurniawan.', 'Fullstack Developer.', 'Creative.', 'Professional.']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-10"
                >
                    <motion.span whileHover={{ scale: 1.05, y: -5, rotate: -2 }} className="neo-box bg-[var(--cd-purple)] px-4 py-2 text-sm font-black uppercase text-white cursor-pointer select-none">Fullstack Developer</motion.span>
                    <motion.span whileHover={{ scale: 1.05, y: -5, rotate: 2 }} className="neo-box bg-[var(--cd-green)] px-4 py-2 text-sm font-black uppercase text-black cursor-pointer select-none">AI-Augmented Developer </motion.span>
                    <motion.span whileHover={{ scale: 1.05, y: -5, rotate: -2 }} className="neo-box bg-[var(--cd-pink)] px-4 py-2 text-sm font-black uppercase text-black cursor-pointer select-none">Problem Solver</motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="neo-btn px-10 py-5 text-xl w-full md:w-auto"
                    >
                        View Projects {'->'}
                    </motion.a>
                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/hayzxc" target="_blank" rel="noopener noreferrer"
                            className="neo-btn-secondary p-4 rounded-xl origin-center">
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.15, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/hayyu-k-436133221/" target="_blank" rel="noopener noreferrer"
                            className="neo-btn-secondary p-4 rounded-xl origin-center">
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 flex items-center justify-center gap-2 text-gray-400"
                >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-widest">Surabaya, Indonesia</span>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-8 h-12 border-4 border-black bg-white rounded-full flex justify-center p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-1.5 h-3 bg-black rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
