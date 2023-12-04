import "./BannerProductsStrength.css";
import React from "react";
import { useTranslation } from "react-i18next";

export const BannerProductsStrength = () => {
  const { t } = useTranslation();
  return (
    <div className="strengths">
      <div className="bannerProductsStrength">
        <div className="strengths-card">
          <div className="strengths-logo">
            <img
              src="../assets/products/icons/soporte-tecnico.png"
              alt="icon"
            />
          </div>
          <p className="strengths-card-title  mt-5 mb-5">
            {t("sk_support_title")}
          </p>
          <p className="strengths-card-paragraph mb-10">{t("sk_support")}</p>
        </div>

        <div className="strengths-card">
          <div className="strengths-logo">
            <img src="../assets/products/icons/instalacion.png" alt="icon" />
          </div>
          <p className="strengths-card-title  mt-5 mb-5">
            {t("sk_instalation_title")}
          </p>
          <p className="strengths-card-paragraph mb-10">
            {t("sk_instalation")}
          </p>
        </div>

        <div className="strengths-card">
          <div className="strengths-logo">
            <img src="../assets/products/icons/matenimiento.png" alt="icon" />
          </div>
          <p className="strengths-card-title  mt-5 mb-5">
            {t("sk_maintenance_title")}
          </p>
          <p className="strengths-card-paragraph mb-10">
            {t("sk_maintenance")}
          </p>
        </div>

        <div className="strengths-card">
          <div className="strengths-logo">
            <img src="../assets/products/icons/capacitacion.png" alt="icon" />
          </div>
          <p className="strengths-card-title  mt-5 mb-5">
            {t("sk_training_title")}
          </p>
          <p className="strengths-card-paragraph mb-10">{t("sk_training")}</p>
        </div>
      </div>
    </div>
  );
};
