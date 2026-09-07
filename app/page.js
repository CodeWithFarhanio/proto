import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Skills from './component/skills';
import About from './component/About';
import Expertise from './component/Expertise';
export default function LandingPage() {
  return (
    <div>
       <Navbar />
            <Hero className="min-h-screen" />
            <About />
            <Expertise />
            <Skills />
    </div>


  );
}