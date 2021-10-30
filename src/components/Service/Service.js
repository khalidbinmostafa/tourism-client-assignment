import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/service/ ${id}`}>
                        <button className="header-btn">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;