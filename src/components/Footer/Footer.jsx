import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-4 inner text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-4 inner text-center">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-facebook-f mx-2 pt-2 icon"></i>
              <i className="fa-brands fa-twitter mx-2 pt-2 icon"></i>
              <i className="fa-brands fa-linkedin-in mx-2 pt-2 icon"></i>
              <i className="fa-solid fa-globe mx-2 pt-2 icon"></i>
            </div>
          </div>

          <div className="col-4 inner text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="copyright text-center p-4">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
