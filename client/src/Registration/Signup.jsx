import React, { useState } from 'react';
import '../Registration/Signup.css'; // Create this CSS file for styling

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  const isPasswordValid = (password) => {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter.');
      return false;
    }

    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.');
      return false;
    }

    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
      setError('Password must contain at least one digit.');
      return false;
    }

    // Check if password contains at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setError('Password must contain at least one special character.');
      return false;
    }

    // Check if the password contains the user's name (case insensitive)
    if (name && password.toLowerCase().includes(name.toLowerCase())) {
      setError('Password cannot contain your name.');
      return false;
    }

    setError(''); // Clear any previous error messages
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // You can add your login logic here and handle errors
    if (!isPasswordValid(password)) {
      return;
    }

    let departmentValue = 0;
    switch (department) {
      case 'IT':
        departmentValue = 1;
        break;
      case 'COMPS':
        departmentValue = 2;
        break;
      case 'EXTC':
        departmentValue = 3;
        break;
      case 'MECH':
        departmentValue = 4;
        break;
      case 'NONE':
        departmentValue = 5;
        break;
      default:
        departmentValue = 0;
    }

    setError('');

    let userTypeValue = 0;
    switch (userType) {
      case 'Student':
        userTypeValue = 1;
        break;
      case 'Faculty':
        userTypeValue = 2;
        break;
      case 'Customer':
        userTypeValue = 3;
        break;
      default:
        userTypeValue = 0;
    }

    setError('');

    const userData = {
      name,
      password,
      email,
      department: departmentValue,
      level: userTypeValue, // Assuming userType corresponds to "level" on the server
    };

    try{
      const response = await fetch(`http://localhost:3000/addUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 200) {
      window.location.href = '/Logins.jsx';
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
        <h1>Create Account</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignUp}>
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