// @ts-nocheck
import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'

import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import AboutInfo from "../components/Utils/AboutInfo"
import { Slider } from '../components/Slider/Slider'
import { BannerTitles } from '../components/BannerTitles/BannerTitles'

export const AboutUs = () => {
  return (
    <> 
      <Banner img={"banner-about.png"} info1={AboutInfo[0]["bannerInfo1"]} />
      <BannerTitles title={"Conocé nuestra historia"} subtitle={"Quiénes somos"}/>
      <About data={AboutInfo}/>    
      <BannerTitles title={"Conocé a los expertos detrás de nuestra empresa"} subtitle={"NUESTRO EQUIPO DE TALENTO"}/>
      <Slider elementos={AboutInfo} type="team"/>
      <Slider elementos={AboutInfo} type="gallery"/>
      <BannerMoreInfo/>
    </>
  )
}
