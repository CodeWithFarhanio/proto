import React from 'react';
import { Search } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#2d3243] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Header */}
      <header className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border-2 border-slate-300 flex items-center justify-center">
            <div className="w-3 h-3 border border-slate-300" />
          </div>
          <span className="tracking-widest font-light text-sm text-slate-200">
            CONSTRUCTION
          </span>
        </div>

        {/* Navigation Links & Search */}
        <nav className="flex items-center gap-8 text-xs tracking-wider text-slate-300 uppercase">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          
          <div className="flex items-center gap-2 bg-slate-700/40 border border-slate-600/50 rounded px-2 py-1">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-xs text-white w-16 focus:w-24 transition-all placeholder-slate-400"
            />
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 py-12">
        {/* Hero Text */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl md:text-5xl font-extralight tracking-widest leading-tight uppercase">
            Start Building <br />
            Your Future.
          </h1>
          
          <p className="text-slate-400 text-xs leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore.
          </p>

          <button className="px-6 py-2.5 bg-slate-500/30 border border-slate-400/30 text-xs tracking-widest uppercase hover:bg-slate-500/50 transition-colors">
            Learn More
          </button>
        </div>

        {/* Isometric 3D Graphic Container */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* 3D Scene Layer / Graphic */}
            <div className="w-full h-full bg-gradient-to-tr from-pink-200/20 via-purple-300/30 to-indigo-200/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl flex flex-col items-center justify-center">
              <span className="text-slate-400 text-xs tracking-widest uppercase font-light">
                [ 3D Graphic Viewport ]
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}