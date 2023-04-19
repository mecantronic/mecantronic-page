// @ts-nocheck
import "./ServiciosContainer.css";
import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { Datasheet } from "../Datasheet/Datasheet";
import { BannerProductsStrength } from "../BannerProductsStrength/BannerProductsStrength";
import { Slider } from "../Slider/Slider";
import { BannerEmpresas } from "../BannerEmpresas/BannerEmpresas";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import velos from "../assets/empresas/Velos.svg"
export const ServiciosContainer = ({ serviceToShow }) => {
  return (
    <>
      <div className="productContainer">
        <div className="mb-20" id="sobreServicio">
          <BannerTitles
            subtitle={"SOBRE EL SERVICIO"}
            title={serviceToShow["sobrePrincipal"]}
          />
          <div className="flex sobrecontainer">
          <div className="w-1/2 pl-20">
            <img  className="sobreimg" src={`../assets/${serviceToShow["sobreImg"]}`} alt="" />
          </div>
          <div className="w-1/2 sobreinfocontainer">
            <p className="sobreTitle">{serviceToShow["sobreTitle"]}</p>
            <p className="sobreP">{serviceToShow["sobreParagraph"]}</p>
          </div>
          </div>
         
        </div>

        <div className="productDetails pt-20" id="casosDeExito">
          <div className="accordionContainer pl-20">
            <div className="titles">
              <p className="subtitle">{serviceToShow["subtitle"]}</p>
              <p className="detailsTitle">{serviceToShow["detailsTitle"]}</p>
            </div>
            <Accordion product={serviceToShow["accordion"]} />
          </div>
          <div className="w-1/2">
          <img  className="sobreimg" src={`../assets/${serviceToShow["exitoImg"]}`} alt="" />
          </div>

          <div className="titlesMobile">
            <p className="subtitle">{serviceToShow["subtitle"]}</p>
            <p className="detailsTitle">{serviceToShow["detailsTitle"]}</p>
          </div>
        </div>
        <div id="sociosEstrategicos">
          <div className="banner-empresas">
            <BannerTitles
              subtitle={"TRABAJO EN EQUIPO"}
              title={"Socios estratégicos"}
            />
            <div className="clientes">
              {serviceToShow["empresaImg"].map((empresa)=>{
                return (
                  <img src={empresa} alt="" className={`${serviceToShow.id === 2 && "socioEstragicoIA"}`}/>
                )
              })}
            </div>
          </div>
        </div>
        <span className="backgroundDegrade"></span>
      </div>
    </>
  );
};
