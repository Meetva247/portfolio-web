"use client";

import React from "react";
import { motion } from "framer-motion";
import IconCloudCanvas from "../canvas/IconCloud";
import { BarChart3, TrendingUp, Zap, Sparkles } from "lucide-react";

const Insights = () => {
    return (
        <section id="insights" className="py-24 relative overflow-hidden bg-accent/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Text and Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Insights</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Technical Proficiency <br /> & Tool Arsenal</h3>

                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            My technical journey is defined by a diverse set of languages and tools, each chosen for its ability to solve specific architectural challenges. From the robustness of Java to the agility of Next.js, I maintain a versatile stack to build future-proof applications.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <Zap className="text-yellow-400" />, title: "Performance", desc: "Optimizing for sub-second response times." },
                                { icon: <TrendingUp className="text-brand-secondary" />, title: "Scalability", desc: "Architecting for cloud-native growth." },
                                { icon: <BarChart3 className="text-brand-primary" />, title: "Analytic Logic", desc: "Data-driven decision making in code." },
                                { icon: <Sparkles className="text-purple-400" />, title: "Animation", desc: "Crafting immersive WebGL experiences." },
                            ].map((item, i) => (
                                <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:border-brand-primary/20 transition-colors">
                                    <div className="mb-4">{item.icon}</div>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: 3D Icon Circle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] md:h-[600px] flex items-center justify-center"
                    >
                        <IconCloudCanvas />

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
