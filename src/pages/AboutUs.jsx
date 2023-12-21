// @ts-nocheck
import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'

import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import AboutInfo from "../components/Utils/AboutInfo"
import { Slider } from '../components/Slider/Slider'
import { BannerTitles } from '../components/BannerTitles/BannerTitles'
import { SecondNavbar } from '../components/SecondNavbar/SecondNavbar'
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {

  const { t } = useTranslation()


  const secondNav = [{ texto: t("sobrenosotros"), link: "nosotros"},
    {texto: t("equipo"), link: "equipo"} ]

  setTimeout(()=>{
    const root = document.getElementById("root");
    root.removeAttribute('class');
  },100)
  
  return (
    <span id="AboutUs">
      <Banner img={"banner-about.png"} bg1={"bg-about-1.png"} info2={t('main_banner')} />
      <SecondNavbar data={secondNav} />
      <span id="nosotros">
        <BannerTitles title={t("history")} subtitle={t("about us")} />      
        <About/>  
      </span>  
      <span id="equipo">
        <BannerTitles title={t("text4.1")} subtitle={t("text4")}  />
        <Slider elementos={AboutInfo} type="team"/>      
        <Slider elementos={AboutInfo} type="gallery"/>
        <BannerMoreInfo/>
      </span>      
    </span>  
  )
}
