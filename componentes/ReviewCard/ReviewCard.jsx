import React from 'react';
import './review.css'

const ReviewCard = ({ review, onDelete }) => {
  return (
    <div className="card">
      <h3>{review.name}</h3>
      <p><strong>Rating:</strong> {review.score} / 10</p>
      <p><strong>Edad:</strong> {review.age}</p>
      <p><strong>Lugares:</strong> {review.places}</p>
      <p><strong>Review:</strong> {review.reviewtext}</p>
      <button
        onClick={() => onDelete(review._id)} 
        style={{ color: 'red', cursor: 'pointer' }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ReviewCard;

