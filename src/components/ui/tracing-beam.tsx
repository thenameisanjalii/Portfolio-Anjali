import React, { RefObject, useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const updateSvgHeight = () => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Initial height update
    updateSvgHeight();

    // Update height on window resize
    window.addEventListener("resize", updateSvgHeight);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSvgHeight);
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 500]), // Adjusted y2 value
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn("relative w-full mx-auto h-full", className)}>
        <div className="absolute -left-4 md:-left-20 top-3 hidden md:block">
          <div className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center">
            <motion.div
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
              animate={{
                boxShadow:
                  scrollYProgress.get() > 0
                    ? "none"
                    : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <div className="h-2 w-2 rounded-full border border-neutral-300 bg-white hidden md:block">
                <motion.div
                  transition={{
                    duration: 0.2,
                    delay: 0.5,
                  }}
                  animate={{
                    backgroundColor:
                      scrollYProgress.get() > 0
                        ? "white"
                        : "var(--theme-yellow-500)",
                    borderColor:
                      scrollYProgress.get() > 0
                        ? "white"
                        : "var(--theme-yellow-600)",
                  }}
                />
              </div>
            </motion.div>
          </div>
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight} // Set the SVG height dynamically
            className="ml-4 block"
            aria-hidden="true"
          >
            {/** Outer Path with Bold Stroke **/}
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${
                svgHeight * 0.8
              } l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.3"
              strokeWidth="2.5" // Increased stroke width
              transition={{
                duration: 10,
              }}
            ></motion.path>

            {/** Gradient Path with Bold Stroke **/}
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${
                svgHeight * 0.8
              } l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2.5" // Increased stroke width
              className="motion-reduce:hidden"
              transition={{
                duration: 10,
              }}
            ></motion.path>

            {/** Gradient Definition **/}
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1} // set y1 for gradient
                y2={y2} // set y2 for gradient
              >
                <stop stopColor="#FCD34D" stopOpacity="0"></stop>
                <stop stopColor="#FCD34D"></stop>
                <stop offset="0.325" stopColor="#F59E0B"></stop>
                <stop offset="1" stopColor="#EAB308" stopOpacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
        <div ref={contentRef}>{children}</div>
      </div>
    </motion.div>
  );
};
