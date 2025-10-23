import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  // Create state for each input
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <>
      <div className="form">
        <div className="container text-center">
          <h2 className="pt-5 text-uppercase pb-3">contact section</h2>

          <div className="d-flex justify-content-center align-items-center line-contact mb-5">
            <div className="line-before-contact"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line-after-contact"></div>
          </div>

          <div className="d-flex flex-column align-items-center">
            <div className="text-start w-75 mx-auto color">
              {userName && <p>Username:</p>}
            </div>
            <input
              className="form-control w-75 border-white mb-5 mx-auto light"
              type="text"
              placeholder="userName"
              aria-label="userName example"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <div className="text-start w-75 mx-auto color">
              {userAge && <p>UserAge:</p>}
            </div>
            <input
              className="form-control w-75 border-white mb-5 mx-auto light"
              type="text"
              placeholder="userAge"
              aria-label="userAge example"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />

            <div className="text-start w-75 mx-auto color">
              {userEmail && <p>UserEmail:</p>}
            </div>
            <input
              className="form-control w-75 border-white mb-5 mx-auto light "
              type="email"
              placeholder="userEmail"
              aria-label="UserEmail example"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <div className="text-start w-75 mx-auto color">
              {userPassword && <p>UserPassword: </p>}
            </div>
            <input
              className="form-control w-75 border-white mb-5 mx-auto light "
              type="password"
              placeholder="userPassword"
              aria-label="UserPassword example"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className="w-75 mx-auto d-flex justify-content-start mt-3">
            <button className="btn" type="submit">
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
