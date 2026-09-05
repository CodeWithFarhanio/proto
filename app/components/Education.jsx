"use client";

import ScrollReveal from "../components/ScrollReveal";
import {
  GraduationCap,
  BookOpen,
  School,
  Award,
  Calendar,
} from "lucide-react";

const educationData = [
  {
    year: "2026",
    title: "Bachelor's Degree",
    institute: "Your University Name",
    description:
      "Currently pursuing my degree while developing strong skills in web development, programming, and modern technologies.",
    icon: GraduationCap,
    side: "left",
  },
  {
    year: "2024",
    title: "Class 12",
    institute: "Your School Name",
    description:
      "Completed senior secondary education with a focus on building a strong academic foundation and exploring technology.",
    icon: BookOpen,
    side: "right",
  },
  {
    year: "2022",
    title: "Class 10",
    institute: "Your School Name",
    description:
      "Completed secondary education and started developing a deeper interest in computers and technology.",
    icon: School,
    side: "left",
  },
  {
    year: "2021",
    title: "Started Coding",
    institute: "Self Learning",
    description:
      "Started learning HTML, CSS, JavaScript and gradually moved into React, Next.js and full-stack development.",
    icon: Award,
    side: "right",
  },
];

const Education = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Heading */}
      <ScrollReveal type="premium">
        <div className="relative mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            My Journey
          </p>

          <h2 className="text-5xl font-light tracking-tight text-white md:text-6xl">
            Education
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-slate-400">
            A timeline of my academic journey, learning experiences,
            and growth in technology.
          </p>

        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">

        {/* Center Line */}
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent md:block" />

        <div className="space-y-16">

          {educationData.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.title}
                direction={item.side}
              >
                <div className="relative grid items-center md:grid-cols-2">

                  {/* LEFT SIDE */}
                  <div
                    className={`${
                      item.side === "left"
                        ? "md:pr-16"
                        : "md:order-2 md:pl-16"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.07]">

                      {/* Hover Glow */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                      <div className="relative">

                        {/* Year */}
                        <div className="mb-5 flex items-center gap-2 text-sm text-purple-400">
                          <Calendar size={16} />
                          {item.year}
                        </div>

                        {/* Icon */}
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                          <Icon size={26} />
                        </div>

                        <h3 className="text-2xl font-medium text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-purple-300">
                          {item.institute}
                        </p>

                        <p className="mt-4 leading-7 text-slate-400">
                          {item.description}
                        </p>

                      </div>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                    <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-purple-400/50 bg-black">
                      <div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default Education;