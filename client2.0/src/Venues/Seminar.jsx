import React from 'react';
import venueImage from '../assets/img3.jpg'; // Import the venue image
import backgroundImage from '../assets/img9.jpeg'; // Import the background image
import { Link } from 'react-router-dom'; // Import the Link component for login

function Seminar() {
  const venueDetails = {
    name: 'Seminar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ac odio malesuada tincidunt. Sed euismod scelerisque eleifend. Donec efficitur pharetra tortor, in facilisis tortor hendrerit non. Duis sit amet iaculis tellus.',
    location: ' Location: C Wing,DBIT Campus',
    capacity: 'Capacity: 200 people',
    openHours: 'Open Hours: 8:00 AM - 10:00 PM',
  };

  const containerStyles = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };

  const contentStyles = {
    maxWidth: '800px', // Decrease the container width
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '40px', // Increase the padding
    borderRadius: '20px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    marginTop: '20px', // Adjust spacing
    color: '#fff',
    display: 'flex', // Display image and description side by side
    flexDirection: 'column', // Stack children vertically
    alignItems: 'center', // Center horizontally
  };

  const imageStyles = {
    maxWidth: '50%', // Decrease the image size
    height: 'auto',
  };

  const descriptionStyles = {
    textAlign: 'left',
    marginLeft: '20px',
    padding: '20px 20px', // Add margin to separate image and description
  };

  const noteStyles = {
    fontSize: '18px',
    marginTop: '0px', // Adjust spacing from the description
    marginBottom: '0px', // Adjust spacing from the login button
  };

  const loginButtonStyles = {
    backgroundColor: '#17cf97', // Button background color
    color: '#fff', // Text color
    fontSize: '20px',
    padding: '10px 20px', // Padding for the button
    textDecoration: 'none', // Remove underlines
    borderRadius: '10px', // Rounded corners
    marginTop: '5px', // Spacing from the note section
    display: 'inline-block', // Display as a block-level element
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Add a hover effect
  };

  const loginButtonHoverStyles = {
    ...loginButtonStyles,
    backgroundColor: '#138a6e', // Hover background color
  };

  // Media Query for smaller screens
  const mediaQueryStyles = {
    '@media (max-width: 566px)': {
      imageStyles: {
        maxWidth: '90%', // Increase the width of the image for smaller screens
      },
      descriptionStyles: {
        padding: '10px', // Remove padding from the sides for description
      },
    },
  };

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <img src={venueImage} alt={venueDetails.name} style={{ ...imageStyles, ...mediaQueryStyles.imageStyles }} />
        <div style={{ ...descriptionStyles, ...mediaQueryStyles.descriptionStyles }}>
          <h2>{venueDetails.name}</h2>
          <p>{venueDetails.description}</p>
          <p>{venueDetails.location}</p>
          <p>{venueDetails.capacity}</p>
          <p>{venueDetails.openHours}</p>
        </div>
        <p style={noteStyles}>Please login to book this venue.</p> {/* Note prompting the user to login */}
        <Link to="/landing" style={loginButtonStyles}>Login</Link> {/* Login link styled as a button */}
      </div>
    </div>
  );
}

export default Seminar;