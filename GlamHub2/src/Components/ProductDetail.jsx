// Components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { assets, products } from '../assets';


export default function ProductDetail(){
    const { id } = useParams(); // This will capture the product ID from the URL

    // For demonstration, let's display the ID. I can replace this with actual product details.
    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>
        </div>
    );
};
