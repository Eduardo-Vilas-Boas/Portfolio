import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

void i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    debug: false,
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    defaultNS: "common",
    ns: ["common", "errors"],
  });

export default i18n;
