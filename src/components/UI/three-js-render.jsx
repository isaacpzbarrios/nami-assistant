import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Plane from "../3D/shapes-three-js/plane";
import NamiBot from "./nami-bot";
import { Model } from "./nami";


function Scene3D() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[45, window.innerWidth / window.innerHeight, 1, 2000]} />
      <OrbitControls />
      <ambientLight intensity={2.5} color="#ffffff" />
      <pointLight position={[10, 10, 10]} />
      {/* Aquí irán tus objetos 3D */}
      <Suspense fallback={null}>
        <Model/>
      </Suspense>
      <Plane />
    </Canvas>
  );
}

export default Scene3D;
