import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [scale, setScale] = useState(0.75); // Default scale
  const [position, setPosition] = useState([0, -3.25, -1.5]); // Default position

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setScale(0.75); // Large screens
        setPosition([0, -3.25, -1.5]); // Adjust position for large screens
      } else if (window.innerWidth <= 1024 && window.innerWidth > 500) {
        setScale(0.7); // Medium screens
        setPosition([0, -3, -1.5]); // Adjust position for medium screens
      } else {
        setScale(0.45); // Small screens
        setPosition([0, -2.5, -1.2]); // Adjust position for small screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the correct scale and position

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position} // Adjusted position based on screen size
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
