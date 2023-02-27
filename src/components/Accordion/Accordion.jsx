// @ts-nocheck
import { AccordionItem } from "../AccordionItem/AccordionItem"
import "./Accordion.css"
import React from "react";
export const Accordion = ({product}) => {
    let index =0;
    return (
        <div className='accordionDescription'>
            {product.map((seccion)=>{
                index++;
                const {title} = seccion;
                return <AccordionItem classname="accordionItem" data={seccion} index={`0${index}`} key={`${title} `}/>
            })}
        </div>
    )
}