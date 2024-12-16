
import axios from 'axios';
import { BASE_URL } from '../config';




// export const login = async (email, password) => {
//   try {
//     const response = await fetch('http://localhost:2000/user/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

    
//     const data = await response.json();
//     console.log('Login successful:', data);

//     return data;
//   } catch (error) {
//     console.error('Error during login:', error);
//     throw error;
//   }
// };
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}user/login`, {
      email,
      password,
    });

    console.log('login  successful:', response.data);
    return response;
  } catch (error) {
    console.error('Error during login :', error.response ? error.response.data : error.message);
    return error;
  }
};