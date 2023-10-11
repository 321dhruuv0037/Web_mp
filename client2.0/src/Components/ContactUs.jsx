import React, { Component } from 'react';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, sending data to a server.
    console.log('Submitted Data:', this.state);
  }

  render() {
    const { name, email, phone, message } = this.state;

    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50px',
      marginBottom: '50px',
      padding: '20px',
    };

    const contactBoxStyle = {
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 19px 5px rgba(0, 0, 0, 0.19)',
      overflow: 'hidden',
    };

    const leftStyle = {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '500px',
    };

    const rightStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '25px 40px',
    };

    const fieldStyle = {
      width: '100%',
      border: '2px solid rgba(0, 0, 0, 0)',
      outline: 'none',
      backgroundColor: 'rgba(230, 230, 230, 0.6)',
      padding: '0.5rem 1rem',
      fontSize: '1.1rem',
      marginBottom: '22px',
      transition: '0.3s',
    };

    const textareaStyle = {
      minHeight: '150px',
    };

    const btnStyle = {
      width: '100%',
      padding: '0.5rem 1rem',
      backgroundColor: '#2ecc71',
      color: '#fff',
      fontSize: '1.1rem',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: '0.3s',
    };

    // Internal CSS for responsiveness
    const internalCSS = `
      /* Media Queries for Responsiveness */
      @media screen and (max-width: 767px) {
        .container {
          width: 80%; /* Decrease width for smaller screens */
        }
        .contact-box {
          flex-direction: column;
        }
        .left {
          max-width: 100%;
          height: auto;
        }
        .right {
          padding: 15px 20px;
        }
      }
      /* Media Queries for Responsiveness */
      @media screen and (max-width: 567px) {
        .container {
          width: 90%; /* Decrease width for smaller screens */
        }
        .contact-box {
          flex-direction: column;
        }
        .left {
          max-width: 100%;
          height: auto;
        }
        .right {
          padding: 15px 20px;
        }
      }
    `;

    return (
      <div style={{ ...containerStyle }} className="container">
        <style>{internalCSS}</style>
        <div style={contactBoxStyle} className="contact-box">
          <div style={leftStyle} className="left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6013287366413!2d72.88602117495488!3d19.08125825180793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sDon%20Bosco%20Institute%20of%20Technology%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696408484759!5m2!1sen!2sin"
              style={leftStyle}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div style={rightStyle} className="right">
            <h2>Contact Us</h2>
            <input
              type="text"
              style={fieldStyle}
              name="name"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Your Name"
            />
            <input
              type="text"
              style={fieldStyle}
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Your Email"
            />
            <input
              type="text"
              style={fieldStyle}
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              placeholder="Phone"
            />
            <textarea
              placeholder="Message"
              style={{ ...fieldStyle, ...textareaStyle }}
              name="message"
              value={message}
              onChange={this.handleInputChange}
            ></textarea>
            <button type="submit" style={btnStyle} className="btn" onClick={this.handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;