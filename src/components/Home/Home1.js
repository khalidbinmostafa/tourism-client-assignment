import React from 'react';
import './Home.css';

const Home1 = () => {
    return (
        <><> <div>
            <img className="width" src="https://traveltext.id/wp-content/uploads/2020/06/pemandangan-740x455.jpg" alt="" />
        </div>
            <div className="container text-center mt-3">

                <div>
                    <h1><span className="header-text">Welcome To</span> - Tour Mania <span className="header-text">Agency</span>
                        <br /> HTML Template</h1>
                    <p>You can see the <span className="header-text">wonderful places</span> of the world with a very low cost!!!</p>
                </div>
                <div className="mt-4">
                    <button type="button" className="header-btn fw-bolder">Our Services +</button>
                    <p className="mt-3">More Services Coming Soon</p>
                </div>
            </div>
        </></>
    );
}
export default Home1;