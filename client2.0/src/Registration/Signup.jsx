import React, { useState } from 'react';
import '../Registration/Signup.css'; // Create this CSS file for styling

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [userType, setUserType] = useState('');
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
          <p>Email</p>
          <input
            type="text"
            name="email"
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
          <div className="d-flex">
            <div className="w-50 pr-2">
              <p>Department</p>
              <select
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="COMPS">COMPS</option>
                <option value="EXTC">EXTC</option>
                <option value="MECH">MECH</option>
                <option value="NONE">NONE</option>
                {/* Add more department options as needed */}
              </select>
            </div>
            <div className="w-50 pl-2">
              <p>User Type</p>
              <select
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">Select User Type</option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Customer">Customer</option>
                {/* Add more user type options as needed */}
              </select>
            </div>
          </div>
          <input type="submit" value="Signup" /><br /><br />
        </form>
      </div>
    </div>
  );
}

export default Signup;
