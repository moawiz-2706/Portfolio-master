import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function PremiumCard({ 
  icon, 
  title, 
  description, 
  features = [], 
  actions = [],
  className = '',
  style = {}
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        boxShadow: '0 20px 50px rgba(0, 212, 255, 0.3)',
        duration: 0.3,
        overwrite: 'auto'
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        duration: 0.3,
        overwrite: 'auto'
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10 }}
      className={`premium-card ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.95), rgba(22, 33, 62, 0.95))',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        borderRadius: '16px',
        padding: '24px',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        ...style,
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 255, 0.1), transparent)',
          pointerEvents: 'none',
        }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        {icon && (
          <motion.div
            style={{
              fontSize: '2.5rem',
              marginBottom: '12px',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 132, 255, 0.1))',
              width: 'fit-content',
              padding: '12px',
              borderRadius: '8px',
            }}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title */}
        {title && (
          <h3
            style={{
              color: '#ffffff',
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #00d4ff, #0084ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: isHovered ? 'transparent' : 'inherit',
              backgroundClip: 'text',
              transition: 'all 0.3s ease',
            }}
          >
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p
            style={{
              color: '#a0a0a0',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              marginBottom: '12px',
            }}
          >
            {description}
          </p>
        )}

        {/* Features list */}
        {features.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '12px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {features.map((feature, idx) => (
              <li
                key={idx}
                style={{
                  color: '#8fb7d6',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#00d4ff',
                  }}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        {actions.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '16px',
              flexWrap: 'wrap',
            }}
          >
            {actions.map((action, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.onClick}
                style={{
                  background: idx === 0 ? 'linear-gradient(135deg, #00d4ff, #0084ff)' : 'transparent',
                  color: idx === 0 ? '#fff' : '#00d4ff',
                  border: idx === 0 ? 'none' : '1px solid rgba(0, 212, 255, 0.4)',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {action.label}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
