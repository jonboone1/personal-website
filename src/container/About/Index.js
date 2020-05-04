import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import Data from '../../data.json';
const click = (event) => {
    event.preventDefault();
}
class About extends Component {
    render() {
        return (
            <Fragment>
            {/* <!-- ===== Branding ===== --> */}
            <section id="brand" className="brand-area p-top-110 p-bottom-120">
                <div className="container">
                <h1 className="card-title text-center p-bottom-50 mb-0 section-title">About Me</h1>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-12 animated tada" id="jon_character">
                            <img src="./assets/img/jon_character.jpg" alt="img" className="jon_character img-fluid wow fadeInUp" />
                        </div>
                        {/* <!-- End: col+ --> */}

                        <div className="col-lg-5 offset-lg-1 col-sm-12 about-me-container">
                            <div className="">
                                <div className="card border-0 wow fadeInUp slow">
                                    <div className="card-body bg-transparent p-0">
                                      <div className="about-me-card">
                                        <h2 className="card-title m-0"> Who I Am</h2>
                                        <p className="card-text p-top-10 p-bottom-30">I am a business nerd who loves economics as much as making powerpoints. If I am not spending my time dreaming of another business idea, I am likely analyzing data or making coffee.</p>
                                      </div>
                                      <div className="about-me-card">
                                        <h2 className="card-title m-0"> What I Do</h2>
                                        <p className="card-text p-top-10 p-bottom-30">I work as a data analyst and aim to truly drive business impact through every analysis I do. Whether it be through ad-hoc analysis or building a data science model, I always aim to focus on ROI first, and fancy technology second.</p>
                                      </div>
                                      <div className="about-me-card">
                                        <h2 className="card-title m-0"> What I Love</h2>
                                        <p className="card-text p-top-10 p-bottom-30">I love stories of risk, sacrifice, love, and adventure. I love learning new technology/languages. I love all things food, I love painting, and I love competition.</p>
                                      </div>
                                    </div>
                                </div>
                            </div>{/*<!-- End: jumbotron -->*/}
                        </div>
                    </div>{/*<!-- End: row -->*/}
                </div>{/*<!-- End: container -->*/}

                <h2 className="card-title text-center p-top-100 p-bottom-60 mb-0 head-subline">Companies I&#39;ve Worked With</h2>
            <div className="row d-flex justify-content-center card-row2 big-logo-box">
                <div className="col-lg-4 col-md-4 col-sm-6 logo-box">
                <img src="./assets/img/mcdonalds_logo.svg" className ="mcdonalds"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 logo-box">
                <img src="./assets/img/ebay_logo.svg" className ="ebay"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 logo-box">
                <img src="./assets/img/aaa_logo.svg" className ="aaa"/>
                </div>
            </div> 
            </section>
            {/* <!-- End: section -->
            <!-- ===== update  Popup Video ===== --> */}
            

            </Fragment>
        )
    }
}

export default About;
