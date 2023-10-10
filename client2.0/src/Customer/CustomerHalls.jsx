import React, { Component } from "react";
import CustomerCards from './CustomerCards';
import { Link } from 'react-router-dom';
import img3 from "../assets/img3.jpg"
import img5 from "../assets/img5.jpg"
import CustomerNavbar from "./CustomerNavbar";

class CustomerHalls extends Component {
    render() {
        return (
            <div>
                <CustomerNavbar/>
                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <CustomerCards imgsrc={img3} title="Seminar Hall">
                            <Link to='/customer-seminar'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </CustomerCards>
                    </div>
                    <div className="col-md-6">
                        <CustomerCards imgsrc={img5} title="Mondini Hall">
                        <Link to='/customer-mondini'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </CustomerCards>
                    </div>

                </div>
            </div>
            </div>
            
        );
    }
}

export default CustomerHalls;
