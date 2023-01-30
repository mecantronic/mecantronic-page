import React from "react";
import "./Banner.css";
import { ContactButton } from "../ContactButton/ContactButton";
export const Banner = ({nombre,bannerInfo, especial}) => {
  return (
    <div className="banner">
      <img className="" src="../assets/hero.png" alt="hero mecantronic"/>
      <div className="banner-container">
        <p className="banner-subtitle">
          <h2>{nombre}</h2> {bannerInfo} <span>{especial}</span>
        </p>
        <span className="banner-contact-btn  mt-8"><ContactButton/></span>
      </div>
    </div>
  );
};
