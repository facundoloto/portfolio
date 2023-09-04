import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navStyle from "./navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
  // const { setLanguage } = useLanguageStore();
  const { t, i18n } = useTranslation("customNavbar");
  // const handleLanguageChange = (newLanguage) => {
  //   setLanguage(newLanguage);
  // };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      data-bs-theme="dark"
      className={navStyle.colorNav}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t("translations.about")}</Nav.Link>
            <Nav.Link href="#experience">
              {t("translations.experience")}
            </Nav.Link>
            <Nav.Link href="#portfolio">{t("translations.portfolio")}</Nav.Link>
            <Nav.Link href="#contact">{t("translations.contact")}</Nav.Link>
          </Nav>
          <Nav>
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="outline-info"
                onClick={() => changeLanguage("en")}
              >
                Eng
              </Button>
              <div className="vr" />
              <Button
                variant="outline-danger"
                onClick={() => changeLanguage("es")}
              >
                Esp
              </Button>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
