import React, { useState } from 'react';
import './Signup.css'; // Create this CSS file for styling

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your login logic here and handle errors
  };

  return (
    <div className='login'>
      <div className="loginbox">
      <img src="DBIT_Logo.png" className="avatar" alt="Avatar" />
      <h1>Create Account</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
      <p>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <p>Phone Number</p>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter Phone No."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input type="submit" value="Signup" /><br /><br />

      </form>
    </div>
    </div>
    
  );
}

export default Signup;
