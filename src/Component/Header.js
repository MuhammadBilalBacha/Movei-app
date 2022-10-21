import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand Watch ms-5" to="#">
            Watch Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-3 me-5 links" to="/watched">
                  Watched
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 me-5 links" to="/watchlist">
                  Watched List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 links" to="/add">
                  + Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
