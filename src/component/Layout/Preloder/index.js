import React from 'react';
import {Fragment} from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
function preloader() {
    return(
        <Fragment>           
			<Preloader>                
                <Placeholder>
                    {/* <!-- ===== Preloader ===== --> */}    
					{/* <!-- PRELOADER START--> */}
					<div className="pre-loader">
						<div className="d-flex justify-content-center">
							<div className="spinner">
							</div>{/*<!-- End: spinner -->*/}
						</div>
					</div>
					{/* <!-- PRELOADER END--> */}            
					{/* <!-- ===== Header__Navbar ===== --> */}
                </Placeholder>
            </Preloader>	  
			
        </Fragment>
    );
}
export default preloader;