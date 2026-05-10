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
