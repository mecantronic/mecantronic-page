import React from "react";
import "./Banner.css";
import { ContactButton } from "../ContactButton/ContactButton";

export const Banner = ({info1,info2, info3,img,bg1}) => {
  return (
    <div className="banner">
      <div className="img-container">
        <img className="" src={`../assets/homebanner.svg`} alt="hero mecantronic"/>
      </div>
      <div className="banner-container">
        <p className="banner-subtitle">          
          <h2>{info1}</h2><span>{info2}</span> <span>{info3}</span>
        </p>
        <span className="banner-contact-btn"><ContactButton textoBoton={"Contactanos"}/></span>
      </div>

      {bg1!==undefined && <img className="bg1" src={`../assets/${bg1}`} alt="bg mecantronic"/>}
    
    </div>
  );
};
