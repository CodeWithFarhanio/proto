// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import {
//   Code2,
//   Palette,
//   Sparkles,
//   Server,
//   Rocket,
// } from "lucide-react";

// export default function Project() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const x = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", "-72%"]
//   );

//   const cards = [
//     {
//       number: "01",
//       title: "Web Development",
//       description:
//         "Building modern, responsive and high-performance websites with clean and scalable code.",
//       skills: ["HTML", "CSS", "JavaScript", "Next.js"],
//       icon: Code2,
//     },
//     {
//       number: "02",
//       title: "UI / UX Design",
//       description:
//         "Creating clean and intuitive interfaces with strong visual hierarchy and responsive layouts.",
//       skills: ["UI Design", "UX", "Responsive", "Layouts"],
//       icon: Palette,
//     },
//     {
//       number: "03",
//       title: "Motion & Interaction",
//       description:
//         "Adding smooth animations and interactive experiences that make websites feel alive.",
//       skills: ["Framer Motion", "Scroll", "Hover", "Transitions"],
//       icon: Sparkles,
//     },
//     {
//       number: "04",
//       title: "Backend Development",
//       description:
//         "Developing APIs, authentication systems and database-driven applications.",
//       skills: ["Node.js", "Express", "MongoDB", "Mongoose"],
//       icon: Server,
//     },
//     {
//       number: "05",
//       title: "Deployment",
//       description:
//         "Taking projects from development to production with reliable deployment workflows.",
//       skills: ["Vercel", "Git", "GitHub", "Production"],
//       icon: Rocket,
//     },
//   ];

//   return (
//     <main className="bg-black text-white">
//       <section
//         ref={sectionRef}
//         className="relative h-[500vh]"
//       >
//         {/* Sticky screen */}
//         <div className="sticky top-0 flex h-screen items-center overflow-hidden">

//           {/* Heading */}
//           <div className="absolute left-6 top-10 z-20 sm:left-10 lg:left-16">
//             <div className="mb-4 flex items-center gap-4">
//               <span className="h-px w-12 bg-[#d8bd76] sm:w-20" />

//               <span className="text-xs uppercase tracking-[0.35em] text-white/40">
//                 What I Do
//               </span>
//             </div>

//             <h2 className="text-5xl font-semibold uppercase tracking-tight sm:text-6xl md:text-7xl">
//               My{" "}
//               <span className="text-[#d8bd76]">
//                 Expertise
//               </span>
//             </h2>
//           </div>

//           {/* Cards */}
//           <motion.div
//             style={{ x }}
//             className="flex gap-6 pl-[8vw] pr-[10vw]"
//           >
//             {cards.map((card) => {
//               const Icon = card.icon;

//               return (
//                 <article
//                   key={card.number}
//                   className="
//                     group relative
//                     flex h-[62vh] w-[78vw]
//                     flex-shrink-0
//                     flex-col justify-between
//                     overflow-hidden
//                     rounded-[2rem]
//                     border border-white/10
//                     bg-white/[0.035]
//                     p-7
//                     backdrop-blur-xl
//                     transition-all duration-500
//                     hover:border-[#d8bd76]/50
//                     sm:w-[550px]
//                     sm:p-10
//                   "
//                 >

//                   {/* Background glow */}
//                   <div
//                     className="
//                       pointer-events-none
//                       absolute -right-32 -top-32
//                       h-72 w-72
//                       rounded-full
//                       bg-[#d8bd76]/10
//                       blur-3xl
//                       opacity-0
//                       transition-opacity duration-700
//                       group-hover:opacity-100
//                     "
//                   />

//                   {/* Top */}
//                   <div className="relative flex items-start justify-between">

//                     <div
//                       className="
//                         flex h-16 w-16
//                         items-center justify-center
//                         rounded-full
//                         border border-white/10
//                         text-white/50
//                         transition-all duration-500
//                         group-hover:border-[#d8bd76]
//                         group-hover:text-[#d8bd76]
//                       "
//                     >
//                       <Icon
//                         size={26}
//                         strokeWidth={1.4}
//                       />
//                     </div>

//                     <span className="text-sm tracking-[0.3em] text-white/25">
//                       {card.number}
//                     </span>
//                   </div>

//                   {/* Middle */}
//                   <div className="relative">

//                     <h3
//                       className="
//                         max-w-[500px]
//                         text-4xl font-semibold
//                         uppercase leading-[0.95]
//                         tracking-tight
//                         sm:text-6xl
//                       "
//                     >
//                       {card.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-7 max-w-md
//                         text-sm leading-7
//                         text-white/40
//                         sm:text-base
//                       "
//                     >
//                       {card.description}
//                     </p>
//                   </div>

//                   {/* Bottom */}
//                   <div className="relative">

//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {card.skills.map((skill) => (
//                         <span
//                           key={skill}
//                           className="
//                             rounded-full
//                             border border-white/10
//                             px-3 py-1.5
//                             text-[10px]
//                             uppercase
//                             tracking-[0.15em]
//                             text-white/40
//                             transition-all duration-500
//                             group-hover:border-[#d8bd76]/30
//                             group-hover:text-white/70
//                           "
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-between border-t border-white/10 pt-5">
//                       <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
//                         Expertise
//                       </span>

//                       <span
//                         className="
//                           text-xs tracking-widest
//                           text-white/25
//                           transition-all duration-500
//                           group-hover:translate-x-2
//                           group-hover:text-[#d8bd76]
//                         "
//                       >
//                         →
//                       </span>
//                     </div>

//                   </div>

//                 </article>
//               );
//             })}
//           </motion.div>

//           {/* Scroll indicator */}
//           <div className="absolute bottom-8 left-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/25 sm:left-10 lg:left-16">
//             <span>Scroll</span>
//             <span className="h-px w-16 bg-white/10" />
//             <span>Explore</span>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }