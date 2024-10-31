// SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSignUp = (e) => {
    e.preventDefault();

    // Simple alert to show successful "sign up"
    alert('User registered successfully!');
    navigate('/products'); // Redirect to the products page
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
      <input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>    
    </form>
  );
};

export default SignUp;
