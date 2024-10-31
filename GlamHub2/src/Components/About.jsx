// AboutPage.jsx
import React from 'react';
import Banner from './Banner';
import '../App.css';

export default function AboutPage() {
  return (
    <div className="about-page">
        <Banner 
        title="About Us" 
        description="Learn more about our journey and mission to serve you better." 
        backgroundImage=""
      />
      <h1>About GlamHub</h1>
      <p>
        Welcome to our clothing brand! We believe in providing high-quality, stylish
        pieces that make you feel confident. Our mission is to bring the latest trends
        to your wardrobe while maintaining a focus on sustainability.
      </p>
      <div className="about-banner">
        <h1>Welcome to Our Story</h1>
        <p>Discover the journey behind our brand, values, and mission.</p>
      </div>
      <div className="about-content">
        <p>GlamHub is an original work by Obe Ekondu Grace. This project is the 6th of 6 attempts made by the developer. It is a shopping website for cosmetic and skincare products. The journey to create this has not been easy but the developer strived despite all odds and challenges. The first of this chain of attempts started on the 1st of October 2024. Since then, various other projects (complete and incomplete) have been built/created until this project has been decided on. This website despite not having extremely fantastic designs shows the result of a determined mind. Therefore we hope the users can appreciate this website and leave a good review. And don't worry; the reviews will be approved by the admin and posted soon. Thank you.</p>
      </div>
      <div className="offices-banner">
            <h1>Our Offices</h1>
            <p>We have offices in various locations to serve you better. Check out our locations and find the one closest to you!</p>
            <h3>OUR LOCATIONS</h3>
            <p>8 Sirakoro St. Off Blantyre Rd. Wuse Zone 2</p>
            <p>12 A Crescent, FHA Estate Lugbe</p>
        </div>
    </div>
  );
}
