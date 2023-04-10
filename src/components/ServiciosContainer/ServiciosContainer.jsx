// @ts-nocheck
import "./ServiciosContainer.css";
import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { Datasheet } from "../Datasheet/Datasheet";
import { BannerProductsStrength } from "../BannerProductsStrength/BannerProductsStrength";
import { Slider } from "../Slider/Slider";
import { BannerEmpresas } from "../BannerEmpresas/BannerEmpresas";
import { BannerTitles } from "../BannerTitles/BannerTitles";

export const ServiciosContainer = ({ serviceToShow }) => {
  return (
    <>
      <div className="productContainer">
        <div>
          <BannerTitles
            subtitle={"SOBRE EL SERVICIO"}
            title={serviceToShow["sobrePrincipal"]}
          />
          <div className="flex sobrecontainer">
          <div className="w-1/2">
            <img  className="sobreimg" src={`../assets/${serviceToShow["sobreImg"]}`} alt="" />
          </div>
          <div className="w-1/2 sobreinfocontainer">
            <p className="sobreTitle">{serviceToShow["sobreTitle"]}</p>
            <p className="sobreP">{serviceToShow["sobreParagraph"]}</p>
          </div>
          </div>
         
        </div>

        <div className="productDetails" id="sobreProducto">
          <div className="accordionContainer">
            <div className="titles">
              <p className="subtitle">{serviceToShow["subtitle"]}</p>
              <p className="detailsTitle">{serviceToShow["detailsTitle"]}</p>
            </div>
            <Accordion product={serviceToShow["accordion"]} />
          </div>

          <img src={`../assets/${serviceToShow["exitoImg"]}`} alt="ia" />

          <div className="titlesMobile">
            <p className="subtitle">{serviceToShow["subtitle"]}</p>
            <p className="detailsTitle">{serviceToShow["detailsTitle"]}</p>
          </div>
        </div>
        <div id="bannerEmpresas">
          <div className="banner-empresas mb-20">
            <BannerTitles
              subtitle={"TRABAJO EN EQUIPO"}
              title={"Socios estratégicos"}
            />
            <div className="clientes">
              {serviceToShow["empresaImg"].map((empresa)=>{
                <img  src={`../assets/empresas/${empresa}`} ></img>
              })}
            </div>
          </div>
        </div>
        <span className="backgroundDegrade"></span>
      </div>
    </>
  );
};
