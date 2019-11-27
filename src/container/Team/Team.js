import React, { Component, Fragment } from 'react';
import TeamComponent from '../../component/Team/Team';
import Data from '../../data.json';
class Team extends Component {
    render() {
        return (
            <Fragment>
                    {/* <!-- ===== Card__three ===== --> */}
                    <section id="team" className="team p-top-120 p-bottom-120">
                        <div className="container">
                            <h2 className="card-title text-center text-white p-bottom-60 mb-0 head-subline">Work History</h2>
                            <div className="row d-flex justify-content-center card-row2">
                                {
                                    Data[0].team.map((item, key) => {
                                        return <TeamComponent key={key} img={item.imgSrc} name={item.name} designation={item.designation} />
                                    })
                                }
                            </div>{/*<!-- End: row -->*/}
                            <div className="row d-flex justify-content-center card-row2 job-descriptions">
                              <div className="col-lg-4 col-md-4 col-sm-6 job-desc">
                                <p>Started out as a digital analyst and used this time to learn the fundamentals of digital analytics.
                                Worked with great companies like McDonalds and eBay to provide constant insights to
                                their digital product teams.</p>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 job-desc">
                                <p>Became the senior analyst and lead for the analytics practice for our eBay account.
                                Utilized my unique roll to work with many different business units, ultimately to help the
                                division increase revneue by <span>100% Yoy.</span></p>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 job-desc">
                                <p>Graduated into an analytics manager role where I currently lead advanced analytics projects.
                                I spend my time advising my clients and my team on how to solve complex problems through insights.
                                I am also learning data science techniques at the same time!</p>
                              </div>
                            </div>
                          <button className="btn-success btn-lg wow zoomIn rounded-sm slow mt-5 border-0 mobile-button" type="submit">
                          <a target="_blank" href="https://www.linkedin.com/in/jonboone/">I&#39;m On LinkedIn</a>
                          </button>
                        </div>{/*<!-- End: container -->*/}
                        <h2 className="card-title text-center p-top-100 p-bottom-60 mb-0 head-subline">Companies Ive Worked With</h2>
                        <div className="row d-flex justify-content-center card-row2 big-logo-box">
                          <div className="col-lg-4 col-md-4 col-sm-6 logo-box">
                            <img src="./assets/img/mcdonalds_logo.svg" className ="mcdonalds"/>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 logo-box">
                            <img src="./assets/img/ebay_logo.svg" className ="ebay"/>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 logo-box">
                            <img src="./assets/img/aaa_logo.svg" className ="aaa"/>
                          </div>
                        </div>
                    </section>
                    {/* <!-- End: section --> */}
            </Fragment>
        )
    }
}
export default Team;
