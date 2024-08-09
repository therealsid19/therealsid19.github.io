import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import SP from "../../Assets/Projects/SP-Restaurant.png";
import Cmd from "../../Assets/Projects/Command-Menu.png";
import Web from "../../Assets/Projects/web-logo.png"
import Quarantine from "../../Assets/Projects/quarantine.jpg";

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
            description="Developed a comprehensive Restaurant Management System to streamline and optimize restaurant operations, efficiently handling over 1000 daily transactions. This project used Python (Kivy) for backend logic along with JSON and SQL for database management."
            ghLink="https://github.com/PalD777/SP_RestaurantManagementSystem"
            customClass="large-image" // Apply the custom class here
          />
          <ProjectCard
            imgPath={Cmd}
            title="Command Menu System"
            description="Developed a responsive command-line interface (CLI) and the key features included weather and clock, an optical character recognition (OCR) for converting images of text into editable text and cryptography that offered various encryption and decryption functionalities."
            ghLink="https://github.com/PalD777/CmdMenuSuite?tab=readme-ov-file"
          />

          <ProjectCard
            imgPath={Web}
            title="Personal Website"
            description="Create a personal website that showcased my skills and the projects that I've worked on. I used HTML, CSS, JavaScript and React to build this website."
            ghLink="https://github.com/therealsid19/therealsid19.github.io"
            customClass="large-image2"
          />

        <ProjectCard
            imgPath={Quarantine}
            title="Quarantine++"
            description="Created a website that allows patients in quarantine to enter their temperature, refer to entertainment like games, new and weather report. Built this using HTML, CSS and JavaScript."
            ghLink="https://github.com/therealsid19/Quarantine"
            customClass="large-image3"
          />
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
