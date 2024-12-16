
import axios from 'axios';
import { BASE_URL } from '../config';


// export const signup = async (email, password) => {
//     try {
//       const response = await fetch('http://localhost:2000/user/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });


//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }


//       const data = await response.json();
//       console.log('Sign up successful:', data);

//       return data;
//     } catch (error) {
//       console.error('Error during sign up:', error);
//       throw error;
//     }
//   };

// export const signup = async (username, email, city, state, password, gender, country, phonenumber, address, profileimage) => {
//   try {
//     const response = await axios.post(`${BASE_URL}user/signup`, {
//       username,
//       email,
//       city,
//       state,
//       password,
//       gender,
//       country,
//       phonenumber,
//       address,
//       profileimage
//     });

//     console.log('Sign up successful:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error during sign up:', error.response ? error.response.data : error.message);
//     return error;
//   }
// };
export const signup = async (username, email, city, state, password, gender, country, phonenumber, address, profileimage) => {
  try {
    // Create a new FormData object
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('password', password);
    formData.append('gender', gender);
    formData.append('country', country);
    formData.append('phonenumber', phonenumber);
    formData.append('address', address);

    // Append the profile image file to the formData
    formData.append('file', profileimage);
console.log(address, 'address');

    // Make the POST request with the formData
    const response = await axios.post(`${BASE_URL}user/signup`,formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure the content type is set for form data
      },
    });

    console.log('Sign up successful:', response);
    return response;
  } catch (error) {
    console.error('Error during sign up:', error.response ? error.response.data : error.message);
    return error;
  }
};

export const googleSignup = async () => {
  try {
    const response = await axios.get(`${BASE_URL}auth/google`, {
    });
    console.log(response, "response")
    return response

  }
  catch (error) {
    console.error('Error during sign up:', error.response ? error.response.data : error.message);
    return error;
  }
}