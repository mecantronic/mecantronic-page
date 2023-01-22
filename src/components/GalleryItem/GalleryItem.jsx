import "./GalleryItem.css"

export const GalleryItem = ({image}) =>{
    return (
        <img className="imgGallery" src={`../assets/team/${image["src"]}`} alt={image["alt"]}/>
    )
}