import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { profile } from "../../data/portfolioData";

function AboutCard() {
  return (
    <Card className="quote-card-view glass-card about-summary-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">{profile.name}</span>. I’m a software engineer from FAST-NUCES building full-stack products, automation systems, and GoHighLevel solutions. My work spans C++, C#, Java, JavaScript, React, Next.js, Express, Flutter, and cloud-ready backend systems.
            <br />
            <br />I’ve worked across internships and production projects, moving from academic problem-solving into client-facing delivery. In professional work I focus on GoHighLevel (GHL) marketplace apps, OAuth flows, webhook orchestration, AI-assisted lead tools, and agency CRM customization. I also connect GHL, Zapier, n8n, and external APIs to automate business workflows end-to-end.
            <br />
            <br />I enjoy taking ideas from concept to production: designing a clean UX, implementing reliable backend logic, and automating repetitive work so teams can focus on growth.
          </p>

          <ul className="about-contact-list">
            <li className="about-activity">
              <AiOutlineMail /> {profile.email}
            </li>
            <li className="about-activity">
              <AiOutlinePhone /> {profile.phone}
            </li>
            <li className="about-activity">
              <ImPointRight /> Software Engineer | FAST-NUCES
            </li>
          </ul>

          <div className="about-availability-box">
            <h4>Available for</h4>
            <ul>
              <li className="about-activity"><ImPointRight /> Full-time software engineering roles</li>
              <li className="about-activity"><ImPointRight /> GoHighLevel consulting and platform integrations</li>
              <li className="about-activity"><ImPointRight /> Freelance projects: web apps, APIs, automation</li>
              <li className="about-activity"><ImPointRight /> Long-term maintenance retainers and agency partnerships</li>
            </ul>
          </div>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that feel fast, useful, and clean to work with."
          </p>
          <footer className="blockquote-footer">{profile.name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
