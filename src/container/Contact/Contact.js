import React, { Component } from 'react';
class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            validationCustom01 : '',
            validationCustom02 : ''
        }       
        
    } 
    changeValide = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    onSubmit = (e) =>{               
        e.preventDefault();       
        document.getElementById('contactForm').reset();
        alert('Name: '+this.state.validationCustom01 + ' Email: '+this.state.validationCustom02 );               
    }
    render() {
        return (
            <div>
                {/* <!-- ===== Footer__contact ===== --> */}
                <section id="contact" className="contact p-top-150 p-bottom-100">
                    <div className="container">
                        <h2 className="card-title text-center text-white m-bottom-25">Ready to get started?</h2>
                        <p className="text-center text-white m-bottom-20">Nemo enim psam voluptatem quia voluptas aspernatur blandit tempus.</p>
                        <div className="contact_overlay position-absolute">
                            <img src="./assets/img/heade-bottom-shape.png" alt="img" className="img-fluid" />
                        </div> {/*<!-- End: contact_overlay -->*/}
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <form className="needs-validation text-center" id="contactForm" onSubmit={this.onSubmit} >
                                    <div className="form-row ">
                                        <div className="col-lg-6">
                                            <label htmlFor="validationCustom01"></label>
                                            <input type="text" className="form-control rounded-sm border-0" id="validationCustom01" placeholder="Your name" value={this.state.validationCustom01} required onChange={(this.changeValide)} />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="validationCustom02"></label>
                                            <input type="email" className="form-control rounded-sm border-0" id="validationCustom02" placeholder="Your email" value={this.state.validationCustom02} required onChange={(this.changeValide)} />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn-success btn-lg wow zoomIn rounded-sm slow mt-5 border-0" type="submit">let&#39;s talk</button>
                                </form>
                            </div> {/*<!-- end: col+ -->*/}
                        </div> {/*<!-- End: row -->*/}
                    </div> {/*<!-- End: container -->*/}
                </section>
                {/* <!-- End: section --> */}                
            </div>
        )
    }
}
export default Contact