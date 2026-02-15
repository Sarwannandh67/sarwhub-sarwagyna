import React from "react";
import { SparklesCore } from "./ui/sparkles.tsx";

export const SparklesSection = () => {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage-sarw"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h2 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tighter">
          The Future <span className="metal italic">is brighter</span>
        </h2>
        <p className="text-white/40 cursor-default text-center text-lg md:text-xl font-medium tracking-widest uppercase">
          Build your legacy with SarwHub
        </p>
      </div>
      
      {/* Decorative Gradients similar to demo */}
      <div className="w-[40rem] h-40 relative mt-8">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent h-px w-1/4" />
        
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};