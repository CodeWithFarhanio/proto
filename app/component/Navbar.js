import React from 'react'
import { Search } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <header className="sticky font-semibold top-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-16 py-6 md:py-8 text-black">
                {/* Logo */}
                <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden font-semibold sm:block text-xs md:text-sm tracking-widest font-light text-black">Proto</span>
                </div>

                {/* Desktop Navigation */} 
                <nav className="hidden md:flex font-semibold items-center gap-6 lg:gap-8 text-xs tracking-wider text-black uppercase">
                    <a href="#home" className="transition-colors hover:text-[#d28500]">Work</a>
                    <a href="#about" className="transition-colors hover:text-[#d28500]">About</a>
                    <a href="#gallery" className="transition-colors hover:text-[#d28500]">Journal</a>
                    <a href="#community" className="transition-colors hover:text-[#d28500]">contact</a>
                </nav>
{/* now make a button */}
                <button className="hidden md:flex items-center gap-2 px-4 py-2 text-xs tracking-wider text-black uppercase border border-black/30 bg-black/10 transition-colors hover:bg-black/20">Login</button>
            </header>
        </>
    )
}

export default Navbar
