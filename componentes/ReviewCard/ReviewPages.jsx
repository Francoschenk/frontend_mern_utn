import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewPagina.css'

const ReviewsPage = ({ reviews, onDelete }) => {
  return (
    <>
    <h2>Reseñas de Viajes</h2>
    <div className="reviews-page">
      
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} onDelete={onDelete} />
      ))}
    </div>
    </>
  );
};

export default ReviewsPage;