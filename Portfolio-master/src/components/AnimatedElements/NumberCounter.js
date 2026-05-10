import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const NumberCounter = ({ 
  end = 100, 
  duration = 2, 
  start = 0, 
  suffix = '', 
  prefix = '',
  delay = 0,
  className = ''
}) => {
  const [count, setCount] = useState(start);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Add delay before starting animation
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, end, duration, start, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.div>
  );
};

export default NumberCounter;
