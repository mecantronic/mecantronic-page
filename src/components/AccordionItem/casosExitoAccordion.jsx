// @ts-nocheck

import CasosExitoAccordionItem from "./casosExitoAccordionItem";
import './AccordionItem.css'

export const CasosExitoAccordion = ({serviceToShow})=>{    
    return (
        <div className="productDetails" id="casosDeExito">
          <div className="accordionContainer">
            <div className="titles">
              <p className="subtitle">{serviceToShow["subtitle"]}</p>
              <p className="detailsTitle">{serviceToShow["detailsTitle"]}</p>
            </div>
            <div className="expandContainer">
            <CasosExitoAccordionItem product={serviceToShow["accordion"]}/>
            </div>
          </div>

          <div className=" accordionImgContainer">
            <img  className="sobreimg" src={`../assets/${serviceToShow["exitoImg"]}`} alt="" id="sobreimg"/>            
            {serviceToShow["accordion"].map((item,index)=>{
                return(
                  <img  className="sobreimgAccordion sobreimgHidden" src={`../assets/servicios/${item["img"]}`} alt="" id={`panel${index+1}`}/>
                ) 
            })}
          </div>

          <div className="titlesMobile">
            <p className="subtitle">{serviceToShow["subtitle"]}</p>
            <p className="detailsTitle">{serviceToShow["detailsTitle"]}</p>
          </div>
        </div>
    )
}