"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Section3DWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    // Smooth out the movement
    const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            ref={ref}
            style={{
                perspective: "1000px",
                rotateX: smoothRotateX,
                scale: smoothScale,
                opacity: opacity,
            }}
            className="relative w-full"
        >
            {children}
        </motion.div>
    );
};

export default Section3DWrapper;
