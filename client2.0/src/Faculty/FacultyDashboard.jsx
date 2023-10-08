import React from "react";
import '../Dashboard/venues.css';
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import welcome from "../Dashboard/welcome.png"; // Add your welcome image URL here
import { Link } from "react-router-dom";
import FacultyTable from "./FacultyTable";
import FacultyNavbar from "./FacultyNavbar";

function FacultyDashboard() {
  const groundsInfo = {
    title: "Grounds",
    imageSrc: img1, // Replace with the actual image URL
    description: "Explore our wide range of outdoor grounds suitable for sports events, concerts, and more. Our well-maintained grounds provide the perfect backdrop for your activities."
  };

  const hallsInfo = {
    title: "Halls",
    imageSrc: img3, // Replace with the actual image URL
    description: "Discover our spacious halls that are perfect for conferences, seminars, and social gatherings. These versatile spaces can be customized to meet your event needs."
  };

  return (
    <div>
      <FacultyNavbar />
      <section className="dashboard-section">
        <div className="container">
          <div className="welcome-message">
            <div className="welcome-content">
              <h2>Welcome to VeBook</h2>
              <p>Explore the various venues within the DBIT Campus for your events and gatherings. Whether you need outdoor grounds or indoor halls, we have the perfect platform for you.</p>
            </div>
            <div className="welcome-image">
              <img
                src={welcome}
                alt="Welcome Image"
                className="img-fluid"
              />
            </div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Venues</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="dashboard-card">
                <img
                  src={groundsInfo.imageSrc}
                  className="dashboard-img"
                  alt={groundsInfo.title}
                />
                <div className="dashboard-info">
                  <h3>{groundsInfo.title}</h3>
                  <p>{groundsInfo.description}</p>

                  <Link to="/faculty-grounds" className="btn btn-outline-success">Know More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dashboard-card">
                <img
                  src={hallsInfo.imageSrc}
                  className="dashboard-img"
                  alt={hallsInfo.title}
                />
                <div className="dashboard-info">
                  <h3>{hallsInfo.title}</h3>
                  <p>{hallsInfo.description}</p>

                  <Link to="/faculty-halls" className="btn btn-outline-success">Know More</Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Include the FacultyTable component within the JSX */}
          <FacultyTable />
        </div>
      </section>
    </div>
  );
}

export default FacultyDashboard;
