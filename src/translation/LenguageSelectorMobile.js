import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import arrowSwapHorizontal from "../components/assets/arrow-swap-horizontal.svg";

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = isSpanish ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: 24,
        height: 48,
        fontSize: 18,
        cursor: "pointer",
      }}
      onClick={toggleLanguage}
    >
      <span style={{ color: isSpanish ? "#d15962" : "#ffffff", marginRight: "0.5rem" }}>Es</span>
      <div
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "50%",
        }}
      >
        <img src={arrowSwapHorizontal} alt="Arrow Swap Horizontal" />
      </div>
      <span style={{ color: isSpanish ? "#ffffff" : "#d15962", marginLeft: "0.5rem" }}>En</span>
    </div>
  );
}

export default LanguageSwitch;
