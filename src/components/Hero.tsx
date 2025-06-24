import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Model from "./ModelViewer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { TypewriterEffectSmoothDemo } from "./TypeWriteSmoothDemo";

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-20 pt-24 flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-12 lg:gap-0">
      {/** Content Section (Left) **/}
      <div className="lg:w-1/2 w-full px-6 md:px-8 lg:px-0 text-center lg:text-left">
        <p className="uppercase tracking-widest text-xs dark:text-blue-100 text-blue-600 hidden lg:block xl:block">
          <TypewriterEffectSmoothDemo />
        </p>

        <TextGenerateEffect
          words="Full Stack Developer- From Backend Logic to Frontend Magic"
          className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 dark:text-white text-[#1A202C] font-bold"
        />

        {/* <p className="text-center lg:text-left md:tracking-wider mt-4 mb-6 text-sm sm:text-md md:text-lg lg:text-2xl dark:text-gray-300 text-[#4A5568]">
          Hi, I'm Anjali Chourasia, a passionate Full Stack Developer specializing in 
          building exceptional digital experiences. With expertise in React, Node.js, 
          and modern web technologies, I transform ideas into elegant, efficient solutions.
        </p> */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#projects" onClick={scrollToProjects}>
            <MagicButton
              title="View My Projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/** 3D Model Section (Right) **/}
      <div className="lg:w-1/2 w-full flex justify-center items-center relative">
        <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[400px] md:h-[500px] lg:h-[696px] overflow-hidden">
          <Canvas
            camera={{
              position: [0, 1, 5],
              fov: 45,
            }}
            style={{ width: "100%", height: "100%" }}
          >
            {/** Ambient Light for global brightness **/}
            <ambientLight intensity={1.0} />

            {/** Native Directional Light **/}
            <directionalLight
              intensity={1.5}
              position={[-5, 10, -5]}
              castShadow
            />
            <directionalLight
              intensity={5.5}
              position={[-5, 10, -5]}
              castShadow
            />

            {/** Environment for HDR lighting **/}
            <Environment preset="sunset" background={false} />

            {/** OrbitControls with zoom disabled **/}
            <OrbitControls
              enableZoom={false}
              enablePan={true}
              enableRotate={true}
              autoRotate={false}
            />

            {/** Render the 3D Model **/}
            <group scale={[3.7, 3.7, 3.7]} position={[0, 1.6, 0]}>
              <Model modelPath="/forniteModel.glb" animationType="default" />
            </group>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
