import React from "react";
import { Banner } from "../components/Banner/Banner";
import { BannerEmpresas } from "../components/BannerEmpresas/BannerEmpresas";
import { QuieroInfo } from "../components/QuieroInfo/QuieroInfo";
import { ServiciosExito } from "../components/ServiciosExito/ServiciosExito";
import { ServiciosNav } from "../components/ServiciosNav/ServiciosNav";
import { SobreServicio } from "../components/SobreServicio/SobreServicio";
import { Testimonios } from "../components/Testimonios/Testimonios";
export const ServicioIOT = () => {
  return (
    <>
      <Banner info2={"IOT - Soluciones de ingenieria para tu empresa."} />
      <ServiciosNav/>
      <SobreServicio/>
      <ServiciosExito/>
      <BannerEmpresas/>
      <Testimonios/>
      <QuieroInfo/>
    </>
  );
};
