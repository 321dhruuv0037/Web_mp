import React from "react";
import {
  FaEnvelopeSquare,
  FaFileDownload,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./about.css";
import image1 from "../assets/Aryaan.webp"; // Import your WebP images
import image2 from "../assets/Dhruuv.webp";
import image3 from "../assets/Advay.webp";
import resume2 from "../assets/dhruuv_resume.pdf";
const iconSize = "32px";
function AboutUs() {
  const teamMembers = [
    {
      name: "Aryaan Sawant",
      role: "Web Developer",
      imageSrc: image1,
      socialLinks: {
        twitter: "#",
        github: "https://github.com/ARYAAN2903",
        resume: resume2,
      },
      description: "जसे करावे तसे भरावे",
    },
    {
      name: "Dhruuv Naik",
      role: "Web Developer",
      imageSrc: image2, // Replace with John's image URL
      socialLinks: {
        twitter: "#",
        github: "https://github.com/321dhruuv0037",
        resume: resume2,
      },
      description:
        "A jack of all trades is a master of none but oftentimes better than a master of one.",
    },
    {
      name: "Advay Gujar",
      role: "Designer",
      imageSrc: image3, // Replace with Jane's image URL
      socialLinks: {
        twitter: "#",
        github: "https://github.com/sleepyslayer",
        resume: resume2,
      },
      description:
        "ूबते को तिनके का सहारा.",
    },
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="aboutUs-text">
          <h2 className="section-title">About Us</h2>
          <p>
            Welcome to <strong>VeBook</strong>, your all-in-one solution for
            revolutionizing the way colleges manage facility bookings and
            resources. We understand the unique challenges that educational
            institutions face in optimizing their resources, prioritizing
            bookings and ensuring the efficient utilization of their facilities.
            That's why we've created a user-friendly and intuitive web
            application designed to address these challenges head-on.
          </p>
          <p>
            At <strong>VeBook</strong>, we believe that every college should
            have the tools necessary to streamline their booking processes,
            enhance accessibility and generate revenue to support the
            maintenance of their valuable facilities. Our mission is to empower
            colleges with a comprehensive platform that simplifies resource
            allocation and booking coordination, ultimately leading to a more
            cost-effective and vibrant campus environment.
          </p>
          <h2 className="section-title">Our Commitment</h2>
          <p>
            <strong>1. Efficient Resource Allocation:</strong> We recognize the
            importance of a well-structured hierarchy in the booking system. Our
            platform provides an intuitive hierarchy system that ensures
            resources are allocated efficiently and fairly. Whether you're a
            faculty member or an administrator, you'll have access to the tools
            you need to manage bookings effectively.
          </p>
          <p>
            {" "}
            <strong>2. Streamlined Coordination:</strong> Managing bookings from
            faculties with varying levels of authority can be challenging. With{" "}
            <strong>VeBook</strong>, we've simplified this process by providing
            clear communication channels and customizable permissions, ensuring
            that everyone involved can seamlessly coordinate bookings without
            unnecessary complications.
          </p>
          <p>
            <strong>3. Maximizing Revenue Streams:</strong> We understand that
            colleges often struggle to cover high maintenance costs. That's why
            our platform includes features that help colleges identify
            opportunities for revenue generation. By optimizing facility usage
            during after-college hours, colleges can generate income that
            directly supports the maintenance and improvement of their
            facilities.
          </p>
          <p>
            <strong>4. Enhancing Accessibility:</strong> Accessibility is key to
            ensuring that everyone within the college community can benefit from
            its resources. <strong>VeBook</strong> is designed with
            accessibility in mind, making it easy for users of all backgrounds
            and abilities to navigate and utilize the system effectively.
          </p>
          <h2 className="section-title">
            Join Us in Transforming College Facilities
          </h2>
          <p>
            Join us in our mission to transform the way colleges manage their
            facilities. At <strong>VeBook</strong>, we're committed to
            supporting colleges in their efforts to create a more efficient,
            accessible and financially sustainable campus environment. We
            believe that by working together, we can help colleges overcome
            their challenges and unlock the full potential of their resources.
            Contact us today to learn more about how <strong>VeBook</strong> can
            benefit your college and let's embark on a journey toward more
            efficient resource allocation, streamlined coordination and
            increased revenue generation. Together, we can make a positive
            impact on your college's future.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-sm-4 col-md-4" key={index}>
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
                      <a
                        href={member.socialLinks.twitter}
                        className="twitter"
                        target="_blank"
                      >
                        <FaEnvelopeSquare size={iconSize} />{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socialLinks.github}
                        className="github"
                        target="_blank"
                      >
                        <FaGithubSquare size={iconSize} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socialLinks.resume}
                        className="github"
                        target="_blank"
                      >
                        <FaFileDownload size={iconSize} />
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
