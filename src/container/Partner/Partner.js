import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Partner extends Component {
    render() {
        return (
            <Fragment>
                   {/* <!-- TESTIMONIALS --> */}
                    <section className="portfolio p-top-90 p-bottom-90">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="row justify-content-md-center middle">

                                <div className="col-lg-5 col-md-12">
                                        <div className="card border-0 px-0 wow fadeInLeft slow">
                                            <div className="card-body bg-transparent px-0">
                                                <Link to="#">
                                                    <h2 className="card-title text-dark p-bottom-40 mb-0">Trusted partners</h2>
                                                </Link>
                                                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas aspernat blandit tempus porttitor maxime.</p>
                                            </div>
                                        </div>
                                        {/* <!-- End: card --> */}
                                </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="customers-testimonials">
                                <OwlCarousel
                                    className="owl-carousel owl-caresoul2 owl-theme"
                                    loop
                                    margin={10}
                                    items = {1}
                                    animateIn = {"slideInDown"}
                                    animateOut = {"slideOutDown"}
                                >
                                    <div className="item">
                                        <div className="partner-logos">
                                            <ul>
                                                <li><img src="./assets/img/logo1.png" alt="img" className="img-fluid" /></li>
                                                <li><img src="./assets/img/logo2.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                            <ul>
                                                <li><img src="./assets/img/logo3.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo4.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo5.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-logos">
                                            <ul>
                                                <li><img src="./assets/img/logo1.png" alt="img" className="img-fluid" /></li>
                                                <li><img src="./assets/img/logo2.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                            <ul>
                                                <li><img src="./assets/img/logo3.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo4.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo5.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-logos">
                                            <ul>
                                                <li><img src="./assets/img/logo1.png" alt="img" className="img-fluid" /></li>
                                                <li><img src="./assets/img/logo2.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                            <ul>
                                                <li><img src="./assets/img/logo3.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo4.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo5.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-logos">
                                            <ul>
                                                <li><img src="./assets/img/logo1.png" alt="img" className="img-fluid" /></li>
                                                <li><img src="./assets/img/logo2.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                            <ul>
                                                <li><img src="./assets/img/logo3.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo4.png" alt="img" className="img-fluid " /></li>
                                                <li><img src="./assets/img/logo5.png" alt="img" className="img-fluid " /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </OwlCarousel>

                                </div>{/*<!-- end: customers-testimonials -->*/}
                            </div>{/*<!-- end: col+ -->*/}
                            </div>{/*<!-- end: row -->*/}
                        </div>{/*<!-- end: col+ -->*/}
                        </div>{/*<!-- end: row -->*/}
                    </div>{/*<!-- end: container -->*/}
                    </section>
                    {/* <!-- END: OF TESTIMONIALS --> */}

                    {/* <!-- ===== Full__hr ===== --> */}

                    <div className="single-article"><hr /></div>

                    {/* <!-- ===== Owl__caresoul_one ===== --> */}
            </Fragment>
        )
    }
}
export default Partner;

