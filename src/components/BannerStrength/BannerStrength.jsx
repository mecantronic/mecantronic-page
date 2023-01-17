import "./BannerStrength.css"

import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";

export const BannerStrength= () =>{
    return (
    
    <div className="strengths">
      <div className="">
      <BannerTitles subtitle={"Ut recusandae fugit"} title={"Ut recusandae fugit"}/>
        <div className="flex servicios-cards">
          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">3D</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>

          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">3D</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>

          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">3D</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>

          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">3D</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>
          





        </div>
      </div>
    </div>
    )
}
