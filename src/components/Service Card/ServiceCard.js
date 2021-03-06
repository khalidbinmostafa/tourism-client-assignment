import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';



const ServiceCard = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-grave-34944.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);

    return (
        <Container fluid className="services-container pb-5">
            <h4 className="text-color">Choose Your Package</h4>
            <h1 className="head-col">Select Your Best Package <br /> For Your Travel</h1>
            <Row>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default ServiceCard;