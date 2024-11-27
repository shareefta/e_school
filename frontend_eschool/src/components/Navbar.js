import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Navbar = () => {
    // Simulate login state. You can replace this with actual authentication logic.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        // Simulate login/logout action
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        // Simulate logout action
        setIsLoggedIn(false);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex align-items-center justify-content-between fixed-top">
                <a className="nav-link" href="/#home"><img src={logo} alt="Logo" className="logo-img" /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/#home" style={{ fontSize: '18px' }}>
                                <i className="bi bi-house-fill" style={{ color: 'blue' }}></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#institutions" style={{ fontSize: '18px' }}>
                                <i className="bi bi-mortarboard-fill" style={{ color: 'blue' }}></i> Institutions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#events" style={{ fontSize: '18px' }}>
                                <i className="bi bi-calendar-event-fill" style={{ color: 'blue' }}></i> Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact" style={{ fontSize: '18px' }}>
                                <i className="bi bi-telephone-fill" style={{ color: 'blue' }}></i> Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    {isLoggedIn ? (
                        <button className="btn btn-danger" onClick={handleLogoutClick}>Sign Out</button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
