import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { login } from '../dataSource/login';
import { useNavigate } from "react-router-dom";
import { googleSignup } from '../dataSource/signup';
// import { useNavigate } from "react-router-dom";

export const      LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSucessful] = useState('')
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');


  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    setError('');
    console.log(username, password)
    try {
      const response = await login(email, password);
     
  
      if (response.status === 200) {
        
        alert('Login Successfully');
        navigate('/dashboard');
      }
      else if(response.status === 400){
        alert('Invalid Email Address')
      }
      else if(response.status === 401){
        alert('Wrong Password')
      }
    } catch (error) {
      // Extracting the error message based on your API response
      const errorMessage = error.response ? error.response.data.message : 'An unexpected error occurred.';
      alert(errorMessage); // Show the alert with the error message
    } finally {
      setLoading(false);
    }
  
  };



  return (
    <>
      <div className="login-container">
        <h2 className='h-style'>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading} className='button'>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <Link to="/signup" className='outline-bottom-link'>
          <button className='outline-button'>
            Create New Account
          </button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;