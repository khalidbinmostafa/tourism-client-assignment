import React, { useEffect, useState } from 'react';
import Service3 from '../Service/Service3';


const ServiceCard3 = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./tourismWebsite3.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    console.log(services);

    return (
        <><div className="mt-5">
            <h1>What Our Traveller Say About Us</h1>
            <p>Our Traveller Say</p>
        </div><div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    // console.log(services);
                    services.map(service => <Service3 key={service.key} service={service}></Service3>)}

            </div></>
    );
};

export default ServiceCard3;