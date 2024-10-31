import React, { useState } from 'react';
import { assets } from '../assets';
import Banner from './Banner';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    { username: 'Jane Doe', text: "Loved this product! Highly recommend it." },
    { username: 'John Smith', text: "Affordable and of great quality!" },
    { username: 'Ivy Obodo', text: "Oh my God. This is a great website!" },
    { username: 'Hameed Jimoh', text: "Affordable skincare. What are you waiting for?" },
    { username: 'Deborah Ameh', text: "Easy Accessibility and the latest brands. Wow!" },
    { username: 'Not A Fraudster', text: "I like it!" },
    { username: 'Mr. E', text: "This is a great website. Even my mom and sisters love it!" },
  ]);
  const [newReview, setNewReview] = useState({ username: '', text: '' });
  const [alert, setAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const addReview = () => {
    if (newReview.username && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ username: '', text: '' });
      setAlert(true);
      setTimeout(() => setAlert(false), 3000); // Hide alert after 3 seconds
    }
  };

  return (
    <div className="review-page">
      <Banner 
        title="Leave A review" 
        description="Your opinions matter to us. Leave us a review please. Hopefully A good one 😉" 
        backgroundImage=""
      />
      <h2>User Reviews</h2>
      <ul className="reviews-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <strong>{review.username}:</strong> {review.text}
          </li>
        ))}
      </ul>

      <h3>Leave a Review</h3>
      <input
        type="text"
        name="username"
        placeholder="Your name"
        value={newReview.username}
        onChange={handleInputChange}
        className="input-field"
      />
      <textarea
        name="text"
        placeholder="Your review"
        value={newReview.text}
        onChange={handleInputChange}
        className="textarea-field"
      />
      <button onClick={addReview} className="submit-button">Submit Review</button>

      {alert && <div className="alert">Your request to leave a review has been submitted to the admins!</div>}
    </div>
  );
};

export default ReviewPage;