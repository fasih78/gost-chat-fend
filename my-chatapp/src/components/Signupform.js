import React, { useState } from 'react';
// import { signup } from '../dataSource/signup';
import { useNavigate } from "react-router-dom";
import { signup } from '../dataSource/signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { googleSignup } from '../dataSource/signup';


export default function Signupform() {
  const navigate = useNavigate();


  const [password, setPassword] = useState('');
  const [successful, setSucessful] = useState('')
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [response, setResponse] = useState('');
  const [addressFile, setAddressFile] = useState(null);





  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const response = await signup(name, email, city, state, password, gender, country, phonenumber, address, profileImage)
    console.log(response, 'response');
    setResponse(response)
    if (response?.data?.success) {
      alert('Signup Successfully')
      navigate("/");
    }
    else {

      alert(response?.response?.data?.message)

    }
    setLoading(false);

  };


  return (
    <>
      <div className="login-container">
        <h2 className='h-style'>Signup</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="name">name</label>
            <input
              type="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input
              type="city"
              id="city"
              placeholder="Enter your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="state">State</label>
            <input
              type="state"
              id="state"
              placeholder="Enter your State"
              value={state}
              onChange={(e) => setState(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}

            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <input
              type="country"
              id="country"
              placeholder="Enter your Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="phonenumber">Phonenumber</label>
            <input
              type="phonenumber"
              id="phonenumber"
              placeholder="Enter your Phonenumber"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="address"
              id="address"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}

            />
          </div>
          <div className="input-group">
            <label htmlFor="profileimage">Profile Image</label>
            <input
              type="file"
              id="profileimage"
              accept="image/*"
              placeholder="Choose an Image"
              onChange={(e) => {
                console.log(e.target.files?.[0], '111')
                setProfileImage(e.target.files?.[0])
              }
              }
            />
          </div>
          <button type="submit" disabled={loading} className='button'>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <button className='button' onClick={(e) => {
            e.preventDefault();
            // googleSignup();
            window.location.href = 'http://localhost:2000/auth/google';
          }}>
            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
            Log In with Google
          </button>
        </form>
      </div>



    </>
  )
}
