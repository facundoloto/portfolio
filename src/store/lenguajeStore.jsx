import create from "zustand";

const useLanguageStore = create((set) => ({
  language: "en", // Default language
  setLanguage: (newLanguage) => {
    localStorage.setItem("language", newLanguage);
    console.log(localStorage.getItem("language"));
  },
}));

export default useLanguageStore;
