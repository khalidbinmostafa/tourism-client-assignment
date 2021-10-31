import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {


    const { img, title, _id, place, cost, rating } = props.service

    return (
        <Col sm={12} md={6} lg={4} className="offer-container">
            <Card className="card-container pb-4">
                <Card.Img className="img-fluid " variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex  justify-content-between">
                        <h6 className="text-color fw-bold">{cost} <span>/Per Person</span></h6>
                        <p className="fw-bold">Rating: <span className="text-color">{rating} out of 5</span> </p>
                    </div>
                    <h5 className="head-col">{title}</h5>
                    <h2 className="text-primary">{place}</h2>
                </Card.Body>

                <Link to={`/service/${_id}`}>
                    <Button variant="warning" className="text-dark fw-bold" >BOOK NOW</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;