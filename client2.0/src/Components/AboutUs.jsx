import React from "react";
import { FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import './about.css';

function AboutUs() {
    const teamMembers = [
        {
            name: "Aryaan Sawant",
            role: "Head of SEO",
            imageSrc: "https://reactjs.org/logo-og.png",
            socialLinks: {
                twitter: "#",
                github: "#",
                instagram: "#"
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia vitae natus nihil deleniti ipsum voluptatum excepturi quibusdam eligendi nulla repudiandae voluptate enim doloribus asperiores esse rem, consectetur, corporis dolores."
        },
        {
            name: "John Doe",
            role: "Web Developer",
            imageSrc: "https://reactjs.org/logo-og.png", // Replace with John's image URL
            socialLinks: {
                twitter: "#",
                github: "#",
                instagram: "#"
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia vitae natus nihil deleniti ipsum voluptatum excepturi quibusdam eligendi nulla repudiandae voluptate enim doloribus asperiores esse rem, consectetur, corporis dolores."
        },
        {
            name: "Jane Smith",
            role: "Designer",
            imageSrc: "https://reactjs.org/logo-og.png", // Replace with Jane's image URL
            socialLinks: {
                twitter: "#",
                github: "#",
                instagram: "#"
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia vitae natus nihil deleniti ipsum voluptatum excepturi quibusdam eligendi nulla repudiandae voluptate enim doloribus asperiores esse rem, consectetur, corporis dolores."
        },
    ];

    return (
        <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">
                            The Team Behind Our Company
                        </h2>
                        <p className="section-subtitle">
                            Meet our dedicated team members.
                        </p>
                    </div>
                    {teamMembers.map((member, index) => (
                        <div className="col-sm-6 col-md-4" key={index}>
                            <div className="team-item">
                                <img
                                    src={member.imageSrc}
                                    className="team-img"
                                    alt={member.name}
                                />
                                <h3>{member.name}</h3>
                                <div className="team-info">
                                    <p>{member.role}</p>
                                    <p>{member.description}</p>

                                    <ul className="team-icon">
                                        <li>
                                            <a href={member.socialLinks.twitter} className="twitter">
                                                <FaTwitterSquare />{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.socialLinks.github} className="github">
                                                <FaGithubSquare />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.socialLinks.instagram} className="instagram">
                                                <FaInstagramSquare />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
