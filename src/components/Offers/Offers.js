import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../Service Card/ServiceCard';



const Offers = () => {

    const [offers, setOffers] = useState([])

    useEffect(() => {

        fetch('https://dreadful-grave-34944.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setOffers(data)
                // setIsLoading(false)
            })
    }, [])

    return (
        <Container fluid className="services-container pb-5">
            <h4 className="text-color">Choose Your Package</h4>
            <h1 className="head-col">Select Your Best Package <br /> For Your Travel</h1>
            <Row>
                {
                    offers.map(offer => <ServiceCard key={offer._id}
                        offer={offer}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default Offers;