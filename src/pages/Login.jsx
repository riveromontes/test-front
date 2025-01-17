import React, { useState } from 'react';
import { apiClient } from './../services/apiClient';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await apiClient('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });


      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        console.log('Inicio de sesión exitoso');
        navigate('/Dashboard'); // Redirige a una página segura
      } else {
        setError(data.message);
      }
    


      const data = await response.json();
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      console.log('Inicio de sesión exitoso');
    } catch (error) {
    setError(error.message);
    }

  };



  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}> 
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
            <button type="button" onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>
              Back to Home
            </button>
          </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
