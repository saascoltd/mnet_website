import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/translation.json";
import th from "../locales/th/translation.json";
import mm from "../locales/mm/translation.json";

const resources = {
  en: { translation: en },
  th: { translation: th },
  mm: { translation: mm },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "mm",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
