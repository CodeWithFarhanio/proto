"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const text = textRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Main dot
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(animate);
    };

    const interactive = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor]"
    );

    const enter = (e) => {
      const type = e.currentTarget.dataset.cursor;

      follower.classList.add("cursor-active");

      if (type === "view") {
        follower.classList.add("cursor-view");
        text.innerText = "VIEW";
      } else if (type === "open") {
        follower.classList.add("cursor-view");
        text.innerText = "OPEN";
      } else {
        text.innerText = "";
      }
    };

    const leave = () => {
      follower.classList.remove(
        "cursor-active",
        "cursor-view"
      );

      text.innerText = "";
    };

    window.addEventListener("mousemove", move);

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", move);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="pro-cursor" />

      <div ref={followerRef} className="pro-cursor-follower">
        <span ref={textRef}></span>
      </div>
    </>
  );
}