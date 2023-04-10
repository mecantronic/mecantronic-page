// @ts-nocheck
import "./Form.css";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Form = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      ciudad: "",
      consulta: "",
      mensaje: "",
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [consulta, setConsulta] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'form',
        e.target,
        "BhpwiUv3mNWqRrLhb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );

    renderAlert("¡Gracias por escribirnos, pronto estaremos respondiendo!");
  };

  function renderAlert(msj) {
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
            onSubmit={(e)=>handleSubmit(onSubmit(e))}
          >
            <div className="labelFormContacto">
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Escribí tu nombre completo."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="errorForm">Este campo es obligatorio..</p>
              )}
            </div>

            <div className="labelFormContacto">
              <label>Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true, minLength: 8 })}
                placeholder="Nombre@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorForm">Este campo es obligatorio..</p>
              )}
              {errors.email && errors.email.type === "minLength" && (
                <p className="errorForm">Al menos necesitamos 8 caracteres..</p>
              )}
            </div>
            <div className="labelFormContacto">
              <label>Ciudad</label>
              <input
                type="ciudad"
                name="ciudad"
                {...register("ciudad", { required: true, minLength: 8 })}
                placeholder="Ingresá la ciudad donde vivís."
              />
              {errors.ciudad && errors.ciudad.type === "required" && (
                <p className="errorForm">Este campo es obligatorio..</p>
              )}
              {errors.ciudad && errors.ciudad.type === "minLength" && (
                <p className="errorForm">Al menos necesitamos 4 caracteres..</p>
              )}
            </div>
            <div className="labelFormContacto">
              <label>Consulta</label>
              <select {...register("consulta")} name="consulta" value={consulta}
                onChange={(e) => setConsulta(e.target.value)}>
                <option value="servicios">Servicio</option>
                <option value="Servicios-IOT">Servicios IOT</option>
                <option value="Servicios-IA">Servicios IA</option>
                <option value="Servicios-3D">Servicios 3D</option>
                <option value="Impresora-Kubox">Impresora Kubox</option>
                <option value="Impresora-Koron">Impresora Koron</option>
              </select>
            </div>
            <div className="labelFormContacto">
              <label>Mensaje </label>
              <textarea
                type="text"
                name="mensaje"
                {...register("mensaje", {
                  required: true,
                  minLength: 8,
                  maxLength: 200,
                })}
                placeholder="Escribinos tu mensaje."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.mensaje && errors.mensaje.type === "required" && (
                <p className="errorForm">
                  Por favor cuentanos en que podemos ayudarte!
                </p>
              )}
              {errors.mensaje && errors.mensaje.type === "minLength" && (
                <p className="errorForm">Al menos necesitamos 8 caracteres..</p>
              )}
              {errors.mensaje && errors.mensaje.type === "maxLength" && (
                <p className="errorForm">
                  Mensaje demasiado largo, mantente en los 200 caracteres por
                  favor
                </p>
              )}
            </div>
            <input type="submit" class="botonEnvio" />
          </form>
        </div>
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
        pauseOnHover
      />
    </div>
  );
};
