import React from "react";
import "./Marca.css";

export const Marca = () => {
  return (
    <div className="w-full flex marca">
      <div className="w-1/3 h-full marca-section">
        <div>
        <div className="marca-icon">
            <img src="./assets/staricon.svg" alt="icon" />
          </div>
          <p>Tecnología de vanguardia</p>
          <p>
          Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga. Lorem ipsum
          </p>
        </div>
      </div>

      <div className="w-1/3 h-full marca-section">
        <div>
          <div className="marca-icon">
            <img src="./assets/staricon.svg" alt="icon" />
          </div>

          <p>Soluciones adaptables</p>
          <p>Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem in nemo fuga.</p>
        </div>
      </div>

      <div className="w-1/3 h-full marca-section">
        <div>
          <div className="marca-icon">
              <img src="./assets/staricon.svg" alt="icon" />
          </div>
          <p>Impacto   social</p>
          <p>Ofrecemos una propuesta comercial enfocada en proyectos con impacto social y/o sustentabilidad.</p>
        </div>
      </div>
    </div>
  );
};
