import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/login', { username, password });
      login(); 
      navigate('/protegida'); // Redirige a la ruta protegida
    } catch (error) {
      alert('Error en el inicio de sesión: ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;



