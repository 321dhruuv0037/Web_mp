import React, { useState } from 'react';
import '../Registration/Signup.css'; // Create this CSS file for styling

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
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

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regex1 = /^3.*@dbit\.in$/;
    const regex2 = /^101.*@dbit\.in$/;
    if (emailRegex.test(email)) {
      if (regex1.test(email)) {
        userTypeValue = 1;
      } else if (regex2.test(email)) {
        userTypeValue = 2;
      } else {
        userTypeValue = 3;
      }
    } else {
      setError('Please enter valid email');
      return;
    }

    setError('');

    const userData = {
      name,
      password,
      email,
      department: departmentValue,
      level: userTypeValue,
    };

    try {
      const response = await fetch(`http://localhost:3000/getOneUser/${email}`);

      if (response.status === 200) {
        setError('User already exists');
        return;
      } else {
        try {
          const response = await fetch(`http://localhost:3000/addUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (response.status === 200) {
            window.location.href = '/logins';
          } else {
            console.error('Server error');
          }
        } catch (error) {
          console.error('An error occurred', error);
        }
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
            required
          />
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="d-flex">
            <div className="w-50 pr-2">
              <p>Department</p>
              <select
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="" disabled>Select Department</option>
                <option value="IT">IT</option>
                <option value="COMPS">COMPS</option>
                <option value="EXTC">EXTC</option>
                <option value="MECH">MECH</option>
                <option value="NONE">NONE</option>
                {/* Add more department options as needed */}
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