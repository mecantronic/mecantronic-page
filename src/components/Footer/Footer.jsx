// @ts-nocheck
import "./Footer.css"
import React from "react"
import {Link} from "react-router-dom"
export const Footer = ()=>{
    return (
    <>
        <div className="footer bg-black text-white flex flex-col">
            <span>
                <div className="brand">
                    <div>
                    <Link to={"/"} className="navItem" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} > 
                    {/* <img src="../assets/mecantronic.svg" alt="MECANTRONIC" />  */}
                    
                    </Link>
                        
                    </div>
                    {/*  
                    <p>Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus</p>
                    */}
                </div>

                <span className="flex justify-around mt-8">
                    <div className="aboutUs">
                        <p className="footerTitle">Navegación</p>
                        <ul>
                            <li><Link to={"/servicios/2"} className="navItem"  onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >Servicios</Link></li>
                            <li><Link to={"/products/1"} className="navItem" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >Productos</Link></li>
                            <li><Link to={"/aboutUs"} className="navItem" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >Nosotros</Link></li>
                        </ul>
                    </div>

                    <div className="contacData">
                        <p className="footerTitle">Contacto</p>
                        <ul>
                            <li>Belgrano, Ciudad Autónoma de Buenos Aires.</li>
                            <a href="https://wa.me/5491157397834" target="_blank" rel="noreferrer">
                                <li>+54 9 11 5 739 7834</li>
                            </a>
                            <a href="mailto:info@mecantronic.com.ar" rel="noreferrer">
                                <li>info@mecantronic.com.ar</li>
                            </a>                            
                        </ul>
                    </div>
                </span>

                <div className="socialMedia">
                    <p className="footerTitle">Conectemos</p>
                    <p className="footerSubTitle">Seguinos en nuestras redes sociales.</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/mecantronic" target="_blank" rel="noreferrer">
                            <img src="../assets/icons/facebook.svg" alt="Facebook MECANTRONIC"/>
                        </a>
                        <a href="https://www.instagram.com/mecantronic/?hl=es" target="_blank" rel="noreferrer">
                            <img src="../assets/icons/instagram.svg" alt="Instagram MECANTRONIC" />
                        </a>
                        <a href="https://www.linkedin.com/company/11534294/admin/" target="_blank" rel="noreferrer">
                            <img src="../assets/icons/linkedin.svg" alt="Linkedin MECANTRONIC" />
                        </a>
                    </div>
                </div>
            </span>
            <span className="copyrights">
                <p>Copyright 2023 Todos los derechos reservados</p>
                <p>©Mecantronic 2023</p>
            </span>
        </div>
    </>
    )
}