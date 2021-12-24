import React from "react";
import "../Styles/Home.css";
import Man from "../img/man.svg";
import pdf from "../Pdf/Subhojit_kumar.pdf";
import {Link} from 'react-scroll'

export default function Home() {
  return (
    <div>
      <div className="home_main">
        <div className="home_wrapper">
          <div className="Home_left">
            <div className="Home_details">
              <h4 style={{color:'#2190F2'}}>Hi, I am</h4>
              <h1 class="uk-heading-small">Subhojit Kumar</h1>
              <p>
                I design & develope websites , mobile apps , Logos according to
                requirements. specifically in creating modern websites and
                mobile apps.
              </p>
            </div>

            <div className="resume_btn">
            <a className="resume" href={pdf} download style={{textDecoration:"none"}}>
              <button class="uk-button uk-button-primary home_btn">
                Resume
              </button>
              </a>
              <button class="uk-button uk-button-secondary home_btn">
                <Link smooth={true} duration={1300} to="Contact">
                Contact
                </Link>
              </button>
            </div>

            <div className="home_low_left">

            <div className="social_media_home">
              <ul class="uk-list Home_media">
                <li className='Home_media_links'> <span className="Home_media_icon" uk-icon="icon:  github ; ratio: 2"></span>  <a href="https://github.com/kumarsubhojeet" style={{color:'#2c3e50' , textDecoration:'none'}}>Github</a></li>
                <li className='Home_media_links'> <span className="Home_media_icon" uk-icon="icon:  linkedin ; ratio: 2"></span>  <a href="https://github.com/kumarsubhojeet" style={{color:'#2c3e50' , textDecoration:'none'}}>Linked-In</a></li>
                <li className='Home_media_links'> <span className="Home_media_icon" uk-icon="icon: instagram ; ratio: 2"></span>  <a href="https://github.com/kumarsubhojeet" style={{color:'#2c3e50' , textDecoration:'none'}}>Instagram</a></li>
              </ul>
            </div>

            <div className="about_titles">
            <div className="about_titles_wrapper">
              <div className="about_title-items">20+ Projects</div>
              <div className="about_title-items">Web Developer</div>
              <div className="about_title-items">Mobile App Developer</div>
              <div className="about_title-items">3 Internships</div>
              <div className="about_title-items">
                1 certification course in HTML
              </div>
            </div>
          </div>

          </div>

          </div>

          <div className="Home_right">
            <img src={Man} className="Man_image" alt="Error" />
          </div>
        </div>
      </div>
    </div>
  );
}
