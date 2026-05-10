import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import homeLogo from "../../Assets/moawiz.png";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import AnimatedBackdrop from "../VisualEffects/AnimatedBackdrop";
import NumberCounter from "../AnimatedElements/NumberCounter";
import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone, AiOutlineArrowRight } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { heroSignals, heroStats, profile } from "../../data/portfolioData";
import { staggerContainer, staggerItem } from "../../utils/animationVariants";

function Home() {
  return (
    <section>
      <Container fluid className="home-section modern-home-section" id="home">
        <AnimatedBackdrop />
        <Container className="home-content">
          <Row className="align-items-center hero-grid">
            <Col md={7} className="home-header">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="hero-kicker">{profile.location}</span>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> {profile.name}</strong>
                </h1>

                <div className="hero-type-wrap">
                  <Type />
                </div>

                <p className="hero-summary">{profile.summary}</p>
                <div className="hero-summary-note">
                  Key learning areas: C++, C#, Java, JavaScript, React, Express, Next.js, Flutter, Git, Docker, Kubernetes, Tailwind, and GHL automation.
                </div>

                <div className="hero-actions">
                  <Button variant="primary" href="#about" className="hero-button">
                    Explore Profile <AiOutlineArrowRight />
                  </Button>
                  <Button variant="outline-light" href="/resume" className="hero-button ghost">
                    <AiOutlineDownload /> Resume
                  </Button>
                </div>

                <div className="hero-contact-row">
                  <a href={`mailto:${profile.email}`} className="hero-contact-chip">
                    <AiOutlineMail /> {profile.email}
                  </a>
                  <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hero-contact-chip">
                    <AiOutlinePhone /> {profile.phone}
                  </a>
                </div>
              </motion.div>
            </Col>

            <Col md={5} className="hero-visual-col">
              <motion.div
                initial={{ opacity: 0, y: -40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.2}
                  glareColor="#7fffd4"
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  className="hero-tilt"
                >
                  <Card className="glass-card hero-card">
                    <Card.Body>
                      <div className="hero-card-media">
                        <img
                          src={homeLogo}
                          alt="Moawiz"
                          className="img-fluid hero-art"
                        />
                      </div>
                      <div className="hero-card-copy">
                        <div className="hero-card-badge">Currently working at HL Pro Tools</div>
                        <h3>{profile.title}</h3>
                        <p>
                          Building GoHighLevel apps, AI automations, and full-stack products that feel sharp in production.
                        </p>
                        <div className="hero-mini-links">
                          <a href={profile.linkedin} target="_blank" rel="noreferrer">
                            <FaLinkedinIn /> LinkedIn
                          </a>
                          <a href={profile.github} target="_blank" rel="noreferrer">
                            <FaGithub /> GitHub
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Tilt>
              </motion.div>
            </Col>
          </Row>

          <motion.div 
            className="hero-stats-row"
            {...staggerContainer(0.1, 0.3)}
          >
            {heroStats.map((stat, index) => (
              <Col md={3} sm={6} key={stat.label}>
                <motion.div
                  variants={staggerItem}
                >
                  <motion.div
                    className="glass-card stat-card"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + index * 0.2, repeat: Infinity }}
                    style={{ cursor: "pointer" }}
                  >
                    <NumberCounter 
                      end={parseInt(stat.value.replace(/\D/g, ''))} 
                      duration={2}
                      suffix={stat.value.replace(/[\d]/g, '')}
                      delay={index * 0.1}
                      className="stat-value"
                    />
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </motion.div>

          <Row className="hero-signals-row">
            <Col md={12}>
              <div className="signal-strip">
                {heroSignals.map((signal, i) => (
                  <motion.span
                    key={signal}
                    className="signal-pill"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 * i }}
                    whileHover={{ scale: 1.05 }}
                    style={{ cursor: "default" }}
                  >
                    {signal}
                  </motion.span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
