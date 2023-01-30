import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'
import { BannerStrength } from '../components/BannerStrength/BannerStrength'

import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import AboutInfo from "../components/Utils/AboutInfo"


import { Slider } from '../components/Slider/Slider'

export const AboutUs = () => {
  return (
    <> 
    <Banner info1={AboutInfo[0]["bannerInfo1"]} info2={AboutInfo[0]["bannerInfo2"]}/>
    <About data={AboutInfo}/>
    {/* 
    APARENTEMENTE LO BORRARON DEL PROTO EN ALTA?

        <BannerStrength data ={AboutInfo[0]["strengths"]}/>

    */}
    <Slider elementos={AboutInfo} type="team"/>
    <Slider elementos={AboutInfo} type="gallery"/>
    <BannerMoreInfo/>
    </>
  )
}
