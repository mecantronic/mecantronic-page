import React from "react"
import "./Slider.css"
import Carousel from "react-elastic-carousel"
import { Partner } from "../Partner/Partner"
import { GalleryItem } from "../GalleryItem/GalleryItem"
import { CardProductCompare } from "../CardProductCompare/CardProductCompare";
import { CardTestimonios } from '../CardTestimonios/CardTestimonios'

export const Slider = ({elementos, type}) => {  

    function renderProducts(){
        const productsBreakPoints =[
/* ARMAR LOGICA PARA QUE ESTA CONSTANTE QUEDE EN Products.js */
            {width: 1, itemsToShow: 1},
            {width: 550, itemsToShow: 1},
            {width: 768, itemsToShow: 2},
            {width: 1200, itemsToShow: 2}] 

        return(
            <div className="row productsContainer">
                <Carousel breakPoints={productsBreakPoints}>
                    {elementos.map((element,index)=>{
                        return (
                            <div className="slide products">
                                <CardProductCompare product={element} key={index}/>
                            </div >)})
                    }
                </Carousel></div>)
    }

    function renderTestimonios(){
        const testimoniosBreakPoints =[
/* ARMAR LOGICA PARA QUE ESTA CONSTANTE QUEDE EN TestimoniosInfo.js */
            {width: 1, itemsToShow: 1},
            {width: 550, itemsToShow: 2},
            {width: 768, itemsToShow: 3},
            {width: 1200, itemsToShow: 4}
        ]
        
        return(
                <div className="row testimoniosContainer">
                    <Carousel breakPoints={testimoniosBreakPoints}>
                        {elementos.map((testimonio,index)=>{
                            return (
                                <div className="slide sliderTestimonios">
                                    <CardTestimonios rating={testimonio["rating"]} profileImg={testimonio["profileImg"]}  user={testimonio["user"]} opinion={testimonio["opinion"]}/>
                                </div >)})
                        }
                    </Carousel></div>)
    }

    function renderTeam(){
        return(
                <div className="row teamContainer">
                    <Carousel breakPoints={elementos[0][`${type}BreakPoints`]}>
                        {elementos[0]["team"].map((partner,index)=>{
                            return (
                                <div className="slide team">
                                    <Partner partner={partner} key={index}/>
                                </div >)})
                        }
                    </Carousel></div>)
    }

    function renderGallery(){
        return(
                <div className="row galleryContainer">
                    <Carousel breakPoints={elementos[0][`${type}BreakPoints`]}>
                        {elementos[0]["gallery"].map((image,index)=>{
                            return (
                                <div className="slide gallery">
                                    <GalleryItem image={image} key={index}/>
                                </div >)})
                        }
                    </Carousel></div>)
    }

    function renderSlides(){  
        switch (type) {
            case "products": return (renderProducts())
            case "testimonios":return (renderTestimonios())
            case "team":return (renderTeam())
            case "gallery":return (renderGallery())
            default: break;}
    }

    return (
        renderSlides()
    )
}
