import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, customClass }) {
  return (
    <div className={`project-card ${customClass}`}>
      <div className="project-image-wrapper">
        <img src={imgPath} alt={title} className="project-image" />
        <div className="hover-overlay">
          <div className="hover-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
