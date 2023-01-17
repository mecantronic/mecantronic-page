import { AccordionItem } from "../AccordionItem/AccordionItem"
import { kuboxSeccion , koronSeccion } from "../ProductsMock";

export const Accordion = ({product}) => {
    let listSeccions = product==="kubox"? kuboxSeccion : koronSeccion;
    return (
        <div className='accordionDescription '>
            {listSeccions.map((seccion)=>{
                const {title} = seccion;
                return <AccordionItem classname="accordionItem" data={seccion} key={`${title} `}/>
            })}
        </div>
    )
}