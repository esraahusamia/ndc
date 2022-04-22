import React from 'react'
import { Parallax } from 'react-parallax';
// languages
import ar from "../lang/ar"
//image 
import aboutImage from "../assets1/images/about-image.jpg"
function About() {
    return (
        <div className="about" id='about'>
            <div className="container" >
                <div className="row align-items-center" >
                    <div className="col-lg-6"  >
                        <div className="about-img" data-parallax="scroll" >
                        </div>
                    </div>
                    <div className="col-lg-6" >
                        <div className="section-header">
                            <p> {ar[0].nav1}</p>
                            <h2>Worldwide non-profit charity organization</h2>
                        </div>
                        <div className="about-tab">
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#tab-content-1">{ar[2].titel}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab-content-2">{ar[2].titel1}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab-content-3">{ar[2].titel2}</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="tab-content-1" className="container tab-pane active">
                                    <p>{ar[2].value}</p>
                                </div>
                                <div id="tab-content-2" className="container tab-pane fade">
                                    <p>{ar[2].vision} </p>                                 </div>
                                <div id="tab-content-3" className="container tab-pane fade">
                                    <p>{ar[2].mission}</p>                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About