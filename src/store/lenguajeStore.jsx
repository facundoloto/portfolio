import create from "zustand";

const useLanguageStore = create((set) => ({
  language: "en", // Default language
  setLanguage: (newLanguage) => {
    localStorage.setItem("language", newLanguage);
  },
}));

export default useLanguageStore;
