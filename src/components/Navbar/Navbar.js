import React from "react";
import { Link } from "react-router-dom";
import NavbarDesktop from "../Navbar";
import "./Navbar.css";
import CollapseNavbar from "./NavbarMobile";
import LanguageSelector from "../../translation/LenguageSelector";

export const Navbar = () => {
    const openMenu = (navbarMobile) => {
        navbarMobile?.classList.remove("nav-collapse-close");
        navbarMobile?.classList.add("nav-collapse-open");
    };

    const closeMenu = () => {
        const navbarMobile = document.getElementById("nav-collapse");
        const hamburgerMenu = document.getElementById("btn-hamb");

        if (navbarMobile && hamburgerMenu) {
            navbarMobile.classList.remove("nav-collapse-open");
            navbarMobile.classList.add("nav-collapse-close");
            hamburgerMenu.focus();
        }
    };

    const handleMenu = () => {
        const navbarMobile = document.getElementById("nav-collapse");
        if (navbarMobile?.classList.contains("nav-collapse-close")) {
            openMenu(navbarMobile);
        } else {
            closeMenu();
        }
    };

    return (
        <header>
            <div className="nav-area">
                <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img className="branNav" src="../assets/logo-mecantronic-footer-mobile.png" alt="MECANTRONIC" />
                </Link>
                <button id="btn-hamb" onClick={handleMenu}>
                    <img src="../assets/icons/btn-hamb.png" alt="" />
                </button>
                <NavbarDesktop />
                <div id="nav-collapse" className={`nav-collapse-close`}>
                    <CollapseNavbar closeMenu={closeMenu} />
                </div>
            </div>
        </header>
    );
};
