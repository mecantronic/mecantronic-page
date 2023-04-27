// @ts-nocheck
import React from "react"
import "./Slider.css"
import { Partner } from "../Partner/Partner"
import { CardProductCompare } from "../CardProductCompare/CardProductCompare";
import { CardTestimonios } from '../CardTestimonios/CardTestimonios'
import 'swiper/css/bundle';
import "swiper/css";
import "swiper/css/pagination";
import { register } from 'swiper/element/bundle';
import {Navigation, Pagination, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export const Slider = ({elementos, type}) => { 
    register();

    function renderProducts(){
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
            pagination={{ clickable: true }}
            id="swiperProductsCompare"
            breakpoints={{
            800: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
            }}                  
            modules={[Pagination , Navigation]}
            className="mySwiper"
            >
                {elementos.map((element,index)=>{
                    return (
                    <SwiperSlide className="products">
                        <CardProductCompare product={element} key={index}/>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }

    function renderTestimonios(){
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
                pagination={{ clickable: true }}
                id="swiperTestimonios"
                breakpoints={{
                1000: {
                        slidesPerView: 1,
                        spaceBetween: 32,
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                1360: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1850: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
                2300: {
                    slidesPerView: 5,
                    spaceBetween: 32,
                }
                }}                    
                modules={[Pagination , Navigation]}
                className="mySwiper"
            >
                {elementos.map((testimonio,index)=>{
                    return (
                        <SwiperSlide className="sliderTestimonios">
                            <CardTestimonios rating={testimonio["rating"]} profileImg={testimonio["profileImg"]}  user={testimonio["user"]} opinion={testimonio["opinion"]} position={testimonio["position"]}/>
                        </SwiperSlide>
                        )
                })}
            </Swiper>

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
            500: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            950: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1900: {
                slidesPerView: 6,
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
                    spaceBetween={40}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    speed="500" 
                    loop="true" 
                    css-mode="true" 
                    id="swiperGallery"
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },
                    2200: {
                        slidesPerView:4,
                        spaceBetween: 35,
                    },
                    }}                    
                    modules={[Pagination , Navigation]}
                    className="mySwiper"
                >
                
                {elementos[0]["gallery"].map((image,index)=>{
                    return (
                        <SwiperSlide className="gallery">
                            <img src={`../assets/team/slider/${image["src"]}`} alt={image["alt"]} key={index}/>
                        </SwiperSlide >
                        )
                })}
            </Swiper>
            
        )
    }

    function renderImgProduct(){
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
                    id="swiperImgProduct"                  
                    modules={[Pagination , Navigation]}
                    className="mySwiper"
                >
                
                {elementos["img"].map((source,index)=>{
                    return (
                        <SwiperSlide className="">
                            <img src={`../assets/products/${elementos["title"]}/${source["src"]}.png`}  key={index} alt={`Impresora ${elementos["title"]}`}/>
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
            case "ImgProduct": return (renderImgProduct())
            default: break;}
    }

    return (
        renderSlides()
    )
}
