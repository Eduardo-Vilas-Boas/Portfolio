import { Container, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeImage from "../../Assets/home.png";

function Home2() {
  const { t } = useTranslation(["home"]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <Trans
                t={t}
                i18nKey="introduce_myself"
                components={{ span: <span className="text-color" /> }}
              />
            </h1>
            <div className="home-about-body">
              <Trans t={t} i18nKey="love_programming" />
              <br />
              <br />
              <Trans
                t={t}
                i18nKey="most_fluent_techs"
                components={{
                  span: <span className="text-color" />,
                }}
              />
              <br />
              <br />
              <Trans t={t} i18nKey="interest_list_title" />
              <br />
              <ul>
                <li>
                  <Trans
                    t={t}
                    i18nKey="interest_list_items.0"
                    components={{
                      span: <span className="text-color" />,
                    }}
                  />
                </li>
                <li>
                  <Trans
                    t={t}
                    i18nKey="interest_list_items.1"
                    components={{
                      span: <span className="text-color" />,
                    }}
                  />
                </li>
                <li>
                  <Trans
                    t={t}
                    i18nKey="interest_list_items.2"
                    components={{
                      span: <span className="text-color" />,
                    }}
                  />
                </li>
              </ul>
              <Trans
                t={t}
                i18nKey="extra_knowledge"
                components={{
                  span: <span className="text-color" />,
                }}
              />
              <br />
              <br />
              <Trans
                t={t}
                i18nKey="hoobies"
                components={{
                  span: <span className="text-color" />,
                }}
              />
            </div>
          </Col>
          <Col md={4} className="myAvtar-col">
            <Tilt>
              <img src={homeImage} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              <Trans
                i18nKey="find_me_on"
                t={t}
                components={{ span: <span className="uppercase-text" /> }}
              />
            </h1>
            <p>
              <Trans
                i18nKey="connect_with_me"
                t={t}
                components={{ span: <span className="text-color" /> }}
              />
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Eduardo-Vilas-Boas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eduardo-vilas-boas-varanda-guerra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:eduardo.vilasboas.guerra@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
