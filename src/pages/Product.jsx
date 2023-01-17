import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductContainer } from '../components/ProductContainer/ProductContainer'

export const Product = () => {
  return (
    <>
    <NavBar/>
    <Banner/> {/* HACERLO DINAMICO.. QUE RECIBA PARAMETRO DE TEXTO =>  "KUBOX Impresora industrial" */}
    <ProductContainer/>
    </>
  )
}
