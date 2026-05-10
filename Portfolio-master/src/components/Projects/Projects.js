import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Particle from "../Particle";
import { liveProjects } from "../../data/portfolioData";
import { staggerContainer, staggerItem } from "../../utils/animationVariants";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-content">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <h1 style={{ color: "#00d4ff", marginBottom: 15, fontSize: "3.3rem", fontWeight: 800 }}>
            Selected <strong className="purple">Projects</strong>
          </h1>
          <p style={{ color: "#a0a0a0", fontSize: "1.1rem", maxWidth: 820, margin: "0 auto" }}>
            A focused view of my own work only. Live apps show a demo button, while EduAssist is GitHub-only because it is a desktop application.
          </p>
        </motion.div>

        <motion.div 
          className="g-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1rem" }}
          {...staggerContainer(0.1, 0.2)}
        >
          {liveProjects.map((project, index) => (
            <motion.div key={project.id} variants={staggerItem}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-card project-card"
                onClick={() => setSelectedProject(project)}
                style={{
                  padding: 24,
                  borderRadius: 20,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  background: "rgba(8, 15, 33, 0.82)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: 22,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 34,
                      background: "linear-gradient(135deg, rgba(0,212,255,0.18), rgba(255,255,255,0.05))",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    {project.image}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#00d4ff", fontSize: 12, letterSpacing: 1.3, textTransform: "uppercase" }}>
                      {project.status}
                    </div>
                    <div style={{ color: "#b0b0b0", fontSize: 12 }}>{project.category}</div>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: "#ffffff", marginBottom: 6, fontWeight: 700 }}>{project.title}</h4>
                  <p style={{ color: "#8fb7d6", marginBottom: 10, fontSize: 14 }}>{project.subtitle}</p>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.65, marginBottom: 0 }}>{project.description}</p>
                </div>

                <div className="chip-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="check-list" style={{ marginTop: 4, marginBottom: 0 }}>
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", gap: 12, marginTop: "auto", flexWrap: "wrap" }}>
                  {project.link && (
                    <Button
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hero-button"
                      variant="primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <CgWebsite /> &nbsp; Live Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hero-button ghost"
                      variant="outline-light"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <BsGithub /> &nbsp; GitHub
                    </Button>
                  )}
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Modal
                show={!!selectedProject}
                onHide={() => setSelectedProject(null)}
                centered
                size="lg"
                className="project-detail-modal"
              >
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p style={{ color: "#8fb7d6", marginBottom: 8 }}>{selectedProject.subtitle}</p>
                <p style={{ color: "#cbd5e1" }}>{selectedProject.description}</p>

                <h6 style={{ color: "#00d4ff", marginTop: 20 }}>Project Stack</h6>
                <div className="chip-wrap">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <h6 style={{ color: "#00d4ff", marginTop: 20 }}>Details</h6>
                <ul className="check-list" style={{ marginBottom: 0 }}>
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </Modal.Body>
              <Modal.Footer>
                {selectedProject.link && (
                  <Button href={selectedProject.link} target="_blank" rel="noreferrer" className="hero-button" variant="primary">
                    <CgWebsite /> &nbsp; Live Demo
                  </Button>
                )}
                {selectedProject.github && (
                  <Button href={selectedProject.github} target="_blank" rel="noreferrer" className="hero-button ghost" variant="outline-light">
                    <BsGithub /> &nbsp; Repository
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Container>
  );
}

export default Projects;
