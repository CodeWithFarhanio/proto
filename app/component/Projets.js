
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { anton } from "../components/Anton";

export default function Project() {
  const text = "PROJECTS";
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* =========================
     CONTAINER 1
  ========================= */

  const container1X = useTransform(scrollYProgress, [0.05, 0.20], ["0%", "-100%"]);

  const container1Opacity = useTransform(scrollYProgress, [0.12, 0.20], [1, 0]);

  const container1Scale = useTransform(scrollYProgress, [0.05, 0.20], [1, 0.9]);

  /* =========================
     CONTAINER 2
  ========================= */

  const container2X = useTransform(scrollYProgress, [0.12, 0.25], ["100%", "0%"]);

  const container2Scale = useTransform(scrollYProgress, [0.12, 0.25], [0.92, 1]);

  /* =========================
     PROJECT 1
  ========================= */

  const project1Y = useTransform(
    scrollYProgress,
    [0.25, 0.32, 0.40, 0.46],
    ["40vh", "0vh", "0vh", "-12vh"]
  );

  const project1Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.32, 0.40, 0.46],
    [0, 1, 1, 0]
  );

  const project1Scale = useTransform(
    scrollYProgress,
    [0.25, 0.32, 0.40, 0.46],
    [0.94, 1, 1, 0.96]
  );

  /* =========================
     PROJECT 2
  ========================= */

  const project2Y = useTransform(
    scrollYProgress,
    [0.46, 0.53, 0.61, 0.67],
    ["40vh", "0vh", "0vh", "-12vh"]
  );

  const project2Opacity = useTransform(
    scrollYProgress,
    [0.46, 0.53, 0.61, 0.67],
    [0, 1, 1, 0]
  );

  const project2Scale = useTransform(
    scrollYProgress,
    [0.46, 0.53, 0.61, 0.67],
    [0.94, 1, 1, 0.96]
  );

  /* =========================
     PROJECT 3
  ========================= */
  const project3Y = useTransform(
  scrollYProgress,
  [0.67, 0.74, 0.82, 1],
  ["40vh", "0vh", "0vh", "0vh"]
);

const project3Opacity = useTransform(
  scrollYProgress,
  [0.67, 0.74, 0.82, 1],
  [0, 1, 1, 1]
);

