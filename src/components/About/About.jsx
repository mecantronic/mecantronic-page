import "./About.css"
import React from "react"

export const About = () =>{
    return (
        <>
        <div className="about">
            <div className="aboutSection" >
                <img src="./assets/team/about-1.png" alt="Equipo Mecantronic" className="img1"/>
                <div className="textAbout">
                    <p className="title">Una propuesta que nace en un laboratorio universitario.</p>
                    <p className="text">"El camino comienza con un club de jóvenes profesionales y estudiantes, que con el tiempo evolucionó y se transformó en un laboratorio de investigación y desarrollo. Luego, el laboratorio sentó las bases de lo que hoy es nuestra empresa. Este recorrido nos confiere una identidad única y nos permite contar con un semillero de formación continua. El vínculo entre la industria, la academia, el sector privado y el sector público, se combina con la investigación científica y el desarrollo tecnológico. Así, se crea un círculo virtuoso en el que continuamente mejoramos nuestras prácticas y se retroalimentan las facetas involucradas de manera constante."</p>

                    <a className="link" href="https://infiniemlabs.com.ar/" target="_blank" rel="noreferrer"><p>Conocer Infiniem<img src={`./assets/icons/arrow-right.png`} alt="arrow-right"/></p></a>
                </div>
            </div>
            <div className="aboutSection" >
                <img src="./assets/team/about-2.png" alt="Equipo Mecantronic"className="img2"/>
                <div className="textAbout">
                    <p className="title">Sentido de pertenencia e impacto genuino.</p>
                    <p className="text">Nuestra experiencia y formación nos permite ofrecer una propuesta comercial especialmente enfocada en proyectos con impacto social y/o relacionados con la sustentabilidad. En Mecantronic, llevamos en nuestras raíces un fuerte espíritu emprendedor, el mismo con el que comenzamos con un club en el fondo de un aula. Este espíritu, junto con nuestra pasión por la docencia y amor por el conocimiento transformado en tecnología al servicio de la gente, nos da un gran sentido de responsabilidad social empresarial.</p>
                </div>
            </div>
            <div className="aboutSection" >
                <img src="./assets/team/about-3.png" alt="Equipo Mecantronic"className="img3"/>
                <div className="textAbout">
                    <p className="title">Para no dejar de aprender, no dejamos de enseñar.</p>
                    <p className="text">"Al servicio del docente para enseñar y a favor de los alumnos para potenciar sus habilidades digitales.</p> 

                    <p className="text">Todo en Mecantronic está teñido de docencia. La información se comparte, las habilidades se enseñan para que la mejora individual sume a la mejora del grupo. Tal es así que contamos con una división orientada a proyectos educativos tecnológicos, donde diseñamos propuestas para todos los niveles educativos en conjunto con el estado y otras entidades privadas.</p>

                    <a className="link" href="https://infiniemlabs.com.ar/" target="_blank" rel="noreferrer"><p>Conocer Entender<img src={`./assets/icons/arrow-right.png`} alt="arrow-right"/></p></a>
                </div>
            </div>
        </div>
        </>
    )
}