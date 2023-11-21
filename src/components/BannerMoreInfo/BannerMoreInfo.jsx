import "./BannerMoreInfo.css"
import React from "react"
import { ContactButton} from '../ContactButton/ContactButton'
import { useTranslation } from "react-i18next"
export const BannerMoreInfo = () =>{
    const  {t} = useTranslation()
    return (
        <div className="bannerMoreInfo">
            <div>
                <h2>{t("text5.1")}</h2>
                <ContactButton textoBoton={t("text5")}/>
            </div>
            <span >
            </span>
        </div>
    )
}