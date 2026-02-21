"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

import GirlCanvas from "../canvas/Girl";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background 3D Character Scene */}
            <div className="absolute inset-0 z-0 opacity-80 lg:opacity-100">
                <GirlCanvas />
            </div>

            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                <div className="max-w-4xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2 text-brand-primary font-medium mb-6 uppercase tracking-widest text-sm"
                    >
                        <Terminal size={18} />
                        <span>2nd-Year Computer Engineering Student</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter mb-8 leading-[0.9] text-foreground"
                    >
                        Building Scalable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            Full-Stack Solutions
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                    >
                        I&apos;m Meetva, a passionate developer specializing in Java Full-Stack and modern Frontend ecosystems.
                        Crafting elegant, high-performance web experiences with React and Next.js.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
                    >
                        <a
                            href="#work"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all group"
                        >
                            <span>View My Work</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 glass rounded-full font-bold flex items-center justify-center hover:bg-accent transition-all"
                        >
                            Let&apos;s Collaborate
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
