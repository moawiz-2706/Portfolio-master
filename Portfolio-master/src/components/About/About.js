import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import AnimatedBackdrop from "../VisualEffects/AnimatedBackdrop";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { certifications, education, experience, ghlServices, leadership, profile, skillGroups } from "../../data/portfolioData";
import { AiOutlineCheck, AiOutlineClockCircle } from "react-icons/ai";
import SkillsRadar from "../Skills/SkillsRadar";

function About() {
  return (
    <Container fluid className="about-section modern-about-section">
      <AnimatedBackdrop />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }} className="about-hero-row">
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "30px" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h1 className="section-title">Know who I am</h1>
              <Aboutcard />
            </motion.div>
          </Col>
          <Col md={5} className="about-img" style={{ paddingTop: "80px", paddingBottom: "30px" }}>
            <Tilt glareEnable glareMaxOpacity={0.2} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="glass-card about-visual-card">
                <img src={laptopImg} alt="about" className="img-fluid" />
                <div className="about-visual-caption">
                  <span className="hero-kicker">{profile.title}</span>
                  <h3>{profile.location}</h3>
                  <p>Software Engineer | FAST-NUCES</p>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row className="content-section-grid">
          <Col md={12}>
            <h2 className="project-heading">
              Professional <strong className="purple">skillset</strong>
            </h2>
          </Col>
          <Col md={5} className="mb-4">
            <SkillsRadar />
          </Col>
          <Col md={7}>
            <Row>
              {skillGroups.map((group, index) => (
                <Col md={6} sm={6} key={group.title} className="mb-4">
                  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 * index }}>
                    <Card className="glass-card info-card h-100">
                      <Card.Body>
                        <h4>{group.title}</h4>
                        <div className="chip-wrap">
                          {group.items.map((item) => (
                            <span key={item} className="skill-pill">
                              {item}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="content-section-grid">
          <Col md={12}>
            <h2 className="project-heading">
              Experience <strong className="purple">timeline</strong>
            </h2>
          </Col>
          {experience.map((item) => (
            <Col md={6} key={item.role} className="mb-4">
              <Card className="glass-card timeline-card h-100">
                <Card.Body>
                  <div className="timeline-head">
                    <div>
                      <h4>{item.role}</h4>
                      <p>{item.company}</p>
                    </div>
                    <span className="timeline-badge"><AiOutlineClockCircle /> {item.duration}</span>
                  </div>
                  <p>{item.summary || item.description}</p>
                  {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                    <ul className="check-list mt-3">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}><AiOutlineCheck /> {highlight}</li>
                      ))}
                    </ul>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="content-section-grid">
          <Col md={6} className="mb-4">
            <h2 className="project-heading">
              Education <strong className="purple">track</strong>
            </h2>
            {education.map((item) => (
              <Card className="glass-card info-card mb-3" key={item.degree}>
                <Card.Body>
                  <h4>{item.degree}</h4>
                  <p className="mb-1">{item.institution}</p>
                  <p className="mb-1"><AiOutlineClockCircle /> {item.duration}</p>
                  <p>{item.details}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6} className="mb-4">
            <h2 className="project-heading">
              Certifications <strong className="purple">and achievements</strong>
            </h2>
            <Card className="glass-card info-card mb-3">
              <Card.Body>
                <ul className="check-list">
                  {certifications.map((item) => (
                    <li key={item.title}><AiOutlineCheck /> {item.title}{item.issuer ? ` (${item.issuer}${item.year ? `, ${item.year}` : ""})` : ""}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <h2 className="project-heading mt-4">
              Leadership <strong className="purple">and activities</strong>
            </h2>
            <Card className="glass-card info-card">
              <Card.Body>
                <ul className="check-list">
                  {leadership.map((item) => (
                    <li key={item}><AiOutlineCheck /> {item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="content-section-grid">
          <Col md={12}>
            <h2 className="project-heading">
              GoHighLevel <strong className="purple">services</strong>
            </h2>
            <Card className="glass-card info-card">
              <Card.Body>
                <div className="chip-wrap">
                  {ghlServices.map((item) => (
                    <span key={item} className="signal-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
