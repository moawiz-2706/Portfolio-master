import React from 'react';
import { motion } from 'framer-motion';
import { textRevealBlur, staggerLetterReveal } from '../../utils/animationVariants';

export const TextReveal = ({ children, className = "", delay = 0 }) => {
  const text = typeof children === 'string' ? children : '';
  
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerLetterReveal.container}
    >
      {text.split('').map((letter, i) => (
        <motion.span
          key={i}
          variants={staggerLetterReveal.letter}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const TextRevealWithBlur = ({ children, className = "", delay = 0, index = 0 }) => {
  return (
    <motion.div
      className={className}
      custom={index}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
      variants={textRevealBlur}
    >
      {children}
    </motion.div>
  );
};
