import "./Partner.css"
import React from "react"

export const Partner = ({partner}) => {
    return (
        <div className="partner">

            <div>
                <img src={`../assets/team/team/${partner["img"]}.png`} alt={partner["name"]}/>
            </div>
            <div className="hoverLayer">                
                <a href={`mailto:${partner["email"]}`} target="_blank" rel="noreferrer"><img className="linkContactoPersonal" src="../assets/icons/logoEmail.png"/></a>

                <a href={partner["linkedin"]} target="_blank" rel="noreferrer"><img className="linkContactoPersonal" src="../assets/icons/logoLinkedin.png"/></a>

            </div>
            <h3 className="name">{partner["name"]}</h3>
            <p className="job">{partner["job"]}</p>
            

        </div>
    )
}