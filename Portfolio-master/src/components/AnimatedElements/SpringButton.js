import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { magneticButtonEffect } from '../../utils/gsapAnimations';
import './SpringButton.css';

export function SpringButton({ children, href, onClick, className = '', variant = 'primary' }) {
  const buttonRef = useRef(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      magneticButtonEffect(buttonRef.current);
    }
  }, []);

  const springConfig = {
    type: 'spring',
    stiffness: 300,
    damping: 15,
    mass: 1,
  };

  const ButtonElement = href ? 'a' : 'button';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springConfig}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ButtonElement
        ref={buttonRef}
        href={href}
        onClick={onClick}
        className={`spring-button spring-button-${variant} ${className}`}
        target={href ? '_blank' : undefined}
        rel={href ? 'noreferrer' : undefined}
      >
        <span className="button-text">{children}</span>
        <span className="button-bg"></span>
        <span className="button-shine"></span>
      </ButtonElement>
    </motion.div>
  );
}
