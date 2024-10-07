import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if ((username === 'Poojashree' && password === 'password') || (username === 'Dinesh' && password === 'password')) {
      setUser(username);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className='loginpage'>
      <div className='login-card'>
        <h2>Sign In</h2>
        <div className="mb-3">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    </form>
  )


};

export default Login;