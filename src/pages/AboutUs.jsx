import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { NavBar } from '../components/NavBar/NavBar'
import { About } from '../components/About/About'
import { BannerStrength } from '../components/BannerStrength/BannerStrength'

import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import { Footer} from '../components/Footer/Footer'
import AboutInfo from "../components/Utils/AboutInfo"


import { Slider } from '../components/Slider/Slider'

export const AboutUs = () => {
  return (
    <> 
    <NavBar/>
    <Banner bannerInfo={AboutInfo[0]["titleBanner"]}/>
    <About data={AboutInfo}/>
    <BannerStrength data ={AboutInfo[0]["strengths"]}/>
    
    <h1>Imagenes hero, con algun efecto hover?</h1>
    <h1>Imagenes hero, con algun efecto hover?</h1>
    <h1>Imagenes hero, con algun efecto hover?</h1>



    <Slider elementos={AboutInfo} type="team"/>
    <Slider elementos={AboutInfo} type="gallery"/>
    <BannerMoreInfo/>
    <Footer/>
    </>
  )
}
