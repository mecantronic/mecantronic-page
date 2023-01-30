import React from 'react'
import './NavBar.css'
import { ContactButton } from '../ContactButton/ContactButton'
import {Link} from "react-router-dom"
import { Dropdown } from 'flowbite-react'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={"/"}>
            <img src="../assets/mecantronic.svg" alt="MECANTRONIC" />
      </Link>
      <div className='menu'>
        <Dropdown label="Servicios" inline={true} className="navbar-menu">
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/Ia"}><span className=''>Servicios de IA</span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/Iot"}><span className=''>Servicios de IoT</span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/servicios/3D"}><span className=''>Servicios de 3D</span></Link>
          </Dropdown.Item>
        </Dropdown>  
      
        <Dropdown label="Productos" inline={true} className="navbar-menu">
          <Dropdown.Item className="navbar-menu-item">
            <Link to={"/products/3"}><span className=''>Noisen</span></Link>
          </Dropdown.Item>
          <Dropdown.Item className="navbar-menu-item">
            <Link to={"/products/1"}><span className=''>Kubox</span></Link>
          </Dropdown.Item>
          <Dropdown.Item  className="navbar-menu-item">
            <Link to={"/products/2"}><span className=''>Koron</span></Link>
          </Dropdown.Item>
        </Dropdown>  

        <Link to={"/aboutUs"}><span className='navbar-menu m-4'>Nosotros</span></Link>

        <span className='m-4'><ContactButton/></span>

      </div>
    </div>
  )
}
