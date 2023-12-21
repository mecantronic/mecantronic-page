import "./CardProductCompare.css"
import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const CardProductCompare = ({product, productoActual}) =>{
    const { t } = useTranslation();
    
    return (
        <div className={`CardProductCompare ${productoActual? "productoActual" :""}`}>
            <div>
                <img src={`../assets/products/${product["title"]}/1.png`}  key={`${product["title"]}1`} alt={`Impresora ${product["title"]}`}/>
            </div>
            <div className="details">
                <p className="title">{product["title"]}</p>
                {product["highlights"].map((highlight,index)=>{
                    return (
                    <>
                        <p className="subtitle" key={index}>{highlight["subtitle"]}</p>
                        <ul className="highlightList">
                        {highlight["highlight"].map((item,index)=>{    
                            return (                                                               
                                <li><p className="text">{item["it"]}</p></li>
                                )
                        })}
                        </ul>                        
                    </>
                    )
                })}


            </div>
            <Link to={`/products/${product["id"]}`}  className="cardProductCompareBtn"  onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})} >{t("vm")}</Link>
        </div>
    )
}