import React, { useState } from "react";
import { Servicio3D } from "./Servicio3D";
import { ServicioIA } from "./ServicioIA";
import { ServicioIOT } from "./ServicioIOT";

import { useParams } from "react-router-dom"
import { set } from "react-hook-form";

export const Servicios = () => {
  const {servicio} =useParams();

  const [iot, setIot] = useState(true);
  const [ia, setIa] = useState(false);
  const [impresoras, setImpresoras] = useState(false);

/*  
 switch (servicio){ 
    case "Ia":
      setIa(true);
      break;
    case "3D":
      setImpresoras(true);
      break;
    default:
      setIot(true);
  }

  */

  return (
    <>
      {iot && (
        <>
          {/* IOT */}
          <ServicioIOT />
        </>
      )}

      {ia && (
        <>
          {" "}
          {/* IA */}
          <ServicioIA />
        </>
      )}

      {impresoras && (
        <>
          {" "}
          {/* 3D */}
          <Servicio3D />
        </>
      )}
    </>
  );
};
