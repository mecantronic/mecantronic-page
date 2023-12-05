// @ts-nocheck
import "./CardProductsContainer.css";
import { useParams } from "react-router-dom";
import React from "react";
import { CardProductCompare } from "../CardProductCompare/CardProductCompare";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import products from "../Utils/Products";
import { useTranslation } from "react-i18next";

export const CardProductsContainer = (
  {
    /*products, type*/
  }
) => {
  const { product } = useParams();
  const { t } = useTranslation();
  const products = t('3dproducts', {returnObjects: true});
  const productToShow = products[parseInt(product) - 1];
  const productToCompare = product === "1" ? products[1] : products[0];
  return (
    <>
      <BannerTitles
        subtitle={t("stt")}
        title={t("ttt")}
      />
      <div className="cardProducts">
        <CardProductCompare product={productToShow} productoActual={true} />
        <CardProductCompare product={productToCompare} />
      </div>
    </>
  );
};
