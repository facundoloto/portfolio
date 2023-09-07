import { lazy } from "react";
import { I18nextProvider } from "react-i18next";
import useLanguageStore from "./store/lenguajeStore";

import i18next from "./i18n/i18nProvider";
import "./App.css";

const Header = lazy(() => import("./components/header/Header"));
const About = lazy(() => import("./components/about/About"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Skill = lazy(() => import("./components/skills/Skill"));
const Project = lazy(() => import("./components/project/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));



function App() {
  const { setLanguage } = useLanguageStore();
  setLanguage(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );
  return (
    <>
      <I18nextProvider i18next={i18next}>
        <Header />
        <About />
        <Resume />
        <Skill />
        <Project />
        <Contact />
      </I18nextProvider>
    </>
  );
}

export default App;
