import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../AdminDashboard.css";
import logo from "../../images/logo.jpg";

function AdminLayout({ children }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminName, setAdminName] = useState("");
    const [activeMenu, setActiveMenu] = useState("admindashboard");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedInStatus);

        const name = localStorage.getItem("adminName") || "Admin";
        setAdminName(name);
    }, []);

    const handleLogoutClick = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/adminlogin");
    };

    return (
        <>
            {/* Header */}
            <div
                id="heading"
                className="container-fluid bg-info p-2 fixed-top d-flex align-items-center justify-content-between"
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}
            >
                <div className="d-flex align-items-center">
                    <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                        <img src={logo} alt="Logo" className="logo-img" style={{ height: "40px" }} />
                    </a>
                    <Link
                        to="/admindashboard"
                        className="ms-2 text-white text-decoration-none fw-bold"
                        style={{
                            fontSize: "1.2rem",
                            textTransform: "uppercase",
                        }}
                    >
                        Admin Dashboard
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    {isLoggedIn && (
                        <span className="d-flex align-items-center text-white me-1" style={{ gap: "0.5rem" }}>
                            <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
                            {adminName}
                        </span>
                    )}
                    {isLoggedIn ? (
                        <button
                            className="btn btn-danger"
                            onClick={handleLogoutClick}
                            style={{
                                borderRadius: "10px",
                                padding: "5px 10px",
                            }}
                        >
                            <i className="bi bi-power me-2"></i>
                            Logout
                        </button>
                    ) : null}
                </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar bg-info position-fixed h-100" style={{ width: "200px", top: "60px", paddingTop: "20px" }}>
                <div className="list-group">
                    {[
                        { name: "admindashboard", label: "Dashboard", path: "/admindashboard" },
                        { name: "kulliyya", label: "Kulliyya Sharee'a", path: "/kulliyyahome" },
                        { name: "bqworld", label: "BQ World", path: "/bqhome" },
                        { name: "wa", label: "Women's Academy", path: "/wahome" },
                        { name: "zq", label: "Zahratul Qur'an", path: "/zqhome" },
                        { name: "es", label: "English School", path: "/eshome" },
                        { name: "trust", label: "Trust", path: "/trusthome" },
                    ].map((menu) => (
                        <Link
                            key={menu.name}
                            to={menu.path}
                            className={`list-group-item list-group-item-action ${activeMenu === menu.name ? "active" : ""}`}
                            onClick={() => handleMenuClick(menu.name)}
                            style={{
                                background: activeMenu === menu.name ? "blue" : "transparent",
                                color: activeMenu === menu.name ? "white" : "black",
                                fontSize: "16px",
                            }}
                        >
                            {menu.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="container mt-3" style={{ marginLeft: "220px", paddingTop: "50px" }}>
                {children}
            </div>
        </>
    );
}

export default AdminLayout;
