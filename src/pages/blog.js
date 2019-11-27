import React, { Component } from 'react'
import { Fragment } from 'react';
import Layout from '../component/Layout/Layout';
import Blog from '../container/Blog/Index';
import Nabbar from '../component/Nabbar';
import {BlogBanner} from '../component/Banner';

class Home extends Component {
    render() {        
                
        return (
            <Fragment>
                <Layout>
                    <Nabbar /> 
                    <BlogBanner />        
                    <Blog />
                </Layout>
            </Fragment>
        )
    }
}
export default Home;