import React from 'react';
import { products,assets } from '../assets.js';
import Brands from './Brands.jsx';
import Banner from './Banner.jsx';
import { assets2 } from '../assets2.js';
import { Link } from 'react-router-dom';
import Welcome from './Welcome.jsx';

export default function MainComponent() {

    const affordableProducts = [
        { id: 1, name: 'Red LipGloss', price: 9.99, img: assets.image4},
        { id: 2, name: 'Glow C Set', price: 12.99, img: assets.image5},
        { id: 3, name: 'Brush Pack', price: 4.59, img: assets.brushes2},
        { id: 4, name: 'Glow C Set', price: 13.49, img: assets.image7},
        { id: 5, name: 'Glow C Double Set', price: 15.99, img: assets.image9},
        { id: 6, name: 'Face Balm', price: 10.99, img: assets.image8},
      ];      

  return (
    <>
    <div className="content">
      <div className="welcome-banner">
        <div className="banner-content">
          <h1>Welcome to GlamHub</h1>
          <p>Discover beauty and fashion with elegance and style.</p>
          <Link to="/Products">
              <button className="explore-button">Shop Now</button>
            </Link>
        </div>
      </div>
        <h1>LATEST PRODUCTS</h1>
        <div className="product-gallery">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>{product.desc}</h4>
              <p>${product.price.toFixed(2)}</p>
              <Link to="/ShopPage">
                <button className='shop-now-btn'>Shop Now</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="">
        <Banner 
            title="Not found what you're looking for?" 
            description="Discover our collection of exclusive and affordable products. In Our Products Page Above."
            backgroundImage={assets.pink}
        />
        </div>
        <Welcome/>
    </div>
    </>
  );
};
