import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { username, password });
      alert('Usuario registrado con éxito');
    } catch (error) {
      alert('Error al registrar: ' + error.response.data);
    }
  };
 
  const handleGoToLogin = () => {
    navigate('/Logearse'); 
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Registro</h2>
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
      <button type="submit" >Registrar</button>
      <div className="registro-link">
        <p>¿Ya tienes una cuenta? <button type="button" onClick={handleGoToLogin}>Ir a iniciar sesión</button></p>
      </div>
    </form>
  );
};

export default Register;
