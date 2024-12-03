import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../AdminDashboard.css";
import logo from "../../images/logo.jpg";

function AdminDashboard() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminName, setAdminName] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedInStatus);

        const name = localStorage.getItem("adminName") || "Admin";
        setAdminName(name);

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Or a spinner
    }

    // useEffect(() => {
    //     // Check login state from localStorage
    //     const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    //     setIsLoggedIn(loggedInStatus);
    
    //     // Get admin name from localStorage or API
    //     const name = localStorage.getItem("adminName") || "Admin";
    //     setAdminName(name);
    // }, [navigate]); // Include navigate to run the effect on navigation

    const handleLoginClick = () => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("adminName", "Your Admin Name"); // Update with actual admin name
        setIsLoggedIn(true);
        navigate("/adminlogin");
    };

    // const handleLoginClick = () => {
    //     localStorage.setItem("isLoggedIn", "true"); // Persist login state
    //     navigate("/adminlogin");
    //     setIsLoggedIn(true);
    // };
    const handleLogoutClick = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/adminlogin");
    };
    
    // const handleLogoutClick = () => {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("role"); // Optional, if you're storing roles
    //     localStorage.removeItem("isLoggedIn");
    //     localStorage.removeItem("adminName");
    //     navigate("/adminlogin"); // Redirect to login page
    //     setIsLoggedIn(false);
    // };

    return (
        <>
            <div
                id="heading"
                className="container-fluid bg-info p-2 fixed-top d-flex align-items-center justify-content-between"
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}
            >
                {/* Left Section */}
                <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                    <img src={logo} alt="Logo" className="logo-img" style={{ height: "40px" }} />
                    <span className="ms-2 fw-bold" style={{ fontSize: "1.2rem" }}>
                        Admin Dashboard
                    </span>
                </a>

                {/* Right Section */}
                <div className="d-flex align-items-center">
                    {isLoggedIn && (
                        <span
                            className="d-flex align-items-center text-white me-1"
                            style={{ gap: "0.5rem" }} // Adds space between the icon and the name
                        >
                            <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
                            {adminName}
                        </span>
                    )}
                    {isLoggedIn ? (
                        <button
                            className="btn btn-danger align-items-center me-2"
                            onClick={handleLogoutClick}
                            style={{
                                borderRadius: '10px',
                                padding: '5px 10px', // Reduced padding
                                maxWidth: 'fit-content', // Ensure button width adjusts to content
                                flexShrink: 1 // Allow shrinking if inside a flex container
                            }}
                        >
                            <i className="bi bi-power me-2"></i>
                            Logout
                        </button>
                    ) : (
                        <button
                            className="btn btn-success d-flex align-items-center"
                            onClick={handleLoginClick}
                            style={{ borderRadius: "10px", padding: "5px 15px" }}
                        >
                            <i className="bi bi-power me-2"></i>
                            Login
                        </button>
                    )}
                </div>
            </div>

            <div className="d-flex" style={{ marginTop: "80px" }}>
                {/* Sidebar */}
                <nav
                    className="sidebar bg-success position-fixed h-100"
                    style={{ zIndex: 1000, width: "200px", top: 0, paddingTop: "80px" }}
                >
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard/home">
                                <i className="bi bi-mortarboard"></i> Kulliyaa Sharee'a
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard/students">
                                <i className="bi bi-person"></i> BQ World
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard/staff">
                                <i className="bi bi-person-fill"></i> WA
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard/academics">
                                <i className="bi bi-book"></i> ZQ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard/fees">
                                <i className="bi bi-cash"></i> ES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard/vehicles">
                                <i className="bi bi-briefcase"></i> Trust
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <div className="container mt-3" style={{ marginLeft: "220px" }}>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-3 col-sm-6 mb-3">
                            <div
                                className="card text-center shadow-lg p-3 text-white"
                                style={{
                                    background: "linear-gradient(to right, #28a745, #218838)",
                                    borderRadius: "20px",
                                }}
                            >
                                <i
                                    className="bi bi-calendar-event-fill"
                                    style={{ fontSize: "2rem", color: "black" }}
                                ></i>
                                <h5 className="card-title mt-2">
                                    <b>Settings</b>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
