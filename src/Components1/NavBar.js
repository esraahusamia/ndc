import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [activeClass, setActiveClass] = useState("")
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let activeClasses = '';
            if (window.scrollY > 0) {
                activeClasses = 'nav-sticky';
            }
            setActiveClass(activeClasses);
        });

    }, [])
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView()
    }
    return (
        <div className={`navbar navbar-expand-lg bg-dark navbar-dark ${activeClass}`}>
            <div className="container-fluid">
                <Link to='/#head' className="navbar-brand" onClick={() => scrollTo("head")}>NDC</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link to='/#head' className="nav-item nav-link" onClick={() => scrollTo("head")}>Home</Link>
                        <Link to="/#about" className="nav-item nav-link " onClick={() => scrollTo("about")}>About</Link>
                        <Link to="/#causes" className="nav-item nav-link" onClick={() => scrollTo("causes")}>Causes</Link>
                        <Link to="/#event" className="nav-item nav-link" onClick={() => scrollTo("event")}>Events</Link>
                        <Link to="/#blog" className="nav-item nav-link" onClick={() => scrollTo("blog")}>Blog</Link>
                        <Link to="contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar