import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        alert('MISSION ACCOMPLISHED! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'hayukurniawan2@gmail.com', color: 'var(--cd-yellow)' },
        { icon: <Github className="w-6 h-6" />, label: 'Github', value: 'github.com/hayzxc', color: 'var(--cd-purple)' },
        { icon: <Linkedin className="w-6 h-6" />, label: 'Linkedin', value: 'linkedin.com/in/hayyu-k-436133221', color: 'var(--cd-blue)' }
    ];

    return (
        <SectionReveal>
            <section id="contact" className="py-20 px-4 bg-grid">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic flex items-center gap-4">
                            <MessageSquare className="w-12 h-12 text-[var(--cd-yellow)]" />
                            Init Comms
                        </h2>
                        <p className="text-xl text-gray-400 font-bold max-w-2xl text-balance">
                            READY TO START A NEW QUEST? DROP A MESSAGE BELOW TO ESTABLISH CONNECTION.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="neo-box p-8 rounded-2xl bg-[#1a1a24]">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-black uppercase mb-2 tracking-widest text-gray-400">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black border-2 border-black p-4 text-white focus:border-[var(--cd-yellow)] outline-none shadow-[4px_4px_0px_0px_rgba(255,204,0,1)] transition-all font-bold"
                                            placeholder="SOLDIER NAME"
                                            value={formData.name}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase mb-2 tracking-widest text-gray-400">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-black border-2 border-black p-4 text-white focus:border-[var(--cd-yellow)] outline-none shadow-[4px_4px_0px_0px_rgba(255,204,0,1)] transition-all font-bold"
                                            placeholder="CORE@DATABASE.COM"
                                            value={formData.email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black uppercase mb-2 tracking-widest text-gray-400">Message</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full bg-black border-2 border-black p-4 text-white focus:border-[var(--cd-yellow)] outline-none shadow-[4px_4px_0px_0px_rgba(255,204,0,1)] transition-all resize-none font-bold"
                                            placeholder="ENCRYPTED TRANSMISSION..."
                                            value={formData.message}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="neo-btn w-full py-4 text-xl flex items-center justify-center transition-colors"
                                    >
                                        <Send className="w-6 h-6 mr-2" />
                                        SEND MESSAGE
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>

                        <div className="space-y-6">
                            {contactInfo.map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.label === 'Email' ? `mailto:${item.value}` : `https://${item.value}`}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 10, rotate: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="neo-box p-6 rounded-2xl flex items-center gap-6 group hover:border-[var(--cd-yellow)] transition-colors"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        className="p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl" style={{ backgroundColor: item.color }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</h3>
                                        <p className="text-xl font-black break-all group-hover:text-[var(--cd-yellow)] transition-colors tracking-tighter uppercase">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}

                            <div className="neo-box p-8 rounded-2xl bg-[var(--cd-purple)] text-black">
                                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">Join My Guild</h3>
                                <p className="font-bold opacity-80 mb-6 uppercase">I'M ALWAYS LOOKING FOR BOLD COLLABORATORS AND EXCITING NEW PROJECTS.</p>
                                <div className="flex gap-4">
                                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}><Twitter className="w-6 h-6 cursor-pointer" /></motion.div>
                                    <motion.div whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }}><Linkedin className="w-6 h-6 cursor-pointer" /></motion.div>
                                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}><Github className="w-6 h-6 cursor-pointer" /></motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SectionReveal>
    );
}
