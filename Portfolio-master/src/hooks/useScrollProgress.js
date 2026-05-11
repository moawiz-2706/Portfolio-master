import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout;
    let lastTime = Date.now();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate progress (0 to 1)
      const progress = docHeight - windowHeight > 0 
        ? scrollY / (docHeight - windowHeight) 
        : 0;
      
      // Calculate velocity
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTime;
      const scrollDiff = scrollY - lastScrollY;
      const velocity = timeDiff > 0 ? scrollDiff / timeDiff : 0;
      
      setScrollProgress(progress);
      setScrollVelocity(velocity);
      setIsScrolling(true);
      setLastScrollY(scrollY);
      lastTime = currentTime;

      // Stop scrolling after delay
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  return { scrollProgress, scrollVelocity, isScrolling };
};
