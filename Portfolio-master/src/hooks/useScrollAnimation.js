import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (triggerPercentage = 0.5) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first trigger for performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: triggerPercentage
      }
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [triggerPercentage]);

  return { ref, isVisible };
};

export const useParallaxScroll = (offset = 50) => {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    ref,
    style: {
      transform: `translateY(${scrollY * 0.5}px)`
    },
    scrollY
  };
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrolled = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};
