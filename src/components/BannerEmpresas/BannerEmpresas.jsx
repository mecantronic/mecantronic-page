import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import "./BannerEmpresas.css";
import accenture from "../assets/empresas/Accenture.svg";
import shell from "../assets/empresas/Shell.svg";
import ASP from "../assets/empresas/ASP.svg";
import buenosaires from "../assets/empresas/image 96.svg";
import L184 from "../assets/empresas/L184.svg";
import molinari from "../assets/empresas/Molinari.svg";
import moltech from "../assets/empresas/Moltech.svg";
import telefonica from "../assets/empresas/Telefonica.svg";
import uali from "../assets/empresas/uali.svg";
import { useTranslation } from "react-i18next";

export const BannerEmpresas = () => {
  const { t } = useTranslation();
  return (
    <div className="banner-empresas mb-20">
      <BannerTitles
        subtitle={t("experiencia1")}
        title={t("experiencia2")}
      />
      <div className="clientes">
        <img src={shell} alt="shell" className="imgMobile shell"/>
        <img src={accenture} alt="accenture"  className="imgMobile accenture"/>
        <img src="./assets/empresas/velos.png" alt="velos"  className="imgMobile velos"/>        
        <img src={telefonica} alt="telefonica" />
        <img src="./assets/empresas/Logo - Hospital Austral.png" alt="hospital universitario austral"  className="imgMobile austral"/>        
        <img src="./assets/empresas/Logo - YPF.png" alt="YPF"  className="imgMobile ypf"/>        
        <img src={buenosaires} alt="buenos aires" />
        <img src={L184} alt="potencial" />
        <img src={moltech} alt="moltech" />
        <img src={uali} alt="uali" />
        <img src={molinari} alt="molinari" />
        <img src={ASP} alt="ASP"  className="imgMobile asp"/>
        <img src={'./assets/empresas/orsai-logo.svg'} alt="Orsai"  className="imgMobile orsai"/>
      </div>
    </div>
  );
};

