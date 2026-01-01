import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { selectProjects, selectMainProjects } from "../app/projectsSlice";
import { useGetProjectsQuery } from "../app/apiSlice";
// Router
import { Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const pdfMap = {
  // key는 element.name(레포 이름) 기준이 가장 흔함
  "A-Hierarchical-Interpretation-Framework-Based-on-Multi-Neuron-Activation-Patterns": "https://drive.google.com/file/d/1uWJFUDAfLPXYbSUnXimOIX25oONO9hSv/view?usp=sharing",
  "A-Multi-Agent-Debate-Framework-of-Multiple-Language-Models-for-Hallucination-Detection-Correction": "https://drive.google.com/file/d/1q8yfzXqd31LKVdXK5JN_vYRBYoJjJf0D/view?usp=sharing",
  "A-Natural-Language-based-Notification-Delivery-Control-System-Using-LLM": "https://drive.google.com/file/d/1X0MEcAVbjpO4GJgVm3I3grggdpTGKmQK/view?usp=sharing",
};

const posterMap = {
  // "A-Hierarchical-Interpretation-Framework-Based-on-Multi-Neuron-Activation-Patterns": "https://drive.google.com/file/d/1uWJFUDAfLPXYbSUnXimOIX25oONO9hSv/view?usp=sharing",
  "A-Multi-Agent-Debate-Framework-of-Multiple-Language-Models-for-Hallucination-Detection-Correction": "https://drive.google.com/file/d/1z1awg9RXY8ONrvvl2OFhBLXKMn80SIZH/view?usp=sharing",
  "A-Natural-Language-based-Notification-Delivery-Control-System-Using-LLM": "https://drive.google.com/file/d/1WVwluJ32EkZljldSVt6CZtasL6YWRNNw/view?usp=sharing",
};

const awardMap = {
  // 상 받은 프로젝트 레포 이름 -> 상장/증명서 PDF 링크
  "A-Hierarchical-Interpretation-Framework-Based-on-Multi-Neuron-Activation-Patterns": "https://drive.google.com/file/d/1aU-uae0jrcig558qPGx4nDtew1k7Hyrt/view?usp=sharing",
  "A-Multi-Agent-Debate-Framework-of-Multiple-Language-Models-for-Hallucination-Detection-Correction": "https://drive.google.com/file/d/14KXFnR415BbbJ_B9oexl76601NYtoaFU/view?usp=sharing",
};

// #region component
const Projects = () => {
  const theme = useSelector(selectMode);
  const projects = useSelector(selectProjects);
  const mainProjects = useSelector(selectMainProjects);
  const { isLoading, isSuccess, isError, error } = useGetProjectsQuery();
  let content;

  if (isLoading) {
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        {!error && projects.length === 0 && (
          <h2 className="text-center">
            Oops, you do not have any GitHub projects yet...
          </h2>
        )}
        {mainProjects.length !== 0 && (
          <>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
              {mainProjects.map((element) => {

                const pdf = pdfMap[element.name];
                const poster = posterMap[element.name];
                const award = awardMap[element.name];

                return (
                  <Col key={element.id}>
                    <ProjectCard
                      image={element.image}
                      name={element.name}
                      description={element.description}
                      url={element.html_url}
                      demo={element.homepage}
                      pdf={pdf}
                      poster={poster}
                      award={award}
                    />
                  </Col>
                );
              })}
            </Row>
            {projects.length > 3 && (
              <Container className="text-center mt-5">
                <Link to="/All-Projects">
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    All <Icon icon="icomoon-free:github" /> Projects
                  </Button>
                </Link>
              </Container>
            )}
          </>
        )}
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>{`${error.status} - check getProjects query in src/app/apiSlice.js`}</h2>
      </Container>
    );
  }

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} />
          </Container>
          {content}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;
