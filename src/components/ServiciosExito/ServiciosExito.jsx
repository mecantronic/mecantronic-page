import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "../CasosExito/CasosExito.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";

export const ServiciosExito = () => {
  return (
    <div className="w-full casos">
      <BannerTitles subtitle={"casos de exito"} title={"Ut recusandae fugit"}/>
      <div className="flex p-8">

        <div className="w-1/2 casos-description-container">
          <p>Casos de exito</p>
          <p>Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.</p>

        </div>
        <div className="w-1/2 casos-img pl-20 pr-20">
          <img src="./assets/placeholder.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
