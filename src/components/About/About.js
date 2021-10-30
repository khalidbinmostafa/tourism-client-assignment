import React from 'react';
import '../Home/Home.css';
import './About.css';

const About = () => {
    return (
        <><div className="container">
            <div className="d-flex row">
                <div className="text-center mx-3 col-lg-4 col-sm-6">
                    <h1><span className="fw-normal">We Offer</span>
                        The Best <span className="header-text">Travel Agency</span> Company.</h1>
                    <p className="fs-3">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
                </div>
                <div className="col-lg-7 col-sm-6">
                    <img className="img-fluid response" src="https://demo.egenslab.com/html/tourx/assets/images/about-1.png" alt="" />
                </div>
            </div>
            <h1 className="mt-3">In our Services <span className="header-text">We Provide</span></h1>
            <div className="d-flex row mt-3">

                <div className="col-lg-3 col-sm-4 fs-4">
                    <ul>
                        <li>We offer the best service. So the tourists can visit any place safely.</li>
                        <li>To visit any places tourists have to pay pretty much low fee.  </li>
                        <li>Always take care of the tourists so that they can easliy visit any places.</li>
                        <li>The quality of food is pretty much standard.</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-sm-7 mx-3">
                    <div className="mb-3"> <img className="img-fluid px-3" src="https://demo.egenslab.com/html/tourx/assets/images/blog/b-3.png" alt="" />
                    </div>
                    <div><img className="img-fluid" src="https://demo.egenslab.com/html/tourx/assets/images/blog/b-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div></>

    );
};

export default About;