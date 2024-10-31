// ShopPage.jsx
import React from 'react';
import { assets } from '../assets';
import '../App.css';

export default function ShopPage() {

    const affordableProducts = [
        { id: 1, name: 'Red LipGloss', price: 9.99, img: assets.image4},
        { id: 2, name: 'Glow C Set', price: 12.99, img: assets.image5},
        { id: 3, name: 'Brush Pack', price: 4.59, img: assets.brushes2},
        { id: 4, name: 'Glow C Set', price: 13.49, img: assets.image7},
        { id: 5, name: 'Glow C Double Set', price: 15.99, img: assets.image9},
        { id: 6, name: 'Face Balm', price: 10.99, img: assets.image8},
        { id: 6, name: 'Vitamin C Serum', price: 8.99, img: assets.image},
        { id: 6, name: 'Moisture Dew', price: 10.99, img: assets.image3},
      ];      
  return (
    <div className="shop-page">
      <h1>Our Products</h1>
      <div className="shop-content">
        {/* Sidebar for categories and filters */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li>Makeup</li>
            <li>Skincare</li>
            <li>Men's Wear</li>
            <li>Women's Wear</li>
            <li>Children's Wear</li>
            <li>Corporate Wear</li>
          </ul>
        </aside>
        <section className="products-section">
          <div className="products-grid">
          {affordableProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  );
}
