"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float, MeshWobbleMaterial, ContactShadows } from "@react-three/drei";

const TechTerminal = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <group scale={isMobile ? 0.6 : 1} position={isMobile ? [0, -1, 0] : [0, -1, 0]} rotation={[-0.1, 0.5, 0]}>
                {/* Main Base */}
                <mesh>
                    <boxGeometry args={[4, 0.2, 3]} />
                    <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Vertical Screen Support */}
                <mesh position={[0, 0.6, -1]}>
                    <boxGeometry args={[0.5, 1, 0.2]} />
                    <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.3} />
                </mesh>

                {/* Main Screen */}
                <group position={[0, 2, -1]} rotation={[-0.2, 0, 0]}>
                    {/* Outer Frame */}
                    <mesh>
                        <boxGeometry args={[5, 3, 0.2]} />
                        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
                    </mesh>
                    {/* Display Surface */}
                    <mesh position={[0, 0, 0.11]}>
                        <planeGeometry args={[4.6, 2.6]} />
                        <MeshWobbleMaterial
                            color="#0ea5e9"
                            emissive="#38bdf8"
                            emissiveIntensity={2}
                            factor={0.05}
                            speed={2}
                        />
                    </mesh>
                    {/* Inner Glow Overlay */}
                    <mesh position={[0, 0, 0.12]}>
                        <planeGeometry args={[4.4, 2.4]} />
                        <meshBasicMaterial color="#38bdf8" transparent opacity={0.1} />
                    </mesh>
                </group>

                {/* Floating Side Elements */}
                <mesh position={[-3, 1, 0.5]} rotation={[0.5, 0.2, 0.5]}>
                    <octahedronGeometry args={[0.4]} />
                    <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.5} />
                </mesh>

                <mesh position={[3, 2, -0.5]} rotation={[0.2, 0.5, 0.2]}>
                    <tetrahedronGeometry args={[0.3]} />
                    <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
                </mesh>

                <pointLight position={[0, 2, 1]} intensity={2} color="#38bdf8" />
            </group>
        </Float>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
                />
                <TechTerminal isMobile={isMobile} />
                <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2.5} far={1} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
