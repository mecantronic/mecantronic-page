import "./ProductContainer.css"
import React from 'react'


import { Accordion } from '../Accordion/Accordion'
import { ImgSlider } from '../ImgSlider/ImgSlider'
import { BannerStrength } from '../BannerStrength/BannerStrength'
import { Datasheet } from "../Datasheet/Datasheet"

export const ProductContainer = ({productToShow}) =>{
    return (
    <>
        <div className='productContainer'>
            <h3 className="productSubtitle">{productToShow["subtitle"]}</h3>
            <h2 className="productTitle">{productToShow["title"]}</h2>
            
            <div className="productDetails">
                <ImgSlider product={productToShow}/>
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