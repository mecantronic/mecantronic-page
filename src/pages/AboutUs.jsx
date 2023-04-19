// @ts-nocheck
import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { About } from '../components/About/About'

import { BannerMoreInfo } from '../components/BannerMoreInfo/BannerMoreInfo'
import AboutInfo from "../components/Utils/AboutInfo"
import { Slider } from '../components/Slider/Slider'
import { BannerTitles } from '../components/BannerTitles/BannerTitles'
import { SecondNavbar } from '../components/SecondNavbar/SecondNavbar'

export const AboutUs = () => {
  const secondNav = [{ texto: "Sobre nosotros", link: "nosotros"},
    {texto: "Equipo", link: "equipo"} ]

  setTimeout(()=>{
    const root = document.getElementById("root");
    root.removeAttribute('class');
  },100)
/*
  setTimeout(()=>{
    let secondNav = document.getElementById("secondNav");
    let sticky = secondNav.offsetTop;  
    window.onscroll = ()=>{      
        if (window.pageYOffset*2.4>= sticky) {
            secondNav.classList.add("sticky")
        } else {
            secondNav.classList.remove("sticky");
        }
    }
},500)

*/

  return (
    <span id="AboutUs">
      <Banner img={"banner-about.png"} bg1={"bg-about-1.png"} info2={AboutInfo[0]["bannerInfo1"]} />
      <SecondNavbar data={secondNav} />
      <span id="nosotros">
        <BannerTitles title={"Conocé nuestra historia"} subtitle={"Quiénes somos"} />      
        <About/>  
      </span>  
      <span id="equipo">
        <BannerTitles title={"Conocé a los expertos detrás de nuestra empresa"} subtitle={"NUESTRO EQUIPO DE TALENTO"}  />
        <Slider elementos={AboutInfo} type="team"/>      
        <Slider elementos={AboutInfo} type="gallery"/>
        <BannerMoreInfo/>
      </span>      
    </span>  
  )
}
