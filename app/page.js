import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Skills from './component/skills';

export default function LandingPage() {
  return (
    <div>
      <Navbar className="sticky top-0" />
      <Hero className="min-h-[80vh]" />
      <Skills className="min-h-[80vh]" />



    </div>


  );
}