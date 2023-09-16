import React from "react";
import "./Servicios.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import {Link} from "react-router-dom";
import printer from "../assets/3D.svg";
import IOT from "../assets/IOT.svg";
import AI from "../assets/AI.svg";

export const Servicios = () => {
  return (
    <div className=" servicios ">
      <div className="">
      <BannerTitles subtitle={"qué ofrecemos"} title={"Soluciones para tu empresa"}/>
        <div className="flex flex-wrap servicios-cards">
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={IOT} alt="icon" />
            </div>
            <p className="servicios-card-title ">IoT</p>
            <div className="paragraph-container">
              <p className="servicios-card-paragraph first-paragraph">
              Desarrollamos plataformas que impliquen el control de dispositivos y relevamiento de datos de campo de forma remota.
              </p>
              <p className="servicios-card-paragraph second-paragraph">
              Diseñamos un dashboard personalizado para que la visualización de la información y de las métricas sea amigable.
              </p>
            </div>
            <Link to={"/servicios/1"}  className="servicios-card-btn  mt-5" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >Ver más </Link>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={AI} alt="icon" />
            </div>
            
            <p className="servicios-card-title ">IA</p>
            <div className="paragraph-container">
              <p className="servicios-card-paragraph first-paragraph">
              Diseñamos e implementamos hardware y software con el objetivo de detectar e identificar patrones o eventos.
              </p>
              <p className="servicios-card-paragraph second-paragraph">
              Desarrollamos e implementamos servicios/ plataformas en las que se aplica inteligencia artificial para el análisis de señales, imágenes y videos.
              </p>
            </div>
            <Link to={"/servicios/2"}  className="servicios-card-btn  mt-5" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >Ver más </Link>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={printer} alt="icon" />
            </div>
            <p className="servicios-card-title ">3D</p>
            <div className="paragraph-container">
              <p className="servicios-card-paragraph first-paragraph">
              Comercializamos distintos modelos de impresoras y máquinas CNC de diseño propio
              </p>
              <p className="servicios-card-paragraph second-paragraph">
              Además, brindamos servicios de impresión en materiales técnicos y escaneo 3D.
              </p>
            </div>
            <Link to={"/servicios/3"}  className="servicios-card-btn  mt-5" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >Ver más </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
