"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, GradientTexture, MeshWobbleMaterial } from "@react-three/drei";

const LogicNode = ({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) => {
    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
            <mesh position={position}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={speed}
                    roughness={0}
                />
            </mesh>
        </Float>
    );
};

const About3DCanvas = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 1, 1]} />

                    <LogicNode position={[0, 0, 0]} color="#38bdf8" speed={2} distort={0.4} />
                    <LogicNode position={[-2, 1.5, -1]} color="#818cf8" speed={1.5} distort={0.2} />
                    <LogicNode position={[2, -1.5, -0.5]} color="#0ea5e9" speed={2.5} distort={0.5} />

                </Suspense>
            </Canvas>
        </div>
    );
};

export default About3DCanvas;
