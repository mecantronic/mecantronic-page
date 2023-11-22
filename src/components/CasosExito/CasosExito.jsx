import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./CasosExito.css";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import noisen from "../assets/noisen.svg";
import aerogeneradores from "../assets/aerogeneradores.svg";
import impresora from "../assets/impresora.svg";
import { useTranslation } from "react-i18next";

export const CasosExito = () => {

  const { t } = useTranslation();

  const data = [
 
  {
    title: "Noisen",
    p1: t("P1"),
    p2: t("P2"),
    p3: t("P3"),
    img: noisen
  },
  {
    title: t("title1"),
    p1: t("P1.5"),
    p2: t("P2.5"),
    p3: t("P3.5"),
    img: aerogeneradores
  },
  {
    title: t("title2"),
    p1: t("P1.8"),
    p2: t("P2.8"),
    p3: "",
    img: impresora
  }
 
];



  const [activeIndex, setActiveIndex] = useState(0);
  const { title, p1, p2, p3, img } = data[activeIndex];

  const changeSection = () => {
    const newIndex = (activeIndex + 1) % data.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full casos">
      <BannerTitles subtitle={t("title2.2")} title={t("title3")} />
      <div className="flex p-8 casoExitoContainer" >
        <div className="w-1/2 casos-img pl-10 pr-10 imgExito">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2 casos-description-container">
          <p className="casos-title">{title}</p>
          <div className="casos-paragraph">
            <p className="mt-4">{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>

          <span>
            <div className="flex casos-circles mt-10" onClick={changeSection}>
              {data.map((_, index) => (
                <span
                  key={index}
                  className={activeIndex === index ? "active-circle ml-3" : "inactive-circle ml-3"}
                  onClick={() => setActiveIndex(index)}
                >
                  <GiPlainCircle />
                </span>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
