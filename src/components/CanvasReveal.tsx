import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function CanvasRevealEffectDemo() {
  return (
    <div className="text-center flex flex-col items-center">
      <TextGenerateEffect
        words="Built with Purpose, Powered by Curiosity"
        className="text-center lg:text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 mb-4 dark:text-white text-theme-neutral-900"
      />
      <p className="text-theme-neutral-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
        I see development as more than just functionality—it's storytelling
        through systems. Each project is a small expression of intent,
        exploration, and growth.
      </p>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="Ideas that Stick" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-yellow-800"
          />
          <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-yellow-500 to-yellow-800" />
        </Card>
        <Card title="Systems that Scale" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-900"
            colors={[
              [234, 179, 8],
              [202, 138, 4],
            ]}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-gradient-to-br from-yellow-400 to-yellow-700" />
        </Card>
        <Card title="Growth in Every Project" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-600"
            colors={[[250, 204, 21]]}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-600" />
        </Card>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-theme-neutral-900 dark:text-white mb-4">
          Let's Turn Ideas Into Impact
        </h3>
        <p className="text-theme-neutral-600 dark:text-gray-400 text-lg">
          Driven by clarity and curiosity, I develop scalable, user-focused
          solutions that solve real problems.
        </p>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-theme-neutral-900" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-theme-neutral-900" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-theme-neutral-900" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-theme-neutral-900" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-theme-neutral-900 text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-white opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300 delay-100 mt-2 px-4 text-sm">
          {title === "Ideas that Stick" &&
            "I build tools and apps that people actually want to use—useful, not just usable."}
          {title === "Systems that Scale" &&
            "Under every clean UI lies structured logic, thoughtful architecture, and smooth flow."}
          {title === "Growth in Every Project" &&
            "From first commit to final deploy, I evolve with every line of code I write."}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-theme-neutral-900 dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
