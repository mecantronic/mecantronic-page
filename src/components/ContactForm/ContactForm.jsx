import React from 'react'
import { BannerTitles } from '../BannerTitles/BannerTitles'
import './ContactForm.css'

export const ContactForm = () => {
  return (
    <div className='contact-form'>
        <BannerTitles title={"Dejanos tu consulta"} subtitle={"contacto"} />
        <div className='form'>
            <div className='input-section'>
            <label>Nombre</label>
            <input type="text" placeholder='Escribi tu nombre completo' />
            </div>
            <div className='input-section'>
            <label>Mail</label>
            <input type="text" placeholder='nombre@gmail.com'/>
            </div>
            <div className='input-section'>
            <label>Ciudad</label>
            <input type="text" placeholder='Ingresa la ciudad donde vivis' />
            </div>
            <div className='input-section'>
            <label>Consulta</label>
            <input type="text" placeholder='Servicio' />
            </div>
            <div className='input-section'>
            <label>Mensaje</label>
            <input type="text" placeholder='Escribinos tu mensaje'/>
            </div>
            
            <button className='button-contactform'>Enviar</button>
        </div>
    </div>
  )
}
