import React, { useState } from 'react';
import '../Registration/Signup.css'; // Create this CSS file for styling
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');

  const history = useNavigate();
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

    // Check if the password contains the user's name (case-insensitive)
    const nameParts = name.toLowerCase().split(' ');
    const passwordLower = password.toLowerCase();

    // Check all permutations of name parts
    for (let i = 0; i < nameParts.length; i++) {
      for (let j = 0; j < nameParts.length; j++) {
        if (i !== j) {
          const permutation = nameParts[i] + nameParts[j];

          // Check if the permutation exists in the password
          if (passwordLower.includes(permutation)) {
            setError('Password cannot contain your name');
            return false;
          }
        }
      }
    }

    // Check if any individual name part exists in the password
    for (const namePart of nameParts) {
      if (passwordLower.includes(namePart)) {
        setError('Password cannot contain your name');
        return false;
      }
    }

    setError(''); // Clear any previous error messages
    return true;
  };

  let userTypeValue = 0;// user level value for database
  let departmentValue = 0;// user department

  const isEmailValid = (email) => {

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // checking email format
    const studentITRegex = /^3.*@dbit\.in$/; //checking for student email
    const teachingStaffRegex = /^101.*@dbit\.in$/; //checking for teacher's email
    const fatherRegex = /^103.*@dbit\.in$/; //checking for father's email
    const nonTeachingStaffRegex = /^102.*@dbit\.in$/; //checking for non teaching staff email

    if (emailRegex.test(email)) {

      if (studentITRegex.test(email)) {
        userTypeValue = 1;
      } else if (teachingStaffRegex.test(email)) {
        userTypeValue = 3;
      } else if (fatherRegex.test(email)) {
        userTypeValue = 4;
      } else if (nonTeachingStaffRegex.test(email)) {
        userTypeValue = 2;
      } else {
        userTypeValue = 0; //default user/customer
      }

    } else {
      setError('Please enter valid email');
      return;
    }

    setError(''); // Clear any previous error messages
    return true;
  };



  const setDepartmentValue = (department) => {

    if (userTypeValue === 1) {
      switch (department) {
        case 'IT':
          departmentValue = 11;
          return true;
        case 'COMPS':
          departmentValue = 12;
          return true;
        case 'EXTC':
          departmentValue = 13;
          return true;
        case 'MECH':
          departmentValue = 14;
          return true;
        default:
          setError('Email does not match with the Department chosen');
          return false;
      }
    } else if(userTypeValue === 3){
      switch (department) {
        case 'IT':
          departmentValue = 31;
          return true;
        case 'COMPS':
          departmentValue = 32;
          return true;
        case 'EXTC':
          departmentValue = 33;
          return true;
        case 'MECH':
          departmentValue = 34;
          return true;
        default:
          setError('Email does not match with the Department chosen');
          return false;
      }
    } else if(userTypeValue === 4){
      if (department === 'NONE'){
        departmentValue = 40;
        return true;
      } else {
        setError('Email does not match with the Department chosen');
        return;
      }
    } else if(userTypeValue === 2){
      if (department === 'NONE'){
        departmentValue = 20;
        return true;
      } else {
        setError('Email does not match with the Department chosen');
        return false;
      }
    }

    setError('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    //password validation
    if (!isPasswordValid(password)) {
      return;
    }

    //email validation
    if(!isEmailValid(email)) {
      return;
    }

    //setting department value
    if(!setDepartmentValue(department)){
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/getOneUser/${email}`);

      if (response.status === 200) {
        setError('User already exists');
        return;
      } else {
        try {
          const userData = {
            name,
            password,
            email,
            department: departmentValue,
            level: userTypeValue,
          };

          const response = await fetch(`http://localhost:3000/addUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (response.status === 200) {
            history('/logins');
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
