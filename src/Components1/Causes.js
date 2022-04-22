import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import image1 from "../assets1/images/cau1.jpg"
import image2 from "../assets1/images/cau2.jpg"
import image3 from "../assets1/images/cau3.jpg"
import image4 from "../assets1/images/cau4.jpg"
import image5 from "../assets1/images/cau5.jpg"
import image6 from "../assets1/images/cau6.jpg"
import image7 from "../assets1/images/cau7.jpg"
import image8 from "../assets1/images/cau8.jpg"
import image9 from "../assets1/images/cau9.jpg"
import ar from "../lang/ar"
function Causes() {
    return (
        <div id='causes' className="causes">
            <div className="container">
                <div className="section-header text-center">
                    <h2> {ar[1].standardTitel}</h2>
                    {/* <h2>Let's know about charity causes around the world </h2> */}
                </div>
                <OwlCarousel className="owl-carousel causes-carousel" >
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image1} alt="Image1" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard1}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image2} alt="Image2" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard2}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image3} alt="Image3" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard3}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image4} alt="Image4" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard4}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image5} alt="Image4" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard5}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image6} alt="Image4" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard6}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image7} alt="Image4" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard7}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image8} alt="Image4" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard8}</h3>
                        </div>
                    </div>
                    <div className="causes-item">
                        <div className="causes-img">
                            <img src={image9} alt="Image4" />
                        </div>
                        <div className="causes-text">
                            <h3>{ar[1].standard9}</h3>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Causes