import "./CardProductsContainer.css"
import { Slider } from "../Slider/Slider";

export const CardProductsContainer = ({products, type}) => {
    return (
        <div className="cardProducts">
            <h3>Comparativa</h3>
            <h2>Elegí la que mas se adecue a tus necesidades</h2>
            <Slider elementos= {products} type={type}/>
        </div>
    )
}