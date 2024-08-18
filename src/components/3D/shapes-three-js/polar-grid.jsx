import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function PolarGridHelper({ size, divisions, position }) {
  const [helper, setHelper] = useState(null);

  useEffect(() => {
    const gridHelper = new THREE.PolarGridHelper(size, divisions);
    gridHelper.position.set(...position);
    gridHelper.castShadow = false;
    gridHelper.receiveShadow = true;
    setHelper(gridHelper);
  }, [size, divisions, position]);

  return helper ? <primitive object={helper} /> : null;
}

export default PolarGridHelper;
