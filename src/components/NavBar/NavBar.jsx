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
    <div className='nav-container'>
      <Navbar.Brand>
        <Link to={"/"}>
              <img className='branNav' src="../assets/logo-mecantronic-footer-mobile.png" alt="MECANTRONIC" />
        </Link>
      </Navbar.Brand>
      <div className="flex mr-3 md:order-2">        
        <Navbar.Toggle className='navbarToggle'/>
      </div>

      <Navbar.Collapse className='navCollapse'>
        <Dropdown label="Servicios" inline={true} className="menuItem1 navbar-menu menuDrop" dismissOnClick={true} arrowIcon={false}>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/2"}><span className='navbar-servicios'><p>Servicios de IA</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/1"}><span className='navbar-servicios'><p>Servicios de IoT</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/3"}><span className='navbar-servicios'><p>Servicios de 3D</p></span></Link>
          </Dropdown.Item>
        </Dropdown> 

        <Dropdown label="Productos" inline={true} className="menuItem1 navbar-menu menuDrop" dismissOnClick={true}  arrowIcon={false} 
      active={true}>
          <Dropdown label="Productos IoT" placement='right-start' inline={true} className="navbar-menu submenuDrop" dismissOnClick={true}>
            <Dropdown.Item className="navbar-menu-item"> 
              <a href="https://www.noisen.com.ar/" target="_blank" rel="noreferrer"  id='noisen'>
                <span className='navItemCollapse'><p>Noisen</p></span>
              </a>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown label="Productos 3D" placement='right-start' inline={true} className="navbar-menu submenuDrop" dismissOnClick={true}>
            <Dropdown.Item className="navbar-menu-item">
              <Link to={"/products/1"} id='kubox'><span className='navItemCollapse' ><p>Kubox</p></span></Link>
            </Dropdown.Item>
            <Dropdown.Item className="navbar-menu-item">
              <Link to={"/products/2"} id='koron'><span className='navItemCollapse'><p>Koron</p></span></Link>
            </Dropdown.Item>
          </Dropdown>

        </Dropdown>  

        <Link to={"/aboutUs"} className="menuItem1 navItem">Nosotros</Link> 

        <ContactButton textoBoton={"Contacto"} />
        </Navbar.Collapse>
        </div>
    </Navbar>
    </>
  )
}
