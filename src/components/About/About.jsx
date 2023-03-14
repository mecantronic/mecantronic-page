import "./About.css"
import React from "react"

export const About = ({data}) =>{
    return (
        <>
        <div className="about">
            {data[0]["about"].map((section,index)=>{
                return(
                <div className="aboutSection" key={index}>
                    <img src={`./assets/team/${section["img"]}`} alt="Equipo Mecantronic"/>
                    <div className="textAbout">
                        <p className="title">{section["subtitle"]}</p>
                        <p className="text">{section["text"]}</p>
                        {section["boton"] && <a className="link" href={section["link"]} target="_blank" rel="noreferrer"><p>{section["boton"]}<img src={`./assets/icons/arrow-right.png`} alt="arrow-right"/></p></a> }
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}