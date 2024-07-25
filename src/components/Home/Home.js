import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About.js";
import Type from "./Type";
import Skills from "./Skills.js";
import Projects from "../Projects/Projects.js"
import {
  ScrollDown,
} from "./Scroll";




function Home() {
  return (
    <section>
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
          <ScrollDown to="about">

        </ScrollDown>
        </Container>
      </Container>
      <About />
      <Skills />
      <Projects />

    </section>
  );
}

export default Home;


