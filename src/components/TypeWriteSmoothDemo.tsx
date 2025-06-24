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
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
