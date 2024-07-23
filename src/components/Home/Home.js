import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Home3 from "./Home3";
import Socials from "./Socials";
import Projects from "../Projects/Projects.js"
import {
  Image,
  ScrollDown,
  ScrollLink,
} from "./Scroll";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";


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

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
          <ScrollDown to="about">

        </ScrollDown>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
      <Projects />
      <Socials />
    </section>
  );
}

export default Home;


