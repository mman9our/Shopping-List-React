import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/app/home');
};
    
  return (
    <>
      <div className='login-container'>
        <div className="header-login">
          <h2 className='checkout-title'>Hello Again👋 </h2>
        </div>
        <form id='login-form' onSubmit={handleSubmit}>
          <div>
            <h4 htmlFor="name">Email:</h4>
            <input
              type="text"
              placeholder='Enter your email'
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h4 htmlFor="email">Password:</h4>
            <input
              type="password"
              placeholder='Enter your password'
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='btn-submit' type="submit">Sign in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
