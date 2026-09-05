"use client";

import ScrollReveal from "../components/ScrollReveal";
import Education from "../components/Education";

const Skills = () => {
  return (
    <main className="overflow-x-hidden bg-black">

      {/* UP */}
      <ScrollReveal direction="up">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Slide Up
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* DOWN */}
      <ScrollReveal direction="down">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Slide Down
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* LEFT */}
      <ScrollReveal direction="left">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Slide Left
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* RIGHT */}
      <ScrollReveal direction="right">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Slide Right
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* SCALE */}
      <ScrollReveal type="scale">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Scale
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* BLUR */}
      <ScrollReveal type="blur">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Blur
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* ROTATE */}
      <ScrollReveal type="rotate">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              3D Rotate
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* PREMIUM */}
      <ScrollReveal type="premium">
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-light text-white">
              Premium
            </h2>
          </div>
        </section>
      </ScrollReveal>

      <Education />

    </main>
  );
};

export default Skills;