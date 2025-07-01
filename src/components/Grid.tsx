import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data"; // Adjust the import path based on your project structure

const Grid: React.FC = () => {
  return (
    <section id="about" className="relative hidden dark:block">
      <div className="absolute inset-0 dark:bg-yellow-950/10 bg-yellow-50/30 backdrop-blur-3xl"></div>
      <div className="relative">
        <BentoGrid className="max-w-[1600px] mx-auto w-full py-12 px-4 sm:px-6 lg:py-16">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
