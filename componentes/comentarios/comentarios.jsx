import './comentarios.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../registro/RegisterPage';
import ReviewsPage from '../ReviewCard/ReviewPages';
import { useNavigate } from 'react-router-dom';
import AddReviewPage from '../ReviewCard/ReviewCreate';

const Comentarios = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('reviews');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://backtpfinalutn.onrender.com/api/review');
        setReviews(response.data);
      } catch (error) {
        console.error('Error al obtener los reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const deleteReview = async (id) => {
    try {
      await axios.delete(`https://backtpfinalutn.onrender.com/api/review/${id}`);
      alert('Reseña eliminada con éxito');
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error('Error al eliminar la reseña:', error);
      alert('No se pudo eliminar la reseña.');
    }
  };

  const handleLogin = (user) => {
    console.log('Usuario autenticado:', user);
    setIsLoggedIn(true);
    setCurrentPage('reviews');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/Logearse');
  };

  const renderPage = () => {
    if (currentPage === 'login') {
      return <LoginPage onLogin={handleLogin} />;
    }
    if (currentPage === 'register') {
      return <RegisterPage />;
    }
    if (currentPage === 'reviews') {
      return <ReviewsPage reviews={reviews} onDelete={deleteReview} />;
    }
  };

  return (
    <div className="container">
      <nav>
        {isLoggedIn && <button onClick={handleLogout}>Cerrar Sesión</button>}
      </nav>
      <AddReviewPage />
      {renderPage()}
    </div>
  );
};

export default Comentarios;
