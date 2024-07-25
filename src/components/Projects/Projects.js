import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import SP from "../../Assets/Projects/SP-Restaurant.png";
import Cmd from "../../Assets/Projects/Command-Menu.png";
import Quarantine from "../../Assets/Projects/quarantine.jpg"

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container fluid className="project-section" ref={sectionRef}>
      <Container>
        <h1 className="project-heading" id="projects">
          <strong className="purple">My Projects</strong>
        </h1>
        <div className="projects-list">
          <ProjectCard
            imgPath={SP}
            title="S&P Restaurant Management System"
            description="Developed a comprehensive Restaurant Management System to streamline and optimize restaurant operations, efficiently handling over 1000 daily transactions. This project leveraged Python for backend logic, Kivy for the graphical user interface, and SQL for database management, resulting in a robust and scalable solution capable of meeting the high demands of a busy restaurant environment."
            ghLink="https://github.com/PalD777/SP_RestaurantManagementSystem"
            customClass="large-image" // Apply the custom class here
          />
          <ProjectCard
            imgPath={Cmd}
            title="Command Menu System"
            description="Developed a responsive command-line user interface (CLI) using the curses library in Python, designed to host a variety of useful applications. This interface was built to be highly interactive and user-friendly, allowing seamless navigation between different apps. Key features included a weather app that fetched and displayed real-time weather updates, an optical character recognition (OCR) app for converting images of text into editable text, a clock app that provided an accurate time display, and a cryptography app that offered various encryption and decryption functionalities."
            ghLink="https://github.com/PalD777/CmdMenuSuite?tab=readme-ov-file"
          />

          <ProjectCard
            imgPath={Cmd}
            title="Personal Website"
            description="Create a personal website using HTML, CSS, JavaScript and React."
            ghLink="https://github.com/therealsid19/therealsid19.github.io"
          />

        <ProjectCard
            imgPath={Quarantine}
            title="Personal Website"
            description="Create a website that allows patients in quarantine to enter their temperature, refer to entertainment like games, new and weather report. Build this using HTML, CSS and JavaScript."
            ghLink="https://github.com/therealsid19/Quarantine"
            customClass="large-image2"
          />
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
