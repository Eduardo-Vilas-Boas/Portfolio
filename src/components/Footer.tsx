import { Container, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import { AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation(["footer"]);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <Trans
            i18nKey="designed_message"
            t={t}
            values={{ name: "Eduardo Guerra" }}
            components={{ h: <h3 /> }}
          />
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Eduardo-Vilas-Boas"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/eduardo-vilas-boas-varanda-guerra/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:eduardo.vilasboas.guerra@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour navbar-social-icons"
              >
                <AiTwotoneMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
