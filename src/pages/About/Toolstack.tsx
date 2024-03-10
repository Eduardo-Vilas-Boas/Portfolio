import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiLinux } from "react-icons/si";

function Toolstack() {
  const tool_list = [
    ["Linux", <SiLinux />],
    ["VS Code", <SiVisualstudiocode />],
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tool_list.map((tool) => {
        return (
          <Col key={tool[0].toString()} xs={4} md={2} className="tech-icons">
            <p style={{ fontSize: "0.4em" }}>{tool[0]}</p>
            {tool[1]}
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
