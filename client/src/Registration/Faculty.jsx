import React, { useState } from 'react';
import './Login.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

function Faculty() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your login logic here and handle errors
  };

  return (
    <div className='login'>
      <div className="loginbox">
      <img src="DBIT_Logo.png" className="avatar" alt="Avatar" />
      <h1>Faculty Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" /><br /><br />
        <div className='create'>
          <Link to="/signup">Don't have an Account? Create One</Link>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Faculty;
