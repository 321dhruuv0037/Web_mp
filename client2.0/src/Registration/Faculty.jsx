import React, {useState} from 'react';
import '../Registration/Login.css'; // Create this CSS file for styling
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {
    getUserVariable,
    setUserVariable,
    setLevelVariable,
    getLevelVariable,
    setEmailVariable,
    setNameVariable
} from '../global';


function Faculty() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // You can add your login logic here and handle errors
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;

        }

        try {
            const response = await fetch(`http://localhost:3000/getOneUser/${email}`);

            if (response.status === 200) {
                const user = await response.json();

                if (password === user.password) {
                    if (user.level != 1 || user.level != 0) {
                        setUserVariable(user.id);
                        setLevelVariable(user.level);
                        setEmailVariable(user.email);
                        setNameVariable(user.name);
                        history('/faculty-dashboard');
                    } else {
                        console.log('Error1');
                        setError("Invalid username or password");
                    }
                    // You can redirect the user or perform other actions upon successful login
                } else {
                    console.log('Error2');
                    setError("Invalid username or password");
                }
            } else if (response.status === 404) {
                console.log('Error3');
                setError("Invalid username or password");
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
                <img src="DBIT_Logo.png" className="avatar" alt="Avatar"/>
                <h1>Faculty Login</h1>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <form onSubmit={handleLogin}>
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
                    <input type="submit" value="Login"/><br/><br/>
                    <div className='create'>
                        <Link to="/signup">Don't have an Account? Create One</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Faculty;
