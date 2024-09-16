import { TypewriterEffectSmooth } from "../../../components/ui/TypewriterEffect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Web",
    },
    {
      text: "Developer",
      className: "text-purple-600 dark:text-purple-600",
    },
  ];

  return (
    <div className="flex flex-col">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
