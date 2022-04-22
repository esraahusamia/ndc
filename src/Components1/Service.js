import React from 'react'
// languages
import ar from "../lang/ar"
function Service() {
    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <h2>{ar[3].axesTitel}</h2>
                    {/* <h2>We believe that we can save more lifes with you</h2> */}
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <span className="glyphicon glyphicon-signal logo-small"></span>
                                <h3>{ar[3].axes1}</h3>
                            </div>

                            {/* <div className="service-text">
                                <h3>{ar[3].axes1}</h3>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <span className="glyphicon glyphicon-tags logo-small"></span>
                                <h3>{ar[3].axes2}</h3>
                            </div>
                            {/* <div className="service-text">
                                <h3>{ar[3].axes2}</h3>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <span className="glyphicon glyphicon-user logo-small"></span>
                                <h3>{ar[3].axes3}</h3>
                            </div>
                            {/* <div className="service-text">
                                <h3>{ar[3].axes3}</h3>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <span className="glyphicon glyphicon-education logo-small"></span>
                                <h3>{ar[3].axes4}</h3>
                            </div>
                            {/* <div className="service-text">
                                <h3>{ar[3].axes4}</h3>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <span className="glyphicon glyphicon-globe logo-small"></span>
                                <h3>{ar[3].axes5}</h3>
                            </div>
                            {/* <div className="service-text">
                                <h3>{ar[3].axes5}</h3>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <span className="glyphicon glyphicon-heart logo-small"></span>
                                <h3>{ar[3].axes6}</h3>
                            </div>
                            {/* <div className="service-text">
                                <h3>{ar[3].axes6}</h3>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service