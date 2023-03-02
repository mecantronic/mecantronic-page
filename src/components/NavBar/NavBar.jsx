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
              <img src="../assets/mecantronic.svg" alt="MECANTRONIC" />
        </Link>
      </Navbar.Brand>
      <div className="flex mr-3 md:order-2">        
        <ContactButton textoBoton={"Contacto"} />
        <Navbar.Toggle className='navbarToggle'/>
      </div>
      <Navbar.Collapse className='navCollapse'>
        <Link to={"/"} className=""><p>Home</p></Link>     
        <Dropdown label="Servicios" inline={true} className="navbar-menu menuDrop">
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/Ia"}><span className=''><p>Servicios de IA</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/Iot"}><span className=''><p>Servicios de IoT</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/3D"}><span className=''><p>Servicios de 3D</p></span></Link>
          </Dropdown.Item>
        </Dropdown> 

        <Dropdown label="Productos" inline={true} className="navbar-menu menuDrop ">
          <Dropdown.Item className="navbar-menu-item">
            <Link to={"/products/3"}><span className=''><p>Noisen</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item className="navbar-menu-item">
            <Link to={"/products/1"}><span className=''><p>Kubox</p></span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/products/2"}><span className=''><p>Koron</p></span></Link>
          </Dropdown.Item>
        </Dropdown>  
        <Link to={"/aboutUs"} className="">Nosotros</Link> 
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
