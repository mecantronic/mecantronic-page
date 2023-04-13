// @ts-nocheck
import React from 'react'
import { useParams } from "react-router-dom"
import { Banner } from '../components/Banner/Banner'
import { ProductContainer } from '../components/ProductContainer/ProductContainer'
import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import products from '../components/Utils/Products'
import { SecondNavbar } from '../components/SecondNavbar/SecondNavbar'


export const Product = () => {
  const {product} =useParams();
  const productToShow = products[parseInt(product)-1];  

  const secondNav = [{ texto: "Sobre el producto", link: "sobreProducto"},
  {texto: "Ficha tecnica", link: "fichaTecnicaProducto"} , {texto: "Comparativa", link: "comparativaProductos"}  ]

  setTimeout(()=>{
    const root = document.getElementById("root");
    root.removeAttribute('class');
    root.classList.add("backgroundImage", "bgImageProducts");
  },100)

  return (    
    <span id="Product">
      <Banner info1={productToShow["title"]} info2={productToShow["titleBanner"]} info3={""} img={productToShow["imgHero"]}/>  
      <SecondNavbar data={secondNav} />
      <ProductContainer productToShow={productToShow}/>   
      <BannerMoreInfo/>          
    </span>
  )
}
