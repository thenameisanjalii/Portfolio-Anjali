import React from "react";

export const AnimatedTooltip: React.FC<{
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}> = ({ items }) => {
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <div key={item.id} className="relative group">
          <img
            src={item.image}
            alt={item.name}
            style={{
              height: "3.5rem",
              width: "3.5rem",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid white",
              transition: "transform 0.5s ease",
            }}
            className="object-top"
          />
        </div>
      ))}
    </div>
  );
};
