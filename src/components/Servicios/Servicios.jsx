import React from "react";
import "./Servicios.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import { Link } from "react-router-dom";
import printer from "../assets/3D.svg";
import IOT from "../assets/IOT.svg";
import AI from "../assets/AI.svg";
import { useTranslation } from "react-i18next";

export const Servicios = () => {
  const { t } = useTranslation();
  return (
    <div className=" servicios ">
      <div className="">
        <BannerTitles subtitle={t("area0")} title={t("area0.1")} />
        <div className="flex flex-wrap servicios-cards">
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={IOT} alt="icon" />
            </div>
            <p className="servicios-card-title ">{t("area1")}</p>
            <div className="paragraph-container">
              <p className="servicios-card-paragraph first-paragraph">
                {t("area1.1")}
              </p>
              <p className="servicios-card-paragraph second-paragraph">
                {t("area1.2")}
              </p>
            </div>
            <Link
              to={"/servicios/IOT"}
              className="servicios-card-btn  mt-5"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("area1.3")}{" "}
            </Link>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={AI} alt="icon" />
            </div>

            <p className="servicios-card-title ">{t("area2")}</p>
            <div className="paragraph-container">
              <p className="servicios-card-paragraph first-paragraph">
                {t("area2.1")}
              </p>
              <p className="servicios-card-paragraph second-paragraph">
                {t("area2.2")}
              </p>
            </div>
            <Link
              to={"/servicios/IA"}
              className="servicios-card-btn  mt-5"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("area2.3")}
            </Link>
          </div>
          <div className="w-1/3 servicios-card">
            <div className="servicios-logo">
              <img src={printer} alt="icon" />
            </div>
            <p className="servicios-card-title ">{t("area3")}</p>
            <div className="paragraph-container">
              <p className="servicios-card-paragraph first-paragraph">
                {t("area3.1")}
              </p>
              <p className="servicios-card-paragraph second-paragraph">
                {t("area3.2")}
              </p>
            </div>
            <Link
              to={"/servicios/3D"}
              className="servicios-card-btn  mt-5"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("area3.3")}{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
