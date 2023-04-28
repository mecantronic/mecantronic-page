// @ts-nocheck
import React, { useState } from "react";
import { Servicio3D } from "./Servicio3D";
import { ServicioIA } from "./ServicioIA";
import { ServicioIOT } from "./ServicioIOT";
import servicios from '../components/Utils/Servicios'
import { useParams } from "react-router-dom"
import { set } from "react-hook-form";
import { Banner } from "../components/BannerServicio/BannerServicio";
import { SecondNavbar } from '../components/SecondNavbar/SecondNavbar';
import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import { ServiciosContainer } from "../components/ServiciosContainer/ServiciosContainer";

export const Servicios = () => {
  const {servicio} =useParams();


  const serviceToShow = servicios[parseInt(servicio)-1]; 
  const secondNav = [{ texto: "Sobre el servicio", link: "sobreServicio"},
  {texto: "Casos de éxito", link: "casosDeExito"} , {texto: "Socios estratégicos", link: "sociosEstrategicos"}  ]

  const [iot, setIot] = useState(true);
  const [ia, setIa] = useState(false); 
  const [impresoras, setImpresoras] = useState(false);
  return (
    <span className="Servicios">
      <Banner info1={serviceToShow["title"]} info2={serviceToShow["titleBanner"]} info3={""} img={serviceToShow["imgHero"]}/>
      <SecondNavbar data={secondNav} />
      <ServiciosContainer serviceToShow={serviceToShow} />
      <BannerMoreInfo/>
    </span>
  );
};
