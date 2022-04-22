import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Our Head Office</h2>
                            <p><i className="fa fa-map-marker-alt"></i>16 Street, Mafraq, JORDAN</p>
                            <p><i className="fa fa-phone-alt"></i>+962 775500330</p>
                            <p><i className="fa fa-envelope"></i>info@ndcjo.com</p>
                            <div className="footer-social">
                                <a className="btn btn-custom" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-custom" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer