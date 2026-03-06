import { motion } from 'framer-motion';
import React from 'react';
import { Code2, Database, Smartphone, Cloud, Brain, Zap, Briefcase, GraduationCap } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function About() {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: <Code2 className="w-6 h-6" />,
            color: 'var(--cd-yellow)',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
        },
        {
            title: 'Backend',
            icon: <Database className="w-6 h-6" />,
            color: 'var(--cd-green)',
            skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
        },
        {
            title: 'Cloud & AI',
            icon: <Cloud className="w-6 h-6" />,
            color: 'var(--cd-purple)',
            skills: ['AWS', 'Docker', 'OpenAI API', 'LangChain', 'Terraform']
        }
    ];

    const experience = [
        {
            company: 'Pt. Prana Argentum.',
            role: 'Fullstack Developer',
            period: '2025 - Present',
            description: 'Leading the development of a gamified learning platform using React and Node.js.'
        },
    ];

    return (
        <SectionReveal>
            <section id="about" className="py-20 px-4 bg-[#1a1a24]/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic flex items-center gap-4">
                            <Brain className="w-12 h-12 text-[var(--cd-purple)]" />
                            My Skill Tree
                        </h2>
                        <p className="text-xl text-gray-400 font-bold max-w-2xl text-balance">
                            LEVELING UP ONE MODULE AT A TIME. SPECIALIZED IN CRAFTING IMMERSIVE DIGITAL EXPERIENCES.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="neo-box p-8 rounded-2xl relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -rotate-12 translate-x-8 -translate-y-8 group-hover:bg-[var(--cd-yellow)]/10 transition-colors"></div>

                                <div className="flex items-center gap-4 mb-8">
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        className="p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl" style={{ backgroundColor: category.color }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            whileHover={{ scale: 1.1, rotate: -2 }}
                                            key={skill}
                                            className="px-3 py-1 bg-white border border-black text-black font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-black mb-8 uppercase italic flex items-center gap-4 underline decoration-[var(--cd-yellow)] decoration-4 underline-offset-8">
                                <Briefcase className="w-8 h-8" />
                                Exp Points
                            </h3>
                            <div className="space-y-8">
                                {experience.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="neo-box p-6 rounded-xl border-l-8 border-l-[var(--cd-yellow)]"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-black uppercase tracking-tighter">{exp.role}</h4>
                                            <span className="bg-black text-[var(--cd-yellow)] px-2 py-1 text-[10px] font-black">{exp.period}</span>
                                        </div>
                                        <p className="text-[var(--cd-yellow)] font-black text-sm mb-4 uppercase">{exp.company}</p>
                                        <p className="text-gray-400 font-bold text-sm italic">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-black mb-8 uppercase italic flex items-center gap-4 underline decoration-[var(--cd-purple)] decoration-4 underline-offset-8">
                                <GraduationCap className="w-8 h-8" />
                                Quests Cleared
                            </h3>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="neo-box p-8 rounded-xl bg-gradient-to-br from-[#1a1a24] to-[#0c0c14]"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="text-5xl font-black text-[var(--cd-yellow)]">100%</div>
                                    <div className="font-bold text-gray-400 uppercase tracking-widest text-sm">Completion Rate</div>
                                </div>
                                <div className="w-full bg-black h-8 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-[var(--cd-green)] border-r-4 border-black relative"
                                    >
                                        <motion.div
                                            animate={{ x: [0, 300, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-0 bottom-0 left-0 w-8 bg-white/20 skew-x-12"
                                        />
                                    </motion.div>
                                </div>
                                <p className="mt-6 text-sm italic text-gray-400 font-bold uppercase">
                                    PROUDLY CLEARED ALL CORE MISSIONS IN COMPUTER SCIENCE & SOFTWARE ENGINEERING.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </SectionReveal>
    );
}
