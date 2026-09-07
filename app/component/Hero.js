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
                    className="absolute inset-y-0 left-0 w-1/2 bg-[#d38383]"
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
                    className="absolute inset-y-0 right-0 w-1/2 bg-[#d38383]"
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
                            className="h-full bg-[#aa0000]"
                        />
                    </div> 
  
                </motion.div>

            </div>*/}
            <div className="relative h-[70vh] md:min-h-screen overflow-hidden">

                {/* BACKGROUND */}
               

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

                            <span className="block mt-6 origin-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer hover:text-[#aa0000]">
                                code
                            </span>
                            <span className="inline-block mr-20 sm:mr-20 md:mr-40 origin-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer hover:text-[#aa0000]">
                                visuals
                            </span>
                            <span className="inline-block ml-20 sm:ml-20 md:ml-40 origin-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer hover:text-[#aa0000]">
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