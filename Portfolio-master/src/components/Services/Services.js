import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { profile, services } from "../../data/portfolioData";
import { staggerContainer, staggerItem, titleRevealLine } from "../../utils/animationVariants";
import { SectionTitle } from "../AnimatedElements/SectionTitle";
import { ParallaxScroll } from "../VisualEffects/ParallaxScroll";

function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-content">
        <ParallaxScroll intensity={0.3}>
          <SectionTitle 
            title="Services &" 
            subtitle="Solutions"
            className="mb-5 text-center"
          />
          <motion.p 
            style={{ color: "#a0a0a0", fontSize: "1.1rem", maxWidth: 900, margin: "0 auto" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            I help businesses build websites, automate workflows, integrate software, customize GoHighLevel, and ship features without unnecessary pricing noise.
          </motion.p>
          <motion.div 
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button href={`mailto:${profile.email}`} variant="primary" className="hero-button">
              Email me
            </Button>
            <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline-light" className="hero-button ghost">
              LinkedIn
            </Button>
          </motion.div>
        </ParallaxScroll>

        <motion.div 
          className="g-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1rem" }}
          {...staggerContainer(0.1, 0.1)}
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={staggerItem}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -12, scale: 1.03, rotateZ: -1 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card"
                style={{
                  padding: 26,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(8, 15, 33, 0.82)",
                  minHeight: 360,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ color: "#ffffff", marginBottom: 12, fontWeight: 700 }}>{service.title}</h4>
                <p style={{ color: "#8fb7d6", lineHeight: 1.65, marginBottom: 18 }}>{service.description}</p>
                <div style={{ marginBottom: 18 }}>
                  <h6 style={{ color: "#00d4ff", marginBottom: 12, letterSpacing: 0.5 }}>What you get</h6>
                  <ul className="check-list" style={{ marginBottom: 0 }}>
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature}>
                        <span>✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="chip-wrap" style={{ marginBottom: 18 }}>
                  <span className="skill-pill">{service.timeline}</span>
                  <span className="skill-pill">Custom delivery</span>
                </div>
                <div style={{ marginTop: "auto", display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Button href={`mailto:${profile.email}`} variant="primary" className="hero-button">
                    Email project brief
                  </Button>
                  <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline-light" className="hero-button ghost">
                    LinkedIn chat
                  </Button>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Container>
  );
}

export default Services;
