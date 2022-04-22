import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
// languages
import ar from "../lang/ar"
//images
import image1 from "../assets1/images/ev1.jpg"
import image2 from "../assets1/images/ev2.jpg"
import image3 from "../assets1/images/ev3.jpg"
import image4 from "../assets1/images/ev4.jpg"
import image5 from "../assets1/images/ev5.jpg"


function Event() {
    const [isExpanded, setExpanded] = useState(false)
    const [isExpandedSection1, setIsExpandedSection1] = useState(false);
    const [isExpandedSection2, setIsExpandedSection2] = useState(false)
    const [isExpandedSection3, setIsExpandedSection3] = useState(false)
    const [isExpandedSection4, setIsExpandedSection4] = useState(false)
    const [isExpandedSection5, setIsExpandedSection5] = useState(false)

    const { getCollapseProps, getToggleProps } = useCollapse({
        isExpanded, isExpandedSection1
    })

    return (
        <div id='event' className="event">
            <div className="container">

                <div className="section-header text-center">
                    <h2>{ar[4].header}</h2>
                    <h3>{ar[4].paragraph1}</h3>
                    <p className='sector'>
                        {/* <div>1- The government public sector.</div> */}
                        <div>-{ar[4].item1}</div>
                        {/* <div>2- The private sector. </div> */}
                        <div>-{ar[4].item2}</div>
                        {/* <div>3- Global and regional organizations. </div> */}
                        <div>-{ar[4].item3}</div>
                    </p>
                    <h3 style={{ paddingButtom: "20" }}> {ar[4].paragraph2}</h3>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src={image1} alt="Image" />
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{ar[4].relations[0].head}</h3>
                                    {/* <i class="fas fa-angle-down"
                                    ></i> */}
                                    <button
                                        {...getToggleProps({
                                            onClick: () => setIsExpandedSection1(!isExpandedSection1),
                                        })}
                                    >
                                        {isExpandedSection1 ? 'Less' : 'More'}
                                    </button>
                                    <p {...getCollapseProps()}>
                                        <ul>
                                            {ar[4].relations[0].items.map((item) => {
                                                return (
                                                    <li key={item}><strong>{item}</strong></li>
                                                )
                                            })}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src={image2} alt="Image2" />
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{ar[4].relations[1].head}</h3>
                                    <button
                                        {...getToggleProps({
                                            onClick: () => setIsExpandedSection2(!isExpandedSection2),
                                        })}
                                    >
                                        {isExpandedSection2 ? 'Less' : 'More'}
                                    </button>
                                    <p {...getCollapseProps()}>
                                        <ul>
                                            {ar[4].relations[1].items.map((item) => {
                                                return (
                                                    <li key={item}><strong>{item}</strong></li>
                                                )
                                            })}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src={image3} alt="Image3" />
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{ar[4].relations[2].head}</h3>
                                    <button
                                        {...getToggleProps({
                                            onClick: () => setIsExpandedSection3(!setIsExpandedSection3),
                                        })}
                                    >
                                        {isExpandedSection3 ? 'Less' : 'More'}
                                    </button>
                                    <p {...getCollapseProps()}>
                                        <ul>
                                            {ar[4].relations[2].items.map((item) => {
                                                return (
                                                    <li key={item}><strong>{item}</strong></li>
                                                )
                                            })}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src={image4} alt="Image4" />
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{ar[4].relations[3].head}</h3>
                                    <button
                                        {...getToggleProps({
                                            onClick: () => setIsExpandedSection4(!isExpandedSection4),
                                        })}
                                    >
                                        {isExpandedSection4 ? 'Less' : 'More'}
                                    </button>
                                    <p {...getCollapseProps()}>
                                        <ul>
                                            {ar[4].relations[3].items.map((item) => {
                                                return (
                                                    <li key={item}><strong>{item}</strong></li>
                                                )
                                            })}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src={image5} alt="Image5" />
                            <div className="event-content">
                                <div className="event-text">
                                    <h3>{ar[4].relations[4].head}</h3>
                                    <button
                                        {...getToggleProps({
                                            onClick: () => setIsExpandedSection5(!isExpandedSection5),
                                        })}
                                    >
                                        {isExpandedSection5 ? 'Less' : 'More'}
                                    </button>
                                    <p {...getCollapseProps()}>
                                        <ul>
                                            {ar[4].relations[4].items.map((item) => {
                                                return (
                                                    <li key={item}><strong>{item}</strong></li>
                                                )
                                            })}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event