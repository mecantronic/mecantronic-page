import React from "react";
import "./Banner.css";

export const Banner = ({bannerInfo}) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <p className="banner-subtitle">
          {bannerInfo}
        </p>
        <span className="banner-contact-btn mt-8">Contacto</span>
      </div>
    </div>
  );
};
