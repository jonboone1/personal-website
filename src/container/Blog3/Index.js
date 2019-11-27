import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import BlogComponent from '../../component/blog3/Index';
import Data from '../../data.json';
const click = (event) => {
    event.preventDefault();
}
class About extends Component {
    render() {
        return (
            <Fragment>
                <section className="blog-grid-one-content p-top-130 p-bottom-130">
                    <div className="container">
                        <div className="row">
                                        
                            <div className="card-style-one">
                                <div className="container">
                                    <div className="row">
                                    {
                                        Data[0].blog.map((item, key) => {                                            
                                            if (key < 1){
                                            return <BlogComponent key={key} 
                                            img={item.imgSrc} 
                                            title={item.title} 
                                            content={item.content} category={item.category} 
                                            date={item.date} />  
                                            } else {
                                                return '';
                                            }              
                                        })
                                    }

                                        <div className="col-lg-10 offset-lg-1 m-top-15">
                                            {/* <!-- start blockquote --> */}
                                            <blockquote className="blockquote blockquote4">
                                                <p>My focus areas are on global standardization and harmonization of business processes lorem dolor is reorganization of marketing and customer.</p>
                                                <div className="quote-author">
                                                    <p><span>Jeff Collins,</span> Founder of Urkis.</p>
                                                </div>
                                            </blockquote>
                                            {/* <!-- end: blockquote --> */}
                                            <div className="m-top-50 m-bottom-20">
                                                <h4 className="display-4 m-bottom-15">Financial Analysis Overview</h4>
                                                <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas investig. Investiga tiones demonstr averun d lectores legere melius.</p>    
                                            </div>                
                                            <ul className="bullet--list pl-0">                        
                                                <li className="bullet_list"><i className="far fa-circle m-right-15"></i>Build next-generation web applications with a focus on the client</li>                             
                                                <li className="bullet_list"><i className="far fa-circle m-right-15"></i>Redesign UI’s, implement new UI’s, and pick up Java as necessary.</li>                            
                                                <li className="bullet_list"><i className="far fa-circle m-right-15"></i>Explore and design dynamic compelling consumer experiences.</li>                            
                                                <li className="bullet_list"><i className="far fa-circle m-right-15"></i>Design and build scalable framework for web applications.</li>
                                            </ul>
                                            {/* <!-- ends: .bullet--list2 --> */}
                                            <h5 className="m-bottom-10">Elementum Tortorvel Pretium</h5>
                                            <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam hasellus verra cursus.</p>
                                            <div className="row m-top-20 m-bottom-45">
                                                <div className="col-lg-5">
                                                    <img src="./assets/img/blog.jpg" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="col-lg-7 m-top-15">
                                                    <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones haretra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas legere melius tones haretra.</p>
                                                </div>
                                            </div>
                                            <h5 className="m-bottom-10">Financial Analysis Overview</h5>
                                            <p>Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Phasellus verrade monstr averun dlectores legere melius verrade monstr averun dlectores.</p>
                                            
                                            <ol className="number-list number--list1 m-top-15 m-bottom-30">                    
                                                <li className="numbers-decimal"><span>Professional delivers solutions</span></li>
                                                <li className="numbers-decimal"><span>Business human capital research</span></li>                        
                                                <li className="numbers-decimal"><span>Services complex problems bringing</span></li>                        
                                                <li className="numbers-decimal"><span>Strategy works with senior executives</span></li>
                                            </ol>
                                            {/* <!-- ends .number-list--> */}
                                            <img src="./assets/img/blog-single.jpg" className="img-fluid" alt="img" />
                                            <p className="m-top-30">Investig ationes demons trave runt lectores legere liusry quod was legunt saepius claritas Investig tones. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus verra nisl vitae cursus aei uismod supen dise saepius claritas investig. Investiga tiones.</p>                   <div className="post-bottom d-flex justify-content-between">
                                            <div className="tags">
                                                <ul className="d-flex pl-0">
                                                    <li><Link to='/' onClick={click}>UI/UX Design</Link></li>
                                                    <li><Link to='/' onClick={click}>Creative</Link></li>
                                                    <li><Link to='/' onClick={click}>Entrepreneurs</Link></li>
                                                </ul>
                                            </div>
                                                <div className="social-share">
                                                    <span className="m-right-15">Share Post: </span>
                                                    
                                                    <div className="social social-2">
                                                        <ul className="d-flex justify-content-end m-bottom-0 pl-0">
                                                            <li><Link to='/' onClick={click} className="facebook"><i className="fab fa-facebook-square"></i></Link></li>
                                                            <li><Link to='/' onClick={click} className="facebook"><i className="fab fa-behance"></i></Link></li>
                                                            <li><Link to='/' onClick={click} className="facebook"><i className="fab fa-dribbble"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- ends: .social --> */}

                                                </div>
                                            </div>
                                            {/* <!-- ends: .post-bottom --> */}

                                            <div className="post-author cardify border">
                                                <div className="author-thumb">
                                                    <img src="./assets/img/auth1.png" alt="img" className="rounded-circle" />
                                                </div>
                                                <div className="author-info">
                                                    <h5>About <span>Aazztech</span></h5>
                                                    <p>Business and Finance Sequitur mutatin onem consuetudium. Investiga tiones demonstr aver unt lectores legere me lius quod kqua legunt saepius. Claritas est etiam pro cessus averus.</p>
                                                    <div className="d-flex justify-content-start m-top-15">
                                                        
                                                        <div className="social social-2">
                                                            <ul className="d-flex justify-content-end m-bottom-0 pl-0">
                                                                <li><Link to='/' onClick={click} className="facebook"><i className="fab fa-facebook-square"></i></Link></li>
                                                                <li><Link to='/' onClick={click} className="facebook"><i className="fab fa-behance"></i></Link></li>
                                                                <li><Link to='/' onClick={click} className="facebook"><i className="fab fa-dribbble"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        {/* <!-- ends: .social --> */}

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ends: .post-author --> */}

