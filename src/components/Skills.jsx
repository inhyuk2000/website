import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { skillData, resume, skillDetails } from "../config";

// #region component
const Skills = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Skills"} />
          </Container>
          {/* Skills */}
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={2} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {/* Scores / Certificates */}
          <Row className="mt-5 text-start justify-content-center">
            <Col md={8}>
              {skillDetails.map((section, idx) => (
                <div key={idx} style={{ marginBottom: "2rem" }}>
                  <div style={{ fontWeight: "700", fontSize: "1.5rem", textAlign: "center" }}>
                    {section.title}
                  </div>
                  <ul style={{ marginTop: "1rem", paddingLeft: "0px", textAlign: "center", listStyle: "none", fontWeight: "600" }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: "0.3rem" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Col>
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              // style={{ padding: '1rem 2.5rem', fontSize: '2rem', fontWeight: 'bold' }}
              >
                CV
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element >
  );
};
// #endregion

export default Skills;
