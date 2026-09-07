"use client";

import ScrollReveal from "../components/ScrollReveal";
import { anton } from "../components/Anton";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    const textRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = textRef.current;
        if (!el) return;

        if (e.pointerType === "touch") return;

        const rect = el.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        const moveX = (x / rect.width) * 25;
        const moveY = (y / rect.height) * 10;

        const rotate = (x / rect.width) * 4;

        el.style.transform = `
            translate3d(${moveX}px, ${moveY}px, 0)
            rotate(${rotate}deg)
        `;
    };

    const handleMouseLeave = () => {
        const el = textRef.current;
        if (!el) return;

        el.style.transform = `
            translate3d(0, 0, 0)
            rotate(0deg)
        `;
    };

    return (
        <>
            {/* BLACK CURTAIN */}
            {/* ================= INTRO OPENING ================= */}
            {/* <div className="fixed inset-0 z-[99999] pointer-events-none">

                LEFT DOOR

                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 1.25,
                        delay: 0.2,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute inset-y-0 left-0 w-1/2 bg-black"
                />

                RIGHT DOOR
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        duration: 1.25,
                        delay: 0.2,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute inset-y-0 right-0 w-1/2 bg-black"
                />

            
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0.92 }}
                    transition={{
                        duration: 0.45,
                        delay: 0.55,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-[#000000]"
                >

                    <span
                        className="font-condensed text-white text-[21px] uppercase tracking-[0.35em]"
                    >
                        Proto
                    </span>

                    LODING BAR
                    <div className="mt-5 h-[2px] w-24 overflow-hidden bg-white">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: 1,
                                delay: 0.25,
                                ease: "easeInOut",
                            }}
                            className="h-full bg-[#000000]"
                        />
                    </div>
  
                </motion.div>

            </div> */}
            <div className="relative h-[70vh] md:min-h-screen overflow-hidden">

                {/* BACKGROUND */}
                <div className="absolute inset-0 z-0 overflow-hidden">

                    <div className="absolute inset-0 bg-[#fdefdb]" />
                    <div className="absolute inset-0 bg-[#fdefdb]" />

                    {/* TOP RIGHT */}
                    <div className="hidden md:block absolute top-[70%] sm:top-[70%] md:top-[55%] right-[35%] sm:right-[35%] md:right-[25%] h-28 sm:h-28 md:h-44 w-42 sm:w-42 md:w-60 rotate-[15deg] rounded-[25px] bg-[#db5050d3] blur-[20px]" />

                    <div className="hidden md:block absolute top-[7%] right-[-2%] h-40 w-40 rounded-[25px] bg-[#da4d43bb] rotate-[45deg] blur-[20px]" />

                    <div className="hidden md:block absolute top-[-6%] sm:top-[-6%] md:top-[-10%] right-[70%] sm:right-[70%] md:right-[17%] h-32 md:h-52 sm:h-32 w-32 md:w-52 sm:w-32 rotate-[13deg] rounded-[25px] bg-[#ee6767ad] blur-[20px]" />

                    {/* TOP LEFT */}
                    <div className="absolute bottom-[80%] sm:bottom-[80%] md:bottom-[55%] left-[30%] sm:left-[30%] md:left-[17%] h-28 sm:h-28 md:h-44 w-42 sm:w-42 md:w-60 rotate-[-15deg] rounded-[25px] bg-[#ec4134bb] blur-[20px]" />

                    <div className="absolute top-[-4%] sm:top-[-2%] md:top-[11%] left-[-2%] sm:left-[-2%] md:left-[3%] h-30 w-30 rounded-[25px] bg-[#bd4848cb] rotate-[45deg] blur-[20px]" />

                    <div className="absolute top-[3%] sm:top-[3%] md:top-[-10%] left-[80%] sm:left-[80%] md:left-[25%] h-32 md:h-52 sm:h-32 w-32 md:w-52 sm:w-32 rotate-[35deg] rounded-[25px] bg-[#da4d43fb] blur-[20px]" />

                    {/* CENTER */}
                    <div className="absolute top-[40%] sm:top-[40%] md:top-[35%] left-[37%] sm:left-[37%] md:left-[42%] h-28 sm:h-28 md:h-44 w-36 sm:w-36 md:w-52 rotate-[-25deg] rounded-[25px] bg-[#da4d43bb] blur-[20px]" />

                    {/* BOTTOM LEFT */}
                    <div className="absolute top-[70%] sm:top-[70%] md:top-[55%] left-[35%] sm:left-[35%] md:left-[8%] h-28 sm:h-28 md:h-44 w-42 sm:w-42 md:w-60 rotate-[15deg] rounded-[25px] bg-[#d34137bb] blur-[20px]" />

                    <div className="absolute bottom-[3%] sm:bottom-[3%] md:bottom-[7%] left-[-7%] sm:left-[-7%] md:left-[-2%] h-30 sm:h-30 md:h-40 w-30 sm:w-30 md:w-40 rounded-[25px] bg-[#c2291fbb] rotate-[45deg] blur-[20px]" />

                    <div className="absolute bottom-[-6%] sm:bottom-[-6%] md:bottom-[-10%] left-[70%] sm:left-[70%] md:left-[25%] h-32 md:h-52 sm:h-32 w-32 md:w-52 sm:w-32 rotate-[45deg] rounded-[25px] bg-[#fc3527bb] blur-[20px]" />

                    {/* BOTTOM RIGHT */}
                    <div className="hidden md:block absolute bottom-[70%] sm:bottom-[70%] md:bottom-[55%] right-[35%] sm:right-[35%] md:right-[12%] h-28 sm:h-28 md:h-44 w-42 sm:w-42 md:w-60 rotate-[-15deg] rounded-[25px] bg-[#c92014bb] blur-[20px]" />

                    <div className="hidden md:block absolute bottom-[7%] right-[-2%] sm:right-[-2%] md:right-[4%] h-40 w-40 rounded-[25px] bg-[#df857e] rotate-[14deg] blur-[20px]" />

                    <div className="hidden md:block absolute bottom-[-6%] sm:bottom-[-6%] md:bottom-[-10%] right-[70%] sm:right-[70%] md:right-[25%] h-32 md:h-52 sm:h-32 w-32 md:w-52 sm:w-32 rotate-[45deg] rounded-[25px] bg-[#d8392dbb] blur-[20px]" />

                    {/* MOBILE */}
                    <div className="md:hidden absolute bottom-[60%] right-[75%] h-28 w-42 rotate-[-21deg] rounded-[25px] bg-[#d8392dbb] blur-[20px]" />

                    <div className="md:hidden absolute bottom-[65%] left-[75%] h-18 w-18 rotate-[-21deg] rounded-[25px] bg-[#d8392dbb] blur-[20px]" />

                    <div className="md:hidden absolute top-[55%] left-[75%] h-28 w-42 rotate-[-5deg] rounded-[25px] bg-[#d8392dbb] blur-[20px]" />

                    <div className="md:hidden absolute top-[55%] right-[75%] h-18 w-18 rotate-[-5deg] rounded-[25px] bg-[#d8392dbb] blur-[20px]" />

                </div>

                {/* CONTENT */}
                <div className="absolute inset-0 z-10 overflow-hidden">

                    <div className="absolute inset-0 flex flex-col items-center justify-center">

                        {/* FULL STACK */}
                        <h1 className="absolute top-[32%] sm:top-[32%] md:top-[35%] select-none text-center uppercase text-black text-4xl leading-none sm:text-4xl md:text-7xl">

                            <ScrollReveal direction="up">

                                <span className="inline-block scale-y-[6]">

                                    <span
                                        ref={textRef}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        className={`
                                            ${anton.className}
                                            inline-block
                                            tracking-[0.12em]
                                            transition-transform
                                            duration-500
                                            ease-out
                                            will-change-transform
                                        `}
                                    >
                                        FULL STACK
                                    </span>

                                </span>

                            </ScrollReveal>

                        </h1>

                        {/* DEVELOPER */}
                        <h2 className="absolute top-[57%] sm:top-[57%] md:top-[70%] select-none text-center font-condensed font-black uppercase text-black text-xl sm:text-xl md:text-3xl tracking-[0.12em] leading-none">

                            <span className="inline-block origin-center scale-y-[2] font-black">
                                DEVELOPER
                            </span>
                        </h2>
                        <h2 className="absolute top-[63%] sm:top-[63%] md:top-[75%] select-none text-center font-condensed uppercase text-xl font-extralight text-black leading-none ">

                            <span className="block mt-6 origin-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer hover:text-[#d44141]">
                                code
                            </span>
                            <span className="inline-block mr-20 sm:mr-20 md:mr-40 origin-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer hover:text-[#d44141]">
                                visuals
                            </span>
                            <span className="inline-block ml-20 sm:ml-20 md:ml-40 origin-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer hover:text-[#d44141]">
                                experience
                            </span>

                        </h2>
                        <span className="absolute top-[73%] sm:top-[73%] md:top-[85%] mt-10 sm:mt-10 md:mt-10 origin-center text-[#00000054]">
                            scroll down to explore
                        </span>
                        <div className="absolute left-4 sm:left-6 md:left-8 bottom-6 sm:bottom-8 md:bottom-10 flex items-center gap-1">
                            <span className="font-extralight text-[#000000] text-sm sm:text-base">2026</span>
                            <span className="text-[#000000] text-lg sm:text-xl">𝒫𝓇𝑜𝓉𝑜</span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}