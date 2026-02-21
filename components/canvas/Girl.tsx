"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, Float, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const Girl = ({ isMobile, onError }: { isMobile: boolean, onError: () => void }) => {
    // Using a more stable Avatar URL (Ready Player Me)
    const modelUrl = "https://models.readyplayerme.me/64b5e6332914c0021151a536.glb";

    try {
        const { scene, animations } = useGLTF(modelUrl);
        const { actions, names } = useAnimations(animations, scene);

        useEffect(() => {
            if (actions && names.length > 0) {
                // RPM models often have 'Armature|mixamo.com|Layer0' or similar
                // We'll try to find an animation that looks like idle
                const idleAnim = names.find(n => n.toLowerCase().includes('idle')) || names[0];
                actions[idleAnim]?.reset().fadeIn(0.5).play();
            }
        }, [actions, names]);

        return (
            <group scale={isMobile ? 2 : 3.5} position={isMobile ? [0, -2.5, 0] : [0, -3.5, 0]} rotation={[0, -0.4, 0]}>
                <primitive object={scene} />
            </group>
        );
    } catch (e) {
        console.error("3D Model load error:", e);
        onError();
        return null;
    }
};

// Fallback component if model fails
const FallbackCharacter = ({ isMobile }: { isMobile: boolean }) => (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={isMobile ? [0, 0, 0] : [0, 0, 0]}>
            <sphereGeometry args={[isMobile ? 1 : 1.5, 32, 32]} />
            <meshStandardMaterial color="#38bdf8" wireframe emissive="#38bdf8" emissiveIntensity={0.5} />
        </mesh>
    </Float>
);

const GirlCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [hasError, setHasError] = useState(false);

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
        <div className="w-full h-full relative">
            <Canvas
                shadows
                frameloop="always"
                dpr={[1, 2]}
                camera={{ position: [20, 3, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true, antialias: true }}
            >
                <Suspense fallback={null}>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />

                    <ambientLight intensity={1.5} />
                    <spotLight
                        position={[-20, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                        castShadow
                    />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <directionalLight position={[0, 10, 5]} intensity={2} />

                    {!hasError ? (
                        <Girl isMobile={isMobile} onError={() => setHasError(true)} />
                    ) : (
                        <FallbackCharacter isMobile={isMobile} />
                    )
                    }

                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={10}
                    />
                </Suspense>

                <Preload all />
            </Canvas>

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-muted-foreground text-xs glass px-4 py-2 rounded-full opacity-50">
                        Model failed to load - showing digital proxy
                    </p>
                </div>
            )}
        </div>
    );
};

export default GirlCanvas;
