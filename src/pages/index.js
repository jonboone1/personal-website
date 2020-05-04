import React, { Component } from 'react'
import { Fragment } from 'react';
import Layout from '../component/Layout/Layout';
import Nabbar from '../component/Nabbar';
import About from '../container/About/Index';
import Service from '../container/Service/Index';
import Team from '../container/Team/Team';
import Gallery from '../container/Gallery/Gallery';
import Partner from '../container/Partner/Partner';
import Testimonail from '../container/Testimonial/Testimonial';
import Contact from '../container/Contact/Contact';
import {MainBanner} from '../component/Banner';

class Home extends Component {
    render() {

        return (
            <Fragment>
                <Layout>
                    <Nabbar />
                    <MainBanner />                    
                    <About />    
                    <Team />                                    
                    <Contact />
                </Layout>
            </Fragment>
        )
    }
}
export default Home;
