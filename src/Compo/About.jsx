import React from "react";
import "../Styles/About.css";
import AboutImg from "../img/About.svg";

export default function About() {
  return (
    <>
      <div className="About_main" id='about'>
        <div className="about_wrapper">
          <div className="about_left">
            <img src={AboutImg} className="Aboutimg" alt="Error" />
          </div>

          <div className="about_right">
            <h3>About Me</h3>
            <p>
              Hello there! I'm Kumar Subhojit. I'm a Web Developer and Software
              Developer Hard-Working individual with proficiency in web
              development and App development, as well as strong skills and
              ability in writing clean and efficient code. I'm a quick learner
              and always want to learn more and more, to enhance my skills. A
              strong individual and contributor as well as team player. A
              positive attitude and communicative, a dependable person is great
              at time management.
            </p>

            <div className="hobbies">
                <h4>Hobbies</h4>
              <ul class="hobbies_list">
                <li><span uk-icon="icon:  play-circle" className="about_icons"></span> Music</li>
                <li><span uk-icon="icon: uikit " className="about_icons"></span> Designing</li>
                <li><span uk-icon="icon: dribbble " className="about_icons"></span>  vedio Games</li>
                <li><span uk-icon="icon: tripadvisor " className="about_icons"></span>  Travelling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
