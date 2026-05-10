import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { heroSignals, profile, skillGroups } from "../../data/portfolioData";

function Stack() {
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
            Stack & <strong className="purple">Capabilities</strong>
          </h1>
          <p style={{ color: "#a0a0a0", fontSize: "1.1rem", maxWidth: 900, margin: "0 auto" }}>
            My stack is organized by practical use, not just buzzwords. These are the technologies I have used hands-on in projects, automation work, and product delivery.
          </p>
        </motion.div>

        <Row className="g-4 mb-5">
          {heroSignals.slice(0, 4).map((signal) => (
            <Col md={3} sm={6} key={signal} className="mb-3">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="glass-card info-card h-100"
                style={{ minHeight: 110, display: "grid", placeItems: "center", textAlign: "center", padding: 20 }}
              >
                <span style={{ color: "#e2f8ff", fontWeight: 600, lineHeight: 1.5 }}>{signal}</span>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          {skillGroups.map((group, index) => (
            <Col md={6} lg={4} key={group.title} className="mb-4">
              <motion.section
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
                whileHover={{ y: -10 }}
                className="glass-card"
                style={{
                  padding: 26,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(8, 15, 33, 0.82)",
                  minHeight: 280,
                  height: "100%",
                }}
              >
                <h4 style={{ color: "#ffffff", marginBottom: 12, fontWeight: 700 }}>
                  <span style={{ marginRight: 10 }}>{group.icon}</span>
                  {group.title}
                </h4>
                <p style={{ color: "#8fb7d6", marginBottom: 18 }}>
                  Hands-on tools and technologies I use in real work and projects.
                </p>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.section>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-4"
        >
          <div className="glass-card info-card" style={{ padding: 28 }}>
            <h3 style={{ color: "#ffffff", marginBottom: 10 }}>How I use the stack</h3>
            <p style={{ color: "#cbd5e1", marginBottom: 0 }}>
              {profile.journey}
            </p>
          </div>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Stack;