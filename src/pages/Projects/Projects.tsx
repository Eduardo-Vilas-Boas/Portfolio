import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import omnisight from "../../Assets/Projects/omnisight.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  const { t } = useTranslation("projects");

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("heading")} <strong className="text-color">{t("heading_highlight")} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("subtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnisight}
              isBlog={false}
              title="OmniSight"
              description={t("omnisight_description")}
              ghLink="https://github.com/Eduardo-Vilas-Boas/omnisight"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description={t("portfolio_description")}
              ghLink="https://github.com/Eduardo-Vilas-Boas/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
