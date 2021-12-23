import React from 'react'
import '../Styles/Qualifications.css'
import mortarboard from '../img/mortarboard.png'

export default function Qualifications() {
    return (
        <>
            <div className="Qualifications_main" id='Qualifications'>
                <div className="geading_quali">
                    <h3> <span><img src={mortarboard} className="mortarboard" alt="Error" /></span>Qualifications</h3>
                </div>
                <div className="Qualifications_wrapper">
                    <div className="college">
                        <h3>Graduation</h3>
                        <p className="college_name">Ajeenkya DY Patil University,Pune,Maharastra,IN</p>
                        <span uk-icon="icon: calendar"></span>2019-2022


                    </div>

                    <hr class="uk-divider-icon"></hr>

                    <div className="diploma">
                        <h3>Diploma</h3>
                        <p className="college_name">BITT Polytechnic,Ranchi,Jharkhand,IN</p>
                        <span uk-icon="icon: calendar"></span>2015-2018


                    </div>
                    <hr class="uk-divider-icon" />
                    <div className="school">
                        <h3>High-School</h3>
                        <p className="college_name">Saraswati shishu mandir,Dhanbad,Jharkhand,IN</p>
                        <span uk-icon="icon: calendar"></span>2012-2015

                    </div>
                </div>
            </div>
        </>
    )
}
