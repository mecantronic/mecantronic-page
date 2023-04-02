// @ts-nocheck
import React from 'react'
import './NavBar.css'
import { ContactButton } from '../ContactButton/ContactButton'
import {Link} from "react-router-dom"
import { Button, Dropdown, Navbar } from 'flowbite-react'
import { WhatsAppBtn } from '../WhatsAppBtn/WhatsAppBtn'

export const  NavBar = () => {
  return (
    <>
    <WhatsAppBtn/> 
    <Navbar fluid={true} rounded={true} className="navbar" >
      <Navbar.Brand>
        <Link to={"/"}>
              <img className='branNav' src="../assets/logo-mecantronic-footer-mobile.png" alt="MECANTRONIC" />
        </Link>
      </Navbar.Brand>
      <div className="flex mr-3 md:order-2">        
        <Navbar.Toggle className='navbarToggle'/>
      </div>

      <Navbar.Collapse className='navCollapse'>
        <Dropdown label="Servicios" inline={true} className="menuItem1 navbar-menu menuDrop">
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/Ia"}><span className='navbar-servicios'><p>Servicios de IA</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/Iot"}><span className='navbar-servicios'><p>Servicios de IoT</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/3D"}><span className='navbar-servicios'><p>Servicios de 3D</p></span></Link>
          </Dropdown.Item>
        </Dropdown> 

        <Dropdown label="Productos" inline={true} className="menuItem1 navbar-menu menuDrop">

          <Dropdown label="Productos IoT" placement='right-start' inline={true} className="navbar-menu submenuDrop">
            <Dropdown.Item className="navbar-menu-item">
              <a href="https://www.noisen.com.ar/" target="_blank" rel="noreferrer">
                <span className='navItemCollapse'><p>Noisen</p></span>
              </a>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown label="Productos 3D" placement='right-start' inline={true} className="navbar-menu submenuDrop">
            <Dropdown.Item className="navbar-menu-item">
              <Link to={"/products/1"}><span className='navItemCollapse'><p>Kubox</p></span></Link>
            </Dropdown.Item>
            <Dropdown.Item className="navbar-menu-item">
              <Link to={"/products/2"}><span className='navItemCollapse'><p>Koron</p></span></Link>
            </Dropdown.Item>
          </Dropdown>

        </Dropdown>  

        <Link to={"/aboutUs"} className="menuItem1 navItem">Nosotros</Link> 

        <ContactButton textoBoton={"Contacto"} />
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
