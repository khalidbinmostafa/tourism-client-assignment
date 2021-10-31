import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';
import './ManageOrder.css'

const Order = () => {
    const [booking, setBooking] = useState([])





    useEffect(() => {
        fetch('users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooking(data)
            })
    }, [])




    return (
        <Container fluid>
            <div className="service-container">

                <div className=" mb-5">
                    <h4 className="text-color">Manage Information</h4>
                    <h1 className="head-col mb-4">
                        You Are Showing All the Booking Orders <br /> By Our Clients
                    </h1>
                </div>

                <Row>
                    {
                        booking.map(booked => <AllOrder booked={booked} key={booked._id}></AllOrder>)
                    }
                </Row>




            </div>


        </Container>
    );
};

export default Order;