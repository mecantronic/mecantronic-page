// @ts-nocheck
import "./ProductContainer.css"
import React from 'react'
import { Accordion } from '../Accordion/Accordion'
import { BannerStrength } from '../BannerStrength/BannerStrength'
import { Datasheet } from "../Datasheet/Datasheet"
import { BannerTitles } from "../BannerTitles/BannerTitles"
import { Slider } from "../Slider/Slider"

export const ProductContainer = ({productToShow}) =>{
     return (
    <>
        <div className='productContainer'>
            <BannerTitles subtitle={productToShow["subtitle"]} title={productToShow["title"]}/>
            <div className="productDetails">
                <Slider elementos={productToShow} type="ImgProduct"/>
                <div className="accordionContainer">
                    <h3 className="detailsTitle">{productToShow["detailsTitle"]}</h3>
                    <p className="detailsText">{productToShow["detailsText"]}</p>
                    <Accordion product={productToShow["accordion"]}/>      
                </div>  
            </div>
            <BannerStrength data={productToShow["strengths"]}/>
            <Datasheet product={productToShow}/>
        </div>
    </>
    )
}