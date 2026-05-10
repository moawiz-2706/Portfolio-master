import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { profile, services } from "../../data/portfolioData";

function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-content">
        <motion.div
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <h1 style={{ color: "#00d4ff", marginBottom: 15, fontSize: "3.3rem", fontWeight: 800 }}>
            Services & <strong className="purple">Solutions</strong>
          </h1>
          <p style={{ color: "#a0a0a0", fontSize: "1.1rem", maxWidth: 900, margin: "0 auto" }}>
            I help businesses build websites, automate workflows, integrate software, customize GoHighLevel, and ship features without unnecessary pricing noise.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
            <Button href={`mailto:${profile.email}`} variant="primary" className="hero-button">
              Email me
            </Button>
            <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline-light" className="hero-button ghost">
              LinkedIn
            </Button>
          </div>
        </motion.div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={service.id} className="mb-4">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
                whileHover={{ y: -10, scale: 1.01 }}
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
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;