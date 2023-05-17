import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleLogin = async () => {
    try {
      const apiUrl = 'https://0a4900f0034fea50821185d8004a00c4.web-security-academy.net/login'; 
      const method = 'POST'; // método HTTP adecuado

      const requestBody = {
        username,
        password,
      };

      const response = await axios.request({
        method,
        url: `${apiUrl}`,
        data: requestBody,
      });

      if (response.status === 200) {
        setResponse('HACKED');
      } else {
        setResponse('FAILED');
      }
    } catch (error) {
      console.error(error);
      setResponse('FAILED');
    }
  };

  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'Background' }}>
<div className='login-box' style={{backgroundColor: 'white'}}>
    
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>{response}</div>
     </div> 
</div>
  );
};

export default LoginPage;