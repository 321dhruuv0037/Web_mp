import React, { Component } from "react";
import FacultyCards from './FacultyCards';
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"
import FacultyNavbar from "./FacultyNavbar";

class FacultyGrounds extends Component {
    render() {
        return (
            <div>
                <FacultyNavbar/>
                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <FacultyCards imgsrc={img1} title="Basketball Court">
                            <Link to='/faculty-basketball'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </FacultyCards>
                    </div>
                    <div className="col-md-4">
                        <FacultyCards imgsrc={img2} title="Football Ground">
                        <Link to='/faculty-football'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </FacultyCards>
                    </div>
                    <div className="col-md-4">
                        <FacultyCards imgsrc={img4} title="Top Court">
                        <Link to='/faculty-top'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </FacultyCards>
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default FacultyGrounds;
