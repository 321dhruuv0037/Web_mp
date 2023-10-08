import React, { Component } from "react";
import FacultyCards from './FacultyCards';
import { Link } from 'react-router-dom';
import img3 from "../assets/img3.jpg"
import img5 from "../assets/img5.jpg"


class FacultyHalls extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <FacultyCards imgsrc={img3} title="Seminar Hall">
                            <Link to='/faculty-seminar'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </FacultyCards>
                    </div>
                    <div className="col-md-6">
                        <FacultyCards imgsrc={img5} title="Mondini Hall">
                        <Link to='/faculty-mondini'>
                                <button className='btn btn-outline-success'>Book Now</button>
                            </Link>
                        </FacultyCards>
                    </div>

                </div>
            </div>
        );
    }
}

export default FacultyHalls;
