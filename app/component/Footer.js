
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden font-sans font-bold bg-[#e29f9f] px-6 text-black/90">
      <div className="mx-auto max-w-7xl">

        {/* Main CTA */}
        
        {/* Footer Content */}
        <div className="flex gap-5 pt-7 md:flex-row items-center md:items-end md:justify-between justify-between">

          {/* Logo */}
          <div>
            <Link
              href="#home"
              className="text-2xl tracking-[1px]"
            >
              𝒫𝓇𝑜𝓉𝑜
            </Link>

            
          </div>

        

          {/* Socials */}
          <div className="flex gap-5 text-sm">
            <a
              href="https://github.com/CodeWithFarhanio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/90 transition hover:text-[#aa0000]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/farhan-saifi-415932426/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/90 transition hover:text-[#aa0000]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex gap-3 pb-7 pt-5  text-xs text-black/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Proto. All rights reserved.
          </p>

          <p>
            Designed & Built by <span className="text-[#aa0000] text-[17px]">
              Farhan
              </span> 
          </p>
        </div>

      </div>
    </footer>
  );
}

