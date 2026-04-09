import { Col, Row } from "react-bootstrap";

function Techstack() {
  const tech_list = [
    "Python",
    "PyTorch",
    "ROS 2",
    "LangGraph",
    "SQL",
    "OpenCV",
    "FastAPI",
    "Flask",
    "Java",
    "C++",
    "React.js",
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tech_list.map((tech) => (
        <Col key={tech} xs={4} md={2} className="tech-icons">
          <p style={{ fontSize: "0.75em", fontWeight: 500 }}>{tech}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
