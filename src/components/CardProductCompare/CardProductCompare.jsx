import "./CardProductCompare.css"
import { Link } from "react-router-dom"

export const CardProductCompare = ({product}) =>{
    
    return (
        <div className="CardProductCompare">
            <div>
                <img src={`../assets/products/${product["title"]}/1.png`}  key={`${product["title"]}1`} alt={`Impresora ${product["title"]}`}/>
            </div>
            <div className="details">
                <p className="title">{product["title"]}</p>
                {product["highlights"].map((highlight,index)=>{
                    return (
                    <>
                        <p className="subtitle">{highlight["subtitle"]}</p>
                        <p className="text">{highlight["highlight"]}</p>
                    </>
                    )
                })}
            </div>
            <Link to={`/products/${product["id"]}`}  className="cardProductCompareBtn">Ver más</Link>
        </div>
    )
}