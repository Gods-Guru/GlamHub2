import React, { useState } from 'react';
import '../App.css';

export default function Footer(){
    return (
        <>
        <footer>
        <div className="footer-content">
            <div>
                <h4>Contact Us</h4>
                <p>Email: ekonduobe@gmail.com</p>
                <p>Phone: +234 813 022 3684</p>
            </div>
            <div>
                <h4>Follow Us</h4>
                <a href="https://web.facebook.com/grace.obe.3576">Facebook</a>
                <a href="https://www.instagram.com/golden_blackie/#">Instagram</a>
                <a href="https://twitter.com">Twitter</a>
            </div>
            <div>
                <h4>About GlamHub</h4>
                <p>Your go-to place for all beauty products!</p>
            </div>
        </div>
        <p>&copy; {new Date().getFullYear()} GlamHub. All Rights Reserved.</p>
        </footer>
        </>
    );
};
