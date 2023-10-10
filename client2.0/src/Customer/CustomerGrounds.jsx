import React, { Component } from "react";
import  CustomerCards from './CustomerCards';
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"
import CustomerNavbar from "./CustomerNavbar";

class CustomerGrounds extends Component {
    render() {
        return (
            <div>
                <CustomerNavbar/>
                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <CustomerCards imgsrc={img1} title="Basketball Court">
                            <Link to='/customer-basketball'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </CustomerCards>
                    </div>
                    <div className="col-md-4">
                        <CustomerCards imgsrc={img2} title="Football Ground">
                        <Link to='/customer-football'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </CustomerCards>
                    </div>
                    <div className="col-md-4">
                        <CustomerCards imgsrc={img4} title="Top Court">
                        <Link to='/customer-top'>
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

export default CustomerGrounds;
