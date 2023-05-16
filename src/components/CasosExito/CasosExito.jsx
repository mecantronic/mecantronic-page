import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./CasosExito.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import noisen from "../assets/noisen.svg";
import aerogeneradores from "../assets/aerogeneradores.svg";
import impresora from "../assets/impresora.svg";

export const CasosExito = () => {
  const noisenTitle = "Noisen"
  const noisenP1 = " Nuestro dispositivo  monitorea continuamente el nivel de ruido y cambia de color para alertar cuando este puede ser perjudicial para la salud . Los umbrales de alerta pueden personalizarse a través de la aplicación web del equipo."
  const noisenP2 = " Noisen tiene la capacidad de almacenar y visualizar las mediciones de ruido en tiempo real y de forma remota. Esto permite conocer la contaminación sonora del espacio en todo momento y tomar medidas correctivas para garantizar un ambiente tranquilo y seguro para todos.  "
  const noisenP3 = " Es de fácil configuración y se puede acceder y consultar desde cualquier lugar con conexión WiFi."

  const second = "Detección de fallas en aerogeneradores"
  const secondp1 = "En este proyecto buscamos detectar componentes de aerogeneradores utilizando modelos de segmentación de instancias. Estas segmentaciones nos permiten visualizar y post procesar cada componente por separado."
  const secondp2 = "Una vez segmentadas las palas se procesan con un algoritmo de detección de anomalías para localizar y clasificar los daños superficiales."
  const secondp3 = "Algunos de los desperfectos que el modelo es capaz de reconocer son corrosiones y grietas, entre otros."

  const third = "Fabricación de impresoras 3D"
  const thirdp1 = "Comercializamos distintos modelos de impresoras 3D para manufactura o prototipado. Además brindamos servicios de impresión con materiales especiales: ABS, Nylon, Hips, Flex y PETG."
  const thirdp2 = "Contamos con servicios de puesta en marcha y mantenimiento para garantizar una experiencia de impresión 3D sin problemas.  "
  const thirdp3 = ""
 
  const [title, setTitle] = useState(noisenTitle)
  const [p1, setP1] = useState(noisenP1)
  const [p2, setP2] = useState(noisenP2)
  const [p3, setP3] = useState(noisenP3)
  const [img, setImg] = useState(noisen)
  const [firstActive, setFirstActive] = useState(true)
  const [secondActive, setSecondActive] = useState(false)
  const [thirdActive, setThirdActive] = useState(false)

  const firstSection = () =>{
    setTitle(noisenTitle)
    setP1(noisenP1)
    setP2(noisenP2)
    setP3(noisenP3)
    setImg(noisen)
    setFirstActive(true)
    setSecondActive(false)
    setThirdActive(false)
  }

  const secondSection = () =>{
    setTitle(second)
    setP1(secondp1)
    setP2(secondp2)
    setP3(secondp3)
    setImg(aerogeneradores)
    setFirstActive(false)
    setSecondActive(true)
    setThirdActive(false)
  }

  const thirdSection = () =>{
    setTitle(third)
    setP1(thirdp1)
    setP2(thirdp2)
    setP3("")
    setImg(impresora)
    setFirstActive(false)
    setSecondActive(false)
    setThirdActive(true)
  }

  const changeSection = () => {
    if (firstActive) {
      secondSection()
    }
    if (secondActive) {
      thirdSection()
    }
    if (thirdActive) {
      firstSection()
    }
  }

  return (
    <div className="w-full casos">
      <BannerTitles subtitle={"casos de éxito"} title={"Proyectos que realizamos"}/>
      <div className="flex p-8 casoExitoContainer" onClick={()=> changeSection()}>
        <div className="w-1/2 casos-img pl-10 pr-10 imgExito">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2 casos-description-container">
          <p className="casos-title">{title}</p>
          <div className="casos-paragraph">
          <p className="mt-4"> {p1}
                   </p>
          <p>{p2}
                  </p>
          <p>{p3}
         
          </p>
          </div>
       
          <span>
            <div className="casos-conocermas">
              <span className="conocerMasBtn">Conocer más </span>
              <span className="conocerMasBtn">
                <HiOutlineArrowNarrowRight />
              </span>
            </div>
            <div className="flex casos-circles mt-10">
              <span className={firstActive ? `active-circle` :`inactive-circle` } onClick={()=> firstSection()} >
                {" "}
                <GiPlainCircle />{" "}
              </span>
              <span className={secondActive ? `active-circle ml-3` :`inactive-circle ml-3` } onClick={()=> secondSection()}>
                {" "}
                <GiPlainCircle />{" "}
              </span>
              <span className={thirdActive ? `active-circle ml-3` :`inactive-circle ml-3` } onClick={()=> thirdSection()}>
                {" "}
                <GiPlainCircle />{" "}
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
