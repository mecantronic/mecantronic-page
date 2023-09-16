import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./CasosExito.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import noisen from "../assets/noisen.svg";
import aerogeneradores from "../assets/aerogeneradores.svg";
import impresora from "../assets/impresora.svg";

const data = [
  {
    title: "Noisen",
    p1: " Nuestro dispositivo  monitorea continuamente el nivel de ruido y cambia de color para alertar cuando este puede ser perjudicial para la salud . Los umbrales de alerta pueden personalizarse a través de la aplicación web del equipo.",
    p2: " Noisen tiene la capacidad de almacenar y visualizar las mediciones de ruido en tiempo real y de forma remota. Esto permite conocer la contaminación sonora del espacio en todo momento y tomar medidas correctivas para garantizar un ambiente tranquilo y seguro para todos.  ",
    p3: " Es de fácil configuración y se puede acceder y consultar desde cualquier lugar con conexión WiFi.",
    img: noisen
  },
  {
    title: "Detección de fallas en aerogeneradores",
    p1: "En este proyecto buscamos detectar componentes de aerogeneradores utilizando modelos de segmentación de instancias. Estas segmentaciones nos permiten visualizar y post procesar cada componente por separado.",
    p2: "Una vez segmentadas las palas se procesan con un algoritmo de detección de anomalías para localizar y clasificar los daños superficiales.",
    p3: "Algunos de los desperfectos que el modelo es capaz de reconocer son corrosiones y grietas, entre otros.",
    img: aerogeneradores
  },
  {
    title: "Fabricación de impresoras 3D",
    p1: "Comercializamos distintos modelos de impresoras 3D para manufactura o prototipado. Además brindamos servicios de impresión con materiales especiales: ABS, Nylon, Hips, Flex y PETG.",
    p2: "Contamos con servicios de puesta en marcha y mantenimiento para garantizar una experiencia de impresión 3D sin problemas.  ",
    p3: "",
    img: impresora
  }
];

export const CasosExito = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, p1, p2, p3, img } = data[activeIndex];

  const changeSection = () => {
    const newIndex = (activeIndex + 1) % data.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full casos">
      <BannerTitles subtitle={"casos de éxito"} title={"Proyectos que realizamos"} />
      <div className="flex p-8 casoExitoContainer" >
        <div className="w-1/2 casos-img pl-10 pr-10 imgExito">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2 casos-description-container">
          <p className="casos-title">{title}</p>
          <div className="casos-paragraph">
            <p className="mt-4">{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>

          <span>
            <div className="flex casos-circles mt-10" onClick={changeSection}>
              {data.map((_, index) => (
                <span
                  key={index}
                  className={activeIndex === index ? "active-circle ml-3" : "inactive-circle ml-3"}
                  onClick={() => setActiveIndex(index)}
                >
                  <GiPlainCircle />
                </span>
              ))}

            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
