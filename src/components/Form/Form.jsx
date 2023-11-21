// @ts-nocheck
import "./Form.css";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Form = ({ onClick }) => {
  const { t } = useTranslation();
  // const [estadoForm, setEstadoForm] = useState("");
  const form = useRef();
  //Form validation
  // const initialValues = { name: "", lastName: "" };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consulta: "",
    ciudad: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleErrors = (e, values) => {
    e.preventDefault();
    const errors = {};

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //profile
    if (!values.name) {
      errors.name = t("ferror_message_name");
    }
    if (!values.email) {
      errors.email = t("ferror_message_email");
    } else if (!regex.test(values.email)) {
      errors.email = t("ferror_email_invalid");
    }
    if (!values.message) {
      errors.message = t("ferror_message_empty_value");
    }
    if (!values.consulta) {
      errors.consulta = t("ferror_message_complete_consult");
    }
    if (!values.ciudad) {
      errors.ciudad = t("ferror_message_city");
    }
    if (values.message.length < 8) {
      errors.message = t("ferror_message_8characters");
    }
    if (values.message.length > 200) {
      errors.message = t("ferror_message_long");
    }
    setFormErrors(errors);

    if (
      values.message.length >= 8 &&
      values.message.length < 200 &&
      values.name &&
      values.email &&
      values.message &&
      values.consulta &&
      values.ciudad
    ) {
      console.log("enviar form");
      submitForm(e);
    }
    return errors;
  };

  const submitForm = (e) => {
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;
    const consulta = form.current.consulta.value;
    const ciudad = form.current.ciudad.value;

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { name, email, message, consulta, ciudad },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearForm(form);
    renderAlert("¡Gracias por escribirnos, pronto estaremos respondiendo!");
  };

  function clearForm(form) {
    setFormData({ name: "", email: "", message: "", consulta: "", ciudad: "" });
    form.current.name.value = "";
    form.current.message.value = "";
    form.current.email.value = "";
    form.current.consulta.value = "servicios";
    form.current.ciudad.value = "";
    onClick && onClick();
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
      {onClick ? (
        <div>
          <button onClick={onClick}>X</button>
        </div>
      ) : (
        <></>
      )}
      <h2>{t("fcontact")}</h2>
      <h3>{t("f2consulta")}</h3>
      <div className="formContainer">
        <div className="formularioContacto">
          <form
            className="formulario"
            ref={form}
            onSubmit={(e) => handleErrors(e, formData)}
          >
            <div className="labelFormContacto">
              <label>{t("fname")}</label>
              <input
                type="text"
                name="name"
                placeholder={t("fname_placeholder")}
                onChange={handleChange}
              />

              <p className="errorForm">{formErrors.name}</p>
            </div>

            <div className="labelFormContacto">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder={t("femail_placeholder")}
                onChange={handleChange}
              />

              <p className="errorForm">{formErrors.email}</p>
            </div>
            <div className="labelFormContacto">
              <label>{t("fciudad")}</label>
              <input
                type="ciudad"
                name="ciudad"
                placeholder={t("fciudad_placeholder")}
                onChange={handleChange}
              />

              <p className="errorForm">{formErrors.ciudad}</p>
            </div>
            <div className="labelFormContacto">
              <label>{t("fconsulta")}</label>
              <select name="consulta" onChange={handleChange}>
                <option value="servicios">{t("fconsulta_placeholder")}</option>
                <option value="Servicios-IOT">{t("fservicioiot")}</option>
                <option value="Servicios-IA">{t("fservicioia")}</option>
                <option value="Servicios-3D">{t("fservicio3d")}</option>
                <option value="Impresora-Kubox">Impresora Kubox</option>
                <option value="Impresora-Koron">Impresora Koron</option>
              </select>

              <p className="errorForm">{formErrors.consulta}</p>
            </div>
            <div className="labelFormContacto">
              <label>{t("fmessage")} </label>
              <textarea
                type="text"
                name="message"
                placeholder={t("fmessage_placeholder")}
                onChange={handleChange}
              ></textarea>

              <p className="errorForm">{formErrors.message}</p>
            </div>
            <input type="submit" class="botonEnvio" />
          </form>
        </div>
      </div>
    </div>
  );
};
