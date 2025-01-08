import React from 'react';

function SignUp() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sign Up Page</h1>
      <form>
        <input type="text" placeholder="Full Name" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <input type="email" placeholder="Email" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <input type="password" placeholder="Password" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <button type="submit" style={{ margin: '10px', padding: '10px 20px' }}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