                                            <div className="post-pagination">
                                                <div className="prev-post">
                                                    <span>Previous Post:</span>
                                                    <Link to='/' onClick={click} className="title">Understand the UX Rules</Link>
                                                    <p><span>April 20, 2019</span></p>
                                                </div>
                                                <div className="next-post">
                                                    <span>Next Post:</span>
                                                    <Link to='/' onClick={click} className="title">Announcing a Free Plan for Small Teams</Link>
                                                    <p><span>April 20, 2019</span></p>
                                                </div>
                                            </div>
                                            {/* <!-- ends: .post-pagination --> */}

                                            <div className="related-post m-top-60">
                                                <div className="related-post--title text-center">
                                                    <h3 className="m-bottom-25 display-3">Related Post</h3>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-sm-6 m-top-15 m-bottom-15">
                                                        <div className="single-post">
                                                            <img src="./assets/img/blog1.jpg" className="img-fluid" alt="img" />
                                                            <h6><Link to='/' onClick={click} >Understand the UX Rules</Link></h6>
                                                            <p>April 20, 2019</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6 m-top-15 m-bottom-15">
                                                        <div className="single-post">
                                                            <img src="./assets/img/blog2.jpg" className="img-fluid" alt="img" />
                                                            <h6><Link to='/' onClick={click} >Understand the UX Rules</Link></h6>
                                                            <p>April 20, 2019</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6 m-top-15 m-bottom-15">
                                                        <div className="single-post">
                                                            <img src="./assets/img/blog3.jpg" className="img-fluid" alt="img" />
                                                            <h6><Link to='/' onClick={click} >Understand the UX Rules</Link></h6>
                                                            <p>April 20, 2019</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="comments-area m-top-60">
                                                <div className="comment-title">
                                                    <h4 className="p-bottom-15 display-3">5 Comments</h4>
                                                </div>

