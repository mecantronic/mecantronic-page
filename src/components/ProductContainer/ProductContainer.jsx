import "./ProductContainer.css"
import React from 'react'
import { useParams } from "react-router-dom"

import { Accordion } from '../Accordion/Accordion'
import { ImgSlider } from '../ImgSlider/ImgSlider'
import { Footer } from "../Footer/Footer"


export const ProductContainer = () =>{
    const {product} =useParams();

    return (
    <>
        <div className='productContainer'>
            <h3 className=" text-xl text-center mt-28">Impresora de uso dual diseñada para satisfacer más de un objetivo.</h3>
            <h2 className=" text-5xl text-center mt-2 font-bold uppercase">{product}</h2>
            
            <div className="productDetails">
                <div className='flex m-10'> 
                    <ImgSlider product={product}/>
                    <div className="w-5/12 my-10">
                        <h3 className="text-2xl font-bold mt-14 mb-2">Impresora industrial</h3>
                        <p className="text-lg">La estructura garantiza una gran rigidez minimizando las vibraciones. 
                            Exclusivo sistema de cabezales.</p>
                        <Accordion product={product}/>      
                    </div>  
                </div>
            </div>
        </div>

        <Footer/>
    </>
    )
}