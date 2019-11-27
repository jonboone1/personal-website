import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
const click = (event) => {
    event.preventDefault();    
}
function Blog (props) {
    return(
        <Fragment>
            <div className="col-lg-8 offset-lg-2">
                <div className="card blog m-bottom-30 shadow-lg border-0">
                    <Link to="/" onClick={click} title="The Cleaner" className="hoverZoomLink">
                        <img src={props.img} className="img-fluid" alt="img" />
                    </Link>
                    <div className="card-body">
                        <div className="list-inline">
                            <p className="list-inline-item">{props.date}</p>
                            <span className="badge badge-success list-inline-item">{props.category}</span>
                        </div>
                        <Link to="/" onClick={click}><h5 className="card-title blog-title m-top-15">{props.title}</h5></Link>
                        <p className="b_excerpt">{props.content}</p>
                    </div>                
                </div> 
            </div>                                                               
        </Fragment>
    );
}
export default Blog;

