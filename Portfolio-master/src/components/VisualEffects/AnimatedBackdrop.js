import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AnimatedBackdrop() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const primaryVideoId = "9No-FiEInLA";
  const secondaryVideoId = "13fN8j3t6bQ";
  const primarySrc = `https://www.youtube-nocookie.com/embed/${primaryVideoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${primaryVideoId}&modestbranding=1&rel=0`;
  const secondarySrc = `https://www.youtube-nocookie.com/embed/${secondaryVideoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${secondaryVideoId}&modestbranding=1&rel=0`;

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handleLeave = () => {
      setCursor((previous) => ({ ...previous, visible: false }));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="animated-backdrop" aria-hidden="true">
      <div className="youtube-backdrop-layer">
        <iframe
          className="backdrop-youtube primary"
          src={primarySrc}
          title="Tech cinematic background"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
        />
        <iframe
          className="backdrop-youtube secondary"
          src={secondarySrc}
          title="Technology abstract background"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
        />
      </div>
      <video className="backdrop-video-fallback" autoPlay muted loop playsInline>
        <source src="https://videos.pexels.com/video-files/3579467/3579467-sd_640_360_25fps.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="ambient-orb orb-one"
        animate={{ x: [0, 40, -20, 0], y: [0, -25, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb orb-two"
        animate={{ x: [0, -35, 15, 0], y: [0, 25, -15, 0], scale: [1, 0.92, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb orb-three"
        animate={{ x: [0, 20, -30, 0], y: [0, 18, -20, 0], scale: [1, 1.04, 0.97, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="cursor-glow"
        animate={{
          x: cursor.x - 140,
          y: cursor.y - 140,
          opacity: cursor.visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 90, damping: 24 }}
      />
      <motion.div
        className="cursor-dot"
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          opacity: cursor.visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      />
      <div className="aurora-overlay" />
      <div className="grid-haze" />
    </div>
  );
}

export default AnimatedBackdrop;