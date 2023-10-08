import React, { useState } from 'react';
import img2 from '../assets/img1.jpg'; // Import the background image

function Basketball() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend API)
  };

  const containerStyles = {
    maxWidth: '800px', // Increased form width
    width: '700px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    maxHeight: '700px',
    height: 'auto', // Changed height to auto for dynamic sizing
    padding: '30px', // Increased padding
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Added box shadow for a subtle effect
    flexDirection: 'column',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px', // Adjusted padding
    marginTop: '10px', // Increased margin-top
    marginBottom: '10px', // Added margin-bottom
    
    borderRadius: '10px', // Increased border radius
    fontSize: '16px', // Increased font size for better readability
  };

  const nameEmailContainerStyles = {
    display: 'flex',
    flexWrap: 'nowrap', // Allow wrapping on smaller screens
    justifyContent: 'space-between',
  };

  const nameInputStyles = {
    flex: 1,
    marginRight: '10px', // Adjust margin as needed
  };

  const dateTimeContainerStyles = {
    display: 'flex',
    flexWrap: 'nowrap', // Allow wrapping on smaller screens
    justifyContent: 'space-between',
  };

  const dateInputStyles = {
    flex: 1,
    marginRight: '20px', // Adjust margin as needed
  };
  const timeInputStyles = {
    flex: 1,
  };
  const buttonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px', // Increased border radius
    padding: '12px 24px', // Adjusted padding for the button
    cursor: 'pointer',
    fontSize: '18px', // Increased font size for the button
  };
  /* Add styles for terms and conditions alignment */
const termsContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px', // Adjust spacing
  };
  
  /* Add styles for the terms and conditions checkbox */
  const termsCheckboxStyles = {
    marginRight: '5px', // Adjust spacing
  };

  const submitButtonStyles = {
    ...buttonStyles, // Spread the buttonStyles object to inherit its properties
    backgroundColor: '#007bff',
    color: '#fff',
  };

  const submitButtonHoverStyles = {
    ...submitButtonStyles, // Spread the submitButtonStyles object to inherit its properties
    backgroundColor: '#0056b3',
  };

  const backgroundStyles = {
    margin: 0,
    padding: 0,
    backgroundImage: `url(${img2})`, // Set the background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: '#fff',
  };

  return (
    <div style={backgroundStyles}>
      <div className="football-container" style={containerStyles}>
        <h2>Book Basketball Court</h2>
        <form onSubmit={handleSubmit}>
          <div className="name-container" style={nameEmailContainerStyles}>
            <div className="name-input" style={nameInputStyles}>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={inputStyles}
                />
              </label>
            </div>
            <div className="name-input" style={nameInputStyles}>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  style={inputStyles}
                />
              </label>
            </div>
          </div>
          <div className="email-phone-container" style={nameEmailContainerStyles}>
            <div className="email-phone-input" style={nameEmailContainerStyles}>
              <div className="email-input" style={inputStyles}>
                <label>
                  Email Address:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyles}
                  />
                </label>
              </div>
              <div className="phone-input" style={inputStyles}>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    style={inputStyles}
                  />
                </label>
                </div>
            </div>
          </div>
          <div className="date-time-container" style={dateTimeContainerStyles}>
            <div className="date-input" style={dateInputStyles}>
              <label>
                Date:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  style={inputStyles}
                />
              </label>
            </div>
            <div className="time-input" style={dateInputStyles}>
              <label>
                Time:
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  style={inputStyles}
                />
              </label>
            </div>
          </div>
          <div className="payment-container">
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              style={inputStyles}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="cash">Cash</option>
              <option value="onlinePayment">Online Payment</option>
            </select>
          </label>
          </div>
          <div className="terms-container" style={termsContainerStyles}>
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
              required
            />{' '}
            I agree to the terms and conditions
          </label>
          </div>
          <button type="submit" style={submitButtonStyles}>Book Court</button>
        </form>
      </div>
    </div>
  );
}

export default Basketball;
