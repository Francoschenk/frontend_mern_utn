import React from 'react';
import LoginForm from '../login/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="container">
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
