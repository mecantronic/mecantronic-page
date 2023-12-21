import "./Datasheet.css";
import React from "react";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import { useTranslation } from "react-i18next";

export const Datasheet = ({ product }) => {
  const { t } = useTranslation();
  const nombreFichaTecnica = `datasheet-3d-printer-${product[
    "title"
  ].toLowerCase()}.pdf`;
  return (
    <>
      <div className="datasheet">
        <BannerTitles subtitle={t("sk_dataSheet")} title={t("sk_specs")} />
        <div>
          {product["datasheet"].map((specification) => {
            return (
              <div className="specification">
                <p>{specification["specification"]}</p>
              </div>
            );
          })}
        </div>
        <a
          href={`../assets/products/${product["title"]}/${nombreFichaTecnica}`}
          target="_blank"
          rel="noreferrer"
        >
          <button>{t("sk_download")}</button>
        </a>
      </div>
    </>
  );
};
