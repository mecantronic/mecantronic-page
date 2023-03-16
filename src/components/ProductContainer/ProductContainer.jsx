// @ts-nocheck
import "./ProductContainer.css"
import React from 'react'
import { Accordion } from '../Accordion/Accordion'
import { Datasheet } from "../Datasheet/Datasheet"
import { BannerProductsStrength } from "../BannerProductsStrength/BannerProductsStrength"
import { Slider } from "../Slider/Slider"

export const ProductContainer = ({productToShow}) =>{
     return (
    <>
        <div className='productContainer'>

            <div className="productDetails">
                <div className="titlesMobile">
                    <p className="subtitle">{productToShow["subtitle"]}</p>
                    <p className="detailsTitle">{productToShow["detailsTitle"]}</p>
                </div>

                <Slider elementos={productToShow} type="ImgProduct"/>

                <div className="accordionContainer">
                    <div className="titles">
                        <p className="subtitle">{productToShow["subtitle"]}</p>
                        <p className="detailsTitle">{productToShow["detailsTitle"]}</p>
                    </div>
                    <Accordion product={productToShow["accordion"]}/>      
                </div>  

            </div>
            <BannerProductsStrength/>
            <Datasheet product={productToShow}/>
        </div>
    </>
    )
}