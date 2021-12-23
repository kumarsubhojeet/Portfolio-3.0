import React from "react";
import "../Styles/Navbar.css";
import Logo from '../img/Logo.png'
import {Link} from 'react-scroll'

export default function NavBar() {
  return (
    <>
      <div className="sidebar_main">

	  <div className="menu_logo_mobile">
         <img src={Logo} alt="Error" className="Logo" />
        </div>
       
	   <div className="s_m_left">
	   <span
          class="uk-button uk-button-default uk-margin-small-right NavBurger"
          uk-toggle="target: #offcanvas-slide"
          uk-icon="icon: menu ; ratio:1.5"
        ></span>

        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
          <div class="uk-offcanvas-bar sidebar">
            <div className="side_bar_header">
              <h3>Menu</h3>
              <span
                class="uk-offcanvas-close close_menu"
                uk-icon="icon: close"
              />
            </div>

            <hr class="uk-divider-icon" />

            <ul class="uk-list">
            <Link smooth={true} duration={1300} to="about"><li className="Links_nav_mobile">About</li></Link>
              <Link smooth={true} duration={1300} to="services"><li className="Links_nav_mobile">Services</li></Link>
              <Link smooth={true} duration={1300} to="Qualifications"><li className="Links_nav_mobile">Qualifications</li></Link>
              <Link smooth={true} duration={1300} to="Experiesces"><li className="Links_nav_mobile">Experiesces</li></Link>
              <Link smooth={true} duration={1300} to="project"><li className="Links_nav_mobile">Projects</li></Link>
              <Link smooth={true} duration={1300} to="Contact"><li className="Links_nav_mobile">Contact</li></Link>
            </ul>
          </div>
        </div>
	   </div>

		
      </div>

      <div className="pc_view">
        <div className="menu_logo">
         <img src={Logo} alt="Error" className="Logo" />
        </div>
        
        <div className="menu_Links">
          <ul class="Pc_links">
          <Link smooth={true} duration={1300} to="about"><li>About</li></Link>
              <Link smooth={true} duration={1300} to="services"><li>Services</li></Link>
              <Link smooth={true} duration={1300} to="Qualifications"><li>Qualifications</li></Link>
              <Link smooth={true} duration={1300} to="Experiesces"><li>Experiesces</li></Link>
              <Link smooth={true} duration={1300} to="project"><li>Projects</li></Link>
              <Link smooth={true} duration={1300} to="Contact"><li>Contact</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}
