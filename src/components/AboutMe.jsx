import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

/* ================= styled-components ================= */
const StyledAboutMe = styled.section`
  color: #ffffff;

  #projects .itemTitle {
    font-size: 20px;
  }

  .sectionTitle {
    margin-bottom: 2rem;
  }

  .panelTitle {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  /* Timeline */
  .timeline {
    position: relative;
    padding-left: 40px;
  }

  /* vertical line */
  .timeline::before {
    content: "";
    position: absolute;
    left: 14px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: #ffffff;
    opacity: 0.85;
  }

  .item {
    position: relative;
    padding-bottom: 22px;
  }

  /* dot centered on the line */
  .dot {
    position: absolute;
    left: 14px; /* same as line */
    top: 9px;
    transform: translateX(-46.5px);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
  }

  .itemHeader {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .itemTitle {
    font-weight: 800;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    margin: 0;
    color: #ffffff;
  }

  .badgeYear {
    font-size: 0.85rem;
    padding: 5px 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    font-weight: 700;
  }

  .itemSub {
    margin-top: 8px;
    font-size: 1rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.85);
  }

  .linkRow {
    margin-top: 8px;
  }

  .link {
    color: #ffffff;
    font-weight: 700;
    text-decoration: underline;
  }
`;

/* ================= data ================= */
const education = [
  {
    title: "KYUNG HEE UNIV.",
    period: "2020 - Present",
    sub: "Department of Computer Engineering"
  },
];

const projects = [
  {
    title:
      "부동산 투자가치가 높은 성장 지역 예측 시스템 개발",
    period: "2023",
    sub: "Data Business (Python)",
  },
  {
    title: "7호선 급행열차 최적 정차역 제안 시스템 개발",
    period: "2024",
    sub: "Data Science, Machine Learning (Python)",
  },
  {
    title: "편의점 히트 상품 예측 및 신제품 추천 시스템 개발",
    period: "2024",
    sub: "Data Science (Python)",
  },
  {
    title: "지진 대비 추가적인 임시주거시설 추천",
    period: "2024",
    sub: "Machine Learning (Python)",
  },
  {
    title: "딥러닝 해석을 위한 계층적 다중 뉴런 프레임워크 모델 개발",
    period: "2025",
    sub: "KCC2025 - 장려상",
  },
  {
    title: "다중 언어 모델 기반 멀티 에이전트 챗봇 토론 프레임워크를 통한 환각 탐지 및 교정",
    period: "2025",
    sub: "KCC2025 - 최우수상",
  },
  {
    title: "LLM을 활용한 자연어 기반 알림 전송 제어 시스템",
    period: "2025",
    sub: "KSC2025 - Accept",
  },
];

const activities = [
  {
    title: "KHLUG",
    sub: "KHU Developer Club",
    period: "2020",
  },
  {
    title: "KHUMA",
    period: "2022 - 2024",
    sub: "KHU Running Club [Pacer Staff]",
  },
  {
    title: "KHUDA",
    period: "2024 - 2025",
    sub: "KHU Data Analysis and AI Club",
  },
  {
    title: "USER EXPERIENCE COMPUTING LAB",
    period: "2024.11 - 2025.11",
    sub: "Undergraduate Intern",
    linkText: "UXC Lab Website",
    linkUrl: "https://uxc.khu.ac.kr/",
  }
];

/* ================= components ================= */
const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((it, idx) => (
      <div className="item" key={`${it.title}-${idx}`}>
        <span className="dot" />
        <div className="itemHeader">
          <h4 className="itemTitle">{it.title}</h4>

          {it.period && <span className="badgeYear">{it.period}</span>}
        </div>
        {it.sub && <div className="itemSub">{it.sub}</div>}
        {it.linkText && it.linkUrl && (
          <div className="linkRow">
            <a
              className="link"
              href={it.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {it.linkText}
            </a>
          </div>
        )}
      </div>
    ))}
  </div>
);

/* ================= AboutMe ================= */
const AboutMe = () => {
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container className="d-flex justify-content-center sectionTitle">
          <Title size="h2" text="About Me" />
        </Container>

        <Container>
          <Row className="g-5">
            {/* Left */}
            <Col md={6}>
              <div className="panelTitle">Education</div>
              <Timeline items={education} />

              <div className="panelTitle" style={{ marginTop: "2rem" }}>
                Activities
              </div>
              <Timeline items={activities} />
            </Col>

            {/* Right */}
            <Col md={6}>
              <div className="panelTitle">Projects</div>
              <div id="projects">
                <Timeline items={projects} />
              </div>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

export default AboutMe;
