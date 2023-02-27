// @ts-nocheck
import "./CardProductsContainer.css"
import React from "react";
import { Slider } from "../Slider/Slider";
import { BannerTitles } from "../BannerTitles/BannerTitles"

export const CardProductsContainer = ({products, type}) => {
    return (
        <div className="cardProducts">
            <BannerTitles subtitle="Comparativa" title="Elegí la que mas se adecue a tus necesidades"/>
            <Slider elementos= {products} type={type}/>
        </div>
    )
}