import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import './CardTestimonios.css'
export const CardTestimonios = ({ profileImg, user, rating, opinion }) => {
  return (
    <div className="card-testimonios ml-5">
      <div className="flex user-testimonios">
        <img src={profileImg} alt="user-pic" className="profilepicture mr-2"/>
        <span>{user}</span>
      </div>

      <div className="flex rating">
        <div>
          <HiOutlineStar />
        </div>
        <div>
          <HiOutlineStar />
        </div>
        <div>
          <HiOutlineStar />
        </div>
        <div>
          <HiOutlineStar />
        </div>
        <div>
          <HiOutlineStar />
        </div>
        <div className="ml-2">{rating}</div>
      </div>
      <p className="opinion">{opinion}</p>
    </div>
  );
};
