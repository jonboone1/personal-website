import React from 'react';
import { Fragment } from 'react';
import Footer from './Footer/Footer';
import Preloader from './Preloder';
//Initialize Preloader
function layout (props) {
    return (
        <Fragment>
            <Preloader />
            {props.children}
            <Footer/>
        </Fragment>
    );
  }  
  export default layout;