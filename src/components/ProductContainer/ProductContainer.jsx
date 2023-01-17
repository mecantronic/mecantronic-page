import "./ProductContainer.css"
import React from 'react'
import { useParams } from "react-router-dom"

import { Accordion } from '../Accordion/Accordion'
import { ImgSlider } from '../ImgSlider/ImgSlider'
import { BannerStrength } from '../BannerStrength/BannerStrength'
import { FichaTecnica } from "../FichaTecnica/FichaTecnica"
import { kuboxSubtitle , koronSubtitle } from "../ProductsMock"


export const ProductContainer = () =>{
    const {product} =useParams();

    return (
    <>
        <div className='productContainer'>
            <h3 className="productSubtitle">{product==="kubox"? kuboxSubtitle:koronSubtitle}</h3>
            <h2 className="productTitle">{product}</h2>
            
            <div className="productDetails">
                <ImgSlider product={product}/>
                <div className="accordionContainer">
                    <h3 className="detailsTitle">Impresora ......</h3>
                    <p className="detailsText">La estructura garantiza una gran rigidez minimizando las vibraciones. 
                        Exclusivo sistema de cabezales.</p>
                    <Accordion product={product}/>      
                </div>  
            </div>
            <BannerStrength/>
            <FichaTecnica/>
        </div>
    </>
    )
}