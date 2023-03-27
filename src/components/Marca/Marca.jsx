import React from "react";
import "./Marca.css";
import rocket from "../assets/Rocket.svg";
import puzzle from "../assets/Puzzle.svg";
import dart from "../assets/Dart.svg";

export const Marca = () => {
  return (
    <div className="w-full flex marca">
      <div className="w-1/3 h-full marca-section">
        <div>
        <div className="marca-icon">
            <img src={rocket} alt="icon" />
          </div>
          <p>Tecnología de vanguardia</p>
          <p>
          Ofrecemos una propuesta comercial que aprovecha las virtudes de las tecnologías más avanzadas.
          </p>
        </div>
      </div>

      <div className="w-1/3 h-full marca-section">
        <div>
          <div className="marca-icon">
            <img src={puzzle} alt="icon" />
          </div>

          <p>Soluciones adaptables</p>
          <p>Creamos un ecosistema centrado en las necesidades genuinas de nuestros clientes.</p>
        </div>
      </div>

      <div className="w-1/3 h-full marca-section">
        <div>
          <div className="marca-icon">
              <img src={dart} alt="icon" />
          </div>
          <p>Impacto   social</p>
          <p>Nos enfocamos en proyectos que generen impacto social o contribuyan con procesos sustentables.</p>
        </div>
      </div>
    </div>
  );
};
