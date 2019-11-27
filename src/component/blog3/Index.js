import React, {Fragment} from 'react';
// import {Link} from "react-router-dom";
// const click = (event) => {
//     event.preventDefault();    
// }
function Blog (props) {
    return(
        <Fragment>
            <div className="col-lg-10 offset-lg-1">                
                <div className="card blog m-bottom-15 shadow-lg border-0">                    
                     <img src={props.img} className="img-fluid" alt="img" />                   
                    <div className="card-body">                       
                        <h3 className="card-title blog-title m-top-5">{props.title}</h3>
                        <p className="b_excerpt">{props.content}</p>
                    </div>                
                </div> 
            </div>                                                            
        </Fragment>
    );
}
export default Blog;