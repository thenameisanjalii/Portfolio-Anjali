import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  MotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    if (link === "#") {
      // For home button, scroll to top with a small delay to ensure smooth animation
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // For other links, scroll to the section with offset
      const element = document.querySelector(link);
      if (element) {
        const offset = 100; // Adjust this value to control the scroll position
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...({
          initial: {
            opacity: 1,
            y: -100,
          },
          animate: {
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          },
          transition: {
            duration: 0.2,
          },
          className: cn(
            "flex max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto rounded-full items-center justify-center",
            "px-3 py-2 md:px-6 md:py-3",
            "border dark:border-theme-neutral-300/10 border-theme-neutral-200",
            "dark:bg-theme-neutral-900/80 bg-theme-neutral-50/60",
            "dark:text-white text-theme-neutral-800",
            className
          ),
          style: {
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px -4px rgba(0, 0, 0, 0.1)",
          },
        } as MotionProps)}
      >
        <div className="flex items-center space-x-2 md:space-x-4">
          {navItems.map((navItem: NavItem, idx: number) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => handleClick(e, navItem.link)}
              className={cn(
                "relative items-center flex transition-colors",
                "dark:text-white/90 text-theme-neutral-600",
                "dark:hover:text-white hover:text-theme-neutral-800",
                "px-2 py-1 md:px-3 md:py-1 rounded-full dark:hover:bg-theme-neutral-300/10 hover:bg-theme-neutral-200"
              )}
            >
              {/* Mobile: Show only icons with responsive sizes */}
              <span className="block md:hidden text-xs sm:text-sm">
                {navItem.icon}
              </span>

              {/* Desktop: Show icon + text */}
              <span className="hidden md:flex items-center space-x-2">
                <span className="text-base">{navItem.icon}</span>
                <span className="text-sm font-medium">{navItem.name}</span>
              </span>
            </a>
          ))}
          <div className="border-l dark:border-theme-neutral-300/10 border-theme-neutral-200 pl-2 md:pl-4">
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
