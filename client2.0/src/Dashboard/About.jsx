import React from "react";
import "./about.css";
import image from "../Dashboard/venue.png";

function About() {
  return (
    <section className="About">
      <div className="main">
        <img src={image} alt="" />
        <div className="About-text">
          <h2 className="section-title">About App</h2>
          <p>
            Welcome to <strong>VeBook</strong>, your all-in-one solution for
            revolutionizing the way colleges manage facility bookings and
            resources. We understand the unique challenges that educational
            institutions face in optimizing their resources, prioritizing
            bookings and ensuring the efficient utilization of their facilities.
            That's why we've created a user-friendly and intuitive web
            application designed to address these challenges head-on.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
