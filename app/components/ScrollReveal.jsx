"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({
  children,
  direction = "up",
  type,
  className = "",
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });
  
  const animationType = type || direction;
  
  const animations = {
    up: {
    hidden: {
        opacity: 0,
        y: 120,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
            delay: 1,
            duration: 0.5,
        },
      },
    },
    
    scale: {
      hidden: {
        opacity: 0,
        scale: 0.5,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
             duration: 0.5,
        },
      },
    },

    down: {
      hidden: {
        opacity: 0,
        y: -120,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    left: {
      hidden: {
        opacity: 0,
        x: -150,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    right: {
      hidden: {
        opacity: 0,
        x: 150,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },


    blur: {
      hidden: {
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.05,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      },
    },

    rotate: {
      hidden: {
        opacity: 0,
        rotateY: 60,
        x: 80,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        rotateY: 0,
        x: 0,
        scale: 1,
      },
    },

    premium: {
      hidden: {
        opacity: 0,
        y: 100,
        scale: 0.85,
        filter: "blur(15px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      },
    },
  };

  const animation = animations[animationType] || animations.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animation.hidden}
      animate={isInView ? animation.visible : animation.hidden}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;