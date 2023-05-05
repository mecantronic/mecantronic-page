import "./ContactButton.css"
import React, {useState} from "react"
import { Modal } from "flowbite-react"
import { Form } from "../Form/Form"

export const ContactButton = ({textoBoton}) =>{

    const [modal, setModal] = useState(false);    
    
    function modalClick(){
        modal? setModal(false) : setModal(true);    
    }  
    return (
        <>
            <button className="contact-btn" onClick={modalClick}>  
                <p>{textoBoton}</p>
            </button>
            <Modal show={modal} onClose={modalClick}  id="modalContacto" dismissible={true}>
                <div id="modalFormConteiner">
                    <Form onClick={modalClick}/>
                </div>
            </Modal>
        </>
    )
}
