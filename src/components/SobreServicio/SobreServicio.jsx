import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./SobreServicio.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";

export const SobreServicio = () => {
  return (
    <div className="w-full servicios">
      <BannerTitles
        subtitle={"Sobre el servicio"}
        title={"Ut recusandae fugit"}
      />
      <div className="flex p-8">
        <div className="w-1/2 servicios-img pl-20 pr-20">
          <img src="./assets/placeholder.svg" alt="" />
        </div>
        <div className="w-1/2 servicios-description-container">
          <p>Lorem ipsum dolor.</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
            exercitationem.
          </p>
          <div className="flex">
            <div className="servicios-star w-1/6 mr-4">
              <img src="./assets/staricon.svg" alt="" />
            </div>
            <div className="w-5/6">
              <p className="servicios-sub-title">Lorem ipsum dolor sit amet.</p>
              <p className="servicios-sub-subtitle">
                Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
                exercitationem in nemo fuga.{" "}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="servicios-star w-1/6 mr-4">
              <img src="./assets/staricon.svg" alt="" />
            </div>
            <div className="w-5/6">
              <p className="servicios-sub-title">Lorem ipsum dolor sit amet.</p>
              <p className="servicios-sub-subtitle">
                Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
                exercitationem in nemo fuga.{" "}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="servicios-star w-1/6 mr-4">
              <img src="./assets/staricon.svg" alt="" />
            </div>
            <div className="w-5/6">
              <p className="servicios-sub-title">Lorem ipsum dolor sit amet.</p>
              <p className="servicios-sub-subtitle">
                Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
                exercitationem in nemo fuga.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
