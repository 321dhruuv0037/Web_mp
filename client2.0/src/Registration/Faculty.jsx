import React, { useState } from 'react';
import '../Registration/Login.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Faculty() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Add your login logic here and handle errors
    // Assuming login is successful, you can redirect to the dashboard page
    if (username === 'aryaan2903' && password === '1234') {
      // Replace 'yourUsername' and 'yourPassword' with your actual validation logic
      // Redirect to the dashboard page
      navigate('/faculty-dashboard');
    } else {
      // Handle login errors and set the error state if necessary
      setError('Invalid username or password');
    }
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
