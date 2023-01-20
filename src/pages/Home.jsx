import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { BannerEmpresas } from '../components/BannerEmpresas/BannerEmpresas'
import { CasosExito } from '../components/CasosExito/CasosExito'
import { Marca } from '../components/Marca/Marca'
import { Servicios } from '../components/Servicios/Servicios'
import { Testimonios } from '../components/Testimonios/Testimonios'

export const Home = () => {
  return (
    <>
    <Banner bannerInfo={"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem."}/>
    <Marca/>
    <Servicios/>
    <CasosExito/>
    <BannerEmpresas/>
    <Testimonios/>
    </>
  )
}
