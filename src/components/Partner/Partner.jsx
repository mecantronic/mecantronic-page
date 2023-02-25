import "./Partner.css"
import React from "react"

export const Partner = ({partner}) => {
    return (
        <div className="partner">
            <div>
                <img src={`../assets/team/${partner["img"]}.png`} alt={partner["name"]}/>
            </div>
            <h3 className="name">{partner["name"]}</h3>
            <p className="job">{partner["job"]}</p>
            
            <a href={partner["linkedin"]} target="_blank" rel="noreferrer"><img className="logoLinkedin" src="../assets/icons/linkedin.svg"/></a>

        </div>
    )
}