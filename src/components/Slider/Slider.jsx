// @ts-nocheck
import React from "react"
import { useState, useEffect } from "react";
import "./Slider.css"
import { Partner } from "../Partner/Partner"
import { CardProductCompare } from "../CardProductCompare/CardProductCompare";
import { CardTestimonios } from '../CardTestimonios/CardTestimonios'

import 'swiper/css/bundle';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { register } from 'swiper/element/bundle';
import {Navigation, Pagination, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, } from "react";


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
            <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            speed="500" 
            loop="true" 
            css-mode="true" 
            pagination={{ clickable: true }}
            id="swiperTeam"
            breakpoints={{
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 8,
                spaceBetween: 30,
            },
            }}                    
            modules={[Pagination , Navigation]}
            className="mySwiper"
                >
                {elementos[0]["team"].map((partner,index)=>{
                    return (
                        <SwiperSlide>
                            <Partner partner={partner} key={index}/>
                        </SwiperSlide>
                        )
                })}
            </Swiper>

        )
    }

    function renderGallery(){
        return(
            <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    speed="500" 
                    loop="true" 
                    css-mode="true" 
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    }}                    
                    modules={[Pagination , Navigation]}
                    className="mySwiper"
                >
                
                {elementos[0]["gallery"].map((image,index)=>{
                    return (
                        <SwiperSlide className="gallery">
                            <img src={`../assets/team/${image["src"]}`} alt={image["alt"]} key={index}/>
                        </SwiperSlide >
                        )
                })}
            </Swiper>
            
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
