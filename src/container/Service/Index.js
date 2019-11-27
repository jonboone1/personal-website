import React, { Component, Fragment } from 'react';
import ServiceComponent from '../../component/service/Service';
import Data from '../../data.json';
class Service extends Component {
    render() {
        return (
            <Fragment>
                {/* <!-- ===== Icon__box ===== --> */}
                <section id="services" className="services p-bottom-120 p-top-120">
                    <div className="container">
                        <h2 className="card-title text-center p-bottom-50 mb-0">We build creative products</h2>
                        <div className="row">
                        {
                            Data[0].service.map((item, key) => {
                                return <ServiceComponent key={key} img={item.imgSrc} title={item.title} content={item.content} />                        
                            })
                        }
                        </div>{/*<!-- End: row -->*/}
                    </div>{/*<!-- End: container -->*/}
                </section>
                    {/* <!-- End: section --> */}
            </Fragment>
        )
    }
}
export default Service;