import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";

function Work() {
  const suggestions = [
    {
      title: "GHL App Marketplace Packages",
      body: "Productize common integrations into reusable GoHighLevel Marketplace apps (OAuth, webhooks, and admin UI) — sellable and scalable.",
    },
    {
      title: "Agency CRM Rebuild Offer",
      body: "Offer a CRM redesign package for agencies: pipeline strategy, tagging, automations, campaigns and training.",
    },
    {
      title: "Automation Retainer",
      body: "Monthly automation support: create and maintain Zapier/n8n workflows, fixes, monitoring and improvements.",
    },
    {
      title: "Consulting Workshops",
      body: "Run paid workshops for agencies on GoHighLevel best practices, funnel design, and automation playbooks.",
    },
    {
      title: "Freelance Product Builds",
      body: "Take on web app projects (Next.js + API) with optional automation integration and deployment on AWS/Vercel.",
    },
    {
      title: "Content & Tutorials",
      body: "Publish short how‑to videos or written guides that showcase your GHL integrations and automation recipes — great for lead gen.",
    },
  ];

  return (
    <Container fluid className="about-section modern-about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Col md={10}>
            <h1 className="section-title">Work — Opportunities & Offerings</h1>
            <p className="home-about-body">
              Below are focused service and product ideas you can offer right away, plus ways to scale your skills into repeatable revenue.
            </p>

            <Row>
              {suggestions.map((s) => (
                <Col md={6} key={s.title} className="mb-3">
                  <Card className="glass-card info-card h-100">
                    <Card.Body>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                      <Button variant="outline-light" className="mt-2">
                        Explore <AiOutlineRight />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <h3 className="mt-4">Need help choosing?</h3>
            <p className="home-about-body">
              If you'd like, I can draft tailored pricing, an outreach message for potential clients, or a step‑by‑step plan to turn any of the ideas above into a 30‑60 day project. Tell me which items you prefer and I'll create the next plan.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
 
