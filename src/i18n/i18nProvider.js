import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import useLanguageStore from "../store/lenguajeStore";
// ES
import customNavbar_es from "./es/customNavbar.json";
import about_es from "./es/about.json";
import header_es from "./es/header.json";
import resume_es from "./es/resume.json";
import portfolio_es from "./es/portfolio.json";

// EN
import customNavbar_en from "./en/customNavbar.json";
import about_en from "./en/about.json";
import header_en from "./en/header.json";
import resume_en from "./en/resume.json";
import portfolio_en from "./en/portfolio.json";



const resources = {
  es: {
    customNavbar: customNavbar_es,
    about: about_es,
    header: header_es,
    resume: resume_es,
    portfolio: portfolio_es,
  },
  en: {
    customNavbar: customNavbar_en,
    about: about_en,
    header: header_en,
    resume: resume_en,
    portfolio: portfolio_en,
  },
};

// Initialize i18n
i18next.use(initReactI18next).init({
  debug: false,
  lng: "en", // Get the selected language from Zustand
  resources,
  interpolation: {
    escapeValue: false, // React already escapes variables, so no need to escape here
  },
});

export default i18next;
