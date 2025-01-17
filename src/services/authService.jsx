export const renewToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
  
//Función que nos permite importar y usar renewToken en cualquier componente 
// de React o archivo donde necesites renovar el token.



    if (!refreshToken) return;
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        return data.token;
      } else {
        console.error('Error al renovar el token');
        return null;
      }
    } catch (err) {
      console.error('Error en la conexión con el servidor', err);
      return null;
    }
  };



  //EJEMPLO DE COMO IMPORTAR Y USAR
  
/* import React, { useEffect } from 'react';
import { renewToken } from './services/authService';

function App() {
  useEffect(() => {
    // Llama a la función para renovar el token al cargar la aplicación
    const refreshAccessToken = async () => {
      const newToken = await renewToken();
      if (newToken) {
        console.log('Token renovado:', newToken);
      }
    };

    refreshAccessToken();
  }, []);

  return (
    <div>
      <h1>Bienvenido a la aplicación</h1>
    </div>
  );
}

export default App; */
  