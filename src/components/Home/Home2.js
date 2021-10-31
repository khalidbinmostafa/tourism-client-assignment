import React from 'react';
import '../Home/Home.css';
import '../About/About.css';
import ServiceCard from '../Service Card/ServiceCard';

const Home2 = () => {
    return (
        <>
            <ServiceCard></ServiceCard>
            <div className="container mt-5">
                <div className="d-flex row">
                    <div className="text-center mx-3 col-lg-4 col-sm-6">
                        <h1><span className="fw-normal">Please Visit </span>
                            Our <span className="header-text">Travel Agency</span> Company.</h1>
                        <p className="fs-3">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
                    </div>
                    <div className="col-lg-7 col-sm-6">
                        <img className="img-fluid response" src="https://i.ibb.co/Ph0t6ZL/248694207-301274818271764-5246134544676966743-n.png" alt="" />
                    </div>
                </div>
                <h1 className="mt-5">Travellers Surely Enjoy <br /> <span className="header-text">Their Travelling By Booking Our Site</span></h1>
                <div className="d-flex row mt-3">

                    <div className="col-lg-3 col-sm-4 fs-4">
                        <ul>
                            <li>All they need to first visit our site</li>
                            <li>They will see much more benefits</li>
                            <li>They can also compare our site with others</li>
                            <li>So that, they take the best decision out of it</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-7 mx-3">
                        <div className="mb-3"> <img className="img-fluid px-3" src="https://i.ibb.co/hDVRjy8/248888268-1047316069419746-3829712379550557175-n.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Home2;