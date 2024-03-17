import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import enFlag from "../Assets/en-flag.svg";
import frFlag from "../Assets/fr-flag.svg";
import ptFlag from "../Assets/pt-flag.svg";

import i18n from "../i18n";

import { CgFileDocument } from "react-icons/cg";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation(["navbar"]);

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!expand && path) {
      navigate(path);
    }
  }, [expand]);

  const navigateTo = (path: string) => {
    setPath(path);
    updateExpanded(false);
  };

  const getLanguageFlag = (currentLanguage: string) => {
    return currentLanguage === "en"
      ? enFlag
      : i18n.language === "fr"
        ? frFlag
        : ptFlag;
  };

  const [currentFlag, setCurrentFlag] = useState(
    getLanguageFlag(i18n.language)
  );

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    setCurrentFlag(getLanguageFlag(lng));
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => navigateTo("/")}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("home")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => navigateTo("/about")}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => navigateTo("/resume")}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("resume")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "33px",
                  }}
                >
                  <img src={currentFlag} alt="Current Language" height="20" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => changeLanguage("en")}
                    style={{ height: "33px" }}
                  >
                    <img src={enFlag} alt="UK Flag" height="20" /> English
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => changeLanguage("fr")}
                    style={{ height: "33px" }}
                  >
                    <img src={frFlag} alt="FR Flag" height="20" /> Français
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => changeLanguage("pt")}
                    style={{ height: "33px" }}
                  >
                    <img src={ptFlag} alt="PT Flag" height="20" /> Português
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
