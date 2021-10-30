import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/healthCare.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const findService = services.find(service => service.id == serviceId)
    console.log(findService);
    return (
        <div className="container col col-lg-3 col-sm-3">
            <div className="card">
                <img src={findService?.img} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{findService?.name}</h5>
                    <p className="card-text">{findService?.description}</p>

                    <Link to="/"><button className="header-btn">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;