                                                <div className="comment-lists">
                                                    <ul className="media-list pl-0">
                                                        <li className="depth-1">
                                                            <div className="media">
                                                                <div>
                                                                <Link to='/' onClick={click} className="cmnt_avatar">
                                                                    <img src="./assets/img/auth2.png" alt="img" className="media-object rounded-circle" />
                                                                </Link>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="media_top">
                                                                        <div className="heading_left">
                                                                        <Link to='/' onClick={click} >
                                                                            <h6 className="media-heading">John Doe</h6>
                                                                        </Link>
                                                                            <p>April 29, 2019</p>
                                                                        </div>
                                                                        <Link to='/' onClick={click} className="reply"><i className="fas fa-reply"></i> Reply</Link>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod
                                                                        tempor unt ut labore et dolore magna aliquat enim ad minim.</p>
                                                                </div>
                                                            </div>{/*<!-- ends: .media -->*/}
                                                            <ul className="children pl-0">
                                                                {/* <!-- Nested media object --> */}
                                                                <li className="depth-2">
                                                                    <div className="media">
                                                                        <div>
                                                                        <Link to='/' onClick={click} className="cmnt_avatar">
                                                                            <img src="./assets/img/auth3.png" className="media-object rounded-circle" alt="Sample" />
                                                                        </Link>
                                                                        </div>
                                                                        <div className="media-body">
                                                                            <div className="media_top">
                                                                                <div className="heading_left">
                                                                                <Link to='/' onClick={click} >
                                                                                    <h6 className="media-heading">John Doe</h6>
                                                                                </Link>
                                                                                    <p>April 29, 2019</p>
                                                                                </div>
                                                                                <Link to='/' onClick={click} className="reply"><i className="fas fa-reply"></i> Reply</Link>
                                                                            </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they
                                                                                eiusmod tempor unt ut labore et dolore magna aliquat enim ad minim.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>{/*<!-- ends: .children -->*/}
                                                        </li>{/*<!-- ends: .depth-1 -->*/}
                                                        <li className="depth-1">
                                                            <div className="media">
                                                                <div>
                                                                <Link to='/' onClick={click} className="cmnt_avatar">
                                                                    <img src="./assets/img/auth4.png" alt="img" className="media-object rounded-circle" />
                                                                </Link>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="media_top">
                                                                        <div className="heading_left">
                                                                        <Link to='/' onClick={click} >
                                                                            <h6 className="media-heading">Aazztech</h6>
                                                                        </Link>
                                                                            <p>April 29, 2019</p>
                                                                        </div>
                                                                        <Link to='/' onClick={click} className="reply"><i className="fas fa-reply"></i> Reply</Link>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod
                                                                        tempor unt ut labore et dolore magna aliquat enim ad minim.</p>
                                                                </div>
                                                            </div>{/*<!-- ends: .media -->*/}
                                                        </li>{/*<!-- ends: .depth-1 -->*/}
                                                    </ul>{/*<!-- ends: .media-list -->*/}
                                                </div>{/*<!-- ends: .comment-lists -->*/}

                                                <div className="d-flex justify-content-center m-top-45">
                                                <Link to='/' onClick={click} className="btn-lg text-white btn-secondary gradient" href="#"><i className="fas fa-sync-alt"></i> Load More</Link>
                                                </div>

                                                <div className="comment-form m-top-70 border text-left">
                                                    <div className="blog-comment-title">
                                                        <h5>Leave a Reply</h5>
                                                        <p>Your email address will not be published. Required fields are marked *</p>
                                                    </div>

                                                    <div className="comment_form_wrapper m-top-40">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="text" placeholder="Name*" className="form-control m-bottom-30" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="email" placeholder="Email*" className="form-control m-bottom-30" required />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <textarea placeholder="Your Text" className="form-control m-bottom-30"></textarea>
                                                                    <button className="btn-primary btn-sm rounded-sm text-capitalize border-0">Post Comment</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>{/*<!-- ends: .comment-area -->*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>

                    
                </section>



            </Fragment>
        )
    }
}
export default About;

