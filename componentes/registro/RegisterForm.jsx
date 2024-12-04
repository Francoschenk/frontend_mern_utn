import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, password });
    
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Crear Cuenta</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={() => window.location.href = '/Logearse'}>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
