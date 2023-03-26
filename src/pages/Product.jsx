// @ts-nocheck
import React from 'react'
import { useParams } from "react-router-dom"
import { Banner } from '../components/Banner/Banner'
import { ProductContainer } from '../components/ProductContainer/ProductContainer'
import { CardProductsContainer } from '../components/CardProductsContainer/CardProductsContainer'
import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import products from '../components/Utils/Products'
import { ServiciosNav } from "../components/ServiciosNav/ServiciosNav";


export const Product = () => {
  const {product} =useParams();
  const productToShow = products[parseInt(product)-1];

  setTimeout(()=>{
    const root = document.getElementById("root");
    root.classList.add("backgroundImageHome");
  },100)

  return (
    <>
    <Banner info1={productToShow["title"]} info2={productToShow["titleBanner"]} info3={""} img={productToShow["imgHero"]}/>  
    <ServiciosNav/>  
    <ProductContainer productToShow={productToShow}/>
    <CardProductsContainer/>
    <BannerMoreInfo/>
    </>
  )
}
