// @ts-nocheck
import React from 'react'
import { BannerTitles } from '../BannerTitles/BannerTitles'
import './Testimonios.css'
import { Slider } from '../Slider/Slider'
import TestimoniosInfo from '../Utils/TestimoniosInfo'

export const Testimonios = () => {
  return (
    <div className='testimonios'>
      <BannerTitles subtitle={"testimonios"} title={"¿Que dicen nuestros clientes?"} />
      <Slider elementos={TestimoniosInfo} type="testimonios"/>   
    </div>
  )
}
