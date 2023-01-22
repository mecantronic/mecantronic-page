import React from 'react'
import { useParams } from "react-router-dom"
import { Banner } from '../components/Banner/Banner'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductContainer } from '../components/ProductContainer/ProductContainer'
import { CardProductsContainer } from '../components/CardProductsContainer/CardProductsContainer'
import { Slider } from '../components/Slider/Slider'
import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import { Footer} from '../components/Footer/Footer'
import products from '../components/Utils/Products'
import TestimoniosInfo from '../components/Utils/TestimoniosInfo'

export const Product = () => {
  const {product} =useParams();
  const productToShow = products[parseInt(product)-1];
  return (
    <>
    <NavBar/>
    <Banner bannerInfo={productToShow["titleBanner"]}/>
    <ProductContainer productToShow={productToShow}/>
    <CardProductsContainer products={products} type="products"/>
    {/* <Testimonios/> */}
    <Slider elementos={TestimoniosInfo} type="testimonios"/>
    <BannerMoreInfo/>
    <Footer/>
    </>
  )
}
