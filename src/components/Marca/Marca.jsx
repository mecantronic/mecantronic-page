import React from "react";
import "./Marca.css";
import rocket from "../assets/Rocket.svg";
import puzzle from "../assets/Puzzle.svg";
import dart from "../assets/Dart.svg";
import { useTranslation } from "react-i18next";

export const Marca = () => {

  const { t } = useTranslation();

  return (
    <div className="marca">
      <div className=" h-full marca-section">
        <div>
        <div className="marca-icon">
            <img src={rocket} alt="icon" />
          </div>
          <p>{t("marca")}</p>
          <p>
          {t("marca0.1")}
          </p>
        </div>
      </div>

      <div className=" h-full marca-section">
        <div>
          <div className="marca-icon">
            <img src={puzzle} alt="icon" />
          </div>

          <p>{t("marca1")}</p>
          <p>{t("marca1.1")}</p>
        </div>
      </div>

      <div className=" h-full marca-section">
        <div>
          <div className="marca-icon">
              <img src={dart} alt="icon" />
          </div>
          <p>{t("marca2.0")}</p>
          <p>{t("marca2.1")}</p>
        </div>
      </div>
    </div>
  );
};
