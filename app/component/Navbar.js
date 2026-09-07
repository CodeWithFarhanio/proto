
"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navVisible, setNavVisible] = useState(true);

    useEffect(() => {
        let scrollTimer;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            setScrolled(scrollY > 20);

            // Always show navbar when at the top
            if (scrollY <= 20) {
                setNavVisible(true);
                clearTimeout(scrollTimer);
                return;
            }

            // Show navbar while scrolling
            setNavVisible(true);

            // Hide after scrolling stops
            clearTimeout(scrollTimer);

            scrollTimer = setTimeout(() => {
                // Don't hide if user has returned to the top
                if (window.scrollY > 20) {
                    setNavVisible(false);
                }
            }, 1500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimer);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 text-black
                transition-all duration-500 ease-in-out
                ${navVisible ? "translate-y-0" : "-translate-y-full"}
                ${scrolled
                    ? "bg-[#e29f9f] backdrop-blur-md"
                    : "bg-transparent"
                }
            `}
        >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8 md:px-12 lg:px-16 md:py-4">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-lg uppercase"
                >
                    𝒫𝓇𝑜𝓉𝑜
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <a
                        href="#home"
                        className="text-xs font-extralight tracking-[0.15em] uppercase transition-opacity duration-300 hover:text-[#aa0000]"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-xs font-extralight tracking-[0.15em] uppercase transition-opacity duration-300 hover:text-[#aa0000]"
                    >
                        About
                    </a>
                    <a
                        href="#expertise"
                        className="text-xs font-extralight tracking-[0.15em] uppercase transition-opacity duration-300 hover:text-[#aa0000]"
                    >
                        Expertise
                    </a>
                    <a
                        href="#projects"
                        className="text-xs font-extralight tracking-[0.15em] uppercase transition-opacity duration-300 hover:text-[#aa0000]"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-xs font-extralight tracking-[0.15em] uppercase transition-opacity duration-300 hover:text-[#aa0000]"
                    >
                        Contact
                    </a>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3 hover:text-[#aa0000]">

                    <div className=" flex items-center gap-6">
                        <button className="group flex items-center gap-1 border border-black/20 px-3 py-[6px] text-xs uppercase tracking-[0.07em] transition hover:border-[#aa0000]">
                            Let's talk
                            <span className="font-bold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"> ↗</span> 
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden flex items-center justify-center w-10 h-10 border border-black/20 transition-all duration-300 hover:bg-black hover:text-[#fef6d5]"
                    >
                        {menuOpen ? (
                            <X size={18} strokeWidth={1.8} />
                        ) : (
                            <Menu size={18} strokeWidth={1.8} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${menuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="mx-5 sm:mx-8 border-t border-black/10 py-6">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="block py-3 text-sm font-medium tracking-[0.15em] uppercase"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        onClick={closeMenu}
                        className="block py-3 text-sm font-medium tracking-[0.15em] uppercase"
                    >
                        About
                    </a>

                    <a
                        href="#expertise"
                        onClick={closeMenu}
                        className="block py-3 text-sm font-medium tracking-[0.15em] uppercase"
                    >
                        Expertise
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                        className="block py-3 text-sm font-medium tracking-[0.15em] uppercase"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="block py-3 text-sm font-medium tracking-[0.15em] uppercase"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

