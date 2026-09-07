"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  const tech = [
    { name: "JS", className: "left-[440px] top-[80px] bg-[#f0d629] text-black rotate-[-8deg]" },
    { name: "CSS", className: "left-[170px] top-[330px] bg-[#1477d4] text-white rotate-[8deg]" },
    { name: "HTML", className: "left-[430px] top-[430px] bg-[#ef5928] text-white rotate-[10deg]" },
    { name: "R", className: "left-[300px] top-[250px] bg-transparent text-[45px] text-[#61dafb]" },
    { name: "🔥", className: "left-[140px] top-[100px] bg-transparent text-[38px]" },
    { name: "✦", className: "left-[280px] top-[10px] bg-transparent text-[45px] text-[#32d35f]" },
  ];

  return (
    <ScrollReveal type="scale">
      <main className="min-h-screen bg-black text-white py-[70px]">

        {/* BACKGROUND GRID */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black_10%,rgba(0,0,0,.9)_100%,transparent_100%)]" />

        <section className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10 lg:px-8">

          {/* TOP LABEL */}
          <div className="relative z-10 mb-[70px] flex items-center gap-[14px] font-sans text-[11px] font-bold tracking-[2px] text-[#686868]">
            <span className="text-[#d0d0d0]">02</span>
            <span>—</span>
            <span>PORTFOLIO / ABOUT</span>
          </div>

          {/* MAIN LAYOUT */}
          <div className="flex">

            {/* LEFT */}
            <div>

              {/* HEADING LABEL */}
              <div className="mb-8 flex items-center gap-5">
                <span className="h-px w-18 bg-[#d8bd76] sm:w-18 md:w-36" />
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/50">Who am I?</span>
              </div>

              {/* MAIN HEADING */}
              <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="mb-[60px] flex flex-col font-sans text-[clamp(65px,7vw,110px)] font-extrabold leading-[.82] tracking-[-6px] max-[650px]:mb-[40px] max-[650px]:text-[clamp(58px,17vw,90px)] max-[650px]:tracking-[-4px]">

                {/* MAIN HEADING TEXT */}
                <div className="text-3xl font-semibold uppercase tracking-[0.01em] sm:text-6xl md:text-7xl lg:text-[6vw]">
                  Hey
                  <br />
                  <span className="text-[#d8bd76]">I'M Farhan</span>
                  <br />
                  a passionate
                  <br />
                  <span className="text-[#d8bd76]">Web Developer.</span>
                </div>

              </motion.h1>

              {/* DESCRIPTION */}
              <div className="mt-10 max-w-2xl">

                <p className="text-sm font-extralight leading-7 text-white/50 sm:text-base">
                  I'm a passionate Web Developer who enjoys turning ideas into modern, responsive, and interactive digital experiences. I love combining clean code with creative design to create websites that are smooth, intuitive, and visually engaging.
                </p>

                {/* FLOATING TECH ITEMS */}
                <div className="pointer-events-none absolute right-[5%] top-[18%] hidden h-[550px] w-[500px] lg:block">
                  {tech.map((item, index) => (
                    <motion.div key={item.name} animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }} transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }} className={`pointer-events-none absolute flex h-[65px] w-[65px] select-none items-center justify-center rounded-[10px] font-sans text-[22px] font-extrabold shadow-[0_20px_50px_rgba(0,0,0,.5)] ${item.className}`}>
                      {item.name}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* INFO GRID */}
              <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">

                {/* ROLE */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Role</p>
                  <p className="mt-2 text-sm uppercase">Full Stack</p>
                </div>

                {/* FOCUS */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Focus</p>
                  <p className="mt-2 text-sm uppercase">Web / Motion</p>
                </div>

                {/* STACK */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Stack</p>
                  <p className="mt-2 text-sm uppercase">Next.js</p>
                </div>

                {/* STATUS */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Status</p>
                  <p className="mt-2 text-sm uppercase text-[#d8bd76]">Available</p>
                </div>

              </div>

              {/* BOTTOM CTA */}
              <div className="mt-12 flex items-center gap-6">
                <button className="group flex items-center gap-4 border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-[#d8bd76]">
                  Explore More
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>
    </ScrollReveal>
  );
}