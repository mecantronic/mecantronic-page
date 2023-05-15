import React from "react";
import { useLocation } from "react-router-dom";
import "./Banner.css";
import { ContactButton } from "../ContactButton/ContactButton";

export const Banner = ({info1,info2, info3,img,bg1}) => {
  const location = useLocation();
  return (
    <div className="banner">
      <div className="img-container">
        <img className={`${location.pathname.includes("products")? "productsImg":""}`} src={`../assets/${img}`} alt="hero mecantronic"/>
      </div>
      <div className="banner-container">
        <p className="banner-subtitle">          
          {info1 && <h2 className="text1">{info1}</h2>} {info2 && <span className="text2">{info2}</span>} {info3 && <span className="text3">{info3}</span>}     
        </p>
        <span className="banner-contact-btn"><ContactButton textoBoton={"Contactanos"}/></span>
      </div>

      {bg1!==undefined && <img className="bg1" src={`../assets/${bg1}`} alt="bg mecantronic"/>}
    
    </div>
  );
};
