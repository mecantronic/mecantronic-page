import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import "./BannerEmpresas.css";

export const BannerEmpresas = () => {
  return (
    <div className="banner-empresas pt-20 mb-20">
      <BannerTitles subtitle={"casos de exito"} title={"Ut recusandae fugit"} />
      <img src="./assets/clientes.svg" alt="clientes" />
    </div>
  );
};
