"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
   <section id="contact" className="relative z-10  min-h-screen px-6 py-10 text-black/90">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div
          
          className="mb-[60px] flex flex-col font-sans text-[clamp(65px,7vw,110px)] font-extrabold leading-[.82] tracking-[-6px] max-[650px]:mb-[40px] max-[650px]:text-[clamp(58px,17vw,90px)] max-[650px]:tracking-[-4px]">

        <div className="pointer-events-none absolute left-[25%] top-0 h-[1px] w-[50%] bg-gradient-to-r from-transparent via-black/50 to-transparent" />


          <div className="relative z-10 mb-[70px] flex items-center gap-[14px] font-sans text-[11px] font-bold tracking-[2px] text-black/70">
            <span className="text-[#000000]">02</span>
            <span>—</span>
            <span>PORTFOLIO / ABOUT</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-[10px] flex flex-col font-sans text-[clamp(65px,7vw,110px)] font-extrabold leading-[.82] tracking-[-6px] max-[650px]:mb-[40px] max-[650px]:text-[clamp(58px,17vw,40px)] max-[650px]:tracking-[-4px]"
          >
            <span className="text-[#aa0000] ">CONTACT</span>
            
          </motion.h1>
        </div>

        <div className="grid gap-16 md:grid-cols-2">

          {/* Left side */}
          <div
            
          >
            <h2 className="mb-6 text-3xl font-sans font-bold">
              Let's build something
              <br />
              <span className="text-[#aa0000]/70">great together.</span>
            </h2>

            <p className="max-w-md font-extralight text-black/70">
              Have a project, idea, or opportunity? Send me a message and
              I'll get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-5 text-[#aa0000]/70 font-sans font-bold">
              <p>
                <span className="text-black/70">Email</span>
                <br />
                farhan813019@email.com
              </p>

              <p>
                <span className="text-black/70">Location</span>
                <br />
                India
              </p>
              <p>
                <span className="text-black/70">contact</span>
                <br />
               91+ 8130194982
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            
            className="space-y-7 font-sans font-bold text-white/70"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-black/70">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border-b border-black/30 bg-transparent px-0 py-4 text-lg outline-none transition placeholder:text-black/20 focus:border-[#aa0000]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-black/70">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full border-b border-black/30 bg-transparent px-0 py-4 text-lg outline-none transition placeholder:text-black/20 focus:border-[#aa0000]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm text-black/70">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="2"
                placeholder="Tell me about your project..."
                className="w-full resize-none border-b border-black/30 bg-transparent px-0 py-4 text-lg outline-none transition placeholder:text-black/20 focus:border-[#aa0000]"
              />
            </div>

           

            {status && (
              <p className="text-sm text-black/70">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}