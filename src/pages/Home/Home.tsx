import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { Trans, useTranslation } from "react-i18next";
import Particle from "../../components/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/my_photo.jpeg";

function Home() {
  const { t } = useTranslation(["home"]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("hello_there")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <Trans
                  i18nKey="welcome_message"
                  t={t}
                  values={{ name: "Eduardo Guerra" }}
                  components={{ strong: <strong /> }}
                />
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} className="myAvtar-col">
              <Tilt>
                <img src={myImg} className="myAvtar" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
