import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import "./BannerEmpresas.css";
import accenture from "../assets/empresas/Accenture.svg";
import shell from "../assets/empresas/Shell.svg";
import ASP from "../assets/empresas/ASP.svg";
import austral from "../assets/empresas/Hospital Austral.svg";
import buenosaires from "../assets/empresas/image 96.svg";
import L184 from "../assets/empresas/L184.svg";
import molinari from "../assets/empresas/Molinari.svg";
import moltech from "../assets/empresas/Moltech.svg";
import telefonica from "../assets/empresas/Telefonica.svg";
import uali from "../assets/empresas/uali.svg";
import velos from "../assets/empresas/Velos.svg"
import YPF from "../assets/empresas/YPF.svg"

export const BannerEmpresas = () => {
  return (
    <div className="banner-empresas mb-20">
      <BannerTitles
        subtitle={"EXPERIENCIA"}
        title={"Empresas que ya nos eligieron"}
      />
      <div className="clientes">
        <img src={shell} alt="shell" />
        <img src={accenture} alt="accenture" />
        <img src="./assets/empresas/Logo - velos.png" alt="velos"/>        
        <img src={telefonica} alt="telefonica" />
        <img src="./assets/empresas/Logo - Hospital Austral.png" alt="hospital universitario austral"/>        
        <img src="./assets/empresas/Logo - YPF.png" alt="YPF"/>        
        <img src={buenosaires} alt="buenos aires" />
        <img src={L184} alt="potencial" />
        <img src={moltech} alt="moltech" />
        <img src={uali} alt="uali" />
        <img src={molinari} alt="molinari" />
        <img src={ASP} alt="ASP" />
      </div>
    </div>
  );
};
