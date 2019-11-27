import React, { Component, Fragment } from 'react';
import GalleryComponent from '../../component/Gallery/Gallery';
import Data from '../../data.json';
import {Link} from "react-router-dom";
const click = (event) => {
    event.preventDefault();
}
class Gallery extends Component {
    render() {
        return (
            <Fragment>
                   {/* <!-- ===== Image__galler ===== -->     */}
                    <section id="portfolio" className="light_box">
                        <div className="container">
                            <h2 className="card-title text-center text-dark p-bottom-50 mb-0">Our branding works</h2>
                            <div className="">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="position-relative wow fadeInLeft zoom-gallery slow">
                                                    <Link to="./assets/img/mcdonalds_logo.svg">
                                                        <img src="./assets/img/mcdonalds_logo.svg" className="w-100 rounded mcdonalds" alt="img" />
                                                        <span className="mbr-gallery-title text-white">Branding Solution</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="row p-0 wow fadeInRight zoom-gallery m-bottom-50 slow">
                                                {
                                                    Data[0].portfolio.map((item, key) => {
                                                        return <GalleryComponent key={key} img={item.imgSrc} title={item.title} />
                                                    })
                                                }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                <Link to="/" onClick={click} className="btn btn-primary btn-lg  gradient">
                                        view all projects
                                </Link>
                                </div>
                            </div>{/*<!-- end: jumbotron -->*/}
                        </div>{/*<!-- end: container -->*/}
                    </section>
                    {/*<!-- end: section -->*/}
            </Fragment>
        )
    }
}
export default Gallery;
