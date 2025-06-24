import React, { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils"; // Adjust based on your file structure
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem: React.FC<{
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}> = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const leftLists = ["ReactJS", "JavaScript", "Typescript"];
  const rightLists = ["Express", "NodeJS", "NextJS"];

  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "anjalichourasia636@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setIsPlaying(true);
    setTimeout(() => {
      setCopied(false);
      setIsPlaying(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl border transition-all duration-300 justify-between flex flex-col",
        "dark:border-white/[0.1] border-gray-200/70",
        "dark:bg-[#04071D]/80 bg-white/90",
        "hover:border-gray-300 dark:hover:border-white/[0.2]",
        "backdrop-blur-sm",
        className,
        id === 6 ? "dark:bg-black/50 bg-white/90" : ""
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full relative`}>
        <div className="w-full h-full absolute transition-opacity duration-500">
          {img && (
            <img
              src={img}
              alt="background"
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full transition-opacity duration-300",
                "opacity-0",
                id === 6
                  ? "!opacity-0"
                  : imgClassName?.includes("lightModeSupport")
                  ? "dark:opacity-90 opacity-[0.08] group-hover/bento:opacity-[0.12]"
                  : "dark:opacity-90 opacity-0"
              )}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5 transition-opacity duration-300",
            id === 5 && "w-full",
            id === 6
              ? "!opacity-0"
              : imgClassName?.includes("lightModeSupport")
              ? "dark:opacity-90 opacity-[0.08] group-hover/bento:opacity-[0.12]"
              : "dark:opacity-90 opacity-0"
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="spare"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 bg-clip-text text-transparent relative">
                <span className="relative z-10">
                  Ready to create something extraordinary together?
                </span>
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-500/20 dark:to-blue-500/20 -z-10"></span>
              </div>
            </div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "transition-all duration-300 relative md:h-full min-h-40 flex flex-col p-6 lg:p-8",
            "group-hover/bento:translate-x-1"
          )}
        >
          <div className="font-sans font-light md:max-w-32 md:text-xs lg:text-sm text-sm dark:text-[#C1C2D3] text-gray-600 z-10 relative mb-2">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-2xl max-w-96 font-semibold dark:text-white/90 text-gray-800 z-10 relative">
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-2 lg:gap-4 w-fit absolute -right-2 lg:-right-1">
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-6">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-4 py-2 px-3 text-xs lg:text-sm
                    rounded-lg text-center transition-colors duration-300
                    dark:bg-[#10132E]/80 bg-gray-100/80
                    dark:text-white/80 text-gray-800
                    backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-4 py-2 px-3 rounded-lg text-center dark:bg-[#10132E]/80 bg-gray-100/80 backdrop-blur-sm"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-6">
                <span className="lg:py-3 lg:px-4 py-2 px-3 rounded-lg text-center dark:bg-[#10132E]/80 bg-gray-100/80 backdrop-blur-sm"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-4 py-2 px-3 text-xs lg:text-sm
                    rounded-lg text-center transition-colors duration-300
                    dark:bg-[#10132E]/80 bg-gray-100/80
                    dark:text-white/80 text-gray-800
                    backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={cn(
                  "absolute inset-0 pointer-events-none z-50",
                  isPlaying ? "opacity-100" : "opacity-0"
                )}
              >
                <Lottie
                  options={{
                    ...defaultOptions,
                    autoplay: true,
                  }}
                  height={400}
                  width={400}
                  style={{
                    position: "absolute",
                    top: "-150px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                  }}
                  isStopped={!isPlaying}
                />
              </div>

              <MagicButton
                title={copied ? "Email Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="dark:!bg-[#161A31]/90 !bg-gray-100/80 backdrop-blur-sm hover:!bg-gray-200/80 dark:hover:!bg-[#161A31]
                  border border-gray-200/50 dark:border-white/[0.1]
                  relative z-20 pointer-events-auto
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
