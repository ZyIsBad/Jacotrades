import { ChevronDown } from "lucide-react";
import Squares from "../components/Squares";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* 🔹 Animated background */}
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#170d27"
        hoverFillColor="#6083fd"
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 🔹 Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>

      {/* 🔹 Foreground content */}
      <div className="relative z-20 container mx-auto px-6 pointer-events-none flex flex-col justify-center h-full md:flex-row items-center text-center md:text-left gap-8">
        <div className="md:w-1/2 z-10">
          <span className="uppercase text-gray-400 tracking-wider text-sm">
            Hello World! this is JAC
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight ">
            Turn Your <span className="text-[#6083fd]">Ideas into Powerful Digital Solutions</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We specialize in crafting custom software, and web that drive business success.
          </p>
          {/* <div className="mt-6">
            <a
              href="#about"
              className="button inline-block p-8 rounded-full bg-[#9B5DE5] text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Get Started
            </a>
          </div> */}
        </div>
      </div>

      {/* 🔹 Bottom “Get to Know More” text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white align-center">
        <p className="font-semibold text-lg tracking-wide">
          GET TO KNOW MORE
        </p>
        <ChevronDown className="w-6 h-6 mt-2 animate-bounce mx-auto inline" />
      </div>
    </section>
  );
};

export default HeroSection;
