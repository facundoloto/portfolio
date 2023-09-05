import { lazy } from "react";
import { I18nextProvider } from "react-i18next";
import useLanguageStore from "./store/lenguajeStore";

import i18next from "./i18n/i18nProvider";
import "./App.css";

const Header = lazy(() => import("./components/header/Header"));
function App() {
  const { setLanguage } = useLanguageStore();
  setLanguage(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );
  return (
    <>
      <I18nextProvider i18next={i18next}>
        <Header />
      </I18nextProvider>
    </>
  );
}

export default App;
