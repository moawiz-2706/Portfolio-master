import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ 
  title, 
  subtitle,
  highlightColor = "rgb(0, 212, 255)",
  className = ""
}) => {
  const titleVariants = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const underlineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    whileInView: { scaleX: 1, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
  };

  return (
    <motion.div 
      className={`section-title-container ${className}`}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h2 
        className="project-heading"
        variants={titleVariants}
      >
        {title}
        {subtitle && <strong className="purple" style={{ color: highlightColor }}> {subtitle}</strong>}
      </motion.h2>
      
      <motion.div
        className="title-underline"
        variants={underlineVariants}
        style={{
          height: '4px',
          background: `linear-gradient(90deg, ${highlightColor}, transparent)`,
          borderRadius: '2px',
          marginTop: '15px',
          maxWidth: '200px'
        }}
      />
      
      {subtitle && (
        <motion.p
          className="section-subtitle"
          variants={subtitleVariants}
          style={{
            marginTop: '20px',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: '300'
          }}
        >
          Scroll to discover
        </motion.p>
      )}
    </motion.div>
  );
};
