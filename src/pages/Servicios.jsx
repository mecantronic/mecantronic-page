import React, { useState } from "react";
import { Servicio3D } from "./Servicio3D";
import { ServicioIA } from "./ServicioIA";
import { ServicioIOT } from "./ServicioIOT";

export const Servicios = () => {
  const [iot, setIot] = useState(true);
  const [ia, setIa] = useState(false);
  const [impresoras, setImpresoras] = useState(false);
  
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

      {ia && (
        <>
          {" "}
          {/* 3D */}
          <Servicio3D />
        </>
      )}
    </>
  );
};
