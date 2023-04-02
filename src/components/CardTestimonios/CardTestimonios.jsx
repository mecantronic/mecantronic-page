import React from "react";
import './CardTestimonios.css'
export const CardTestimonios = ({ profileImg, user, rating, opinion, position }) => {

  return (
    <div className="card-testimonios ml-5">
      <div className="user-testimonios">
        <img src={profileImg} className="profilepicture mr-2"/>
        <div className="flex userinfo">
          <span className="user">{user}</span>
          <p className="position">{position}</p>
        </div>
      </div>
      <p className="opinion">{opinion}</p>
    </div>
  );
};
