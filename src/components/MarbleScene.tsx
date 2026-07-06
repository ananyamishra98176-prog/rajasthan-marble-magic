import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh, Group } from "three";

function CarvedPillar({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });
  return (
    <mesh ref={ref} position={position} castShadow receiveShadow>
      <cylinderGeometry args={[0.55, 0.7, 2.4, 64, 8, false]} />
      <meshPhysicalMaterial
        color="#f5f0e6"
        roughness={0.18}
        metalness={0.05}
        clearcoat={0.6}
        clearcoatRoughness={0.2}
        sheen={0.5}
        sheenColor="#c8a25a"
      />
    </mesh>
  );
}

function MarbleOrb() {
  const group = useRef<Group>(null);
  const orb = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
    if (orb.current) {
      orb.current.rotation.x = state.clock.elapsedTime * 0.2;
      orb.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={orb} castShadow>
          <icosahedronGeometry args={[1.15, 8]} />
          <MeshDistortMaterial
            color="#faf5ea"
            speed={1.4}
            distort={0.28}
            radius={1}
            roughness={0.12}
            metalness={0.15}
          />
        </mesh>
      </Float>
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[1.55, 1.75, 128]} />
        <meshStandardMaterial color="#b98a3d" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[1.85, 1.9, 128]} />
        <meshStandardMaterial color="#8b6626" metalness={0.9} roughness={0.35} />
      </mesh>
    </group>
  );
}

export default function MarbleScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#e9c98a" />
      <Suspense fallback={null}>
        <MarbleOrb />
        <CarvedPillar position={[-2.6, -0.4, -0.8]} />
        <CarvedPillar position={[2.6, -0.4, -0.8]} />
        <ContactShadows
          position={[0, -1.35, 0]}
          opacity={0.5}
          scale={10}
          blur={2.4}
          far={4}
          color="#3a2a12"
        />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}