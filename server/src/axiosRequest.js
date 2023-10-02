import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm'; // https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm
        export async function getUserDetails(username, password) {
        try {
            const response = await axios.get(`http://localhost:3000/users/${username}`); // Replace with your API URL
            let userDetails = null;
            const user = response.data; // Assuming your API returns user data as JSON

            if (response.status === 200){
                // Store the user details in variables
                userDetails = {
                password: user.password
                };
                if (password === userDetails.password){
                    console.log('Login successful')
                    document.getElementById('loginError').textContent = 'Login successful!';
                } else {
                    document.getElementById('loginError').textContent = 'Invalid username or password.';
                }
            } else if(response.status === 404){
                document.getElementById('loginError').textContent = 'Invalid username or password.';
            }

        } catch (error) {
                console.error(error);
                }
        }