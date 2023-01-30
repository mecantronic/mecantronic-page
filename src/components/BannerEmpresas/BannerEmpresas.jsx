import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import "./BannerEmpresas.css";

export const BannerEmpresas = () => {
  return (
    <div className="banner-empresas mb-20">
      <BannerTitles subtitle={"Testimonios"} title={"Las empresas que confían en nosotros"} />
      <div className="clientes">
        <img src="../assets/empresas/hospital-universitario-austral.png" alt="hospital universitario austral" />
        <img src="../assets/empresas/telefonica.png" alt="telefonica" />
        <img src="../assets/empresas/toyota.png" alt="toyota" />
        <img src="../assets/empresas/accenture.png" alt="accenture" />
        <img src="../assets/empresas/shell.png" alt="shell" />
        <img src="../assets/empresas/ypf.png" alt="ypf" />
      </div>
    </div>
  );
};
