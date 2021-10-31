import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './ServiceDetails.css';


const ServiceDetails = () => {


    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-grave-34944.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            });
    }, []);
    const findService = services.find(service => service._id == serviceId)
    console.log(findService);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
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
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="user" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default ServiceDetails;