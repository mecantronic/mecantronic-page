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
          title: t("Title1.11"),
          description: t("Description1.11"),
        },
        {
          img: "ExitoIA2.png",
          title: t("Title1.21"),
          description: t("Description1.21"),
        },
        {
          img: "ExitoIA3.png",
          title: t("Title1.31"),
          description: t("Description1.31"),
        },
        {
          img: "ExitoIA4.png",
          title: t("Title1.41"),
          description: t("Description1.41"),
        },
      ],
      imgHero: "servicioIA.png",
      sobrePrincipal: t("aIA_about"),
      sobreTitle: t("aIA_transform"),
      sobreParagraph: t("aIA_text1"),
      sobreImg: "SobreIA.svg",
      exitoImg: "ExitoIA.svg",
      empresaImg: [
        "../assets/empresas/orsai-logo.svg",
        "../assets/empresas/uali.svg",
        "../assets/empresas/infinem.svg"
      ],
    },
    {
      id: 3,
      titleBanner:
      t("3dbanner"),
      title: t("3dbanner1"),
      subtitle: t("st"),
      detailsTitle: t("DetailsTe"),
      detailsText: t("DetailsTe"),
      accordion: [
        {
          img: "Exito3D1.png",
          title: t("Title1.10"),
          description: t("Description1.10"),
        },
        {
          img: "Exito3D2.png",
          title: t("Title1.20"),
          description: t("Description1.20"),
        },
        {
          img: "Exito3D3.png",
          title: t("Title1.30"),
          description:
            t("Description1.30"),
        },
        {
          img: "Exito3D4.png",
          title: t("Title1.40"),
          description: t("Description1.40"),
        },
      ],
      imgHero: "products/Kubox/portada.png",
      sobrePrincipal:
        t("t1"),
      sobreTitle:
        t("t2"),
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
