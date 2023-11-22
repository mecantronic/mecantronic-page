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
          ...tr.nosotrosEnglish,
          ...tr.formularioEnglish,
          ...tr.footerEnglish,
          ...tr.CompanyEnglish,
          ...tr.BannerEnglish,
        },
      },
      es: {
        translation: {
          ...tr.nosotros,
          ...tr.formulario,
          ...tr.footer,
          ...tr.CompanyEspañol,
          ...tr.BannerEspañol,
        },
      },
      // Agrega más idiomas según sea necesario
    },
    lng: 'es', // idioma predeterminado
    fallbackLng: 'en', // idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
