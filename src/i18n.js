
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languagedetector from 'i18next-browser-languagedetector';
import translationEN from './locale/en.json';
import translationAR from './locale/ar.json';

const resources = {
    en: {
      translation:translationEN
    },
    ar: {
      translation:translationAR
    }
  };
i18n
.use(languagedetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    },
    react:{
        susPense:false
    }
  });

export default i18n;