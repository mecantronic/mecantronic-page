import React from "react";
import "./Banner.css";
import { ContactButton } from "../ContactButton/ContactButton";
export const Banner = ({info1,info2, info3}) => {
  return (
    <div className="banner">
      <img className="" src="../assets/hero.png" alt="hero mecantronic"/>
      <div className="banner-container">
        <p className="banner-subtitle">
          <h2>{info1}</h2> {info2} <span>{info3}</span>
        </p>
        <span className="banner-contact-btn  mt-8"><ContactButton/></span>
      </div>
    </div>
  );
};
