import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github, Folder } from 'lucide-react';
import SectionReveal from './SectionReveal';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    updated_at: string;
}

export default function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchRepos();
    }, []);

    const fetchRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/hayzxc/repos?sort=updated&per_page=100');
            const data = await response.json();
            setRepos(data.filter((repo: Repo) => !repo.name.includes('hayzxc')));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching repos:', error);
            setLoading(false);
        }
    };

    const filteredRepos = repos.filter((repo: Repo) => {
        if (filter === 'all') return true;
        if (filter === 'web') return repo.topics?.includes('web') || repo.language === 'JavaScript' || repo.language === 'TypeScript';
        if (filter === 'mobile') return repo.topics?.includes('mobile') || repo.language === 'Dart';
        if (filter === 'ai') return repo.topics?.includes('ai') || repo.topics?.includes('machine-learning');
        return true;
    });

    const filters = [
        { id: 'all', label: 'All', color: 'var(--cd-yellow)' },
        { id: 'web', label: 'Web', color: 'var(--cd-green)' },
        { id: 'mobile', label: 'Mobile', color: 'var(--cd-blue)' },
        { id: 'ai', label: 'AI', color: 'var(--cd-purple)' }
    ];

    return (
        <SectionReveal>
            <section id="projects" className="min-h-screen py-20 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-4 flex items-center gap-4 uppercase italic">
                            <Folder className="w-12 h-12 text-[var(--cd-yellow)]" />
                            Featured Quests
                        </h2>
                        <p className="text-xl text-gray-400 font-bold max-w-2xl text-balance">
                            EXPLORE THE DIGITAL REALMS I'VE CRAFTED USING CUTTING-EDGE TECHNOLOGIES.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-4 mb-16"
                    >
                        {filters.map((f) => (
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                style={{ backgroundColor: filter === f.id ? f.color : '#1a1a24' }}
                                className={`px-8 py-3 border-2 border-black font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                                transition-colors
                                ${filter === f.id ? 'text-black' : 'text-white hover:border-[var(--cd-yellow)]'}`}
                            >
                                {f.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="neo-box h-80 rounded-2xl animate-pulse bg-[#1a1a24]/50"></div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {filteredRepos.map((repo, idx) => (
                                <motion.div
                                    key={repo.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    whileHover={{ y: -8, scale: 1.02, rotate: 1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group neo-box rounded-2xl p-8 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <motion.div
                                                whileHover={{ rotate: 180, scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-12 h-12 neo-box-yellow rounded-xl flex items-center justify-center -rotate-6 cursor-pointer"
                                            >
                                                <Github className="w-6 h-6" />
                                            </motion.div>
                                            <div className="flex gap-2 text-xs font-black uppercase">
                                                <span className="flex items-center gap-1 bg-white border border-black px-2 py-1 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black mb-4 truncate uppercase tracking-tighter group-hover:text-[var(--cd-yellow)] transition-colors">
                                            {repo.name.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        </h3>

                                        <p className="text-gray-400 font-bold mb-6 line-clamp-3 text-sm italic">
                                            {repo.description || 'MISSION DESCRIPTION UNAVAILABLE. PROCEED WITH CAUTION.'}
                                        </p>

                                        {repo.topics && repo.topics.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {repo.topics.slice(0, 3).map((topic: string) => (
                                                    <motion.span
                                                        whileHover={{ scale: 1.1, rotate: 3 }}
                                                        key={topic}
                                                        className="px-2 py-1 bg-[var(--cd-purple)] text-white text-[10px] font-black uppercase border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
                                                    >
                                                        {topic}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 neo-btn-secondary py-2 text-xs text-center"
                                        >
                                            SOURCE
                                        </motion.a>
                                        {repo.homepage && (
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={repo.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 neo-btn py-2 text-xs text-center"
                                            >
                                                DEMO
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </SectionReveal>
    );
}
