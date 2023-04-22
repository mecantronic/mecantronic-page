// @ts-nocheck
import "./ServiciosContainer.css";
import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import { CasosExitoAccordion } from "../AccordionItem/casosExitoAccordion";
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
        <CasosExitoAccordion serviceToShow={serviceToShow}/>
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
