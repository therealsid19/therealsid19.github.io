import React from "react";
import { Col, Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

function renderTooltip(props) {
  return <Tooltip {...props}>{props.msg}</Tooltip>;
}

function Skills() {
  return (
    <Container id="skills" className="skill-section section">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading">
          <strong className="skill-title">Technical Skills</strong>
        </h1>
        <Col xs={12} md={10} className="tech-icons">
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'Python' })}>
            <span className="icon di-python"><DiPython /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'C++' })}>
            <span className="icon cg-cplusplus"><CgCPlusPlus /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'Java' })}>
            <span className="icon di-java"><DiJava /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'HTML5' })}>
            <span className="icon di-html5"><DiHtml5 /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'CSS3' })}>
            <span className="icon di-css3"><DiCss3 /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'JavaScript' })}>
            <span className="icon di-jsbadge"><DiJsBadge /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'React' })}>
            <span className="icon di-react"><DiReact /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'Node.js' })}>
            <span className="icon di-nodejs"><DiNodejs /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'Git' })}>
            <span className="icon di-git"><DiGit /></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={renderTooltip({ msg: 'MySQL' })}>
            <span className="icon di-mysql"><DiMysql /></span>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
