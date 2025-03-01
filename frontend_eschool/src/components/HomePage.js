import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '../HomePage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

// DynamicCarousel Component
const DynamicCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch carousel images from backend API
        axios.get('http://127.0.0.1:8000/api/carousel-images/')
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                console.error("Error fetching carousel images:", error);
            });
    }, []);

    return (
        <Carousel className="mt-1">
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={`http://127.0.0.1:8000${image.image}`}
                        alt={image.caption || `Slide ${index + 1}`}
                        style={{ height: '600px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

// HomePage Component
function HomePage() {
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
        <>
            <div style={{ backgroundColor: 'aqua', minHeight: '100vh' }}>
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
                <section id='home'>
                    <div>
                        <DynamicCarousel />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-center' style={{ fontFamily: "Lora" }}><b>Badrulhuda Educational Center, Varanakkara</b></h3>
                        <p className='justify-content-center m-3' 
                            style={{ textAlign: 'justify', lineHeight: '1.6'}}>
                        The world is changing, the information technology is witnessing for revolutionary leap. The knowledge and awareness become 
                        basis of all revolutions. The education became an inevitable factor in the life of human being. A plenty of doors are always
                        being opened for knowledge seekers in the new world. The man who is quenching for the knowledge reaches at the destination. 
                        But the man uses the knowledge for achieving the bad things. Immoral activities are increasing. They become a question in 
                        from of the society. This reflects the absence of valuable education. The <b>BADRULHUDA EDUCATIONAL CENTER</b> becomes must in this 
                        situation. The <b>BADRULHUDA</b> aims at shaping society of moral students. The <b>BADRULHUDA</b> is leaping forth by molding the professional 
                        with providing valuable education by touching the pulse of the society.
                        </p>
                    </div>
                </section>

                <hr className='m-2' style={{ margin: '2rem 0', borderTop: '2px solid #000' }} />

                <section id="institutions">
                    <div className="container mt-3 mb-3">
                        <div className="row justify-content-center">
                            <h3 className="text-center" style={{ fontFamily: "Lora" }}><b>Institutions</b></h3>
                        </div>
                        <div className="row justify-content-center mt-3">
                            {[
                                { title: "Mansha'ussunna Da'wa College", link: "/dars", logo: "/logos/logo_dars.jpg" },
                                { title: "BQ World Hifz College", link: "/bq", logo: "/logos/logo_bq.jpg" },
                                { title: "Women's Academy", link: "/wa", logo: "/logos/logo_wa.jpg" },
                                { title: "Zahratul Qur'an Pre School", link: "/zq", logo: "/logos/logo_zq_2.png" },
                                { title: "English Medium School", link: "/es", logo: "/logos/logo_es.jpg" },
                                { title: "Lower Primary School", link: "/lps", logo: "/logos/lower_primary.png" },
                            ].map((institution, index) => (
                                <div className="col-md-4 col-sm-6 mb-3" key={index}>
                                    <Link to={institution.link} className="text-decoration-none">
                                        <div
                                            className="card text-center shadow-lg p-3 text-white"
                                            style={{
                                                background: 'linear-gradient(to right, #007bff, #0056b3)',
                                                borderRadius: '10px',
                                            }}
                                        >
                                            {/* Institution Logo */}
                                            <div 
                                                style={{
                                                    width: '100%', 
                                                    height: '150px', 
                                                    overflow: 'hidden', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <img
                                                    src={institution.logo}
                                                    alt={`${institution.title} logo`}
                                                    style={{
                                                        maxHeight: '100%',
                                                        maxWidth: '100%',
                                                        borderRadius: '5%',
                                                    }}
                                                />
                                            </div>
                                            <h5 className="card-title mt-2"><b>{institution.title}</b></h5>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className='m-2' style={{ margin: '2rem 0', borderTop: '2px solid #000' }} />
                <section id='events'>
                    <div className="container-fluid mt-3 mb-3">
                        <div className="row justify-content-center">
                            <h3 className='text-center' style={{ fontFamily: "Lora" }}><b>Events</b></h3>
                        </div>
                        <div className="row justify-content-center mt-3">
                            {[
                                "Badr Majlis",
                                "Ajmer Moulid",
                                "Prayer Conference",
                            ].map((title, index) => (
                                <div className="col-md-3 col-sm-6 mb-3" key={index}>
                                    <div
                                        className="card text-center shadow-lg p-3 text-white"
                                        style={{
                                            background: 'linear-gradient(to right, #28a745, #218838)',
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <i className="bi bi-calendar-event-fill" style={{ fontSize: '2rem', color: 'white' }}></i>
                                        <h5 className="card-title mt-2"><b>{title}</b></h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className='m-2' style={{ margin: '2rem 0', borderTop: '2px solid #000' }} />
                
                <footer id='contact' className="py-4">
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* Contact Details */}
                            <div className="col-md-3 mb-3">
                                <h5 className="text-uppercase mb-3">Contact Us</h5>
                                <p><i className="bi bi-geo-alt-fill"></i> Varanakkara, Kanamanam P.O, Malappuram</p>
                                <p><i className="bi bi-telephone-fill"></i> +91 977 800 6232</p>
                                <p><i className="bi bi-envelope-fill"></i> info@badrulhuda.com</p>
                            </div>

                            {/* Quick Links */}
                            <div className="col-md-3 mb-3">
                                <h5 className="text-uppercase mb-3 text-dark">Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#home" className="text-dark text-decoration-none">Home</a></li>
                                    <li><a href="#institutions" className="text-dark text-decoration-none">Institutions</a></li>
                                    <li><a href="#about" className="text-dark text-decoration-none">About Us</a></li>
                                    <li><a href="#contact" className="text-dark text-decoration-none">Contact</a></li>
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div className="col-md-3 mb-3">
                                <h5 className="text-uppercase mb-3 text-dark">Follow Us</h5>
                                <a href="https://facebook.com" className="text-dark me-3">
                                    <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                                </a>
                                <a href="https://twitter.com" className="text-dark me-3">
                                    <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
                                </a>
                                <a href="https://instagram.com" className="text-dark me-3">
                                    <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                                </a>
                                <a href="https://linkedin.com" className="text-dark">
                                    <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="text-secondary" />
                    <div className="container-fluid col-md-12 text-center">
                        <small>&copy; 2024 Badrulhuda Educational Center. All rights reserved.</small>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default HomePage;
