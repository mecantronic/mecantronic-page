// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../components/Banner/Banner";
import { ProductContainer } from "../components/ProductContainer/ProductContainer";
import { BannerMoreInfo } from "../components/BannerMoreInfo/BannerMoreInfo";
import products from "../components/Utils/Products";
import { SecondNavbar } from "../components/SecondNavbar/SecondNavbar";
import { useTranslation } from "react-i18next";

export const Product = () => {
  const { t } = useTranslation();
  const { product } = useParams();
  const productToShow = products[parseInt(product) - 1];

  const secondNav = [
    { texto: t("sh1"), link: "sobreProducto" },
    { texto: t("sh2"), link: "fichaTecnicaProducto" },
    { texto: t("sh3"), link: "comparativaProductos" },
  ];

  useEffect(() => {
    const root = document.getElementById("root");

    if (root) {
      root.removeAttribute("class");
      root.classList.add("backgroundImage", "bgImageProducts");

      if (productToShow?.title === "Koron") {
        console.log("SOY KORON");
        root.classList.add("backgroundImage-inversa");
      }
    }
  }, [productToShow]);

  return (
    <span id="Product">
      <Banner
        info1={productToShow["title"]}
        info2={productToShow["titleBanner"]}
        info3={""}
        img={productToShow["imgHero"]}
      />
      <SecondNavbar data={secondNav} />
      <ProductContainer productToShow={productToShow} />
      <BannerMoreInfo />
    </span>
  );
};
