import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./CasosExito.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";

export const CasosExito = () => {
  return (
    <div className="w-full casos">
      <BannerTitles subtitle={"casos de exito"} title={"Descubrí nuestros trabajos"}/>
      <div className="flex p-8">
        <div className="w-1/2 casos-img pl-20 pr-20 imgExito">
          <img src="./assets/casos-exito.png" alt="" />
        </div>
        <div className="w-1/2 casos-description-container">
          <p>Monitoreo remoto de profundidad de napas</p>
          <p className="mt-4">
          La profundidad de las napas en distintos puntos del campo constituye un activo importante para la toma de decisiones en la agricultura y ganadería. Desarrollamos un sistema que permite visualizar un mapa con las respectivas profundidades de napas en los puntos en que se han dispuesto sensores.
          </p>
          {/*
          <div className="casos-wrapper mt-10 mb-10">
            <div className="casos-example">
              <div>
                <span> 1 </span>
              </div>

              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="casos-example">
              <div>
                <span> 1 </span>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="casos-example">
              <div>
                <span> 1 </span>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          */}
          <div className="casos-conocermas">
            <span className="conocerMasBtn">Conocer mas </span>
            <span className="conocerMasBtn">
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
          <div className="flex casos-circles mt-10">
            <span className="active-circle ">
              {" "}
              <GiPlainCircle />{" "}
            </span>
            <span className="inactive-circle ml-1">
              {" "}
              <GiPlainCircle />{" "}
            </span>
            <span className="inactive-circle ml-1">
              {" "}
              <GiPlainCircle />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
