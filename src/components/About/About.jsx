import "./About.css"

export const About = ({data}) =>{
    return (
        <div className="about">
            <img src="./assets/about-us.jpg" alt="Equipo Mecantronic"/>
            <div className="textAbout">
                <p className="title">{data[0]["title"]}</p>
                <p className="subtitle">{data[0]["subtitle"]}</p>
                <p className="text">{data[0]["text"]}
                </p>
            </div>
        </div>
    )
}