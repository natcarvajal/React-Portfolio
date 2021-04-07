import React from "react";
import headshot from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/circle-headshot.png";
import resume from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/resume-01-19-21.pdf";

const Header = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg col-md-12 title" id="home">
            <h3 className="title-text">Hello</h3>
            <h1 className="title-text text-uppercase">My name is Natalia</h1>
            <h4 className="title-text text-uppercase">
              I am an aspiring Web Developer
            </h4>
            <div className="banner-buttons">
              <div className="d-flex flex-row flex-wrap">
                <a
                  role="button"
                  className="btn button primary-button mr-4 text-uppercase"
                  href={resume}
                  download="resume-01-19-21"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-12">
            <img
              id="imgHead"
              src={headshot}
              alt="headshot"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
