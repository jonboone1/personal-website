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
                        <h2 className="card-title text-center text-white m-bottom-25">Want to Connect?</h2>
                        <p className="text-center text-white m-bottom-20">Reach out to me on LinkedIn and we can start chatting!</p>
                        <div className="contact_overlay position-absolute">
                            <img src="./assets/img/heade-bottom-shape.png" alt="img" className="img-fluid" />
                        </div> {/*<!-- End: contact_overlay -->*/}
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10">
                                <button className="btn-success btn-lg wow zoomIn rounded-sm slow mt-5 border-0 linkedin-button" type="submit">
                                  <a target="_blank" href="https://www.linkedin.com/in/jonboone/">Connect On LinkedIn</a>                                
                                </button>
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
