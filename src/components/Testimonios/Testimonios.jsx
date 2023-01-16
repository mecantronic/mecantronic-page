import React from 'react'
import { BannerTitles } from '../BannerTitles/BannerTitles'
import { CardTestimonios } from '../CardTestimonios/CardTestimonios'
import {IoIosArrowForward} from 'react-icons/io'
import './Testimonios.css'

export const Testimonios = () => {
  return (
    <div className='testimonios p-8'>
        <BannerTitles subtitle={"testimonios"} title={"¿Que dicen nuestros clientes?"} />
        <div className='flex pl-8 pr-8 carousel-testimonios'>

        <div className='flex w-full cards-testimonios'>
        <CardTestimonios  className="w=1/4" rating={"5/5"} profileImg={"./assets/profilepic.jpeg"}  user={"Nombre del usuario"} opinion={"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus. Et commodi molestiae qui minus debiti"}/>
            <CardTestimonios className="w=1/4" rating={"5/5"} profileImg={"./assets/profilepic.jpeg"}  user={"Nombre del usuario"} opinion={"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus. Et commodi molestiae qui minus debiti"}/>
            <CardTestimonios className="w=1/4" rating={"5/5"} profileImg={"./assets/profilepic.jpeg"}  user={"Nombre del usuario"} opinion={"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus. Et commodi molestiae qui minus debiti"}/>
            <CardTestimonios className="w=1/4" rating={"5/5"} profileImg={"./assets/profilepic.jpeg"}  user={"Nombre del usuario"} opinion={"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus. Et commodi molestiae qui minus debiti"}/>

        </div>

        <div className='testimonios-arrow pr-2'>
            <div className='arrow-icon'><IoIosArrowForward/></div>
        </div>
        </div>
   
    </div>
  )
}
