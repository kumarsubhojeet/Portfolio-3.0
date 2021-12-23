import React from "react";
import "../Styles/Experiences.css";
import suitcase from "../img/suitcase.png";
import LEAP from "../img/LEAP.png"
import Probooking from '../img/Probooking.png'
import Mezchip from '../img/Mezchip.png'

export default function Experiences() {
  return (
    <div>
      <div className="Experiences_main" id='Experiesces'>
        <div className="Experiences_heading">
          <h3>
            {" "}
            <span>
              {" "}
              <img src={suitcase} className="suitcase" alt="Error" />
            </span>{" "}
            Work Experiences
          </h3>
        </div>

        <div className="Experiences_child">
          <ul uk-accordion="multiple: true">
            <li class="uk-open">
              <a class="uk-accordion-title" href="#">
                MezChip
              </a>
              <div class="uk-accordion-content">
                <p>
                  Mezchip is an Indian customer service software company which
                  integrates your online store with your existing support
                  channels to help you deliver the ultimate customer experience
                  for your brand. Mezchip unifies email, chat, and social media
                  channels in one single platform, enabling brands to create a
                  seamless customer experience driving customer loyalty and
                  customer retention. With Mezchip's deep integration with
                  online stores, brands have all the context they need to
                  provide fast, efficient, and effective customer service every
                  time.
                </p>

                <div className="My_work">
                  <p>
                    <span style={{ color: "#2190F2", fontWeight: "600" }}>
                      My Position
                    </span>
                    : Front-End Web Developer (Intern)
                  </p>
                  <p>
                    <span style={{ color: "#2190F2", fontWeight: "600" }}>
                      Technologies Worked on{" "}
                    </span>
                    : JavaScript , ReactJs, HTML, CSS , Bootstrap , etc
                  </p>
                
                <p><span style={{ color: "#2190F2", fontWeight: "600" }}>Website</span>: <a href="https://www.mezchip.com">https://www.mezchip.com</a></p>
                
                <p><span style={{ color: "#2190F2", fontWeight: "600" }}>Duration:</span> December,2021 - Present </p>


                <button class="uk-button uk-button-default" type="button">Certificate</button>
    <div uk-dropdown="mode: click"><img src={Mezchip} class="Certificate" alt="" /></div>
                </div>
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">
                Probooking
              </a>
              <div class="uk-accordion-content">
                <p>
                  It is an appointment booking Website to help you book
                  meetings/sell services that integrates with Zoom, Google
                  Calendar, Stripe, and PayPal. Asking the client "What time
                  suits you the best?" and then checking your calendar and then
                  creating a zoom link. Probooking is made for consultants,
                  coaches, podcasters, freelancers, solopreneurs, and more.
                </p>

                <div className="My_work">
                  <p>
                    <span style={{ color: "#2190F2", fontWeight: "600" }}>
                      My Position
                    </span>
                    : Front-End Web Developer (Intern)
                  </p>
                  <p>
                    <span style={{ color: "#2190F2", fontWeight: "600" }}>
                      Technologies Worked on{" "}
                    </span>
                    : JavaScript , j-query , PHP , HTML, CSS , Bootstrap , etc
                  </p>
                
                <p><span style={{ color: "#2190F2", fontWeight: "600" }}>Website</span>: <a href="https://www.probooking.io">https://www.probooking.io</a></p>
                
                <p><span style={{ color: "#2190F2", fontWeight: "600" }}>Duration:</span> August,2021 - August,2021 </p>

                <button class="uk-button uk-button-default" type="button">Certificate</button>
    <div uk-dropdown="mode: click"><img src={Probooking} class="Certificate" alt="" /></div>
                </div>
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" href="#">
                LEAD 4.0
              </a>
              <div class="uk-accordion-content">
                <p>
                Leap is a leading Not for profit Global community which was first started in July 2017 in sponsored by Prodevans Technologies, associated with RHA(Red Hat Academy) and COSSINDIA (An Open Source Training Company). Our aim is to create ample opportunities for students who are in the technical field and expose them to the Industry before they graduate. Here, In our community, we nurture them right from their college and bridge the gap between them and the leading technologies. We focus on helping society to grow and clear the myths about technology and the IT Industries.
                </p>

                <div className="My_work">
                  <p>
                    <span style={{ color: "#2190F2", fontWeight: "600" }}>
                      My Position
                    </span>
                    : Intern
                  </p>
                  <p>
                    <span style={{ color: "#2190F2", fontWeight: "600" }}>
                      Technologies Worked on{" "}
                    </span>
                    : Python , AWS , Red Hat Linux , etc
                  </p>
                
                <p><span style={{ color: "#2190F2", fontWeight: "600" }}>Website</span>: <a href="https://www.leapacademy.tech/index.html">https://www.leapacademy.tech/index.html</a></p>
                
                <p><span style={{ color: "#2190F2", fontWeight: "600" }}>Duration:</span> May,2021 - August,2021 </p>

                <button class="uk-button uk-button-default" type="button">Certificate</button>
    <div uk-dropdown="mode: click"><img src={LEAP} class="Certificate" alt="error" /></div>

                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
