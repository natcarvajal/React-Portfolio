import React from "react";
import Typed from "react-typed";

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" id="skills">
            <h1 className="skills-title">Skills</h1>
            <Typed
              className="typed-text "
              strings={[
                "HTML",
                "CSS",
                "BOOTSTRAP",
                "JAVASCRIPT",
                "NODE",
                "EXPRESS",
                "REACT",
                "MYSQL",
                "MONGOOSE",
                "GIT",
                "GITHUB",
              ]}
              typeSpeed={40}
              backSpeed={80}
              loop
            />

            <div class="container skills-list">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="skills">
                    <div class="skills-icons text-center py-4"></div>
                    <div class="card-body text-center">
                      <i id="s-icons" class="fab fa-html5 fa-7x"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="skills">
                    <div class="skills-icons text-center py-4"></div>
                    <div class="card-body text-center">
                      <i id="s-icons" class="fab fa-css3-alt fa-7x"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="skills">
                    <div class="skills-icons text-center py-4"></div>
                    <div class="card-body text-center">
                      <i id="s-icons" class="fab fa-js fa-7x"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="skills">
                    <div class="skills-icons text-center py-4"></div>
                    <div class="card-body text-center">
                      <i id="s-icons" class="fab fa-node-js fa-7x"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="skills">
                    <div class="skills-icons text-center py-4"></div>
                    <div class="card-body text-center">
                      <i id="s-icons" class="fab fa-git-alt fa-7x"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="skills">
                    <div class="skills-icons text-center py-4"></div>
                    <div class="card-body text-center">
                      <i id="s-icons" class="fab fa-github fa-7x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
