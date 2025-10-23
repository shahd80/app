import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav pt-4 pb-4 ps-5 pe-5">
        <div className="container">
          <Link className="navbar-brand text-uppercase" to="/">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/About">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/portfolio">
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
