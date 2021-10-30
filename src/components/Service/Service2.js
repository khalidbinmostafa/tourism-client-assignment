import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Service2 = ({ service }) => {
    const { id, name, img, description } = service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <Link to={`/service/${id}`}>
                        <button className="header-btn">Book an Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service2;