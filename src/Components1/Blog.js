import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import image1 from "../assets1/images/blo1.jpg"
import image2 from "../assets1/images/blo2.jpg"
import image3 from "../assets1/images/blo3.jpg"
import image4 from "../assets1/images/blo4.jpg"
import image5 from "../assets1/images/blo5.jpg"

// Lang
import ar from "../lang/ar"
function Blog() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <div id='blog' className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Blog</p>
                    <h2>{ar[5].archivesTitel}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image1} alt="Image" />
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">{ar[5].section1.head}</a></h3>
                                <p>
                                    {ar[5].section1.paragraph}
                                </p>
                                <div className="blog-meta">
                                    <p>
                                        <button
                                            {...getToggleProps({
                                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                            })}
                                        >
                                            {isExpanded ? 'Less' : 'More'}
                                        </button>
                                    </p>
                                </div>
                                <p  {...getCollapseProps()} >
                                    <ul>
                                        {ar[5].section1.list.map((li) => {
                                            return (
                                                <li key={li} ><strong>{li}</strong></li>
                                            )
                                        })}
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image2} alt="Image" />
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">{ar[5].section2.head}</a></h3>
                                <p>
                                    {ar[5].section2.paragraph}
                                </p>
                                <div className="blog-meta">
                                    <p>
                                        <button
                                            {...getToggleProps({
                                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                            })}
                                        >
                                            {isExpanded ? 'Less' : 'More'}
                                        </button>
                                    </p>
                                </div>
                                <p  {...getCollapseProps()} >
                                    {/* <ul>
                                        {ar[5].section1.list.map((li) => {
                                            return (
                                                <li key={li} ><strong>{li}</strong></li>
                                            )
                                        })}
                                    </ul> */}
                                    <table >
                                        <tr >
                                            <th>{ar[5].section2.table.column1Titel}</th>
                                            <th>{ar[5].section2.table.column2Titel}</th>
                                        </tr>
                                        <tr>
                                            {/* {ar[5].section2.table.list1.map((list) => {
                                                return (
                                                    <td key={list} ><strong>{list}</strong></td>
                                                )
                                            })} */}
                                            <td>January</td>
                                            <td>$100</td>
                                            {/* {ar[5].section2.table.list2.map((list) => {
                                                return (
                                                    <td key={list} ><strong>{list}</strong></td>
                                                )
                                            })} */}
                                        </tr>


                                    </table>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image3} alt="Image" />
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">{ar[5].section3.head}</a></h3>
                                <div className="blog-meta">
                                    <p>
                                        <button
                                            {...getToggleProps({
                                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                            })}
                                        >
                                            {isExpanded ? 'Less' : 'More'}
                                        </button>
                                    </p>
                                </div>
                                <p  {...getCollapseProps()} >
                                    <ul>
                                        {ar[5].section3.list.map((li) => {
                                            return (
                                                <li key={li} ><strong>{li}</strong></li>
                                            )
                                        })}
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image4} alt="Image" />
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">{ar[5].section4.head}</a></h3>
                                <p>
                                    {ar[5].section4.paragraph}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={image5} alt="Image" />
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">{ar[5].section5.head}</a></h3>
                                <div className="blog-meta">
                                    <p>
                                        <button
                                            {...getToggleProps({
                                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                            })}
                                        >
                                            {isExpanded ? 'Less' : 'More'}
                                        </button>
                                    </p>
                                </div>
                                <p  {...getCollapseProps()} >
                                    <ul>
                                        {ar[5].section5.list.map((li) => {
                                            return (
                                                <li key={li} ><strong>{li}</strong></li>
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
    )
}

export default Blog