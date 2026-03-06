import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-2 border-black
                ${isScrolled ? 'bg-[#1a1a24]/95 backdrop-blur-md shadow-[0_4px_0_0_rgba(0,0,0,1)]' : 'bg-[#1a1a24] shadow-[0_4px_0_0_rgba(0,0,0,1)]'}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-black tracking-tighter"
                >
                    <span className="bg-[var(--cd-yellow)] text-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        HK.
                    </span>
                    <span className="ml-2">DEV</span>
                </motion.a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            className="text-white hover:text-[var(--cd-yellow)] transition-colors font-bold uppercase text-sm tracking-widest"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="neo-btn py-2 text-xs"
                    >
                        Start Quest
                    </motion.a>
                </div>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-white neo-box bg-[#1a1a24] rounded-lg transition-transform"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-2 neo-box bg-[#1a1a24] rounded-xl p-4 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white hover:text-[var(--cd-yellow)] transition-colors font-bold uppercase tracking-widest p-2"
                        >
                            {link.name}
                        </a>
                    ))}
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="#contact"
                        className="neo-btn w-full text-center hover:bg-[var(--cd-yellow)] hover:text-black transition-colors"
                    >
                        Start Quest
                    </motion.a>
                </motion.div>
            )}
        </motion.nav>
    );
}
