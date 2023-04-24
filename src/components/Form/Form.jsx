// @ts-nocheck
import "./Form.css";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Form = ({ onClick }) => {
  // SETEAR CONSULTA POR DEFECTO DESDE PARAMETROS...
  //"servicios"
  //"Servicios-IOT"
  //"Servicios-IA"
  //"Servicios-3D"
  //"Impresora-Kubox"
  //"Impresora-Koron"

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [consulta, setConsulta] = useState("");
  // const [ciudad, setCiudad] = useState("");
  // const [message, setMessage] = useState("");
  const [estadoForm, setEstadoForm] = useState("");
  const form = useRef();
  //Form validation
  const initialValues = { name: "", lastName: "" };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consulta: "",
    ciudad: ""
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  }

  const handleErrors = (e, values) => {
    e.preventDefault();
    const errors = {};

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //profile
    if (!values.name) {
      errors.name = "Por favor, completa tu nombre";
    }
    if (!values.email) {
      errors.email = "Por favor, completa tu email";
    }  else if (!regex.test(values.email)) {
      errors.email = "El formato del email no es valido";
    }
    if (!values.message) {
      errors.message = "Por favor, contanos como podemos ayudarte";
    }
    if (!values.consulta) {
      errors.consulta = "Por favor, completa tu consulta";
    }
    if (!values.ciudad) {
      errors.ciudad = "Por favor, completa tu ciudad";
    }
    if (values.message.length < 8) {
      errors.message = "Por favor, completa el mensaje con al menos 8 caracteres";
    }
    if (values.message.length > 200) {
      errors.message = "Mensaje demasiado largo, debe contener menos de 200 caracteres";
    }
    setFormErrors(errors)

    if (values.message.length >= 8 && values.message.length < 200 && values.name && values.email && values.message && values.consulta && values.ciudad) {
      console.log("enviar form")
      submitForm(e)
    }
    return errors;
  };



  const submitForm = (e) => {
    //e.preventDefault();
    //podes probar con form.current si no es e.target   
   
    emailjs
      .sendForm(
        'service_mkzy70s',
        'template_mbzkiwk',
        form.current, // originalmente iba e.target
        "F9yJc6wjTrkVV7_ha"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    console.log("Enviando form con..",form.current.name.value,form.current.message.value,form.current.email.value,form.current.consulta.value,form.current.ciudad.value)    
    clearForm(form)
    renderAlert("¡Gracias por escribirnos, pronto estaremos respondiendo!");

  };

  function clearForm(form){
    setFormData({ name: "", email: "", message: "", consulta: "", ciudad: "" })
    form.current.name.value = "";
    form.current.message.value = "";
    form.current.email.value = "";
    form.current.consulta.value = "servicios";
    form.current.ciudad.value = "";
    onClick()
  }

  function renderAlert(msj) {
    toast.success(msj, {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="contactContainer">
      <div>
        <button onClick={onClick}>X</button>
      </div>
      <h2>Contacto</h2>
      <h3>Dejanos tu consulta</h3>
      <div className="formContainer">
        <div className="formularioContacto">
          <form
            className="formulario"
            ref={form}
            onSubmit={(e) => handleErrors(e, formData)}
          >
            <div className="labelFormContacto">
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Escribí tu nombre completo."
              
                onChange={handleChange}
              />

              <p className="errorForm">{formErrors.name}</p>
            </div>

            <div className="labelFormContacto">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Nombre@mail.com"
             
                onChange={handleChange}
              />
           
           <p className="errorForm">{formErrors.email}</p>
            </div>
            <div className="labelFormContacto">
              <label>Ciudad</label>
              <input
                type="ciudad"
                name="ciudad"
                placeholder="Ingresá la ciudad donde vivís."

                onChange={handleChange}
              />
             
             <p className="errorForm">{formErrors.ciudad}</p>
            </div>
            <div className="labelFormContacto">
              <label>Consulta</label>
              <select
                name="consulta"
            
                onChange={handleChange}
              >
                <option value="servicios">Servicio</option>
                <option value="Servicios-IOT">Servicios IOT</option>
                <option value="Servicios-IA">Servicios IA</option>
                <option value="Servicios-3D">Servicios 3D</option>
                <option value="Impresora-Kubox">Impresora Kubox</option>
                <option value="Impresora-Koron">Impresora Koron</option>
              </select>

             <p className="errorForm">{formErrors.consulta}</p>
            </div>
            <div className="labelFormContacto">
              <label>Mensaje </label>
              <textarea
                type="text"
                name="message"
                placeholder="Escribinos tu mensaje."             
                onChange={handleChange}
              ></textarea>
             
             <p className="errorForm">{formErrors.message}</p>
            </div>
            <input type="submit" class="botonEnvio" />
          </form>
        </div>
      </div>
      {/*   
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      */}
    </div>
  );
};
