import React from "react";
import { useLocation } from "react-router-dom";
import "./BannerServicio.css";
import { ContactButton } from "../ContactButton/ContactButton";
import { useTranslation } from "react-i18next";

export const Banner = ({ info1, info2, info3, img, bg1 }) => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <div className="banner">
      <div className="img-container">
        <img
          className={`${
            location.pathname.includes("products") ? "productsImg" : ""
          }`}
          src={`../assets/${img}`}
          alt="hero mecantronic"
        />
      </div>
      <div className="banner-container">
        <p className="banner-subtitle">
          {info2 && <span className="text1">{info2}</span>}{" "}
          {info3 && <span className="text2">{info3}</span>}{" "}
          {info1 && <h2 className="text3">{info1}</h2>}
        </p>
        <span className="banner-contact-btn">
          <ContactButton textoBoton={t("contact_button")} />
        </span>
      </div>

      {bg1 !== undefined && (
        <img className="bg1" src={`../assets/${bg1}`} alt="bg mecantronic" />
      )}
    </div>
  );
};
