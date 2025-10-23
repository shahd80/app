import React from "react";
import avatarImg from "../../assets/avataaars.svg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="bg">
        <div className="image pt-5">
          <img className="pt-5" src={avatarImg} alt="Avatar" />
        </div>
        <h2 className="text-center pt-5 text-uppercase text-white text pb-3">
          start Framework
        </h2>
        <div className="d-flex justify-content-center align-items-center line">
          <div className="line-before"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line-after"></div>
        </div>
        <p className="text-center pt-4 text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
