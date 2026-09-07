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

  const container1X = useTransform(
    scrollYProgress,
    [0.2, 0.45],
    ["0%", "-100%"]
  );

  const container1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.45],
    [1, 0]
  );

  const container1Scale = useTransform(
    scrollYProgress,
    [0.2, 0.45],
    [1, 0.9]
  );

  /* =========================
     CONTAINER 2
  ========================= */

  const container2X = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["100%", "0%"]
  );

  const container2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.45],
    [0, 1]
  );

  const container2Scale = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [0.9, 1]
  );

  /* =========================
     PROJECTS
  ========================= */

  const projectsY = useTransform(
    scrollYProgress,
    [0.55, 1],
    ["0%", "-55%"]
  );

  return (
    <main className="text-white">
      <section ref={sectionRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

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
            <div className="flex items-center justify-center">
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
                  className={`${anton.className} inline-block select-none text-center text-[80px] leading-none text-black sm:text-[120px] md:text-[180px] lg:text-[220px]`}
                >
                  {letter}
                </motion.h1>
              ))}
            </div>
          </motion.div>

          {/* =========================
              CONTAINER 2
          ========================= */}

          <motion.div
            style={{
              x: container2X,
              scale: container2Scale,
              opacity: container2Opacity,
            }}
            className="absolute inset-0 z-20 h-screen w-screen overflow-hidden p-7 sm:p-10"
          >

            {/* TOP */}

            <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10">
              <h1 className="text-4xl font-black sm:text-5xl">
                CONTAINER 02
              </h1>

              <span className="text-sm uppercase tracking-[0.3em] text-white/40">
                Projects
              </span>
            </div>

            {/* PROJECT CONTAINER */}

            <div className="absolute left-0 right-0 top-1/2 h-[70vh] -translate-y-1/2 overflow-hidden">
              <motion.div
                style={{ y: projectsY }}
                className="flex w-full flex-col items-center gap-[20vh]"
              >

                {/* PROJECT 1 */}

                <div className="flex h-[60vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
                  <div className="text-center">
                    <span className="text-sm uppercase tracking-[0.4em] text-white/40">
                      01
                    </span>

                    <h2 className="mt-4 text-6xl font-black uppercase sm:text-8xl md:text-9xl">
                      Project 1
                    </h2>
                  </div>
                </div>

                {/* PROJECT 2 */}

                <div className="flex h-[60vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
                  <div className="text-center">
                    <span className="text-sm uppercase tracking-[0.4em] text-white/40">
                      02
                    </span>

                    <h2 className="mt-4 text-6xl font-black uppercase sm:text-8xl md:text-9xl">
                      Project 2
                    </h2>
                  </div>
                </div>

                {/* PROJECT 3 */}

                <div className="flex h-[60vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
                  <div className="text-center">
                    <span className="text-sm uppercase tracking-[0.4em] text-white/40">
                      03
                    </span>

                    <h2 className="mt-4 text-6xl font-black uppercase sm:text-8xl md:text-9xl">
                      Project 3
                    </h2>
                  </div>
                </div>

                {/* PROJECT 4 */}

                <div className="flex h-[60vh] w-[85vw] max-w-[1200px] shrink-0 items-center justify-center rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
                  <div className="text-center">
                    <span className="text-sm uppercase tracking-[0.4em] text-white/40">
                      04
                    </span>

                    <h2 className="mt-4 text-6xl font-black uppercase sm:text-8xl md:text-9xl">
                      Project 4
                    </h2>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* BOTTOM */}

            <div className="absolute bottom-7 left-7 right-7 flex justify-between text-sm uppercase tracking-[0.3em] text-white/40 sm:bottom-10 sm:left-10 sm:right-10">
              <span>02</span>
              <span>Projects</span>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}

