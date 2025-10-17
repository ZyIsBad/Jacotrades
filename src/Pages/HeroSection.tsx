"use client";

import { ChevronDown } from "lucide-react";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* 🔹 Background Ripple Effect */}
      <div className="absolute inset-0">
        <BackgroundRippleEffect />
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* 🔹 Foreground Content */}
      <div className="relative z-20 container mx-auto px-6 pointer-events-none flex flex-col justify-center items-center text-center h-full max-w-3xl">
        <span className="uppercase text-gray-400 tracking-wider text-sm">
          Hello World! this is JAC
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
          Turn Your <span className="text-[#6083fd]">Ideas into Powerful Digital Solutions</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Startup and Small Business Web Development Specialist
        </p>
      </div>

      {/* 🔹 Bottom “Get to Know More” text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white z-20">
        <p className="font-semibold text-lg tracking-wide">
          GET TO KNOW MORE
        </p>
        <ChevronDown className="w-6 h-6 mt-2 animate-bounce mx-auto inline" />
      </div>
    </section>
  );
};

export default HeroSection;
