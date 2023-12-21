// @ts-nocheck
import "./ServiciosContainer.css";
import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import { CasosExitoAccordion } from "../AccordionItem/casosExitoAccordion";
import { useTranslation } from "react-i18next";

export const ServiciosContainer = ({ serviceToShow }) => {
  const { t } = useTranslation();
  setTimeout(() => {
    const root = document.getElementById("root");
    root.removeAttribute("class");
    root.classList.add("backgroundImage");
  }, 100);

  return (
    <>
      <div
        className={`productContainer ${serviceToShow.id === 2 ? "bg-IA" : ""} 
      ${serviceToShow.id === 1 ? "bg-IOT" : ""}`}
      >
        <div className="mb-20" id="sobreServicio">
          <BannerTitles
            subtitle={t("aIOT_about")}
            title={serviceToShow["sobrePrincipal"]}
          />
          <div className="flex sobrecontainer">
            <div className="">
              <img
                className="sobreimg"
                src={`../assets/${serviceToShow["sobreImg"]}`}
                alt=""
              />
            </div>
            <div className="sobreinfocontainer">
              <p className="sobreTitle">{serviceToShow["sobreTitle"]}</p>
              {serviceToShow.id !== 3 ? (
                <p className="sobreP">{serviceToShow["sobreParagraph"]}</p>
              ) : (
                <>
                  <p className="sobreP-3d">
                   {t("t3")}
                  </p>
                  <p className="sobreP-3d">
                    {t("t4")}
                  </p>
                  <p className="sobreP-3d">
                  {t("t5")}
                  </p>
                  <p className="sobreP-3d">
                  {t("t6")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <CasosExitoAccordion serviceToShow={serviceToShow} />
        <div id="sociosEstrategicos">
          <div className="banner-empresas">
            <BannerTitles
              subtitle={t("TM")}
              title={t("SE")}
            />
            <div className="clientes">
              <span className="backgroundDegradeServicios">
                <div id={`servicio-bg-${serviceToShow.id}-1`}> </div>
                <div id={`servicio-bg-${serviceToShow.id}-2`}> </div>
              </span>
              {serviceToShow["empresaImg"].map((empresa) => {
                return (
                  <img
                    src={empresa}
                    alt=""
                    className={`${
                      serviceToShow.id === 2 && "socioEstragicoIA"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
