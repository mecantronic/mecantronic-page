import React from 'react'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className='navbar pl-20 pr-20'>
        <div>
            <img src="../assets/mecantronic.svg" alt="MECANTRONIC" />
        </div>
        <div>
            <span className='navbar-menu m-4'>Servicios</span>
            <span className='navbar-menu m-4'>Productos</span>
            <span className='navbar-menu m-4'>Nosotros</span>
            <span className='contact-btn m-4'>Contacto</span>
        </div>
    </div>
  )
}
