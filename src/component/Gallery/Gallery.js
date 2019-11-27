import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
function Gallery (props) {
    return(
        <Fragment>
            <li className="col-lg-6 col-sm-6">
                <div className="position-relative">
                <Link to={props.img} className="img-overlay mcdonalds"><img
                            src={props.img} className="img-fluid rounded" alt="img" />
                </Link>
                </div>
            </li>
        </Fragment>
    );
}
export default Gallery;
