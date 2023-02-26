import "./ContactButton.css"
import React, {useEffect, useState} from "react"
import { Modal } from "flowbite-react"
import { Form } from "../Form/Form"

export const ContactButton = ({textoBoton}) =>{

    const [modal, setModal] = useState(false);

    window.addEventListener("resize", resize);

    function modalClick(){
        modal? setModal(false) : setModal(true);    
    }   
    function resize(){
        if(window.screen.width>1200){
            document.getElementById("modalContacto")?.firstElementChild?.classList.remove("max-w-2xl")
            document.getElementById("modalContacto")?.firstElementChild?.classList.add("max-w-5xl")
        } else{
            document.getElementById("modalContacto")?.firstElementChild?.classList.remove("max-w-5xl")
            document.getElementById("modalContacto")?.firstElementChild?.classList.add("max-w-2xl")
        }
    }
    useEffect(()=>{
        resize()
    },[modal])

    return (
        <>
            <button className="contact-btn" onClick={modalClick}>  
                <p>{textoBoton}</p>
            </button>
            <Modal show={modal} onClose={modalClick} id="modalContacto" dismissible={true}>
                <div id="modalFormConteiner">
                    <Form onClick={modalClick}/>
                </div>
            </Modal>
        </>
    )
}
