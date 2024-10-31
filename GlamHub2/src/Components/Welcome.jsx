// Welcome.jsx
import React from 'react';

const Welcome = () => {
  const welcomeStyle = {
    backgroundImage: "url('')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
  };

  const overlayStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '80%',
    height: '17rem',
    alignItems: 'center'
  };

  return (
    <div style={welcomeStyle}>
      <div style={overlayStyle}>
        <h2>Please View Other Pages for the best experience!</h2>
        <p>Your journey starts here. Discover amazing content and products with us.</p>
      </div>
    </div>
  );
};

export default Welcome;
