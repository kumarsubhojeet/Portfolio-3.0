import React from "react";
import "../Styles/Footer.css";
import {animateScroll as  scroll , Link} from 'react-scroll'


export default function Footer() {
  return (
    <div>
      <div className="footer_main">
        <div className="footer_wrapper">
          <div className="f_about">
            <h3 style={{color:'#fff'}}>About</h3>
            <p>
              Hello there! I'm Kumar Subhojit. I'm a Web Developer and Software
              Developer Hard-Working individual with proficiency in web
              development and App development, as well as strong skills and
              ability in writing clean and efficient code. I'm a quick learner
              and always want to learn more and more, to enhance my skills. A
              strong individual and contributor as well as team player.
            </p>
          </div>

          <div className="Links_f">
            <h3 style={{color:'#fff'}}>Links</h3>
            <ul class="uk-list">
            <Link smooth={true} duration={1300} to="about">  <li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> About</li></Link>
            <Link smooth={true} duration={1300} to="services"><li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Services</li></Link>
            <Link smooth={true} duration={1300} to="Qualifications"><li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Education</li></Link>
            <Link smooth={true} duration={1300} to="Experiesces">  <li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Experiesces</li></Link>
            <Link smooth={true} duration={1300} to="project"><li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Projects</li></Link>
            <Link smooth={true} duration={1300} to="Contact"> <li className="footer_Links"> <span uk-icon="icon:  arrow-right"></span> Contact</li></Link>

            </ul>
          </div>

          <div className="Services_f">
            <h3 style={{color:'#fff'}}>Services</h3>
            <ul class="uk-list">
              <li> <span uk-icon="icon:  arrow-right"></span> Front-End Development</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Website Design</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Logo Design</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Back-End Development</li>
              <li> <span uk-icon="icon:  arrow-right"></span> Data Base Management</li>
            </ul>
          </div>

          <div className="location_f">
            <h3 style={{color:'#fff'}}>Have a Questions?</h3>
            <div className="location__F">
            <span uk-icon="icon: location" style={{ fontSize:"17px" , paddingRight:'6px'}}></span>
            <p>Wagholi ,Pune,Maharastra,India</p>
            </div>

            <div className="phone">
            <span uk-icon="icon: receiver" style={{ fontSize:"17px" , paddingRight:'6px'}}></span>
            <p>+123 456 789</p>
            </div>

            <div className="mail">
            <span uk-icon="icon: mail" style={{ fontSize:"17px" , paddingRight:'6px'}}></span>
            <p>subhojeet567@gmail.com</p>
            </div>
          </div>



          
        </div>



        <div className="toTop">
<span className='up_btn' uk-icon="icon:  arrow-up ; ratio:2" onClick={()=>scroll.scrollToTop()}></span>
</div>
        <div className="footer_low">
          Copyright ©2021 All rights reserved | This Website is design & deveoped by Subhojit
          </div>
      </div>
    </div>
  );
}
