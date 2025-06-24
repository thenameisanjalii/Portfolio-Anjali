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
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-black"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C5FD_0%,#3B82F6_50%,#93C5FD_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
          px-7 text-sm font-medium backdrop-blur-3xl gap-2 
          dark:bg-slate-950 dark:text-white
          bg-white text-[#2D3748]
          dark:hover:bg-slate-900 hover:bg-gray-50
          transition-colors duration-200
          ${otherClasses}`}
      >
        {position === "left" && (
          <span className="dark:text-blue-200 text-blue-600">{icon}</span>
        )}
        {title}
        {position === "right" && (
          <span className="dark:text-blue-200 text-blue-600">{icon}</span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
