import { Col, Container, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import Particle from "../../components/Particle";
import Home2 from "./Home2";
import Type from "./Type";

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
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
