"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Sparkles, Building2, Bike, FileText, CreditCard } from "lucide-react";

const projects = [
    {
        title: "Company Transcript Analyzer",
        description: "AI-driven platform that parses and analyzes complex company reports from PDF files to answer user queries with precision.",
        tech: ["Next.js", "Python", "OpenAI", "Pinecone"],
        icon: <FileText className="w-6 h-6 text-blue-400" />,
        gradient: "from-blue-500/10 to-transparent",
        image: null
    },
    {
        title: "AI Tutor",
        description: "An intelligent tutoring system developed during a hackathon to provide personalized learning experiences and instant feedback.",
        tech: ["React", "FastAPI", "LLMs", "Framer Motion"],
        icon: <Sparkles className="w-6 h-6 text-purple-400" />,
        gradient: "from-purple-500/10 to-transparent",
        image: null
    },
    {
        title: "Hospital Management",
        description: "Comprehensive healthcare platform designed for a startup to streamline patient records, appointments, and billing.",
        tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
        icon: <Building2 className="w-6 h-6 text-emerald-400" />,
        gradient: "from-emerald-500/10 to-transparent",
        image: null
    },
    {
        title: "2nd-Hand Bike Platform",
        description: "A secure marketplace for bike enthusiasts to buy and sell verified pre-owned motorcycles with listing management.",
        tech: ["React", "Node.js", "MongoDB", "Auth0"],
        icon: <Bike className="w-6 h-6 text-rose-400" />,
        gradient: "from-rose-500/10 to-transparent",
        image: null
    },
    {
        title: "Radhe Card Services",
        description: "A multi-service business portal for Aadhaar updates, Scholarship applications, and ID card printing services.",
        tech: ["HTML5", "PHP", "Bootstrap", "MySQL"],
        icon: <CreditCard className="w-6 h-6 text-amber-400" />,
        gradient: "from-amber-500/10 to-transparent",
        image: null
    }
];

const WorkShowcase = () => {
    return (
        <section id="work" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4"
                        >
                            Portfolio
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-heading font-bold"
                        >
                            Featured Projects
                        </motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted-foreground max-w-sm">Every project is a commitment to performance and a clean user experience.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden glass p-8 rounded-[2rem] border-none hover:bg-accent/20 transition-all cursor-pointer`}
                        >
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} blur-2xl group-hover:scale-150 transition-transform duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-background/50 rounded-2xl border border-border group-hover:border-brand-primary/50 transition-colors">
                                        {project.icon}
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="p-2 hover:text-brand-primary transition-colors"><Github size={18} /></button>
                                        <button className="p-2 hover:text-brand-primary transition-colors"><ExternalLink size={18} /></button>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-muted-foreground mb-8 line-clamp-3 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/80 bg-brand-primary/5 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* View More Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="glass p-8 rounded-[2rem] border-dashed border-border flex flex-col items-center justify-center text-center group hover:bg-brand-primary/5 transition-all cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                            <Code2 size={24} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Want to see more?</h4>
                        <p className="text-muted-foreground text-sm mb-6">Explore all my repositories and experiments on GitHub.</p>
                        <a href="#" className="flex items-center space-x-2 text-brand-primary font-bold text-sm">
                            <span>Visit GitHub</span>
                            <ArrowRight size={14} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper to keep imports clean
const ArrowRight = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
);

export default WorkShowcase;
