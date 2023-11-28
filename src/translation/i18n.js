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
          ...tr.AreasTrabajoEnglish,
          ...tr.CompañiasEnglish,
          ...tr.IoTBannerEnglish,
          ...tr.aboutIOTserviceEnglish,
          ...tr.CasosExitoEnglish,
          ...tr.CasosdeExitoIOTEnglish,
          ...tr.TestimoniosEnglish,
          ...tr.iaenglish,
          ...tr.CasosdeExitoAIEnglish,
          ...tr.aboutIAserviceEnglish,
          ...tr.subheaderEnglish,
          ...tr.CasosdeExitoIOTEnglish,
          ...tr.aboutIAserviceEnglish,
          ...tr.CasosDeExito3DEnglish,
          ...tr.bnEnglish

        },
      },
      es: {
        translation: {
          ...tr.nosotros,
          ...tr.formulario,
          ...tr.footer,
          ...tr.CompanyEspañol,
          ...tr.BannerEspañol,
          ...tr.AreasTrabajoEspañol,
          ...tr.CompañiasEspañol,
          ...tr.IoTBanner,
          ...tr.aboutIOTservice,
          ...tr.CasosExitoEspañol,
          ...tr.TestimoniosEspañol,
          ...tr.iaespañol,
          ...tr.aboutIAservice,
          ...tr.CasosdeExitoIOTEspañol,
          ...tr.CasosdeExitoAIEspañol,
          ...tr.CasosdeExitoAIEspañol,
          ...tr.aboutIAservice,
          ...tr.subheader,
          ...tr.aboutIAservice,
          ...tr.CasosDeExito3DEspañol,
          ...tr.bnEspañol

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
