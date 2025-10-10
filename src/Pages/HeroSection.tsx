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
        borderColor="#181f20"
        hoverFillColor="#6083fd"
        className="absolute inset-0 w-full h-full z-10"
      />

      {/* 🔹 Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔹 Foreground content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full md:flex-row items-center text-center md:text-left gap-8">
        <div className="md:w-1/2 z-10">
          <span className="uppercase text-gray-400 tracking-wider text-sm">
            WELCOME TO JAC O' TRADES
          </span>
          <span className="block text-gray-400 text-sm mb-2">
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight ">
            LOOKING FOR FUTURISTIC WEBSITES?<span className="text-[#6083fd]">COME TO US!</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We specialize in creating modern, responsive, and user-friendly websites that stand out. Whether you need a personal blog, a business site, or an e-commerce platform, we've got you covered.
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
