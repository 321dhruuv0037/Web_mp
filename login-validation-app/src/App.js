import React, { useState } from 'react';
import './App.css';

function App() {
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [users, setUsers] = useState([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ]);

  const login = (e) => {
    e.preventDefault();
    const username = e.target.loginUsername.value;
    const password = e.target.loginPassword.value;

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setLoginError('Login successful!');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const signup = (e) => {
    e.preventDefault();
    const username = e.target.signupUsername.value;
    const password = e.target.signupPassword.value;

    if (users.some((u) => u.username === username)) {
      setSignupError('Username already exists.');
    } else {
      setUsers([...users, { username, password }]);
      setSignupError('Signup successful!');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Login</h2>
        <div className="error" id="loginError">
          {loginError}
        </div>
        <form onSubmit={login}>
          <label htmlFor="loginUsername">Username:</label>
          <input type="text" id="loginUsername" required />
          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" required />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="container">
        <h2>Signup</h2>
        <div className="error" id="signupError">
          {signupError}
        </div>
        <form onSubmit={signup}>
          <label htmlFor="signupUsername">Username:</label>
          <input type="text" id="signupUsername" required />
          <label htmlFor="signupPassword">Password:</label>
          <input type="password" id="signupPassword" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default App;

