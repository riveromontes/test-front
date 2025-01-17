import { renewToken } from './authService';


//ESTO ES UN INTERCEPTOR PERSONALIZADO
//Hace que la función renewToken se invoque automáticamente cuando el Access Token expira, 
// intercepta las solicitudes HTTP y verifica si el token sigue siendo válido.


export const apiClient = async (url, options = {}) => {
  let token = localStorage.getItem('token');

  // Agrega el token al encabezado de la solicitud
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  let response = await fetch(url, options);

  // Si el token ha expirado, intenta renovarlo
  if (response.status === 401) {
    token = await renewToken();

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
      response = await fetch(url, options);
    }
  }

  return response;
};
