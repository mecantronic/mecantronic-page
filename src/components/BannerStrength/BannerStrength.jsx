import "./BannerStrength.css"
import React from "react";

export const BannerStrength= ({data}) =>{
  const path = window.location.pathname;
  let addClass ="";
  path==="/aboutUs"? addClass="aboutUsStrengths" : addClass=""
  return (
      <div className="strengths">
            <div className="">
              <div className={`strengths-cards ${addClass}`}>
              {data.map((strength,index)=>{ 
                return (
                  <>
                    <div className="strengths-card" key={index}>
                      <div className="strengths-logo" >
                        <img src="../assets/staricon.svg"  alt="icon" />
                      </div>
                      <p className="strengths-card-title  mt-5 mb-5" >{strength["title"]}</p>
                      <p className="strengths-card-paragraph mb-10" >{strength["strength"]}</p>
                    </div>
                  </>
                )
              })}   
              </div>
            </div>
      </div>
  )

}