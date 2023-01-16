import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./CasosExito.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";

export const CasosExito = () => {
  return (
    <div className="w-full casos">
      <BannerTitles subtitle={"casos de exito"} title={"Ut recusandae fugit"}/>
      <div className="flex p-8">
        <div className="w-1/2 casos-img pl-20 pr-20">
          <img src="./assets/placeholder.svg" alt="" />
        </div>
        <div className="w-1/2 casos-description-container">
          <p>Lorem ipsum dolor.</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet. Ut recusandae fugit et unde
            exercitationem.
          </p>
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
          <div className="casos-conocermas">
            <span className="pt-10 mr-2">Conocer mas </span>
            <span className="pt-10">
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
