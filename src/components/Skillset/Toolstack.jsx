import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiHeroku,
  SiNetlify,
  SiGithub,
  SiGimp,
  SiCplusplus,
  SiPython,
  SiIntellijidea,
  SiV8,
  SiGooglechrome,
  SiTypescript,
  SiJava,
  SiInkscape,
  SiTelegram,
  SiDiscord,
  SiCss3

} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTelegram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInkscape />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiV8 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      

      <Col xs={4} md={2} className="tech-icons">
        <SiGimp />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      

    </Row>
  );
}

export default Toolstack;
