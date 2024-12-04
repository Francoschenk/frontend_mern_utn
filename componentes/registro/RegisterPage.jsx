import React from 'react';
import RegisterForm from '../registro/RegisterForm';

const RegisterPage = ({ onRegister }) => {
  return (
    <div className="container">
      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default RegisterPage;
