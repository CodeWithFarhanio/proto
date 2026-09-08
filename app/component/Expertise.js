"use client";

import { motion } from "framer-motion";

const skills = [
  {
  number: "01",
  title: "Frontend Development",
  description:
    "Building fast, responsive and accessible interfaces with clean structure, modern styling and interactive components.",
  meta: "HTML • CSS • JAVASCRIPT",
  icon: "</>",
},

{
  number: "02",
  title: "Motion & Interaction",
  description:
    "Creating engaging digital experiences through smooth animations, transitions and purposeful micro-interactions.",
  meta: "FRAMER MOTION • GSAP",
  icon: "✦",
},

{
  number: "03",
  title: "UI / UX Design",
  description:
    "Designing intuitive interfaces with strong visual hierarchy, usability and consistent design systems.",
  meta: "UI DESIGN • UX • PROTOTYPING",
  icon: "◉",
},

{
  number: "04",
  title: "Modern Web Apps",
  description:
    "Developing scalable web applications with reusable components, dynamic interfaces and seamless user experiences.",
  meta: "REACT • NEXT.JS • JAVASCRIPT",
  icon: "⌘",
},

{
  number: "05",
  title: "Backend Development",
  description:
    "Building reliable server-side systems with APIs, authentication, database integration and efficient data management.",
  meta: "NODE.JS • EXPRESS • MONGODB",
  icon: "⚙",
},
];



export default function Expertise() {
  return (
    <main className="relative min-h-screen overflow-hidden px-8 py-[70px] pb-[120px] text-black/90">

 <div className="pointer-events-none absolute left-[25%] top-0 h-[1px] w-[50%] bg-gradient-to-r from-transparent via-black/50 to-transparent" />

      {/* BACKGROUND GRID */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black_10%,rgba(0,0,0,.7)_50%,transparent_100%)]" />
      

      {/* SECTION LABEL */}
      <div className="relative z-10 mb-[70px] flex items-center gap-[14px] font-sans text-[11px] font-bold tracking-[2px] text-black/70">
        <span className="text-[#000000]">03</span>
        <span>—</span>
        <span>EXPERTISE</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1450px] grid-cols-[minmax(350px,.85fr)_minmax(500px,1.15fr)] gap-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[90px]">

        {/* LEFT */}
        <section
        id="expertise"
        className="relative min-w-0">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-[60px] flex flex-col font-sans text-[clamp(65px,7vw,110px)] font-extrabold leading-[.82] tracking-[-6px] max-[650px]:mb-[40px] max-[650px]:text-[clamp(58px,17vw,40px)] max-[650px]:tracking-[-4px]"
          >
            <span className="text-[#aa0000]">MY</span>
            <strong className="text-black/90">EXPERTISE</strong>
          </motion.h1>

          {/* MAIN PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="mb-[65px] max-w-[570px] font-sans text-[24px] leading-[1.45] text-black/90 max-[650px]:mb-[40px] max-[650px]:text-[19px]"
          >
            I design and build digital experiences where{" "}
            <b className="font-semibold text-[#aa0000]">
              design, code and motion
            </b>{" "}
            work as one.
          </motion.p>

          {/* SMALL PARAGRAPH */}
          <p className="mb-[35px] max-w-[570px] text-[14px] leading-[1.7] text-black/70 max-[650px]:text-[13px]">
            From expressive interfaces to smooth interactions, I combine
            frontend engineering with visual design to create digital
            experiences that feel modern and intentional.
          </p>

          {/* TECHNOLOGY TAGS */}
          <div className="flex flex-wrap gap-[7px]">
            {["HTML", "CSS", "JAVASCRIPT", "TAILWIND CSS", "REACT", "NODEJS", "EXPRESSJS", "MONGODB", "NEXTJS",  ].map((item) => (
              <span
                key={item}
                className="border border-[#222] bg-white/[0.015] px-2 py-2 font-sans text-[8px] font-semibold tracking-[1px] text-black/90 transition-all duration-300 hover:border-[#444] hover:bg-white/[0.04] hover:text-[#aa0000]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* FLOATING TECH ICONS */}
          
        </section>

        {/* RIGHT */}
        <section className="relative border-t border-[#222]">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.number}
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative grid min-h-[155px] grid-cols-[60px_70px_minmax(0,1fr)_35px] items-center overflow-hidden border-b border-[#202020] transition-all duration-400 hover:bg-white/[0.025] hover:pl-[15px] max-[650px]:min-h-[145px] max-[650px]:grid-cols-[35px_50px_minmax(0,1fr)]"
            >

              {/* NUMBER */}
              <div className="flex h-full w-[50px] items-center self-start  font-sans text-[11px] text-black/90 max-[650px]:pt-[28px] max-[650px]:text-[9px]">
                {skill.number}
              </div>

              {/* ICON */}
              <div className="flex h-[50px] w-[50px] items-center justify-center border border-[#292929] font-sans text-[20px] text-[#000000] transition-all duration-300 group-hover:rotate-[-4deg] group-hover:border-[#aa0000] group-hover:text-[#aa0000] max-[650px]:h-[42px] max-[650px]:w-[42px] max-[650px]:text-[17px]">
                {skill.icon}
              </div>

              {/* CONTENT */}
              <div className="min-w-0 px-5 py-[30px] max-[650px]:px-[10px] max-[650px]:py-6">

                

                {/* TITLE */}
                <h2 className="mb-[7px] font-sans text-[28px] font-medium leading-none tracking-[-1px] text-[#aa0000] max-[650px]:text-[20px]">
                  {skill.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="max-w-[600px] font-sans text-[13px] leading-[1.5] text-black/70 max-[650px]:text-[11px]">
                  {skill.description}
                </p>

                {/* META */}
                <div className="mt-[13px] font-sans text-[8px] font-semibold tracking-[1px] text-black/90 max-[650px]:mt-[10px] max-[650px]:text-[7px]">
                  {skill.meta}
                </div>
              </div>

              {/* ARROW */}
              <div className="font-sans text-[20px] text-black/90 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#aa0000] max-[650px]:hidden">
                ↗
              </div>

            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}