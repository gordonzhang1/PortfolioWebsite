"use client";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "i",
      className: "text-white !select-none",
    },
    {
      text: "I'm",
    },
    {
      text: "i",
      className: "text-white !select-none",
    },
    {
      text: "Gordon",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "i",
      className: "text-white !select-none",
    },
  ];
  return (
    <div className="h-[55rem] w-full dark:bg-black bg-white  dark:bg-dot-black/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div
        className="flex flex-col items-center justify-center h-[50rem] mb-24"
        style={{ fontFamily: "space grotesk" }}
      >
        <p className="text-neutral-800 dark:text-neutral-600 text-xs sm:text-base z-10">
          Computer Engineering Student at The University of Waterloo
        </p>
        <TypewriterEffectSmooth words={words} className="z-10" />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-10">
          <a
            href="/Gordon_Zhang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-32 h-10 rounded-xl bg-black text-white text-sm font-bold">
              Resume
            </button>
          </a>
          <a href="#contact">
            <button className="w-32 h-10 rounded-xl bg-gray-300  text-black text-sm font-bold">
              Contact
            </button>
          </a>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
