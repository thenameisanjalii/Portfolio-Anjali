import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, MotionProps } from "framer-motion";
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (link === "#") {
      // For home button, scroll to top with a small delay to ensure smooth animation
      window.scrollTo({
        top: 0,
        behavior: "smooth"
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
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...{
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
            "flex max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto px-6 py-3 rounded-full items-center justify-center space-x-4",
            "border dark:border-white/10 border-[#E2E8F0]",
            "dark:bg-black/80 bg-white/60",
            "dark:text-white text-[#2D3748]",
            className
          ),
          style: {
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px -4px rgba(0, 0, 0, 0.1)",
          }
        } as MotionProps}
      >
        <div className="flex items-center space-x-4">
          {navItems.map((navItem: NavItem, idx: number) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => handleClick(e, navItem.link)}
              className={cn(
                "relative items-center flex space-x-1 transition-colors",
                "dark:text-white/90 text-[#4A5568]",
                "dark:hover:text-white hover:text-[#2D3748]",
                "px-3 py-1 rounded-full dark:hover:bg-white/10 hover:bg-[#EDF2F7]"
              )}
            >
              <span className="block sm:hidden text-lg">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            </a>
          ))}
          <div className="border-l dark:border-white/10 border-[#E2E8F0] pl-4">
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
