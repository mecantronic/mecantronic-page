import React from "react";
import "./Servicios.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
export const Servicios = () => {
  return (
    <div className=" servicios ">
      <div className="">
      <BannerTitles subtitle={"qué ofrecemos"} title={"Soluciones tu empresa"}/>
        <div className="flex servicios-cards">
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src="./assets/staricon.svg" alt="icon" />
            </div>
            <p className="servicios-card-title mt-5 mb-5">IoT</p>
            <p className="servicios-card-paragraph mt-10 mb-10">
            Desarrollamos e implementamos servicios y productos que impliquen el control de dispositivos y el relevamiento de datos de campo de forma remota y con posibilidad de visualizar y controlar el sistema a través de un dashboard interactivo.
            </p>
            <button className="servicios-card-btn mt-5">Ver más</button>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src="./assets/staricon.svg" alt="icon" />
            </div>
            <p className="servicios-card-title  mt-5 mb-5">IA</p>
            <p className="servicios-card-paragraph  mt-10 mb-10">
            Diseñamos e implementamos hardware y software con el objetivo de detectar e identificar patrones o eventos. Desarrollamos e implementamos servicios/plataformas en las que se aplica inteligencia artificial para el análisis de señales, imágenes y videos.
            </p>
            <button className="servicios-card-btn  mt-5">Ver más</button>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src="./assets/staricon.svg" alt="icon" />
            </div>
            <p className="servicios-card-title  mt-5 mb-5">3D</p>
            <p className="servicios-card-paragraph  mt-10 mb-10">
            Comercializamos distintos modelos de impresoras 3D para manufactura o prototipado. Además brindamos servicios de impresión con materiales especiales. Orientadas a usuarios que quieran incorporar el proceso de impresión 3D.
            </p>
            <button className="servicios-card-btn  mt-5">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
};
