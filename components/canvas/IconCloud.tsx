"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload, Text, Html } from "@react-three/drei";
import * as THREE from "three";
import {
    Code2,
    Database,
    Globe,
    Cpu,
    Layers,
    Layout,
    Terminal,
    Trello,
    GitBranch,
    Box,
    Smartphone,
    Server,
    Coffee,
    Shapes
} from "lucide-react";

const icons = [
    { icon: <Coffee size={32} />, name: "Java", color: "#f89820" },
    { icon: <Code2 size={32} />, name: "JavaScript", color: "#f7df1e" },
    { icon: <Database size={32} />, name: "MySQL", color: "#4479a1" },
    { icon: <Globe size={32} />, name: "Next.js", color: "#ffffff" },
    { icon: <Cpu size={32} />, name: "Spring Boot", color: "#6db33f" },
    { icon: <Layers size={32} />, name: "React", color: "#61dafb" },
    { icon: <Layout size={32} />, name: "Tailwind", color: "#38bdf8" },
    { icon: <Terminal size={32} />, name: "PostgreSQL", color: "#336791" },
    { icon: <GitBranch size={32} />, name: "Git", color: "#f05032" },
    { icon: <Box size={32} />, name: "Docker", color: "#2496ed" },
    { icon: <Server size={32} />, name: "Node.js", color: "#339933" },
    { icon: <Smartphone size={32} />, name: "Android", color: "#3ddc84" },
    { icon: <Shapes size={32} />, name: "TypeScript", color: "#3178c6" },
];

const IconNode = ({ position, icon, name, color }: { position: THREE.Vector3, icon: any, name: string, color: string }) => {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={position}>
                <Html transform distanceFactor={10} occlude>
                    <div
                        className="flex flex-col items-center justify-center p-3 rounded-2xl glass border border-white/10 group hover:scale-125 transition-transform duration-300"
                        style={{ color: color }}
                    >
                        {icon}
                        <span className="text-[10px] font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-white uppercase tracking-tighter">
                            {name}
                        </span>
                    </div>
                </Html>
            </mesh>
        </Float>
    );
};

const IconSphere = () => {
    const groupRef = useRef<THREE.Group>(null);

    const points = useMemo(() => {
        const p = [];
        const count = icons.length;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const x = 5 * Math.cos(theta) * Math.sin(phi);
            const y = 5 * Math.sin(theta) * Math.sin(phi);
            const z = 5 * Math.cos(phi);
            p.push(new THREE.Vector3(x, y, z));
        }
        return p;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
            groupRef.current.rotation.x += 0.002;
        }
    });

    return (
        <group ref={groupRef}>
            {icons.map((item, i) => (
                <IconNode
                    key={i}
                    position={points[i]}
                    icon={item.icon}
                    name={item.name}
                    color={item.color}
                />
            ))}
        </group>
    );
};

const IconCloudCanvas = () => {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <IconSphere />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default IconCloudCanvas;
