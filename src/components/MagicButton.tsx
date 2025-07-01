import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-black"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fef9c3_0%,#facc15_50%,#fef9c3_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fef08a_0%,#eab308_50%,#fef08a_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
        px-7 text-sm font-medium backdrop-blur-3xl gap-2 
        dark:bg-theme-neutral-900 dark:text-white
        bg-white text-theme-neutral-800
        dark:hover:bg-theme-neutral-800 hover:bg-theme-neutral-50
        transition-colors duration-200
        ${otherClasses}`}
      >
        {position === "left" && (
          <span className="dark:text-theme-yellow-400 text-theme-yellow-600">
            {icon}
          </span>
        )}
        {title}
        {position === "right" && (
          <span className="dark:text-theme-yellow-400 text-theme-yellow-600">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
