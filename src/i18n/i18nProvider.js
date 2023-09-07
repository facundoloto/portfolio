import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import useLanguageStore from "../store/lenguajeStore";
// ES
import customNavbar_es from "./es/customNavbar.json";
import about_es from "./es/about.json";
import header_es from "./es/header.json";
import resume_es from "./es/resume.json";
// EN
import customNavbar_en from "./en/customNavbar.json";
import about_en from "./en/about.json";
import header_en from "./en/header.json";
import resume_en from "./en/resume.json";
// const lenguageSelect = () => {
//   return useLanguageStore((state) => state.language);
// };

// const len = lenguageSelect();

const resources = {
  es: {
    customNavbar: customNavbar_es,
    about: about_es,
    header: header_es,
    resume: resume_es,
  },
  en: {
    customNavbar: customNavbar_en,
    about: about_en,
    header: header_en,
    resume: resume_en,
  },
};

// Initialize i18n
i18next.use(initReactI18next).init({
  debug: false,
  lng: localStorage.getItem("language"), // Get the selected language from Zustand
  resources,
  interpolation: {
    escapeValue: false, // React already escapes variables, so no need to escape here
  },
});

export default i18next;
