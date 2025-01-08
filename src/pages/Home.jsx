import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Front para Pruebas</h1>
      <button onClick={() => navigate('/login')} style={{ margin: '10px', padding: '10px 20px' }}>
        Login
      </button>
      <button onClick={() => navigate('/signup')} style={{ margin: '10px', padding: '10px 20px' }}>
        Sign Up
      </button>
    </div>
  );
}

export default Home;