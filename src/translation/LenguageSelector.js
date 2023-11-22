import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const [isSpanish, setIsSpanish] = useState(false);

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      color: "#b72212",
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#b72212",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#e9e9ea",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#b72212",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  const toggleLanguage = () => {
    const newLanguage = isSpanish ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
  };

  return (
    <div style={{ margin: 50 }}>
      <div>
        <span style={{ color: isSpanish ? "#d15962" : "#ffffff" }}>Es</span>
        <FormControlLabel
          style={{ margin: 4 }}
          control={
            <IOSSwitch
              checked={isSpanish}
              onChange={toggleLanguage}
              name="languageSwitch"
            />
          }
        />
        <span style={{ color: isSpanish ? "#ffffff" : "#d15962" }}>En</span>
      </div>
    </div>
  );
}

export default LanguageSwitch;
