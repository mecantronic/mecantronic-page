import React from "react";
import './CardTestimonios.css'
export const CardTestimonios = ({ profileImg, user, job, opinion }) => {

  return (
    <div className="card-testimonios ml-5">
      <div className="user-testimonios">
        <img src={profileImg} alt="user-pic" className="profilepicture mr-2"/>
        <div className="flex">
          <span>{user}</span>
          <p>{job}</p>
        </div>
      </div>
      <p className="opinion">{opinion}</p>
    </div>
  );
};
