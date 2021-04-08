import React from "react";
import baxter from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/baxter-cropped.png";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="baxter">
              <img
                id="imgHead"
                src={baxter}
                alt="my pug"
                className="img-fluid"
              ></img>
            </div>
          </div>
          <div className="col-lg-6 col-md-12" id="about">
            <h2 className="about-text pt-5">
              <span>A Little About Me</span>
            </h2>
            <div className="paragraph py-4 w-75">
              <p className="para">
                My name is Natalia Carvajal and I am an aspiring software
                developer. I am currenlty enrolled in Columbia's Engineering
                Coding Bootcamp. I received my Bachelor's Degree in
                Communications from the University of Charleston. After three
                years and several internhsips, I realized I was going down the
                wrong path and needed a change as soon as possible. I have
                always been interested in coding but never knew where to start,
                until this year. I have a lot to learn and I am excited to see
                what the future holds.{" "}
              </p>
              <p className="para">My hobbies include:</p>
              <ul>
                <li className="hobb">
                  Coding <i class="fas fa-laptop-code"></i>
                </li>
                <li className="hobb">
                  Going to the gym <i className="fas fa-dumbbell"></i>
                </li>
                <li className="hobb">
                  Taking walks with my dog, Baxter{" "}
                  <i className="fas fa-paw"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
