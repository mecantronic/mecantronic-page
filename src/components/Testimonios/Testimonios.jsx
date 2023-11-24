// @ts-nocheck
import React from 'react'
import { BannerTitles } from '../BannerTitles/BannerTitles'
import './Testimonios.css'
import { Slider } from '../Slider/Slider'
import TestimoniosInfo from '../Utils/TestimoniosInfo'
import { useTranslation } from 'react-i18next'

export const Testimonios = () => {
const { t } = useTranslation();
const data = [
  {
  user:t("user1"),
  position: t("position1"),
  opinion: t("opinion1"),
  profileImg: "../assets/empresas/uali.svg",
  rating: "5/5",
  },
  {
  user : t("user2"),
  position : t("position2"),
  opinion : t("opinion2"),
  profileImg: "../assets/empresas/Moltech.svg",
  rating: "3/5",
  },
  {
  user : t("user3"),
  position : t("position3"),
  opinion  : t("opinion3"),
  profileImg: "../assets/empresas/Molinari.svg",
  rating: "2/5",
  },
  {
  user : t("user4"),
  position : t("position4"),
  opinion  : t("opinion4"),
  profileImg: "../assets/empresas/Velos.svg",
  rating: "2/5",

  },
  {

  user : t("user5"),
  position : t("position5"),
  opinion  : t("opinion5"),
  profileImg: "../assets/empresas/L184.svg",
  rating: "4/5",

  },
  {
  user : t("user6"),
  position : t("position6"),
  opinion  : t("opinion6"),
  profileImg: "../assets/empresas/L184.svg",
  rating: "5/5",
  }
]


  return (
    <div className='testimonios'>
      <BannerTitles subtitle={t("titulo")} title={t("titulo1")} />
      <Slider elementos={data} type="testimonios"/>   
    </div>
  )
}
