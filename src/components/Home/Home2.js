import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useInView } from 'react-intersection-observer';

function Home2() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className={`home-about-description fade-in ${inView ? 'visible' : ''}`} ref={ref}>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span>
            </h1>
            <p className="home-about-body">
              Hello! I'm Siddhant Nair, a third-year Computer Science student at McMaster University 
              with a passion for software development and technology. 
              <br />
              <br />
              I have hands-on experience with various programming languages such as 
              <b className = "purple"> Python, Java, C, and C++ </b>, as well as web technologies like 
              <b className = "purple"> React, HTML, CSS, and JavaScript </b>
                
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
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
