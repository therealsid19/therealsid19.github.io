import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Type from "./Type";
import Skills from "./Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact";
import ParticlesComponent from "./Particles"; 
import { ScrollDown } from "./Scroll";

function Home() {
  return (
    <section>
      <ParticlesComponent /> 
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 20 }} className="heading">
                Hi, I'm <strong className="main-name"> Siddhant Nair </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }} className="typer">
                <Type />
              </div>
            </Col>
          </Row>
          <ScrollDown to="about" />
        </Container>
      </Container>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default Home;
