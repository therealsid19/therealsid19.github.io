import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import pic from "../../Assets/about-pic.jpeg"


function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className={`home-about-description fade-in ${inView ? 'visible' : ''}`} ref={ref}>
              <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
                <span className = "about-text"> About Me </span>
              </h1>
              <p className="home-about-body">
                I'm a third-year Computer Science student at McMaster University 
                with a passion for software development and technology. 
                <br />
                <br />
                I have hands-on experience with various programming languages such as 
                <b className= "about-languages"> Python, Java, C, and C++ </b>, as well as web technologies like 
                <b className="about-languages"> React, HTML, CSS, and JavaScript </b>.
                <br />
                <br />
                Outside of academics and programming, I enjoy running and going to the gym to stay 
                active and healthy. 
                <br />
                <br />
                I'm currently diving deeper into Machine Learning and Cybersecurity. 
                <br />
                <br />
                My goal is to pursue a career in software development, where I can leverage my skills to 
                create impactful solutions.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img src = {pic} className={`home-about-description fade-in ${inView ? 'visible' : ''}`} ref={ref}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
