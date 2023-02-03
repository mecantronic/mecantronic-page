import React from "react"
import "./Slider.css"
import { Partner } from "../Partner/Partner"
import { CardProductCompare } from "../CardProductCompare/CardProductCompare";
import { CardTestimonios } from '../CardTestimonios/CardTestimonios'

import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
import {Navigation, Pagination} from "swiper";

export const Slider = ({elementos, type}) => {  
    register();

    function renderProducts(){
        return(
            <swiper-container 
                modules={[Navigation, Pagination]}
                slides-per-view="2" 
                // spaceBetween={5}
                speed="500" 
                loop="true" 
                css-mode="true" 
                navigation="true" 
                pagination={{ clickable: true }}
                id="swiperProductsCompare">

                {elementos.map((element,index)=>{
                    return (
                    <swiper-slide className="products">
                        <CardProductCompare product={element} key={index}/>
                    </swiper-slide >
                    )
                })}
            </swiper-container>
        )
    }

    function renderTestimonios(){
        return(
            <swiper-container 
                modules={[Navigation, Pagination]}
                slides-per-view="4" 
                // spaceBetween={5}
                speed="500" 
                loop="true" 
                css-mode="true" 
                navigation="true" 
                pagination={{ clickable: true }}
                id="swiperTestimonios">
    
                {elementos.map((testimonio,index)=>{
                    return (
                        <swiper-slide className="sliderTestimonios">
                            <CardTestimonios rating={testimonio["rating"]} profileImg={testimonio["profileImg"]}  user={testimonio["user"]} opinion={testimonio["opinion"]}/>
                        </swiper-slide >
                        )
                })}
            </swiper-container>

        )
    }

    function renderTeam(){
        return(
            <swiper-container 
                modules={[Navigation, Pagination]}
                slides-per-view="5" 
                speed="500" 
                loop="true" 
                css-mode="true" 
                navigation="true" 
                pagination={{ clickable: true }}
                id="swiperTeam">
                {elementos[0]["team"].map((partner,index)=>{
                    return (
                        <swiper-slide>
                            <Partner partner={partner} key={index}/>
                        </swiper-slide >
                        )
                })}
            </swiper-container>

        )
    }

    function renderGallery(){
        return(
            <swiper-container 
                modules={[Navigation, Pagination]}
                slides-per-view="2" 
                spaceBetween={50}
                speed="500" 
                loop="true" 
                css-mode="true" 
                navigation="true" 
                pagination={{ clickable: true }}
                id="swiperGallery">

                {elementos[0]["gallery"].map((image,index)=>{
                    return (
                        <swiper-slide className="gallery">
                            <img src={`../assets/team/${image["src"]}`} alt={image["alt"]} key={index}/>
                        </swiper-slide >
                        )
                })}
            </swiper-container>
            
        )
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
