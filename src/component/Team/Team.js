import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
const click = (event) => {
    event.preventDefault();
}
function About (props) {
    return(
        <Fragment>
            <div className="col-lg-4 col-md-4 col-sm-6 about-me-container">
                <div className="card bg-transparent wow fadeInUp text-center border-0 slow">
                    <Link onClick={click} to="#"><img src={props.img} className="img-fluid rounded-circle shadow" alt="img" /></Link>
                    <div className="card-body p-top-10 bg-transparent">


                            <h5 className="card-title  mb-md-0">{props.name}</h5>


                        <p className="card-text">{props.designation}</p>
                    </div>
                </div>{/*<!-- End: jumbotron -->*/}
            </div>
            {/*<!-- end: col-md-4 -->*/}
        </Fragment>
    );
}
export default About;
