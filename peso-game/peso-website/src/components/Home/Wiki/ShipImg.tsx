import React, { FC, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";

interface ShipImgProps {
  glbUrl: string;
}

const ShipImg: FC<ShipImgProps> = ({ glbUrl }) => {
  console.log("glbUrl", glbUrl);
  const ship = useLoader(GLTFLoader, glbUrl);
  console.log("ship1", ship);
  return (
    <>
      {ship.scene && (
        <mesh>
          <primitive
            object={ship.scene}
            dispose={null}
            position={[0, -3, 0]}
            scale={1.3}
          />
          <hemisphereLight intensity={2} />
          position={[20, 20, 20]}
          <pointLight intensity={5} />
        </mesh>
      )}
    </>
  );
};

export default ShipImg;
