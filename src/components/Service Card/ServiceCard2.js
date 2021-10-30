import React, { useEffect, useState } from 'react';
import Service2 from '../Service/Service2';


const ServiceCard2 = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./tourismWebsite2.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    console.log(services);

    return (
        <><div className="mt-5">
            <h1>The Medical Specialists</h1>
            <p>We provide some of the best doctors for our patient</p>
        </div><div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    // console.log(services);
                    services.map(service => <Service2 key={service.key} service={service}></Service2>)}

            </div></>
    );
};

export default ServiceCard2;