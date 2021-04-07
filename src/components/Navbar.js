import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Natalia Carvajal <i class="far fa-heart"></i>
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Me <i class="far fa-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills <i class="far fa-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects <i class="far fa-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Connect <i class="far fa-heart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
