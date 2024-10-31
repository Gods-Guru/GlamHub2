import React, { useState } from 'react';
import '../App.css';
import glamHubLogo from '../assets/Assets/GlamHub.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <header className='header'>
            <div className="logo">
                <img src={glamHubLogo} alt="Logo" className="logo" />
                <Link to="/"><p>GlamHub</p></Link>
            </div>
            <nav className={`nav ${navActive ? 'active' : ''}`}>
                <ul>
                    <Link to="/ReviewPage"><li>ReviewPage</li></Link>
                    <Link to="/Products"><li>Products</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                    <Link to="/Users"><li>Users</li></Link>
                </ul>
                <ul className='nav2'>
                    <Link to="/SignUp"><li>Sign Up</li></Link>
                    <Link to="/Login"><li>Login</li></Link>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
};
