import "./BannerMoreInfo.css"
import { ContactButton} from '../ContactButton/ContactButton'
export const BannerMoreInfo = () =>{
    return (
        <div className="bannerMoreInfo">
            <div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <ContactButton textoBoton={"Quiero mas info"}/>
            </div>
        </div>
    )
}