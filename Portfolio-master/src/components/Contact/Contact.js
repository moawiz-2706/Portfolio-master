import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { profile } from "../../data/portfolioData";

const CONTACT_API = process.env.REACT_APP_CONTACT_API || "http://localhost:5000/api/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not send message.");
      }

      setStatus({ type: "success", text: "Message sent successfully. Your message has been saved in CSV." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "danger", text: error.message || "Failed to send message." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <h1 style={{ color: "#00d4ff", marginBottom: 15, fontSize: "3.1rem", fontWeight: 800 }}>
            Contact <strong className="purple">Me</strong>
          </h1>
          <p style={{ color: "#a0a0a0", maxWidth: 780, margin: "0 auto" }}>
            Tell me about your project, workflow challenge, or product idea. I will review it and get back with the best plan.
          </p>
        </motion.div>

        <Row className="g-4">
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card contact-info-card"
            >
              <h3 className="mb-3">Let’s build something real</h3>
              <p>
                I help teams ship full-stack web apps, GoHighLevel automation, and API integrations that are production-ready and easy to maintain.
              </p>
              <ul className="check-list">
                <li><span>✓</span> {profile.location}</li>
                <li><span>✓</span> {profile.email}</li>
                <li><span>✓</span> {profile.phone}</li>
                <li><span>✓</span> Fast replies for project discussions</li>
              </ul>
              <div className="chip-wrap mt-3">
                <span className="skill-pill">Web Apps</span>
                <span className="skill-pill">GHL Automation</span>
                <span className="skill-pill">API Integrations</span>
              </div>
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="glass-card contact-form-card"
            >
              <h3 className="mb-3">Send a message</h3>
              {status.text && <Alert variant={status.type}>{status.text}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project or collaboration"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your goals, scope, and timeline"
                    required
                  />
                </Form.Group>

                <Button type="submit" className="hero-button" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
