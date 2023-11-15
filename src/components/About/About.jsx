import "./About.css"
import React from "react"
import { useTranslation } from "react-i18next"

export const About = () =>{
    const { t } = useTranslation()
    return (
        <>
        <div className="about">
            <div className="aboutSection" >
                <img src="./assets/team/about-1.png" alt="Equipo Mecantronic" className="img1"/>
                <div className="textAbout">
                    <p className="title">{t("proposal_born")}</p>
                    <p className="text">{t("text")}</p>

                    <a className="link" href="https://infiniemlabs.com.ar/" target="_blank" rel="noreferrer"><p>{t("text1")}<img src={`./assets/icons/arrow-right.png`} alt="arrow-right"/></p></a>
                </div>
            </div>
            <div className="aboutSection" >
                <img src="./assets/team/about-2.png" alt="Equipo Mecantronic"className="img2"/>
                <div className="textAbout">
                    <p className="title">{t("text2")}</p>
                    <p className="text">{t("text2.1")}</p>
                </div>
            </div>
            <div className="aboutSection" >
                <img src="./assets/team/about-3.png" alt="Equipo Mecantronic"className="img3"/>
                <div className="textAbout">
                    <p className="title">{t("text3")}</p>
                    <p className="text">{t("text3.1")}</p> 

                    <p className="text">{t("text3.1.5")}</p>

                    <a className="link" href="https://entender.com.ar/" target="_blank" rel="noreferrer"><p>{t("text3.2")}<img src={`./assets/icons/arrow-right.png`} alt="arrow-right"/></p></a>
                </div>
            </div>
        </div>
        </>
    )
}