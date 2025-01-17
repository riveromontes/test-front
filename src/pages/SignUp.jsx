import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    cedula_letter: '',
    cedula_number: '',
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register. Please try again.');
      }

      const data = await response.json();
      setMessage('Registration successful! Welcome!');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={formData.lastname}
          onChange={handleChange}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <select
          name="cedula_letter"
          value={formData.cedula_letter}
          onChange={handleChange}
          style={{ margin: '10px', padding: '10px' }}
        >
          <option value="">Seleccione</option>
          <option value="V">V</option>
          <option value="E">E</option>
          <option value="P">P</option>
        </select>
        <br />
        <input
          type="text"
          name="cedula_number"
          placeholder="Cédula"
          value={formData.cedula_number}
          onChange={handleChange}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="Email"
          value={formData.username}
          onChange={handleChange}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ margin: '10px', padding: '10px' }}
        />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
          <button type="submit" style={{ padding: '10px 20px' }}>Sign Up</button>
          <button type="button" onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>
            Back to Home
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUp;