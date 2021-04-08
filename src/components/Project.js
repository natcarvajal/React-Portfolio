import React from "react";
import burg from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/burg.png";
import burger from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/burger.png";
import pets from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/project.png";
import weather from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/weather.png";
import quiz from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/code.png";
import note from "/Users/nataliacarvajal/Desktop/gitrepos/React-Portfolio/src/img/note-taker.png";
function Project() {
  return (
    <div className="project">
      <div className="container">
        <div className="project-title pb-5">
          <h1 id="projects" className="title-h1 text-center">
            Projects
          </h1>
          <div className="row">
            <div className="col-6">
              <div className="myproject">
                <div className="img">
                  <div className="card">
                    <img
                      id="projectImg"
                      src={burger}
                      className="card-img-top"
                      alt="project-1"
                    ></img>
                    <div className="card-body">
                      <h5 id="pro-title" className="card-title">
                        Project 2 - yourEats
                      </h5>
                      <a
                        href="https://github.com/streamingTurtles/project2-HW"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Github Repo
                      </a>
                      <a
                        href="https://radiant-oasis-56969.herokuapp.com/"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Heroku Link{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="myproject">
                <div className="img">
                  <div className="card">
                    <img
                      id="projectImg"
                      src={pets}
                      alt="project-1"
                      href="#"
                    ></img>
                    <div className="card-body">
                      <h5 id="pro-title" className="card-title">
                        Project 1 - iSeePets
                      </h5>
                      <a
                        href="https://github.com/streamingTurtles/iSeePets"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Github Repo
                      </a>
                      <a
                        href="https://streamingturtles.github.io/iSeePets/index.html"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Deployed Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="myproject">
                <div className="img">
                  <div className="card">
                    <img
                      id="projectImg"
                      src={burg}
                      alt="Eat-the-Burger"
                      href="#"
                    ></img>
                    <div className="card-body">
                      <h5 id="pro-title" className="card-title">
                        Eat-the-Burger
                      </h5>
                      <a
                        href="https://github.com/natcarvajal/Burger-13"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Github Repo
                      </a>
                      <a
                        href="https://fast-dawn-24088.herokuapp.com/"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Heroku Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="myproject">
                <div className="img">
                  <div className="card">
                    <img
                      id="projectImg"
                      src={weather}
                      alt="weather-app"
                      href="#"
                    ></img>
                    <div className="card-body">
                      <h5 id="pro-title" className="card-title">
                        Weather Dashboard
                      </h5>
                      <a
                        href="https://github.com/natcarvajal/Weather-Dashboard-HW-6"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Github Repo
                      </a>
                      <a
                        href="https://natcarvajal.github.io/Weather-Dashboard-HW-6/"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Deployed Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="myproject">
                <div className="img">
                  <div className="card">
                    <img
                      id="projectImg"
                      src={note}
                      alt="project-1"
                      href="#"
                    ></img>
                    <div className="card-body">
                      <h5 id="pro-title" className="card-title">
                        Note Taker{" "}
                      </h5>
                      <a
                        href="https://github.com/natcarvajal/Note-Taker-HW-11"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Github Repo
                      </a>
                      <a
                        href="https://aqueous-castle-38143.herokuapp.com/"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Heroku Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="myproject">
                <div className="img">
                  <div className="card">
                    <img
                      id="projectImg"
                      src={quiz}
                      alt="project-1"
                      href="#"
                    ></img>
                    <div className="card-body">
                      <h5 id="pro-title" className="card-title">
                        Code Quiz
                      </h5>
                      <a
                        href="https://github.com/natcarvajal/Code-Quiz-HW-4"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Github Repo
                      </a>
                      <a
                        href="https://natcarvajal.github.io/Code-Quiz-HW-4/"
                        className="btn button primary-button"
                        id="link-buttons"
                      >
                        Deployed Link
                      </a>
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

export default Project;
