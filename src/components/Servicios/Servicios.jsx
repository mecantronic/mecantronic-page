import React from "react";
import "./Servicios.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
export const Servicios = () => {
  return (
    <div className=" servicios ">
      <div className="">
      <BannerTitles subtitle={"Ut recusandae fugit"} title={"Ut recusandae fugit"}/>
        <div className="flex servicios-cards">
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src="./assets/staricon.svg" alt="icon" />
            </div>
            <p className="servicios-card-title mt-5 mb-5">IoT</p>
            <p className="servicios-card-paragraph mt-10 mb-10">
              Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
              exercitationem in nemo fuga.Lorem ipsum dolor sit amet. Ut et unde
              exercitationem in nemo fuga.Lorem ipsum dolor sit amet. Ut
            </p>
            <button className="servicios-card-btn mt-5"> Boton </button>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src="./assets/staricon.svg" alt="icon" />
            </div>
            <p className="servicios-card-title  mt-5 mb-5">IA</p>
            <p className="servicios-card-paragraph  mt-10 mb-10">
              Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
              exercitationem in nemo fuga.Lorem ipsum dolor sit amet. Ut et unde
              exercitationem in nemo fuga.Lorem ipsum dolor sit amet. Ut
            </p>
            <button className="servicios-card-btn  mt-5">Boton </button>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src="./assets/staricon.svg" alt="icon" />
            </div>
            <p className="servicios-card-title  mt-5 mb-5">3D</p>
            <p className="servicios-card-paragraph  mt-10 mb-10">
              Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
              exercitationem in nemo fuga.Lorem ipsum dolor sit amet. Ut et unde
              exercitationem in nemo fuga.Lorem ipsum dolor sit amet. Ut
            </p>
            <button className="servicios-card-btn  mt-5"> Boton </button>
          </div>
        </div>
      </div>
    </div>
  );
};
