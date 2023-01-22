import { AccordionItem } from "../AccordionItem/AccordionItem"
export const Accordion = ({product}) => {
    return (
        <div className='accordionDescription'>
            {product.map((seccion)=>{
                const {title} = seccion;
                return <AccordionItem classname="accordionItem" data={seccion} key={`${title} `}/>
            })}
        </div>
    )
}