import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Navbar = () => {
    const navigate = useNavigate();
    // Simulate login state. You can replace this with actual authentication logic.
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
        useEffect(() => {
            // Check login state from localStorage
            const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
            setIsLoggedIn(loggedInStatus);
        }, []);
    
        const handleLoginClick = () => {
            localStorage.setItem("isLoggedIn", "true"); // Persist login state
            navigate("/adminlogin");
            setIsLoggedIn(true);
        };
    
        const handleLogoutClick = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("role"); // Optional, if you're storing roles
            localStorage.setItem("isLoggedIn", "false"); // Update login state
            navigate("/adminlogin"); // Redirect to login page
            setIsLoggedIn(false);
        };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex align-items-center justify-content-between fixed-top">
                <a className="nav-link ms-3" href="/#home"><img src={logo} alt="Logo" className="logo-img" /></a>
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
                            <a className="nav-link" href="/#contact" style={{ fontSize: '18px' }}>
                                <i className="bi bi-heart-fill" style={{ color: 'blue' }}></i> Takaful
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
                        <div className="d-flex align-items-center me-3">
                            <button
                                className="btn btn-success d-flex align-items-center me-1"
                                style={{ borderRadius: '20px', padding: '5px 15px' }}
                            >
                                <a className="nav-link" href="/admindashboard" style={{ fontSize: '18px', backgroundColor: 'green' }} title="Dashboard">
                                    <i className="bi bi-grid-fill" style={{ color: 'white' }}></i>
                                </a>
                            </button>
                            <button
                                className="btn btn-danger d-flex align-items-center me-2"
                                onClick={handleLogoutClick}
                                style={{ borderRadius: '10px', padding: '5px 15px' }}
                            >
                                <i className="bi bi-power me-2"></i>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                        className="btn btn-success d-flex align-items-center me-3"
                        onClick={handleLoginClick}
                        style={{ borderRadius: '10px', padding: '5px 15px' }}
                        >
                        <i className="bi bi-power me-2"></i>
                        Login
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
