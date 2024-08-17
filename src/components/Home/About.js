import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import pic from "../../Assets/about-pic.png"


function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
// <b className= "about-languages">
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className={`home-about-description fade-in ${inView ? 'visible' : ''}`} ref={ref}>
              <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
                <span className = "about-text"> <b> About Me </b> </span>
              </h1>
              <p className="home-about-body">
              I’m a third-year Computer Science student at McMaster University with a passion for 
              software engineering and full-stack development. Proficient in Python, Java, C, and C++, 
              I specialize in building scalable applications. My skills in React, HTML, CSS, and 
              JavaScript enable me to deliver engaging web experiences.
                <br />
                <br />
                Currently, I’m diving into Machine Learning and Cybersecurity, aiming to develop 
                intelligent systems and safeguard data. I’m also participating in the Headstarter 
                Software Engineering Fellowship, where I’m building AI projects, innovative solutions, 
                and expanding my global network.
                <br />
                <br />
                Beyond academics, I stay active through running and weightlifting, which fuels my 
                problem-solving and project management skills. I’m driven to contribute to impactful 
                software projects and continually seek opportunities to learn, innovate, and collaborate.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img src = {pic} className={`home-about-pic fade-in ${inView ? 'visible' : ''}`} ref={ref}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
