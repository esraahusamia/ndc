import React from 'react'
import image1 from "../assets1/img/testimonial-1.jpg"
import image2 from "../assets1/img/testimonial-2.jpg"
import image3 from "../assets1/img/testimonial-3.jpg"
import image4 from "../assets1/img/testimonial-4.jpg"

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="section-header text-center">
                    <p>Testimonial</p>
                    <h2>What people are talking about our charity activities</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-profile">
                            <img src={image1} alt="Image" />
                            <div className="testimonial-name">
                                <h3>Person Name</h3>
                                <p>Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-profile">
                            <img src={image2} alt="Image" />
                            <div className="testimonial-name">
                                <h3>Person Name</h3>
                                <p>Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-profile">
                            <img src={image3} alt="Image" />
                            <div className="testimonial-name">
                                <h3>Person Name</h3>
                                <p>Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-profile">
                            <img src={image4} alt="Image" />
                            <div className="testimonial-name">
                                <h3>Person Name</h3>
                                <p>Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial