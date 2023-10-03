import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navStyle from "./navbar.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
const pdfUrl = './Facundo_Loto_Dev.pdf'; // Replace with the actual URL or file path
export default function NavBar() {
  const { t, i18n } = useTranslation("customNavbar");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      data-bs-theme="dark"
      className={navStyle.colorNav + " " + "fixed-top"}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t("translations.about")}</Nav.Link>
            <Nav.Link href="#resume">
              {t("translations.experience")}
            </Nav.Link>
            <Nav.Link href="#skill">{t("translations.skill")}</Nav.Link>
            <Nav.Link href="#portfolio">{t("translations.portfolio")}</Nav.Link>
            <Nav.Link href={pdfUrl} download>{t("translations.cv")}</Nav.Link>

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
