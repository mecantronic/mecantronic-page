import "./Partner.css"

export const Partner = ({partner}) => {
    return (
        <div className="partner">
            <div>
                <img src={`../assets/team/${partner["img"]}.png`} alt={partner["name"]}/>
            </div>
            <h3 className="name">{partner["name"]}</h3>
            <p className="job">{partner["job"]}</p>
            <a href={partner["linkedin"]} target="_blank" rel="noreferrer"><p className="linkedin">{partner["linkedin"]}</p></a>

        </div>
    )
}