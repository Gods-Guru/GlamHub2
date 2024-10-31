import React from 'react';
import '../App.css';

const Banner = ({ title, description, backgroundImage }) => {
  return (
    <div 
      className="banner" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
