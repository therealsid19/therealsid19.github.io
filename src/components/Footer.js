import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row className="footer-content">
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Siddhant Nair</h3>
          <h3>Copyright © {year} SN</h3>
        </Col>
        <Col md="4" className="footer-social">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a href="https://github.com/therealsid19" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/siddhant-nair-61186b282" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com/therealsid19" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
