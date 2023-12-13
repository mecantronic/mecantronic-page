import React from "react";
import { Link } from "react-router-dom"
import NavbarDesktop from "../Navbar";
import "./Navbar.css"
import CollapseNavbar from "./NavbarMobile";
import LanguageSelector from "../../translation/LenguageSelector"

export const Navbar = () => {

    const openMenu = (navbarMobile) => {
        navbarMobile?.classList.remove("nav-collapse-close")
        navbarMobile?.classList.add("nav-collapse-open")
    }
    const closeMenu = (navbarMobile) => {
        navbarMobile?.classList.remove("nav-collapse-open")
        navbarMobile?.classList.add("nav-collapse-close")
    }
    const handleMenu = () => {
        const navbarMobile = document.getElementById("nav-collapse")
        if (navbarMobile?.classList.contains("nav-collapse-close")) {
            openMenu(navbarMobile)
        } else {
            closeMenu(navbarMobile)
        }
    }
    return (
        <header>
            <div className="nav-area">
                <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
                    <img className='branNav' src="../assets/logo-mecantronic-footer-mobile.png" alt="MECANTRONIC" />
                </Link>
                {/* <div><LanguageSelector /></div> */}
                <button>
                    <img src="../assets/icons/btn-hamb.png" alt="" id="btn-hamb" onClick={handleMenu} />
                </button>
                <NavbarDesktop />
                <div id="nav-collapse" className={`nav-collapse-close`} >
                    <CollapseNavbar />
                </div>

            </div>
        </header >
    );
}