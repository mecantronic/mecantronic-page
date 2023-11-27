// @ts-nocheck
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Banner } from "../components/BannerServicio/BannerServicio";
import { SecondNavbar } from "../components/SecondNavbar/SecondNavbar";
import { BannerMoreInfo } from "../components/BannerMoreInfo/BannerMoreInfo";
import { ServiciosContainer } from "../components/ServiciosContainer/ServiciosContainer";

const Servicios = () => {
  const { t } = useTranslation();
  const { servicio } = useParams();

  const servicios = [
    {
      id: 1,
      titleBanner: t("banner_iot_1"),
      title: t("banner_iot_2"),
      subtitle: t("subtitl1"),
      detailsTitle: t("DetailTitle"),
      detailsText:t("DetailText"),
      accordion: [
        {
          img: "ExitoIOT1.png",
          title: t("Title1.1"),
          description: t("Descript1.1"),
        },
        {
          img: "ExitoIOT2.png",
          title: t("Title1.2"),
          description:t("Descript1.2"),
        },
        {
          img: "ExitoIOT3.png",
          title: t("Title1.3"),
          description: t("Descript1.3"),
        },
        {
          img: "ExitoIOT4.png",
          title: t("Title1.4"),
          description:  t("Descript1.4"),
        },
      ],
      imgHero: "servicioIOT.png",
      sobrePrincipal: t("aIOT_converg"),
      sobreTitle: t("aIOT_transform"),
      sobreParagraph: t("aIOT_text1"),
      sobreImg: "SobreIOT.svg",
      exitoImg: "ExitoIOT.svg",
      empresaImg: [
        "../assets/empresas/Velos.svg",
        "../assets/empresas/Molinari.svg",
        "../assets/empresas/Moltech.svg",
      ],
    },
    {
      id: 2,
      titleBanner: t("ia"),
      title: t("ia1"),
      subtitle: t("subtitl1"),
      detailsTitle: t("detailsTitle"),
      detailsText: t("DetailsT"),
      accordion: [
        {
          img: "ExitoIA1.png",
          title: t("Title1.1"),
          description: t("Description1.1"),
        },
        {
          img: "ExitoIA2.png",
          title: t("Title1.2"),
          description: t("Description1.2"),
        },
        {
          img: "ExitoIA3.png",
          title: t("Title1.3"),
          description: t("Description1.3"),
        },
        {
          img: "ExitoIA4.png",
          title: t("Title1.4"),
          description: t("Description1.4"),
        },
      ],
      imgHero: "servicioIA.png",
      sobrePrincipal: t("aIA_about"),
      sobreTitle: t("aIA_transform"),
      sobreParagraph: t("aIA_text1"),
      sobreImg: "SobreIA.svg",
      exitoImg: "ExitoIA.svg",
      empresaImg: [
        "../assets/empresas/uali.svg",
        "../assets/empresas/infinem.svg",
      ],
    },
    {
      id: 3,
      titleBanner:
        "Materializa tus ideas con impresión 3D e impulsa tu negocio ",
      title: "al futuro.",
      subtitle: "CASOS DE EXITO",
      detailsTitle: "Te mostramos algunos de los proyectos que realizamos.",
      detailsText:
        "La estructura garantiza una gran rigidez minimizando las vibraciones. Exclusivo sistema de cabezales.",
      accordion: [
        {
          img: "Exito3D1.png",
          title: "Prototipo de case de mando de vehículo naútico",
          description:
            "Velos, una empresa líder en el diseño y fabricación de vehículos náuticos sustentables, se enfrentó al desafío de comandar motores eléctricos desde una interfaz amigable para el usuario. Para lograrlo, diseñó un mando de motor eléctrico con un display de información del sistema integrado.El resultado final de este equipamiento fue encapsulado en un diseño 3D versátil y de alta calidad. Nuestro equipo de expertos en ingeniería trabajó arduamente para crear una solución tecnológica a medida que cumpliera con los requisitos únicos de Velos.",
        },
        {
          img: "Exito3D2.png",
          title: "Difusor de aire para vehículo de competición TC2000.",
          description:
            "Se diseñó e imprimió en material técnico un dispositivo para la difusión de aire de forma tal de mejorar la performance de un auto de carrera de la categoría TC.",
        },
        {
          img: "Exito3D3.png",
          title: "Diseño y fabricación de guía quirúrgica",
          description:
            "Cuando la intervención dental de un paciente requiere de múltiples implantes, es necesaria una guía que permita la inserción precisa de los pernos asociados al implante. Este proceso es fundamental, debido a que esta pieza debe ser biocompatible para poder fijarse enla boca del paciente.",
        },
        {
          img: "Exito3D4.png",
          title: "Escaneo 3D de pieza estructural.",
          description:
            "Relevamiento digital de un soporte de hierro fabricado por medio de fundición cuyo diseño, a través de un software CAD, se vuelve engorroso y complejo.",
        },
      ],
      imgHero: "products/Kubox/portada.png",
      sobrePrincipal:
        "Crea lo que quieras con nuestra impresión 3D de última generación.",
      sobreTitle:
        "La impresión 3D es la clave para la innovación y el éxito empresarial en la era digital.",
      sobreParagraph: {
        1: " Ofrecemos servicios de impresión 3D para concretar tus ideas. El prototipado rápido permite realizar pruebas de concepto o mejorar tu diseño antes de pasar a la producción en serie.",
        2: "La impresión con materiales técnicos (ABS, Nylon, PETG, Flex y Hips) permite la fabricación de productos definitivos de solicitación térmica y mecánica relativamente baja, o que se adapten a necesidades particulares.",
        3: "La impresión en resina biocompatible permite la interacción de productos impresos con el cuerpo humano.",
        4: "La tecnología de escaneo 3D permite la reproducción digital de un objeto físico para poder intervenir y, eventualmente, reimprimirlo.",
      },
      sobreImg: "../assets/Impresion.svg",
      exitoImg: "ExitoPrinter.svg",
      empresaImg: [
        "../assets/empresas/ASP.svg",
        "../assets/empresas/infinem.svg",
        "../assets/empresas/L184.svg",
      ],
    },
  ];

  const serviceToShow = servicios[parseInt(servicio) - 1];
  const secondNav = [
    { texto: t("sh_about_service"), link: "sobreServicio" },
    { texto: t("sh_about_success"), link: "casosDeExito" },
    { texto: t("sh_partners"), link: "sociosEstrategicos" },
  ];

  return (
    <span className="Servicios">
      <Banner
        info1={serviceToShow["title"]}
        info2={serviceToShow["titleBanner"]}
        info3={""}
        img={serviceToShow["imgHero"]}
      />
      <SecondNavbar data={secondNav} />
      <ServiciosContainer serviceToShow={serviceToShow} />
      <BannerMoreInfo />
    </span>
  );
};

export default Servicios;
