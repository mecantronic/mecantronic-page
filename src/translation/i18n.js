// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from '../translation/translations.json';

i18n
  .use(initReactI18next) // inicializar react-i18next
  .init({
    resources: {
      // Aquí coloca tus traducciones
      en: {
        translation: {
          ...tr.footerEnglish,
          ...tr.nosotrosEnglish,
        },
      },
      es: {
        translation: {
          ...tr.nosotros,
          ...tr.footer,
        },
      },
      // Agrega más idiomas según sea necesario
    },
    lng: 'en', // idioma predeterminado
    fallbackLng: 'en', // idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
