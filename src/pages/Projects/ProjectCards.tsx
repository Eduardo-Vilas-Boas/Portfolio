import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  isBlog: boolean;
  demoLink?: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgPath,
  title,
  description,
  ghLink,
  isBlog,
  demoLink,
}) => {
  const { t } = useTranslation("projects");

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {isBlog ? t("blog_button") : t("github_button")}
        </Button>
        {"\n"}
        {"\n"}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {t("demo_button")}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
