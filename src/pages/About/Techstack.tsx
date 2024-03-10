import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import {
  SiPytorch,
  SiPostgresql,
  SiFastapi,
  SiFlutter,
  SiFlask,
  SiPytest,
  SiOpencv,
  SiDocker,
} from "react-icons/si";

function Techstack() {
  const tech_list = [
    ["Python", <DiPython />],
    ["Pytest", <SiPytest />],
    ["Pytorch", <SiPytorch />],
    ["Opencv", <SiOpencv />],
    ["Fastapi", <SiFastapi />],
    ["Flask", <SiFlask />],
    ["Git", <DiGit />],
    ["Docker", <SiDocker />],
    ["Postgresql", <SiPostgresql />],
    ["Javascript", <DiJavascript1 />],
    ["React", <DiReact />],
    ["HTML5", <DiHtml5 />],
    ["Flutter", <SiFlutter />],
    ["Java", <DiJava />],
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tech_list.map((tech) => {
        return (
          <Col xs={4} md={2} className="tech-icons">
            <p style={{ fontSize: "0.4em" }}>{tech[0]}</p>
            {tech[1]}
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
