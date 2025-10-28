"use client";

import { useEffect } from "react";
import ShinyText from "../components/ShinyText";
import { ChevronDown } from "lucide-react";

declare global {
  interface Window {
    particlesJS: {
      load: (id: string, path: string, callback: () => void) => void;
    };
  }
}

const HeroSection = () => {
  useEffect(() => {
    // Dynamically import particles.js only on client side
    const loadParticles = async () => {
      if (typeof window !== "undefined") {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;
        script.onload = () => {
          if (window.particlesJS) {
            window.particlesJS.load("particles-js", "/particlesjs-config.json", () => {
              console.log("Particles.js loaded!");
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    loadParticles();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* 🔹 Background Ripple / Particles */}
      <div className="absolute inset-0" id="particles-js"></div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* 🔹 Foreground Content */}
      <div className="relative z-20 container mx-auto px-6 pointer-events-none flex flex-col justify-center items-center text-center h-full max-w-3xl">
        <span className="uppercase text-gray-400 tracking-wider text-sm">
          Welcome to JAC O' Trades!
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
          <ShinyText
            text="WE TURN YOUR IDEAS INTO POWERFUL SOFTWARE SOLUTIONS"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          We specialize in designing and developing fast, stunning, and user-friendly websites tailored to your brand.
        </p>
      </div>

      {/* 🔹 Bottom “Get to Know More” text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white z-20">
        <p className="font-semibold text-lg tracking-wide">GET TO KNOW MORE</p>
        <ChevronDown className="w-6 h-6 mt-2 animate-bounce mx-auto inline" />
      </div>
    </section>
  );
};

export default HeroSection;
