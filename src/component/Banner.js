import {Link} from "react-router-dom";
import React, {Fragment} from 'react';
export const MainBanner = () => {
          return (
              <Fragment>
                {/* <!-- Banner Area Starts --> */}
                <section id="banner-area" className="banner-area">
                <div className="banner-overlay">
                    <img src="./assets/img/banner_tl.png" alt="img" className="img-fluid banner-img-top" />
                    <img src="./assets/img/heade_b_l.png" alt="img" className="img-fluid banner-img-bottom" />
                </div>


                <div className="campfire-container">
              	<div className="campfire-wrapper">
              		<div className="tree-container-back">
              			<div className="tree-8"></div>
              			<div className="tree-9"></div>
              			<div className="tree-10"></div>
              		</div>
              		<div className="rock-container">
              			<div className="rock-big"></div>
              			<div className="rock-small">
              				<div className="rock-1"></div>
              				<div className="rock-2"></div>
              				<div className="rock-3"></div>
              				<div className="rock-4"></div>
              			</div>
              		</div>
              		<div className="smoke-container">
              			<svg>
              			<path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " />
              		</svg>
              			<div className="fire-container">

              				<div className="flame-1"></div>
              				<div className="flame-2"></div>
              				<div className="flame-3"></div>
              			</div>
              		</div>
              		<div className="tree-container-front">
              			<div className="tree-1"></div>
              			<div className="tree-2"></div>
              			<div className="tree-3"></div>
              			<div className="tree-4"></div>
              			<div className="tree-5"></div>
              			<div className="tree-6"></div>
              			<div className="tree-7"></div>
              		</div>
              	</div>
              </div>


              {/* <!-- End: banner-overlay --> */}
                <div className="container d-flex h-100 align-items-center">
                    <div className=" header-content wow zoomIn slow">
                        <h3 className="text-white m-top-20 m-bottom-35 typed main-title">Jon Boone</h3>
                        <h4 className="text-white m-bottom-40 head-subline">Where Analytics Meets Action</h4>
                    </div>{/*<!-- End: header-content -->*/}
                </div>{/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: Banner Area  --></div> */}
            </Fragment>
        );
    }


    export const BlogBanner = () => {
        return (
            <Fragment>
                 {/* <!-- Start intro-area --> */}
                <section className="blog-grid-one blog-page intro-area d-flex align-items-center" id="home">
                    <img src="./assets/img/hero-gardient.png" className="img-fluid one" alt="img" />
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-12">
                                <div className="breadcrumb_wrapper d-flex flex-column align-items-center">
                                    <h4 className="page_title m-top-130 m-bottom-20">Blog Grid One</h4>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Grid One</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                    {/* <!-- ends: .intro-area --> */}
          </Fragment>
      );
  }
