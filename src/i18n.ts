import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import skTranslation from './locales/sk/translation.json';
import ukTranslation from './locales/uk/translation.json';
import esTranslation from './locales/es/translation.json';

const resources = {
  en: { translation: enTranslation },
  sk: { translation: skTranslation },
  uk: { translation: ukTranslation },
  es: { translation: esTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // Default to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Listen for language changes and persist to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
