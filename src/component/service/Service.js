import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
const click = (event) => {
    event.preventDefault();
	/*
    var col     = event.target.closest('.col-md-4'),
        title   = col.querySelector('h5').innerHTML,
        content = col.querySelector('p').innerHTML,
        img     = col.querySelector('img').getAttribute('src');
        document.querySelector('.modal-title').innerHTML = title;
        document.querySelector('.modal-body p').innerHTML = content; */
}
function Service (props) {
    return(
        <Fragment>            
            <div className="col-md-4 col-sm-6">
                <div className="">
                    <div className="chover shadow-lg card text-center border-0 wow fadeInUp slow">
                        <img src={props.img} className="w-100" alt="img" />
                        <div className="card-body">
                        <Link to="/" onClick={click} >                            
                            <h5 className="card-title" >{props.title}</h5>                           
                        </Link>
                            <p className="card-text">{props.content}
                            </p>
                        </div>
                    </div>
                </div>{/*<!-- End: jumbotron -->*/}
            </div>
            {/* <!-- end: col-md-4 -->                                                   */}
        </Fragment>
    );
}
export default Service;