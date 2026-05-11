import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ParallaxScroll = ({ children, intensity = 0.5, className = "" }) => {
  const { scrollProgress } = useScrollProgress();
  const ref = useRef(null);
  const [elementOffset, setElementOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (ref.current) {
        const elementTop = ref.current.offsetTop;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const elementProgress = (elementTop / docHeight);
        setElementOffset(elementProgress);
      }
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    return () => window.removeEventListener('scroll', updateOffset);
  }, []);

  // Calculate parallax offset based on scroll position
  const parallaxOffset = (scrollProgress - elementOffset) * 100 * intensity;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: parallaxOffset,
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollTriggeredReveal = ({ children, delay = 0, threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
