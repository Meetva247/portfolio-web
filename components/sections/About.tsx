"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket } from "lucide-react";
import About3DCanvas from "../canvas/About3D";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center"
                    >
                        {/* 3D Background Elements */}
                        <div className="absolute inset-0 z-0">
                            <About3DCanvas />
                        </div>

                        {/* Profile Photo with Premium Styling */}
                        <div className="relative z-10 w-full max-w-[400px] aspect-[3/4] group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 rounded-[3rem]" />
                            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl glass p-2 transition-transform duration-500 group-hover:scale-[1.02]">
                                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                                    <Image
                                        src="/assets/profile-refined.png"
                                        alt="Meetva - Professional Profile"
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>

                            {/* Floating decorative cards */}
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-xl z-20 backdrop-blur-xl"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Available for Work</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass p-1">
                            <div className="bg-background/40 backdrop-blur-2xl p-8 md:p-12 rounded-3xl">
                                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">About Me</h2>
                                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Fusing Logic with <br /> Immersive Design</h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                    I am a 2nd-Year Computer Engineering student at <strong>Ganpat University</strong>.
                                    I specialize in bridging the gap between complex backend logic and premium, interactive frontend experiences.
                                </p>

                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    My approach combines a deep understanding of Java Full-Stack architecture with a passion for modern design patterns like Glassmorphism and immersive 3D WebGL.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-5 rounded-2xl bg-accent/30 border border-white/10 backdrop-blur-md">
                                        <GraduationCap className="text-brand-primary mb-3" size={24} />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Degree</div>
                                        <div className="font-bold text-sm">B.Tech CE</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-accent/30 border border-white/10 backdrop-blur-md">
                                        <Code2 className="text-brand-secondary mb-3" size={24} />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Expertise</div>
                                        <div className="font-bold text-sm">Full-Stack</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-accent/30 border border-white/10 backdrop-blur-md">
                                        <Rocket className="text-brand-primary mb-3" size={24} />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Velocity</div>
                                        <div className="font-bold text-sm">Fast-Learner</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
