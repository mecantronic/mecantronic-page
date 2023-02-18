import "./Footer.css"
import React from "react"
export const Footer = ()=>{
    return (
    <>
        <div className="footer bg-black text-white flex flex-col px-6 pt-10">
            <span>
                <div className="brand">
                    <div>
                        <img src="../assets/mecantronic.svg" alt="MECANTRONIC" />
                    </div>
                    <p>Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus</p>
                </div>

                <span className="flex justify-around mt-8">
                    <div className="aboutUs">
                        <p className="footerTitle">Sobre nosotros</p>
                        <ul>
                            <li>Quienes somos</li>
                            <li>Equipo</li>
                            <li>Equipo</li>
                        </ul>
                    </div>

                    <div className="contacData">
                        <p className="footerTitle">Contacto</p>
                        <ul>
                            <li>Ubicacion de la empresa</li>
                            <li>Numero de contacto</li>
                            <li>Email de Contacto</li>
                            <li> Alguna información adicional</li>
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
                <p>©Mec&Tronic 2023</p>
            </span>
        </div>
    </>
    )
}