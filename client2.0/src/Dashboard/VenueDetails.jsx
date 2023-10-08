import React from "react";
import './venues.css';
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import welcome from "../Dashboard/welcome.png"; // Add your welcome image URL here
import { Link } from "react-router-dom";

function VenueDetails() {
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
        <h2 className="section-title">Venues</h2>
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
                
                <Link to="/grounds" className="btn btn-outline-success">Know More</Link>
                
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
                
                <Link to="/halls" className="btn btn-outline-success">Know More</Link>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VenueDetails;