const project3Scale = useTransform(
  scrollYProgress,
  [0.67, 0.74, 0.82, 1],
  [0.94, 1, 1, 1]
);

  return (
    <main className="bg-transparent text-black/90">
      <section id="project" ref={sectionRef} className="relative h-[410vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* TOP LINE */}
          <div className="pointer-events-none absolute left-[25%] top-0 h-[1px] w-[50%] bg-gradient-to-r from-transparent via-black/50 to-transparent" />

          {/* TOP LABEL */}
          <div className="relative z-50 flex items-center gap-[14px] px-6 pt-15 font-sans text-[11px] font-bold tracking-[2px] text-black/70">
            <span className="text-black">04</span>
            <span>—</span>
            <span>PROJECT</span>
          </div>

          {/* =========================
              CONTAINER 1
          ========================= */}

          <motion.div
            style={{
              x: container1X,
              opacity: container1Opacity,
              scale: container1Scale,
            }}
            className="absolute inset-0 z-10 flex h-screen w-screen items-center justify-center"
          >
            <div className="flex scale-y-[2] items-center justify-center">
              {text.split("").map((letter, index) => (
                <motion.h1
                  key={index}
                  initial={{
                    y: -120,
                    opacity: 0,
                    scaleY: 1.4,
                    scaleX: 0.8,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scaleY: 1,
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`${anton.className} inline-block select-none text-center text-[80px] leading-none text-black sm:text-[120px] md:text-[180px] lg:text-[180px]`}
                >
                  {letter}
                </motion.h1>
              ))}
            </div>

            <span className="absolute top-[73%] mt-10 origin-center text-[#00000054] sm:top-[73%] md:top-[85%]">
              scroll down to explore
            </span>
          </motion.div>

          {/* =========================
              CONTAINER 2
          ========================= */}

          <motion.div
            style={{
              x: container2X,
              scale: container2Scale,
            }}
            className="absolute inset-0 z-20 h-screen w-screen overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">

              {/* =========================
                  PROJECT 1
              ========================= */}

              <motion.div
                style={{
                  y: project1Y,
                  opacity: project1Opacity,
                  scale: project1Scale,
                }}
                className="absolute inset-0 flex h-screen w-full items-center justify-center p-7 sm:p-10"
              >
                <div className="relative flex h-[70vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center overflow-hidden rounded-[30px] border bg-[#121b1fda] font-sans backdrop-blur-xl">
                  <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-center sm:px-10 lg:px-16">

                    <div><a href="https://nexora-ten-mocha.vercel.app/"
                      target="_blank"
                      className="hover:text-[#aa0000]"
                    >

                      <button className="group absolute right-5 sm:right-5 md:right-7 top-5 sm:top-5 md:top-7 flex items-center gap-1 border border-[#67EED6]/70 px-3 py-3 text-xs uppercase tracking-[0.07em] transition hover:border-[#aa0000]">
                        <span className="absolute right-[2px] text-2xl transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 hover:text-[#aa0000] text-[#67EED6]/70"> ↗</span>
                      </button>
                    </a>
                    </div>

                    <div className="mt-5 text-5xl font-black uppercase tracking-[-0.04em] sm:text-7xl md:text-8xl">
                      <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                        NEXORA
                      </span>
                    </div>


                    <p className="mt-4 max-w-2xl text-sm font-light leading-6 text-white/60 sm:text-base">
                      One modern workspace for building, creating, and managing
                      your digital presence.
                    </p>

                    <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">

                      <div
                        className="group relative overflow-hidden rounded-2xl border border-[#67EED6]/30 bg-[#67EED6]/10 p-4 text-left backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50"
                      >
                        <div className="transition-all duration-500 group-hover:scale-95 group-hover:blur-[5px] group-hover:opacity-30">
                          <div className="flex items-center justify-between">
                            <span className="text-[20px] text-white">⌁</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-300">01</span>
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white">
                            Website Builder
                          </p>
                          <p className="mt-1 text-[10px] leading-4 text-white/40">
                            Create modern web experiences.
                          </p>
                        </div>


                      </div>

                      <div

                        className="group relative overflow-hidden rounded-2xl border border-[#67EED6]/30 bg-[#67EED6]/10 p-4 text-left backdrop-blur-md transition-all duration-300 hover:border-blue-400/50"
                      >
                        <div className="transition-all duration-500 group-hover:scale-95 group-hover:blur-[5px] group-hover:opacity-30">
                          <div className="flex items-center justify-between">
                            <span className="text-[13px] text-white">✦</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-blue-300">02</span>
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white">
                            Resume Builder
                          </p>
                          <p className="mt-1 text-[10px] leading-4 text-white/40">
                            Build professional resumes.
                          </p>
                        </div>


                      </div>

                      <div

                        className="group relative overflow-hidden rounded-2xl border border-[#67EED6]/30 bg-[#67EED6]/10 p-4 text-left backdrop-blur-md transition-all duration-300 hover:border-indigo-400/50"
                      >
                        <div className="transition-all duration-500 group-hover:scale-95 group-hover:blur-[5px] group-hover:opacity-30">
                          <div className="flex items-center justify-between">
                            <span className="text-[15px] text-white">◈</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-indigo-300">03</span>
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white">
                            Profile Manager
                          </p>
                          <p className="mt-1 text-[10px] leading-4 text-white/40">
                            Manage your digital identity.
                          </p>
                        </div>


                      </div>
                    </div>

                    <div className="my-8 grid w-full max-w-3xl grid-cols-2 gap-y-2 border-t border-white/10 pt-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">Type</p>
                        <p className="mt-1 text-xs uppercase text-white/80">Builder</p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">Stack</p>
                        <p className="mt-1 text-xs uppercase text-white/80">Next.js</p>
                      </div>
                    </div>

                  </section>
                </div>
              </motion.div>

              {/* =========================
                  PROJECT 2
              ========================= */}

              <motion.div
                style={{
                  y: project2Y,
                  opacity: project2Opacity,
                  scale: project2Scale,
                }}
                className="absolute inset-0 flex h-screen w-full items-center justify-center p-7 sm:p-10"
              >
                <div className="relative flex h-[70vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center overflow-hidden rounded-[30px] border border-emerald-500/20 bg-[#f4fff9a8] font-sans shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                  <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-300/20 blur-[100px]" />
                  <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-green-300/20 blur-[100px]" />

                  <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-center sm:px-10 lg:px-16">
                    <div><a href="https://passop-six.vercel.app/"
                      target="_blank"
                      className="hover:text-[#aa0000]"
                    >

                      <button className="group absolute right-5 sm:right-5 md:right-7 top-5 sm:top-5 md:top-7 flex items-center gap-1 border border-[#000000]/70 px-3 py-3 text-xs uppercase tracking-[0.07em] transition hover:border-[#aa0000]">
                        <span className="absolute right-[2px] text-2xl transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 hover:text-[#aa0000] text-[#000000]"> ↗</span>
                      </button>
                    </a>
                    </div>

                    <div className="mt-20 text-5xl font-black uppercase tracking-[-0.04em] sm:mt-20 sm:text-7xl md:mt-5 md:text-8xl">
                      <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
                        Passop
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm font-light leading-6 text-slate-600 sm:text-base">
                      A simple and secure password manager for storing,
                      managing, and accessing your credentials with ease.
                    </p>

                    <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">

                      <div className="rounded-2xl border border-emerald-500/20 bg-white/80 px-4 py-2 text-left shadow-sm backdrop-blur-md transition duration-300 hover:border-emerald-500/40 hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[20px] text-emerald-600">🔐</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-600">01</span>
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Save Passwords
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          Keep your credentials organized.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-emerald-500/20 bg-white/80 px-4 py-2 text-left shadow-sm backdrop-blur-md transition duration-300 hover:border-green-500/40 hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[20px] text-green-600">◈</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-green-600">02</span>
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Manage Data
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          Easily edit and manage passwords.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-emerald-500/20 bg-white/80 px-4 py-2 text-left shadow-sm backdrop-blur-md transition duration-300 hover:border-teal-500/40 hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[20px] text-teal-600">✓</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-teal-600">03</span>
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Secure Access
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          Keep important credentials protected.
                        </p>
                      </div>

                    </div>

                    <div className="my-8 grid w-full max-w-3xl grid-cols-2 gap-y-2 border-t border-slate-900/10 py-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">Type</p>
                        <p className="mt-1 text-xs uppercase text-slate-800">
                          Password Manager
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">Stack</p>
                        <p className="mt-1 text-xs uppercase text-slate-800">
                          React / Node.js
                        </p>
                      </div>
                    </div>

                  </section>
                </div>
              </motion.div>

              {/* =========================
                  PROJECT 3
              ========================= */}

              <motion.div
                style={{
                  y: project3Y,
                  opacity: project3Opacity,
                  scale: project3Scale,
                }}
                className="absolute inset-0 flex h-screen w-full items-center justify-center p-7 sm:p-10"
              >
                <div className="relative flex h-[70vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center overflow-hidden rounded-[30px] border border-violet-500/20 bg-[#f7f4ffad] font-sans shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                  <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-300/25 blur-[100px]" />
                  <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-300/25 blur-[100px]" />

                  <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-center sm:px-10 lg:px-16">

                    <div><a href="https://todoist-puce-psi.vercel.app/"
                      target="_blank"
                      className="hover:text-[#aa0000]"
                    >

                      <button className="group absolute right-5 sm:right-5 md:right-7 top-5 sm:top-5 md:top-7 flex items-center gap-1 border border-[#000000]/70 px-3 py-3 text-xs uppercase tracking-[0.07em] transition hover:border-[#aa0000]">
                        <span className="absolute right-[2px] text-2xl transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 hover:text-[#aa0000] text-[#000000]"> ↗</span>
                      </button>
                    </a>
                    </div>

                    <div className="mt-20 text-5xl font-black uppercase tracking-[-0.04em] sm:mt-20 sm:text-7xl md:mt-5 md:text-8xl">
                      <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                        TODOIST
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm font-light leading-6 text-slate-600 sm:text-base">
                      A simple and intuitive task manager designed to organize
                      your daily tasks, track progress, and stay productive.
                    </p>

                    <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">

                      <div className="rounded-2xl border border-violet-500/20 bg-white/60 px-4 py-2 text-left shadow-sm backdrop-blur-md transition duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-[20px] text-violet-600">+</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-violet-600">01</span>
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Create Tasks
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          Quickly add and organize your tasks.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-violet-500/20 bg-white/60 px-4 py-2 text-left shadow-sm backdrop-blur-md transition duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-[20px] text-purple-600">✓</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-purple-600">02</span>
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Track Progress
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          Mark tasks complete and track progress.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-violet-500/20 bg-white/60 px-4 py-2 text-left shadow-sm backdrop-blur-md transition duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-[20px] text-fuchsia-600">◈</span>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-fuchsia-600">03</span>
                        </div>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                          Stay Organized
                        </p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          Keep your daily work clear and organized.
                        </p>
                      </div>

                    </div>

                    <div className="my-10 grid w-full max-w-3xl grid-cols-2 gap-y-2 border-t border-slate-900/10 py-6 sm:mb-13 sm:grid-cols-2 md:mb-5">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                          Type
                        </p>
                        <p className="mt-1 text-xs uppercase text-slate-800">
                          Task Manager
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                          Stack
                        </p>
                        <p className="mt-1 text-xs uppercase text-slate-800">
                          React / JavaScript
                        </p>
                      </div>
                    </div>

                  </section>
                </div>
              </motion.div>

            </div>
          </motion.div>







        </div>
      </section>

    </main>
  );
}

