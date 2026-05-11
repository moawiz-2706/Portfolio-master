// Reusable animation variants and configurations for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    animate: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  }
});

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 10 }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
  transition: { duration: 0.3 }
};

export const flipCard = {
  initial: { rotateY: 90, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const floatingAnimation = (yOffset = 20) => ({
  y: [0, -yOffset, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
});

export const rotatingAnimation = {
  rotate: 360,
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }
};

export const shimmerAnimation = {
  backgroundPosition: ["200% 0%", "-200% 0%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }
};

export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const numberCounterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

// Easing functions for smooth natural motion
export const easeOutCubic = [0.215, 0.61, 0.355, 1];
export const easeInOutCubic = [0.645, 0.045, 0.355, 1];
export const easeOutQuart = [0.165, 0.84, 0.44, 1];

// ========== ADVANCED 3D & IMMERSIVE ANIMATIONS ==========

// Perspective entrance - object coming towards viewer
export const perspectiveEnter = {
  initial: { 
    opacity: 0, 
    scale: 0.5, 
    rotateX: 90,
    z: -500 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    z: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    }
  }
};

// Text reveal with blur effect
export const textRevealBlur = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Roller coaster scroll effect
export const rollerCoasterScroll = (scrollProgress) => ({
  y: Math.sin(scrollProgress * Math.PI * 2) * 50,
  rotateZ: Math.sin(scrollProgress * Math.PI) * 5,
  scale: 0.9 + Math.cos(scrollProgress * Math.PI) * 0.1
});

// 3D flip with depth
export const flip3D = {
  initial: { rotateY: 180, opacity: 0 },
  animate: { rotateY: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Morphing shape animation
export const morphShape = {
  initial: { borderRadius: "0%" },
  animate: { 
    borderRadius: ["0%", "50%", "100%", "50%", "0%"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Staggered letter reveal
export const staggerLetterReveal = {
  container: {
    initial: "initial",
    animate: "animate",
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.1
        }
      }
    }
  },
  letter: {
    initial: { opacity: 0, y: 50, rotateX: -90 },
    animate: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }
};

// Image zoom parallax
export const imageParallax = {
  initial: { scale: 1.2, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 }
};

// Gradient animation
export const gradientShift = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Floating with rotation
export const floatingRotate = {
  animate: {
    y: [0, -30, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Spotlight effect
export const spotlightHover = {
  initial: { opacity: 0 },
  whileHover: {
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

// Magnetic button effect
export const magneticButton = {
  initial: { scale: 1, rotate: 0 },
  whileHover: { 
    scale: 1.1, 
    rotate: 2,
    transition: { duration: 0.3 }
  },
  whileTap: { 
    scale: 0.95, 
    rotate: -2,
    transition: { duration: 0.2 }
  }
};

// Container scroll reveal
export const containerScrollReveal = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6 }
};

// Stagger with scale
export const staggerScaleItem = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Title reveal with line
export const titleRevealLine = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.5 }
};

// Hover lift effect
export const hoverLift = {
  initial: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  whileHover: { 
    y: -10, 
    boxShadow: "0px 20px 40px rgba(0,212,255,0.2)",
    transition: { duration: 0.3 }
  }
};

// Glow pulse effect
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 10px rgba(59, 130, 246, 0.3)",
      "0 0 30px rgba(59, 130, 246, 0.6)",
      "0 0 10px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
