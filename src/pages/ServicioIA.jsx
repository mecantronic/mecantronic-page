// @ts-nocheck
import React from "react";
import { Banner } from "../components/Banner/Banner";
import { BannerEmpresas } from "../components/BannerEmpresas/BannerEmpresas";
import { ServiciosExito } from "../components/ServiciosExito/ServiciosExito";
import { ServiciosNav } from "../components/ServiciosNav/ServiciosNav";
import { SobreServicio } from "../components/SobreServicio/SobreServicio";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { BannerMoreInfo } from "../components/BannerMoreInfo/BannerMoreInfo";
export const ServicioIA = () => {
  return (
    <>
      {" "}
      <Banner info2={"IA - Inteligencia artificial para tu negocio."}/>
      <ServiciosNav/>
      <SobreServicio/>
      <ServiciosExito/>
      <BannerEmpresas/>
      <Testimonios/>
      <BannerMoreInfo/>
    </>
  );
};
