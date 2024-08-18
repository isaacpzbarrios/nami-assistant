import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

import HolographicMaterial from "../../assets/shaders/HolographicMaterial"

function NamiBot({ url, animationUrls }) {
  const fbx = useLoader(FBXLoader, url);
  const hologramMaterial = useRef();

  useEffect(() => {
    hologramMaterial.current = new HolographicMaterial({
      time: 0.0,
      fresnelOpacity: 0.5,
      fresnelAmount: 1.5,
      scanlineSize: 10.0,
      hologramBrightness: 2.0,
      signalSpeed: 1.0,
      hologramColor: '#51a4de',
      enableBlinking: false,
      blinkFresnelOnly: false,
      hologramOpacity: 1.0,
      blendMode: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      depthTest: true
    });

    fbx.scale.set(0.1, 0.1, 0.1);
    fbx.position.y = -10;

    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material = hologramMaterial.current;
      }
    });
  }, [fbx]);

  useFrame(() => {
    if (hologramMaterial.current) {
      hologramMaterial.current.update();
    }
  });

  return <primitive object={fbx} />;
}

export default NamiBot;