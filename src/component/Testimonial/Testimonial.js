import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
const click = (event) => {
    event.preventDefault();
}
function Testimonial (props) {
    return(
        <Fragment>                            
            {/* <!--item 4 --> */}
            <div className="item">                                            
                <div className="">
                    <div className="card text-center border-0">
                        <div className="d-flex justify-content-md-center">
                        <Link to="/" onClick={click}>
                            <img src={props.img} className="img-fluid rounded-circle" alt="img" />                            
                        </Link>
                        </div>
                        <div className="card-body">
                        <Link to="/" onClick={click}>
                                <h5 className="card-title mb-md-0">{props.name} -  <span>{props.designation}</span></h5>                           
                        </Link>
                            <p className="card-text m-top-30">{props.comment}</p>
                        </div>
                    </div>
                </div>{/*<!-- End: jumbotron -->*/}
            </div>
            {/* <!--END OF item 4 --> */}                                               
        </Fragment>
    );
}
export default Testimonial;