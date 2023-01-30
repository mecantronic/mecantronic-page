import "./About.css"

export const About = ({data}) =>{
    return (
        <div className="about">
            {data[0]["about"].map((section,index)=>{
                return(
                <div className="aboutSection" key={index}>
                    <img src={`./assets/team/${section["img"]}`} alt="Equipo Mecantronic"/>
                    <div className="textAbout">
                        {/*<p className="title">{data[0]["title"]}</p> */}
                        <p className="title">{section["subtitle"]}</p>
                        <p className="text">{section["text"]}
                        </p>
                    </div>
                </div>
                )
            })}
        </div>
    )
}