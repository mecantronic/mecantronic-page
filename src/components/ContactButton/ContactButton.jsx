import "./ContactButton.css"
import React, {useState} from "react"
import { Modal } from "flowbite-react"
import { Form } from "../Form/Form"

export const ContactButton = ({textoBoton}) =>{
    let textoBtn = textoBoton? textoBoton : "Contacto"
    const [modal, setModal] = useState(true);

    function modalClick(){
        modal? setModal(false) : setModal(true)
    }
    return (
        <button className="contact-btn" onClick={modalClick}>  
            {textoBtn}
            <Modal show={modal} onClose={modalClick} position={"center"} dismissible={true}>
                <div id="modalFormConteiner">
                    <Form/>
                </div>
            </Modal>
        </button>
    )
}
