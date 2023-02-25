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
                        {section["boton"] && <a className="link" href={section["link"]} target="_blank" rel="noreferrer"><p>{section["boton"]}</p></a>}
                    </div>
                </div>
                )
            })}
        </div>
        <section className="nuestroEquipo">
            <p>Nuestro equipo</p>
            <div>  
                <img src="../assets/team/about-2.png" alt="Fijador medicinal impreso en 3D"/>
                <img src="../assets/about-us.jpg" alt="Equipo de mecantronic"/>
            </div>
        </section>
        </>
    )
}