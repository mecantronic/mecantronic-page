import "./BannerProductsStrength.css"
import React from "react";

export const BannerProductsStrength= () =>{
  return (
      <div className="strengths">
              <div className="bannerProductsStrength">
                <div className="strengths-card">
                  <div className="strengths-logo" >
                    <img src="../assets/products/icons/soporte-tecnico.png"  alt="icon"/>
                  </div>
                  <p className="strengths-card-title  mt-5 mb-5" >Soporte técnico</p>
                  <p className="strengths-card-paragraph mb-10" >Te brindamos soporte técnico durante 1 año.</p>
                </div> 

                <div className="strengths-card">
                  <div className="strengths-logo" >
                    <img src="../assets/products/icons/instalacion.png"  alt="icon"/>
                  </div>
                  <p className="strengths-card-title  mt-5 mb-5" >Instalación</p>
                  <p className="strengths-card-paragraph mb-10" >Instalación y configuración para que solo tengas que disfrutarla.</p>
                </div>

                <div className="strengths-card">
                  <div className="strengths-logo" >
                    <img src="../assets/products/icons/matenimiento.png"  alt="icon"/>
                  </div>
                  <p className="strengths-card-title  mt-5 mb-5" >Mantenimiento</p>
                  <p className="strengths-card-paragraph mb-10" >Nos ocupamos del mantenimiento mensual.</p>
                </div>

                <div className="strengths-card">
                  <div className="strengths-logo" >
                    <img src="../assets/products/icons/capacitacion.png"  alt="icon"/>
                  </div>
                  <p className="strengths-card-title  mt-5 mb-5" >Capacitación</p>
                  <p className="strengths-card-paragraph mb-10" >Capacitamos a tu equipo para sacarle el máximo provecho a tu impresora.</p>
                </div>
              </div>
      </div>
  )

}