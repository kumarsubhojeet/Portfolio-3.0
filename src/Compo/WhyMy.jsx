import React from "react";
import "../Styles/WhyMy.css";
import { Progress } from "react-sweet-progress";

export default function WhyMy() {
  return (
    <>
      <div className="why_me_main" id='services'>
        <div className="why_wrapper">
          <div className="skills_heading">
            <h3>Why Choose Me</h3>
            <hr class="uk-divider-icon" />
          </div>
          <h3 style={{margin:'10px auto'}}>Skills & Services</h3>
          <div className="skills_up">
            <div className="cards_skills">
              <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                <Progress type="circle" percent={80} />
                <p className="progress_text">Front-End Development</p>
              </div>

              <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                <Progress type="circle" percent={60} />
                <p className="progress_text">Back-End Development</p>
              </div>

              <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                <Progress type="circle" percent={50} />
                <p className="progress_text">Mobile Development</p>
              </div>
            </div>
          </div>

          <div className="skills_down">
            <div class="cont1">
              HTML5
              <Progress percent={88} />
              CSS
              <Progress percent={80} />
              AntDesign , Material UI & Bootstrap
              <Progress percent={90} />
              Express JS
              <Progress percent={70} />
              </div>
             
              <div className="cont3">

              </div>
              <div className="cont2">
                JavaScript
                <Progress percent={72} />
                REACT JS
                <Progress percent={70} />
                MongoDB
                <Progress percent={60} />
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
