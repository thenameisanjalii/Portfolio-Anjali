import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Bringing",
    },
    {
      text: "Code ",
    },
    {
      text: "To ",
    },
    {
      text: "Life.",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];
  return (
    <div className="flex justify-center items-center text-center w-full">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
