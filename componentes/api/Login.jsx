import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './AuthContext'; 
import api from './api';
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users/login', { username, password });

      if (response.status === 200) {
        login(); 
        navigate('/comentarios'); 
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Error en el inicio de sesión. Verifica tus credenciales.');
    }
  };
  const handleGoToSignUp = () => {
    navigate('/Registrarse'); 
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
         <h2 class='logeado'>Para ver las reseñas de viaje, primero debe estar logeado.</h2>
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
      <div className="registro-link">
        <p>¿No tienes una cuenta? <button type="button" onClick={handleGoToSignUp}>Crear cuenta</button></p>
      </div>
    </form>
  );
};

export default Login;
