// ProductsPage.jsx
import React from 'react';
import glamHubLogo from '../assets/Assets/GlamHub.png';
import '../App.css';
import { assets } from '../assets';
import Banner from './Banner';


const products = [
  { id: 1, name: 'Brush Pack', price: 24.99, img: assets.brushes1 },
  { id: 2, name: 'Lash Extender', price: 9.99, img: assets.lash },
  { id: 3, name: 'Dark Red Lipstick', price: 8.99, img: assets.lipstick10 },
  { id: 4, name: 'Classic Brushes', price: 8.99, img: assets.brushes2 },
  { id: 5, name: 'Beige Lipstick', price: 19.99, img: assets.lipstick6 },
  { id: 6, name: 'Pink Lipstick', price: 10.99, img: assets.lipstick8 },
  { id: 7, name: 'Brush Container', price: 29.99, img: assets.brushes3 },
  { id: 8, name: 'Blood Red Lipstick', price: 12.99, img: assets.lipstick7 },
  { id: 9, name: 'Pepper Redc LipGloss', price: 7.99, img: assets.lipstick4 },
  { id: 10, name: 'Classic MakeUp-Kit', price: 30.99, img: assets.makeupbox },
  { id: 11, name: 'Ox-Blood Lipstick', price: 15.99, img: assets.lipstick9 },
  { id: 12, name: 'Vitamin C Serum', price: 14.99, img: assets.image },
  { id: 13, name: 'Liquid foundation', price: 15.99, img: assets.image2 },
  { id: 14, name: 'ComplexionCream', price: 15.99, img: assets.image3 },
  { id: 15, name: 'Red LipGloss', price: 15.99, img: assets.image4 },
];

export default function Products() {
  return (
    <div className="products-page">
        <Banner 
        title="OUR PRODUCTS" 
        description="Start Shopping!" 
        backgroundImage=""
      />
      <h1>Explore Our Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="shop-now-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
