import React, { Component, Fragment } from 'react';
import TestiComponent from '../../component/Testimonial/Testimonial';
import Data from '../../data.json';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Testimonial extends Component {
    render() {
        return (
            <Fragment>
                        
                {/* <!-- TESTIMONIAL --> */}
                <section id="testimonial" className="testimonial p-top-120 p-bottom-120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="customers-testimonials">                        
                        <OwlCarousel
                            className="owl-theme owl-carousel1 owl-carousel"
                            loop
                            margin={10}                           
                            items = {1}
                        >
                         
                        {
                            Data[0].testimonial.map((item, key) => {
                                return <TestiComponent key={key} img={item.imgSrc} name={item.name} designation={item.designation} comment={item.comment} />
                            })
                            
                        }                        
                        </OwlCarousel>

                        
                        </div>{/*<!-- end: customers-testimonials -->*/}
                    </div>{/*<!-- end: col+ -->*/}
                    </div>{/*<!-- end: row -->*/}
                </div>{/*<!-- end: container -->*/}
                </section>
                {/* <!-- END OF TESTIMONIAL --> */}
            </Fragment>
        )
    }
}
export default Testimonial;
