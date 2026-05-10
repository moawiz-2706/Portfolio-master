import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineRight,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%" }}
    >
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
        style={{
          backdropFilter: navColour ? "blur(10px)" : "blur(0px)",
          transition: "all 0.3s ease"
        }}
      >
        <Container>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="d-flex"
          >
            <Navbar.Brand href="/" className="d-flex">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
          </motion.div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {[
              { icon: AiOutlineHome, label: "Home", path: "/" },
              { icon: AiOutlineFundProjectionScreen, label: "Projects", path: "/project" },
              { icon: AiOutlineUser, label: "Stack", path: "/stack" },
              { icon: AiOutlineRight, label: "Services", path: "/services" },
              { icon: CgFileDocument, label: "Resume", path: "/resume" },
              { icon: AiOutlineMail, label: "Contact", path: "/contact" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Item>
                    <Nav.Link as={Link} to={item.path} onClick={() => updateExpanded(false)}>
                      <Icon style={{ marginBottom: "2px" }} /> {item.label}
                    </Nav.Link>
                  </Nav.Item>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fork-btn"
            >
              <Nav.Item>
                <Button
                  href="https://github.com/mhdmoawiz"
                  target="_blank"
                  rel="noreferrer"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
