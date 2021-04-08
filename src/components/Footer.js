import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="row">
        <div className="col-lg-12" id="connect">
          <h1 className="contact-title"> Lets Connect</h1>
        </div>
      </div>
      <div className="container">
        <a href="https://www.linkedin.com/in/nataliacarvajal/">
          {" "}
          <i id="c-icons" className="fab fa-linkedin-in fa-3x"></i>
        </a>
        <a href="https://github.com/natcarvajal">
          {" "}
          <i id="c-icons" className="fab fa-github fa-3x"></i>
        </a>
        <a href="mailto:nataliacarvajal1996@gmail.com">
          {" "}
          <i id="c-icons" className="far fa-envelope-open fa-3x"></i>
        </a>
        <a href="tel:(516)306-5815">
          {" "}
          <i id="c-icons" className="fas fa-mobile fa-3x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
