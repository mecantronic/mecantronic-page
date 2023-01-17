import "./BannerStrength.css"

import React from "react";

export const BannerStrength= () =>{
    return (
    
    <div className="strengths">
      <div className="">
        <div className="flex strengths-cards">
          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">Soporte</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>

          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">Instalación</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>

          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">Mantenimiento</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>
          <span className="dividingLineStrengths"></span>

          <div className="strengths-card">
            <div className="strengths-logo">
              <img src="../assets/staricon.svg" alt="icon" />
            </div>
            <p className="strengths-card-title  mt-5 mb-5">Cursos</p>
            <p className="strengths-card-paragraph  mt-10 mb-10">Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem.
            </p>
          </div>

        </div>
      </div>
    </div>
    )
}
