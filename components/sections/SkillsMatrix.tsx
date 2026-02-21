"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Layout, Server, Database, Code, Cpu } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="w-8 h-8" />,
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
        color: "bg-blue-500"
    },
    {
        category: "Backend",
        icon: <Server className="w-8 h-8" />,
        items: ["Core Java", "Spring Boot", "Hibernate", "Microservices", "REST APIs"],
        color: "bg-orange-500"
    },
    {
        category: "DSA",
        icon: <Brain className="w-8 h-8" />,
        items: ["B-Trees", "Hash Functions", "Graph Traversal", "Sorting", "Algos"],
        color: "bg-purple-500"
    },
    {
        category: "Database",
        icon: <Database className="w-8 h-8" />,
        items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS Basics"],
        color: "bg-green-500"
    },
    {
        category: "Dev Tools",
        icon: <Code className="w-8 h-8" />,
        items: ["Git/GitHub", "Docker", "Jenkins", "Postman", "IntelliJ"],
        color: "bg-gray-500"
    },
    {
        category: "Interests",
        icon: <Cpu className="w-8 h-8" />,
        items: ["AI/ML Systems", "Compilers", "Web3", "UI/UX", "Dist. Systems"],
        color: "from-pink-500 to-rose-500"
    }
];

const SkillCube = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group h-[300px] w-full perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full h-full transition-all duration-700 preserve-3d"
                animate={{ rotateY: isHovered ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl glass flex flex-col items-center justify-center p-8 border-2 border-brand-primary/10">
                    <div className={`w-20 h-20 rounded-2xl ${skill.color} flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20`}>
                        <div className="text-white">{skill.icon}</div>
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight">{skill.category}</h4>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest font-bold">Hover to explore</p>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-brand-primary flex flex-col items-center justify-center p-8 border-2 border-white/20"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {skill.items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-bold text-white uppercase tracking-tighter"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SkillsMatrix = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-accent/20">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold"
                    >
                        The Skill Cubes
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skills.map((skill, index) => (
                        <SkillCube key={skill.category} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
