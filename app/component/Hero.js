"use client";

import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            {/* BLACK CURTAIN */}
            {/* <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.65, 0, 0.35, 1],
                }} 
                className="fixed inset-0 z-[99999] border border-black/20 bg-black/95 min-h-screen"
            /> */}

            <div className="absolute inset-0 z-10 overflow-hidden bg-[#fef6d5]">

                {/* BACKGROUND */}
                <div className="absolute inset-0 -z-10 overflow-hidden bg-[#fff5e4d7]">


                </div>
 
                {/* HERO */}
                <main className="relative z-10 grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2 md:px-16 md:py-12">

    {/* TEXT */}
    <div className="order-1 max-w-xl space-y-5 text-center md:order-1 md:space-y-6 md:text-left">
        <h1 className="font-delirium text-black uppercase text-6xl leading-none">
            <span className="inline-block origin-top scale-y-[5]">
                Creative
            </span>
        </h1>
    </div>

    {/* 3D IMAGE */}

</main>
            </div>
        </>
    );
};

export default Hero;