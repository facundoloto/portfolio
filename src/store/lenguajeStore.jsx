import create from "zustand";

const useLanguageStore = create((set) => ({
  language: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en", // Default language
  setLanguage: (newLanguage) => {
    localStorage.setItem("language", newLanguage);
    console.log(localStorage.getItem("language"));
  },
}));

export default useLanguageStore;
