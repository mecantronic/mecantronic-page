import "./BannerMoreInfo.css"
import React from "react"
import { ContactButton} from '../ContactButton/ContactButton'
export const BannerMoreInfo = () =>{
    return (
        <div className="bannerMoreInfo">
            <div>
                <h2>Lleva tu proyecto al siguiente nivel</h2>
                <ContactButton textoBoton={"Quiero mas info"}/>
            </div>
            <span >
            </span>
        </div>
    )
}