import Card from "react-bootstrap/Card";
import { Trans, useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation(["about"]);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Trans
              t={t}
              i18nKey="name"
              components={{
                span: <span className="text-color" />,
              }}
            />
            <br />
            <br />
            <Trans
              t={t}
              i18nKey="current_employement"
              values={{ company_name: "Planet Farms" }}
              components={{
                a: <a href="https://www.planetfarms.ag" target="_blank" />,
                span: <span className="text-color" />,
              }}
            />
            <br />
            <br />
            <Trans t={t} i18nKey="about_activities_title" />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />{" "}
              <Trans t={t} i18nKey={"about_activities_items.0"} />
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <Trans t={t} i18nKey={"about_activities_items.1"} />
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <Trans t={t} i18nKey={"about_activities_items.2"} />
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
