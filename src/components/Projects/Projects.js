import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SP from "../../Assets/Projects/SP-Restaurant.png";
import Cmd from "../../Assets/Projects/Command-Menu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" id="projects">
          <strong className="purple">My Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={SP}
              title="S&P Restaurant Management System"
              description="Developed a comprehensive Restaurant Management System to streamline and optimize restaurant operations, efficiently handling over 1000 daily transactions. The system featured robust order management, tracking order status in real-time to ensure smooth workflow from placement to fulfillment. This project leveraged Python for backend logic, Kivy for the graphical user interface, and SQL for database management, resulting in a robust and scalable solution capable of meeting the high demands of a busy restaurant environment."
              ghLink="https://github.com/PalD777/SP_RestaurantManagementSystem"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Cmd}
              title="Command Menu System"
              description="Developed a responsive command-line user interface (CLI) using the curses library in Python, designed to host a variety of useful applications. This interface was built to be highly interactive and user-friendly, allowing seamless navigation between different apps. Key features included a weather app that fetched and displayed real-time weather updates, an optical character recognition (OCR) app for converting images of text into editable text, a clock app that provided an accurate time display, and a cryptography app that offered various encryption and decryption functionalities"
              ghLink="https://github.com/PalD777/CmdMenuSuite?tab=readme-ov-file"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
