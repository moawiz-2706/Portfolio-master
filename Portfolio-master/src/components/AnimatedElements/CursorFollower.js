import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSmoothMousePosition } from '../../hooks/useMousePosition';

const CursorFollower = ({ size = 20, color = 'rgba(59, 130, 246, 0.3)' }) => {
  const mousePosition = useSmoothMousePosition(0.15);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full"
      style={{
        width: size,
        height: size,
        left: mousePosition.x - size / 2,
        top: mousePosition.y - size / 2,
        background: color,
        boxShadow: `0 0 ${size / 2}px ${color.replace(/[\d.]+\)/, '0.6)')}`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      animate={{
        scale: isVisible ? 1 : 0.5
      }}
    />
  );
};

export default CursorFollower;
