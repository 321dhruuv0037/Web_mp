import React, { useState } from 'react';
import './Landing.css'; // Assuming Login.css is in the same directory as this component
import { Link } from 'react-router-dom'; // Import Link

function Landing() {
  const [error, setError] = useState('');



  return (
    <div className='login'>
      <div className="loginbox">
        <img src="DBIT_Logo.png" className="avatar" alt="Avatar" />
        <h1>Login Methods</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form>
          {/* Use Link to navigate to another page */}
          <Link to="/logins" className="custom-link">Login</Link>
          <Link to="/signup" className="custom-link">SignUp</Link>
          
        </form>
      </div>
    </div>
  );
}

export default Landing;
