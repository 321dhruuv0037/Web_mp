import React, { Component } from "react";
import StudentNavbar from './StudentNavbar'; // Import the StudentNavbar component
import StudentCards from './StudentCards';
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"

class StudentGrounds extends Component {
    render() {
        return (
            <div>
                <StudentNavbar /> {/* Enclose the navbar at the top */}
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <StudentCards imgsrc={img1} title="Basketball Court">
                                <Link to='/student-basketball'>
                                    <button className='btn btn-outline-success'>Book Now</button>
                                </Link>
                            </StudentCards>
                        </div>
                        <div className="col-md-4">
                            <StudentCards imgsrc={img2} title="Football Ground">
                                <Link to='/student-football'>
                                    <button className='btn btn-outline-success'>Book Now</button>
                                </Link>
                            </StudentCards>
                        </div>
                        <div className="col-md-4">
                            <StudentCards imgsrc={img4} title="Top Court">
                                <Link to='/student-top'>
                                    <button className='btn btn-outline-success'>Book Now</button>
                                </Link>
                            </StudentCards>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentGrounds;
