import React from "react";
import "../Styles/Project.css";
import ProjectImg from "../img/Project.png";

import { ProjectData, MobileProjcts } from "../data";

export default function Projects() {
  return (
    <>
      <div className="project_main" id="project">
        <div
          className="geading_quali"
          style={{ margin: "10px auto", textAlign: "center" }}
        >
          <h3>
            
            <span>
              <img src={ProjectImg} className="mortarboard" alt="Error" />
            </span>
            Projects
          </h3>
        </div>
        <div uk-filter="target: .js-filter">
          <ul class="uk-subnav ">
            <li
              uk-filter-control=".Web-dev"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              <a href="#">
                <button class="cta">
                  <span>Web Sites</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </a>
            </li>
            <li
              uk-filter-control=".Mobile-dev"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              <a href="#">
                <button class="cta">
                  <span>Mobile Apps</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </a>
            </li>
          </ul>

          <ul
            class="js-filter uk-text-center"
            style={{ listStyle: "none", textAlign: "center" }}
          >
            <li class="Web-dev">
              <section>
                <div className="row">
                  {ProjectData.map((data) => (
                    <div className="col-md-4 col-12">
                      <div class="card_P" title="Click to Visit Website">
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            class="card-img-top"
                            src={data.img}
                            alt="Error"
                          />
                        </a>
                        {/* <div class="card-body">
                <h5 class="card-title"  style={{fontWeight:"bold"}}>{data.name}</h5>
                  <p class="card-text">
                    {data.desc}
                  </p>

                  <a href={data.link} target="_blank"without rel="noreferrer"  style={{textDecoration: "none"}}><h4>Visit</h4></a>
                </div> */}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="check">
                  <a
                    href="https://github.com/kumarsubhojeet"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="button_check">
                      <p>
                        Check Out More Projects
                        <span>
                          <i class="fas fa-chevron-right check_logo"></i>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </section>
            </li>

            {/* Mobile Projects */}
            <li class="Mobile-dev">
              <section>
                <div className="row">
                  {MobileProjcts.map((data) => (
                    <div className="col-md-4 col-12">
                      <div class="card_P" title="Click to Visit Website">
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            class="card-img-top"
                            src={data.img}
                            alt="Error"
                          />
                        </a>
                        {/* <div class="card-body">
                <h5 class="card-title"  style={{fontWeight:"bold"}}>{data.name}</h5>
                  <p class="card-text">
                    {data.desc}
                  </p>

                  <a href={data.link} target="_blank"without rel="noreferrer"  style={{textDecoration: "none"}}><h4>Visit</h4></a>
                </div> */}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="check">
                  <a
                    href="https://github.com/kumarsubhojeet"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="button_check">
                      <p>
                        Check Out More Projects
                        <span>
                          <i class="fas fa-chevron-right check_logo"></i>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
