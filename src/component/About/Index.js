import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
const click = (event) => {
    event.preventDefault();
}
function About (props) {
    return(
        <Fragment>
            <div className="col-md-4 card-row2">
                <div className="chover shadow-lg card text-center border-0 wow fadeInUp slow">
                    <div className="icon m-top-40">
                        <img src={props.img} className="img-fluid" alt="img" />
                    </div>
                    <div className="card-body">
                    <Link to="/" onClick={click}>
                         <h5 className="card-title">{props.title}</h5>
                    </Link>
                        <p className="card-text">{props.content}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default About;
