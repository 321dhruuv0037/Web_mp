import React, {Component} from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const mailData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };

        try {
            const response = await fetch(`http://localhost:3000/sendEmail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mailData),
            });

            if (response.status === 200) {
                console.log('Done');
            } else {
                console.error('Server error');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    }

    render() {
        const {name, email, message} = this.state;

        const containerStyle = {
            position: 'relative',
            width: '100%', // Adjust width to 100% for responsiveness
            height: 'auto', // Adjust height to auto for responsiveness
            display: 'flex',
            flexdirection: 'row',


            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '120px',
            marginBottom: '50px',
            padding: '20px', // Adjust padding for responsiveness
        };

        const contactBoxStyle = {
            maxWidth: '950px',
            maxheight: '800px',

            gridTemplateColumns: '1fr', // Change to 1 column for smaller screens
            justifyCodisplay: 'flexbox', ntent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 19px 5px rgba(0, 0, 0, 0.19)',
            overflow: 'hidden',
        };

        const leftStyle = {
            // Map styles for big screens
            width: '100%',
            maxWidth: '100%',
            height: '100%',
        };

        const rightStyle = {
            padding: '25px 40px',
        };

        const h2Style = {
            position: 'relative',
            padding: '0 0 10px',
            marginBottom: '10px',
        };

        const h2AfterStyle = {
            content: '',
            position: 'absolute',
            left: '50%',
            bottom: '0',
            transform: 'translateX(-50%)',
            height: '4px',
            width: '50px',
            borderRadius: '2px',
            backgroundColor: '#2ecc71',
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

        const fieldFocusStyle = {
            border: '2px solid rgba(30, 85, 250, 0.47)',
            backgroundColor: '#fff',
        };

        /* Media Queries for Responsiveness */

        /* Small screens (phones) */
        const smallScreenStyles = {
            container: {
                marginTop: '120px', /* Adjust margin-top for smaller screens */

            },
            contactBox: {

                display: 'grid',
                flexdirection: 'row',
            },
            left: {
                maxWidth: '100%', /* Adjust max-width for smaller screens */
                height: 'auto', /* Adjust height for smaller screens */
            },
            right: {
                padding: '15px 20px', /* Adjust padding for smaller screens */
            },
        };

        return (
            <div style={{...containerStyle, ...smallScreenStyles.container}} className="container">
                <div style={{...contactBoxStyle, ...smallScreenStyles.contactBox}} className="contact-box">
                    <div style={{...leftStyle, ...smallScreenStyles.left}} className="left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6013287366413!2d72.88602117495488!3d19.08125825180793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sDon%20Bosco%20Institute%20of%20Technology%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696408484759!5m2!1sen!2sin"
                            style={{...leftStyle, ...smallScreenStyles.left}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div style={{...rightStyle, ...smallScreenStyles.right}} className="right">
                        <h2 style={h2Style}>Contact Us</h2>
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
                        <textarea
                            placeholder="Message"
                            style={{...fieldStyle, ...textareaStyle}}
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
