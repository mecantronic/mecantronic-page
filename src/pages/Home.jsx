// @ts-nocheck
import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { BannerEmpresas } from '../components/BannerEmpresas/BannerEmpresas'
import { CasosExito } from '../components/CasosExito/CasosExito'
import { Marca } from '../components/Marca/Marca'
import { Servicios } from '../components/Servicios/Servicios'
import { Testimonios } from '../components/Testimonios/Testimonios'
import { Form } from '../components/Form/Form'
import { useTranslation } from 'react-i18next';


export const Home = () => {
  const { t } = useTranslation()

  
  
  setTimeout(()=>{
    const root = document.getElementById("root");    
    root.removeAttribute('class');
    root.classList.add("backgroundImage", "bgImageHome");
  },100)

  return (
    
    <span id="Home">
      <Banner info2={t("banner")} info3={t("banner1")} img={"homebanner.svg"}/>  
      <Marca/>
      <Servicios/>
      <CasosExito/> 
      <BannerEmpresas/>
      <Testimonios/> 
      <div id='regularContactForm'>
        <Form/>
      </div>
    </span>
  )
}
