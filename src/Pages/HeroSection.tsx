import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; 

    const ctx = canvas.getContext("2d");
    if (!ctx) return; 
    let width: number;
    let height: number;
    let points: Point[];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createPoints();
    };
      // Increase density: more points per screen area
    function createPoints() {
      const numPoints = Math.floor((width * height) / 20000);
      points = Array.from({ length: numPoints }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#6083fd";
      ctx.shadowColor = "#6083fd";
      ctx.shadowBlur = 15;

      // Draw glowing points
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connecting lines (extended distance for denser network)
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) { // increase from 150 → 200 for more links
            const alpha = 1 - dist / 200;
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.7})`; // slightly dimmer for balance
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="bg-black relative w-full h-screen overflow-hidden flex items-center justify-center">

      <canvas
        ref={canvasRef}
        id="network"
        className="absolute inset-0 w-full h-full"
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* 🔹 Foreground content */}
      <div className="relative z-20 container mx-auto px-6 pointer-events-none flex flex-col justify-center h-full md:flex-row items-center text-center md:text-left gap-8">
        <div className="md:w-1/2 z-10">
          <span className="uppercase text-gray-400 tracking-wider text-sm">
            Hello World! this is JAC
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
            Turn Your <span className="text-[#6083fd]">Ideas into Powerful Digital Solutions</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We specialize in crafting custom software, and web that drive business success.
          </p>
        </div>
      </div>

      {/* 🔹 Bottom “Get to Know More” text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white align-center z-20">
        <p className="font-semibold text-lg tracking-wide">
          GET TO KNOW MORE
        </p>
        <ChevronDown className="w-6 h-6 mt-2 animate-bounce mx-auto inline" />
      </div>
    </section>
  );
};

export default HeroSection;