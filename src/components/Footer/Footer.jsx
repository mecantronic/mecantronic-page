import "./Footer.css"

export const Footer = ()=>{
    return (
    <>
        <div className="footer bg-black text-white flex flex-col px-6 pt-10">
            <span className="flex">
                <div className="brand w-5/12">
                    <div>
                        <img src="../assets/mecantronic.svg" alt="MECANTRONIC" />
                    </div>
                    <p>Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga ut consequatur quis est repudiandae accusamus</p>
                </div>

                <div className="aboutUs">
                    <p className="footerTitle">Sobre nosotros</p>
                    <ul>
                        <li>Quienes somos</li>
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

                <div className="socialMedia">
                    <p className="footerTitle">Conectemos</p>
                    <p>Seguinos en nuestras redes sociales.</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/mecantronic" target="_blank" rel="noreferrer">
                            <img src="../assets/icons/facebook.svg" alt="Facebook MECANTRONIC"/>
                        </a>
                        <a href="https://www.instagram.com/mecantronic/?hl=es" target="_blank" rel="noreferrer">
                            <img src="../assets/icons/instagram.svg" alt="Instagram MECANTRONIC" />
                        </a>
                        <a className="bg-yellow-500" href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                            <img src="../assets/icons/twitter.svg" alt="Twitter MECANTRONIC" />
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