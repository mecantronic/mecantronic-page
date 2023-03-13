import "./Form.css"
import React from "react";
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = ({onClick}) =>{
    const { register, handleSubmit, formState: { errors } }  = useForm({
        defaultValues:{
            name: "",
            email:"",
            ciudad:"",
            consulta : "servicios",
            mensaje:""
        }
    });
    const onSubmit=(data)=>{
        console.log(data);
        renderAlert("¡Gracias por escribirnos, pronto estaremos respondiendo!")
    }

    function renderAlert(msj){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
    }

    return (
        <div className="contactContainer">
            <div><button onClick={onClick}>X</button></div>
            <h2>Contacto</h2>
            <h3>Dejanos tu consulta</h3>
            <div className="formContainer">
                <div className="contacData">
                    <div className="contacDataContainer">
                        <h3>Mecantronic</h3>
                        <div>
                            <p className="title">Oficinas</p>
                            <p>Cabildo 1111, Buenos Aires</p>
                        </div>
                        <h4 className="title">nombre@gmail.com</h4>
                        <h4 className="telefono">+54 <p>91123132</p></h4>
                        <div className="icons">
                            <div>
                                <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                    <img src="../assets/icons/facebook.svg" alt="Facebook MECANTRONIC"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                    <img src="../assets/icons/instagram.svg" alt="Instagram MECANTRONIC" />
                                </a>
                            </div>
                            <div>
                                <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                    <img src="../assets/icons/twitter.svg" alt="Twitter MECANTRONIC" />
                                </a>
                            </div>
                            <div>
                                <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                    <img src="../assets/icons/linkedin.svg" alt="Linkedin MECANTRONIC" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="formularioContacto">
                    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="labelFormContacto">
                            <label >Nombre</label>
                            <input type="text" name="name" {...register("name", { required: true})} />
                            {errors.name && <p className="errorForm">Este campo es obligatorio..</p>}
                        </div>

                        <div className="labelFormContacto">
                            <label >Email</label>
                            <input type="email" name="email" {...register("email", { required: true, minLength:8})}/>
                            {errors.email && errors.email.type ==="required" && <p className="errorForm">Este campo es obligatorio..</p>}
                            {errors.email && errors.email.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
                        </div>
                        <div className="labelFormContacto">
                            <label >Ciudad</label>
                            <input type="ciudad" name="ciudad" {...register("ciudad", { required: true, minLength:8 })}/>
                            {errors.ciudad && errors.ciudad.type ==="required" && <p className="errorForm">Este campo es obligatorio..</p>}
                            {errors.ciudad && errors.ciudad.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 4 caracteres..</p>)}
                        </div>
                        <div className="labelFormContacto">
                            <label >Consulta</label>
                            <select {...register("consulta")}>
                                <option value="servicios">Servicios</option>
                                <option value="productos">Productos?</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                                <option value="d">d</option>
                            </select>
                        </div>
                        <div className="labelFormContacto">
                            <label >Mensaje </label>
                            <textarea type="text" name="mensaje" {...register("mensaje", { required: true, minLength:8, maxLength:200 })} placeholder="..."></textarea>
                            {errors.mensaje && errors.mensaje.type ==="required" && <p className="errorForm">Por favor cuentanos en que podemos ayudarte!</p>}
                            {errors.mensaje && errors.mensaje.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
                            {errors.mensaje && errors.mensaje.type ==="maxLength" && <p className="errorForm">Mensaje demasiado largo, mantente en los 200 caracteres por favor</p>}
                            
                        </div>
                        <input type="submit" class="botonEnvio"/>
                    </form>
                </div>
                {/* CONSULTAR SI ESTO SERA BORRADO DE FORMA DEFINITIVA
                
                
                 <div className="logosContacto">
                    <div className="icons">
                        <div>
                            <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                <img src="../assets/icons/facebook.svg" alt="Facebook MECANTRONIC"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                <img src="../assets/icons/instagram.svg" alt="Instagram MECANTRONIC" />
                            </a>
                        </div>
                        <div>
                            <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                <img src="../assets/icons/twitter.svg" alt="Twitter MECANTRONIC" />
                            </a>
                        </div>
                        <div>
                            <a href="https://mecantronic.com.ar/" target="_blank" rel="noreferrer">
                                <img src="../assets/icons/linkedin.svg" alt="Linkedin MECANTRONIC" />
                            </a>
                        </div>
                    </div>
                </div>
                */}
            </div>
            <ToastContainer
                    position="bottom-left"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
            pauseOnHover/>
        </div>
    )
}