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
      <BannerTitles subtitle={"qué ofrecemos"} title={"Soluciones tu empresa"}/>
        <div className="flex servicios-cards">
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={IOT} alt="icon" />
            </div>
            <p className="servicios-card-title ">IoT</p>
            <p className="servicios-card-paragraph">
            Desarrollamos plataformas que impliquen el control de dispositivos y relevamiento de datos de campo de forma remota.
            </p>
            <p className="servicios-card-paragraph">
            Diseñamos un dashboard personalizado para que la visualización de la información y de las métricas sea amigable.
            </p>
            <Link to={"/servicios/Iot"}  className="servicios-card-btn  mt-5">Ver más </Link>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={AI} alt="icon" />
            </div>
            
            <p className="servicios-card-title ">IA</p>
            <p className="servicios-card-paragraph">
            Diseñamos e implementamos hardware y software con el objetivo de detectar e identificar patrones o eventos.
            </p>
            <p className="servicios-card-paragraph">
            Desarrollamos e implementamos servicios/plataformas en las que se aplica inteligencia artificial para el análisis de señales, imágenes y videos.
            </p>
            <Link to={"/servicios/Ia"}  className="servicios-card-btn  mt-5">Ver más </Link>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={printer} alt="icon" />
            </div>
            <p className="servicios-card-title ">3D</p>
            <p className="servicios-card-paragraph">
            Comercializamos distintos modelos de impresoras y máquinas CNC de diseño propio
            </p>
            <p className="servicios-card-paragraph">
            Además, brindamos servicios de impresión en materiales técnicos y escaneo 3D.
            </p>
            <Link to={"/servicios/3D"}  className="servicios-card-btn  mt-5">Ver más </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
