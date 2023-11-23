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
      titleBanner: "IOT - Soluciones de ingeniería para",
      title: "tu negocio.",
      subtitle: "CASOS DE EXITO",
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
      titleBanner: "IA - Inteligencia artificial para",
      title: "tu negocio",
      subtitle: "CASOS DE EXITO",
      detailsTitle: "Te mostramos algunos de los proyectos que realizamos.",
      detailsText:
        "La estructura garantiza una gran rigidez minimizando las vibraciones. Exclusivo sistema de cabezales.",
      accordion: [
        {
          img: "ExitoIA1.png",
          title: "Mantenimiento preventivo de generadores eólicos.",
          description:
            "Diseñamos un sistema de detección y localización de fallas superficiales en    aerogeneradores, en colaboración con Uali y Rocking Data. Para implementar el sistema diseñado, se utiliza un dron equipado con cámaras el cual sobrevuela el aerogenerador capturando imágenes y videos, en pos de procesarlos con nuestros algoritmos de inteligencia artificial. Nuestro aporte fundamental en el proyecto fue en la construcción rápida de un MVP, adaptando frameworks en estado del arte para tareas de segmentación y detección de anomalías en esta problemática en particular.",
        },
        {
          img: "ExitoIA2.png",
          title: "Supervisión de oleoductos.",
          description:
            "Desarrollamos un sistema de seguridad y monitoreo de oleoductos en zonas rurales junto con la firma Uali. Utilizamos drones para patrullar las áreas de interés. Analizamos las filmaciones con IA para detectar personas y vehículos de forma tal de garantizar la seguridad de los activos.",
        },
        {
          img: "ExitoIA3.png",
          title: "Detección de derrames de petróleo.",
          description:
            "Desarrollamos un sistema de alerta  y monitoreo de zonas de alta sensibilidad ambiental en colaboración con Uali. Utilizamos drones equipados con inteligencia artificial para detectar derrames de petróleo en distintos tipos de superficies.",
        },
        {
          img: "ExitoIA4.png",
          title: "Generación automática de multas.",
          description:
            "Desarrollamos un cinemómetro aéreo para la Dirección General de Transporte  de España en colaboración con la Uali y Rocking Data. Utilizamos un dron equipado con inteligencia artificial para medir la velocidad y patente de los vehículos, permitiendo la generación de multas en caso de que corresponda.",
        },
      ],
      imgHero: "servicioIA.png",
      sobrePrincipal: "Soluciones personalizadas de inteligencia artificial",
      sobreTitle:
        "AI: Transformando el futuro de la innovación y los negocios.",
      sobreParagraph:
        "Ayudamos a identificar y detectar de manera automática cualquier tipo de evento. Utilizamos algoritmos de Aprendizaje Automático para detectar objetos, patrones y/o eventos, lo que permite tomar decisiones más rápidas e informadas en tiempo real. Con nuestras soluciones basadas en Inteligencia Artificial, se puede supervisar instalaciones y activos de manera más eficiente y precisa, lo que permite ahorrar tiempo y dinero en el mediano y largo plazo. Ya sea que se necesite supervisar una planta de producción, controlar la seguridad en una tienda minorista o garantizar la calidad de productos, nuestro equipo especializado en Computer Vision puede diseñar sistemas a medida de las necesidades del cliente para obtener una visión completa de operaciones.",
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
    { texto: t("Sobre el servicio"), link: "sobreServicio" },
    { texto: t("Casos de éxito"), link: "casosDeExito" },
    { texto: t("Socios estratégicos"), link: "sociosEstrategicos" },
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
