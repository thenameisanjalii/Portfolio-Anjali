import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import Model from "./ModelViewer";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
import { TypewriterEffectSmoothDemo } from "./TypeWriteSmoothDemo";
import { BackgroundLines } from "./ui/background-lines";

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BackgroundLines>
      <div className="pb-20 pt-24 flex flex-col items-center justify-center text-center min-h-[80vh] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-500/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-600/25 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-yellow-400/20 rounded-full animate-pulse delay-700"></div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 rounded-full blur-xl animate-float-delayed"></div>
        </div>

        {/** Enhanced Content Section with glass morphism **/}
        <div className="max-w-4xl w-full px-6 md:px-8 relative z-10">
          <div className="group bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-yellow-200/20 dark:border-yellow-600/20 shadow-2xl hover:shadow-yellow-400/10 hover:border-yellow-400/30 transition-all duration-500">
            {/* Add floating tech icons */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-sm">⚡</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 delay-100">
              <span className="text-sm">🚀</span>
            </div>

            <div className="uppercase tracking-widest text-xs dark:text-theme-primary-200 text-theme-primary-600 mb-6 text-center">
              <TypewriterEffectSmoothDemo />
            </div>

            {/* Enhanced gradient line */}
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full shadow-md"></div>

            <TextGenerateEffect
              words="Full Stack Developer- From Backend Logic to Frontend Magic"
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 dark:text-white text-theme-neutral-900 font-bold group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300"
            />

            {/* Enhanced tagline with emojis */}
            <p className="text-center mt-6 mb-8 text-lg md:text-xl dark:text-gray-300 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              🎯 Turning ideas into{" "}
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                digital reality
              </span>
              <br />✨ One line of code at a time
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#projects" onClick={scrollToProjects}>
                <MagicButton
                  title="View My Projects"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
