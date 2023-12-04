// @ts-nocheck
import "./CardProductsContainer.css";
import { useParams } from "react-router-dom";
import React from "react";
import { CardProductCompare } from "../CardProductCompare/CardProductCompare";
import { BannerTitles } from "../BannerTitles/BannerTitles";
import products from "../Utils/Products";

export const CardProductsContainer = (
  {
    /*products, type*/
  }
) => {
  const { product } = useParams();
  const productToShow = products[parseInt(product) - 1];
  const productToCompare = product === "1" ? products[1] : products[0];
  return (
    <>
      <BannerTitles
        subtitle="COMPARATIVA"
        title="Elegí la que más se adecúe a tus necesidades"
      />
      <div className="cardProducts">
        <CardProductCompare product={productToShow} productoActual={true} />
        <CardProductCompare product={productToCompare} />
      </div>
    </>
  );
};
