import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import myImg from "../../Assets/moawiz.png";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { availability, coreStrengths, experience, heroSignals, profile } from "../../data/portfolioData";

export default function Home2() {
  const [selected, setSelected] = useState(null);

  return (
    <Container fluid className="home-about-section modern-home-followup" id="about">
      <Container>
        <Row className="align-items-center followup-grid">
          <Col md={8} className="home-about-description">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="section-title">Professional snapshot</h1>
              <p className="home-about-body">
                {profile.summary}
                <br />
                <br />I work across <b className="purple">GoHighLevel, MERN, Next.js, Flutter, cloud systems, and automation tooling</b> to ship practical products that feel refined in production.
                <br />
                <br />My focus is on <b className="purple">agency workflows, AI-enabled automation, and full-stack applications</b> that reduce manual work and improve client outcomes.
              </p>

              <div className="chip-wrap mt-4">
                {heroSignals.map((signal) => (
                  <span key={signal} className="signal-pill">
                    {signal}
                  </span>
                ))}
              </div>
            </motion.div>

            <Row className="strength-grid">
              {coreStrengths.map((strength, idx) => (
                <Col md={4} key={strength.title}>
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Card
                      className="glass-card info-card h-100"
                      as={motion.div}
                      whileHover={{ y: -10, scale: 1.02 }}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelected(strength)}
                    >
                      <Card.Body>
                        <h4>{strength.title}</h4>
                        <p className="text-truncate" style={{ maxHeight: 60 }}>{strength.description}</p>
                        <div style={{ marginTop: 12 }}>
                          <span className="skill-pill">Click for details</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <Row className="availability-grid">
              <Col md={12}>
                <Card className="glass-card info-card">
                  <Card.Body>
                    <h4>Available for</h4>
                    <div>
                      {availability.map((item) => (
                        <span className="signal-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="availability-grid">
              {experience.slice(0, 3).map((item, idx) => (
                <Col md={4} key={item.role}>
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="glass-card info-card h-100">
                      <Card.Body>
                        <h4>{item.role}</h4>
                        <p style={{ color: "#9cc7e6", marginBottom: 8 }}>{item.company}</p>
                        <p style={{ marginBottom: 0 }}>{item.duration}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="glass-card avatar-card">
                <img src={myImg} className="img-fluid" alt="avatar" />
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
                <div className="hero-mini-links justify-content-center">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="mailto:mhdmoawiz@gmail.com">
                    <AiOutlineMail />
                  </a>
                  <a href="https://www.instagram.com/moawizbhi?igsh=MXE4bmtlenJvdjY5Mw==" target="_blank" rel="noreferrer">
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Reach out for <span className="purple">full-time roles, consulting, or freelance work</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href={profile.github} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="mailto:mhdmoawiz@gmail.com" className="icon-colour home-social-icons">
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/moawizbhi?igsh=MXE4bmtlenJvdjY5Mw==" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <DetailModal item={selected} onHide={() => setSelected(null)} />
      </Container>
    </Container>
  );
}

function DetailModal({ item, onHide }) {
  if (!item) return null;
  return (
    <Modal show={!!item} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{item.description}</p>
        {item.features && (
          <ul>
            {item.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  );
}
