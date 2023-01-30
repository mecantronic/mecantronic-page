import React from "react";
import { Banner } from "../components/Banner/Banner";
import { BannerEmpresas } from "../components/BannerEmpresas/BannerEmpresas";
import { QuieroInfo } from "../components/QuieroInfo/QuieroInfo";
import { ServiciosExito } from "../components/ServiciosExito/ServiciosExito";
import { ServiciosNav } from "../components/ServiciosNav/ServiciosNav";
import { SobreServicio } from "../components/SobreServicio/SobreServicio";
import { Testimonios } from "../components/Testimonios/Testimonios";
export const Servicio3D = () => {
  return (
    <>
      {" "}
      <Banner
            bannerInfo={
              "Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem."
            }
          />
      <ServiciosNav/>
      <SobreServicio/>
      <ServiciosExito/>
      <BannerEmpresas/>
      <Testimonios/>
      <QuieroInfo/>
    </>
  );
};
