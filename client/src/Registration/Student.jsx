import React, { useState } from 'react';
import './Login.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';
import { getUserVariable, setUserVariable, setLevelVariable, getLevelVariable } from '../global';

function Student() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
      e.preventDefault();
      // You can add your login logic here and handle errors
      if (!email || !password) {
          setError('Please enter both username and password.');
          return;
      }

      try {
          const response = await fetch(`http://localhost:3000/getOneUser/${email}`);

          if (response.status === 200) {
              const user = await response.json();

              if (password === user.password) {
                  if (user.level === 1) {
                      setError('');
                      alert("Valid credentials");
                      setUserVariable(user.id);
                      setLevelVariable(user.level);
                      window.location.href = '/';
                  } else {
                      setError("Invalid email or password");
                  }
              } else {
                  setError("Invalid email or password");
              }
          } else if (response.status === 404) {
              setError("Invalid email or password");
          } else {
              console.error('Server error');
          }
      } catch (error) {
          console.error('An error occurred', error);
      }
  };

  return (
    <div className='login'>
      <div className="loginbox">
      <img src="DBIT_Logo.png" className="avatar" alt="Avatar" />
      <h1>Student Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <p>Email</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default Student;
