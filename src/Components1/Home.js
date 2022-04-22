import React from 'react'
// components
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Facts from "./Facts";
import Causes from "./Causes";
import Donate from "./Donate";
import Event from "./Event";
import Team from "./Team";
import Volunteer from "./Volunteer";
import Testimonial from "./Testimonial";
import Blog from "./Blog"
import Footer from "./Footer"
function Home() {
    return (
        <div>
            <Header />
            <About />
            <Service />
            <Facts />
            <Causes />
            {/* <Donate /> */}
            <Event />
            <Team />
            {/* <Volunteer /> */}
            {/* <Testimonial /> */}
            <Blog />
            <Footer />
        </div>
    )
}

export default Home