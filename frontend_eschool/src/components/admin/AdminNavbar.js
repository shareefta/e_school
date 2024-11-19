import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpg';

function AdminNavbar() {
  const fullName = localStorage.getItem('fullName');
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Left-aligned home icon */}
          <a href="/dashboard" className="navbar-brand">
            <i className="bi bi-house" style={{ fontSize: '1.5rem', color: 'black' }}></i>
          </a>

          {/* Center-aligned logo */}
          <div className="mx-auto">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '30px' }} />
          </div>

          {/* Right-aligned user info and logout */}
          {fullName && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span className="nav-link">Welcome, {fullName}</span>
              </li>
              <li className="nav-item">
                <i
                  className="bi bi-power nav-link"
                  style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                  onClick={handleSignOut}
                ></i>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
