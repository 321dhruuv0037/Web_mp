import React, { useState } from 'react';
import './Landing.css'; // Assuming Login.css is in the same directory as this component
import { Link } from 'react-router-dom'; // Import Link

function Logins() {
  const [error, setError] = useState('');

  

  return (
    <div className='login'>
      <div className="loginbox">
        <img src="DBIT_Logo.png" className="avatar" alt="Avatar" />
        <h1>Select User</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form>
          {/* Use Link to navigate to another page */}
          <Link to="/student" className="custom-link">Student</Link>
          <Link to="/faculty" className="custom-link">Faculty</Link>
          <Link to="/customer" className="custom-link">Customer</Link>
          
        </form>
      </div>
    </div>
  );
}

export default Logins;
