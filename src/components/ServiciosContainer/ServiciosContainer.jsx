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
            { serviceToShow.id != 3? (<p className="sobreP">{serviceToShow["sobreParagraph"]}</p>) : (<> 
              <p className="sobreP-3d">Ofrecemos servicios de impresión 3D para concretar tus ideas. El prototipado rápido permite realizar pruebas de concepto o mejorar tu diseño antes de pasar a la producción en serie.</p>
              <p className="sobreP-3d">La impresión con materiales técnicos (ABS, Nylon, PETG, Flex y Hips) permite la fabricación de productos definitivos de solicitación térmica y mecánica relativamente baja, o que se adapten a necesidades particulares.</p>
              <p className="sobreP-3d">La impresión en resina biocompatible permite la interacción de productos impresos con el cuerpo humano.</p>
              <p className="sobreP-3d">La tecnología de escaneo 3D permite la reproducción digital de un objeto físico para poder intervenir y, eventualmente, reimprimirlo.</p>
            </>)
            }
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
