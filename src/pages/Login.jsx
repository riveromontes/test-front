import React from 'react';

function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Page</h1>
      <form>
        <input type="email" placeholder="Email" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <input type="password" placeholder="Password" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <button type="submit" style={{ margin: '10px', padding: '10px 20px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
