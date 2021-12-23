import React from "react";
import "../Styles/Project.css";

import { ProjectData } from "../data";

export default function Projects() {
  return (
    <div>
      <div className="project_main" id='project'>
        <div className="project_heading"><h3>latest Projects</h3></div>

        <section>
          <div className="row">
            {ProjectData.map((data) => (
           <div className="col-md-4 col-12">
                  <div class="card_P" title="Click to Visit Website">
               <a href={data.link} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
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
            <a href="https://github.com/kumarsubhojeet" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
              <div className="button_check">
                <p>Check Out More Projects <span><i class="fas fa-chevron-right check_logo"></i></span></p>
               
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
