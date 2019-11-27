import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import BlogComponent from '../../component/blog2/Index';
import Data from '../../data.json';
const click = (event) => {
    event.preventDefault();
}
class About extends Component {
    render() {
        return (
            <Fragment>
           <section className="blog-grid-one-content p-top-120 p-bottom-120">
                <div className="container">
                    <div className="row">
                                    
                        <div className="card-style-one">
                            <div className="container">
                                <div className="row">
                                {
                                    Data[0].blog.map((item, key) => {
                                        return <BlogComponent key={key} 
                                        img={item.imgSrc} 
                                        title={item.title} 
                                        content={item.content} category={item.category} 
                                        date={item.date} />                        
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="d-flex justify-content-center">
                        
                        <div className="pagination-area m-top-50">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item"><Link className="page-link" to="/" onClick={click}>Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/" onClick={click}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/" onClick={click}>2</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="/" onClick={click}>3 <span className="sr-only">(current)</span></Link></li>
                                    <li className="page-item"><Link className="page-link" to="/" onClick={click}>4</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/" onClick={click}>5</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/blog2" onClick={click}>Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                        {/* <!-- ends: .pagination-wrapper --> */}

                    </div>
                </div>
            </section>
            </Fragment>
        )
    }
}
export default About;

