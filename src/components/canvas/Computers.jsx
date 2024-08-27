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
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
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
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="relative z-10"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>

      {/* Down arrow button */}
      <div className="absolute bottom-5 w-full flex justify-center items-center z-20">
        <button onClick={handleScrollDown} className="text-white bg-gray-800 p-3 rounded-full shadow-md animate-bounce" style={{ fontSize: '24px', lineHeight: '24px' }}> Begin </button>
      </div>
    </div>
  );
};

export default ComputersCanvas;
