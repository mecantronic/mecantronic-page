// @ts-nocheck
import React, {useState, useEffect} from 'react'
import { Banner } from '../components/Banner/Banner'
import { BannerEmpresas } from '../components/BannerEmpresas/BannerEmpresas'
import { CasosExito } from '../components/CasosExito/CasosExito'
import { Marca } from '../components/Marca/Marca'
import { Servicios } from '../components/Servicios/Servicios'
import { Testimonios } from '../components/Testimonios/Testimonios'
import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'

export const Home = () => {
  return (
    <>
    <Banner info2={"La tecnología más conveniente para desarrollar tu producto y "} info3={"potenciar tu empresa."}/>  

{/* RESPONSIVE PENDIENTE..
    <Marca/>
    <Servicios/>
    <CasosExito/> 
    
*/}
    <BannerEmpresas/>
    <Testimonios/>
    <BannerMoreInfo/>  
    </>
  )
}
