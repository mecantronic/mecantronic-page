// @ts-nocheck
import React from 'react'
import { useParams } from "react-router-dom"
import { Banner } from '../components/Banner/Banner'
import { ProductContainer } from '../components/ProductContainer/ProductContainer'
import { CardProductsContainer } from '../components/CardProductsContainer/CardProductsContainer'
import { Slider } from '../components/Slider/Slider'
import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import products from '../components/Utils/Products'
import TestimoniosInfo from '../components/Utils/TestimoniosInfo'
import { ServiciosNav } from "../components/ServiciosNav/ServiciosNav";
import { BannerTitles } from '../components/BannerTitles/BannerTitles'


export const Product = () => {
  const {product} =useParams();
  const productToShow = products[parseInt(product)-1];
  return (
    <>
    <Banner info1={productToShow["title"]} info2={productToShow["titleBanner"]} info3={""}/>  
    <ServiciosNav/>  
    <ProductContainer productToShow={productToShow}/>
    <CardProductsContainer products={products} type="products"/>
    <BannerTitles subtitle={"testimonios"} title={"¿Que dicen nuestros clientes?"} />
    <Slider elementos={TestimoniosInfo} type="testimonios"/>
    <BannerMoreInfo/>
    </>
  )
}
