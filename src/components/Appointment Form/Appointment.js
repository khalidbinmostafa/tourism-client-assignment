import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div id="ui">
                    <h1 className="color-h1">Appointment Form</h1>
                    <form className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>First Name:</label>
                                <input type="text" name="fname" className="form-control" placeholder="Enter your first name" required />
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name:</label>
                                <input type="text" name="lname" className="form-control" placeholder="Enter your last name" required />
                            </div>
                        </div><br />
                        <label>Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" required /><br />
                        <div className="row">
                            <div className="col-lg-6">
                                <label>Password:</label>
                                <input type="password" name="fname" className="form-control" required />
                            </div>
                            <div className="col-lg-6">
                                <label>Re-type-password:</label>
                                <input type="password" name="lname" className="form-control" required />
                            </div>
                        </div><br />
                        <select className="form-control">
                            <option>Choose gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select><br />
                        <input type="submit" name="submit" value="submit" className=" form-control btn btn-block btn-lg color-change" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Appointment;