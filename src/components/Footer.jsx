import React from "react";
import { BackgroundLines } from "./ui/background-lines";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <BackgroundLines
        className="rounded-xl flex items-center sm:max-h-20 md:max-h-62.5 lg:max-h-100 justify-center w-full flex-col px-4"
        svgOptions={{
          duration: 10,
          strokeWidth: 2,
          opacity: 0.5,
        }}
      >
        <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-300 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Dhruvin Patel
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a project in mind or just want to chat about tech,
          I'd love to hear from you.
        </p>
        <a className="bg-neutral-100 rounded-lg px-2 py-0.5 mt-1">
          Get in Touch
        </a>
      </BackgroundLines>
    </div>
  );
};

export default Footer;
