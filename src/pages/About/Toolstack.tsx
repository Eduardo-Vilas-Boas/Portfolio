import { Col, Row } from "react-bootstrap";

function Toolstack() {
  const tool_list = [
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "Databricks",
    "Git",
    "Linux",
    "AWS"
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tool_list.map((tool) => (
        <Col key={tool} xs={4} md={2} className="tech-icons">
          <p style={{ fontSize: "0.75em", fontWeight: 500 }}>{tool}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
