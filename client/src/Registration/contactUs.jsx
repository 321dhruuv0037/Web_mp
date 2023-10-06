import React, { useState } from 'react';
import '../Registration/contactUs.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      // Send the formData to your server to handle email sending
      // You can use Axios or fetch to make a POST request to your server
      const mailData = {
          name,
          email,
          message
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
