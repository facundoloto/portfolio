import { lazy, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import useLanguageStore from "./store/lenguajeStore";

import i18next from "./i18n/i18nProvider";
import "./App.css";

const Loader = lazy(() => import("./components/Loader/Loader"));
const Header = lazy(() => import("./components/header/Header"));
const About = lazy(() => import("./components/about/about"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Skill = lazy(() => import("./components/skills/Skill"));
const Project = lazy(() => import("./components/project/Projects"));
const Footer = lazy(() => import("./components/footer/Footer"));


function App() {
  const { setLanguage } = useLanguageStore();
  const timeFade = 1700;
  const animation = "fade-up";
  setLanguage(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader isLoading={true} />
          </div>}>
        <I18nextProvider i18next={i18next}>
          <Header typeFade={animation} duration={timeFade} />
          <About typeFade={animation} duration={timeFade} />
          <Resume typeFade={animation} duration={timeFade} />
          <Skill typeFade={animation} duration={timeFade} />
          <Project typeFade={animation} duration={timeFade} />
          <Footer typeFade={animation} duration={timeFade} />
        </I18nextProvider>
      </Suspense>

    </>
  );
}

export default App;
