import React from 'react';
import { Link } from 'react-router-dom';
import '../../AdminDashboard.css';

function ManagementDashboard() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <nav className="sidebar bg-success position-fixed h-100" style={{ top: '60px', zIndex: 1000, width: '200px' }}>
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
      <div className="main-content p-4 mt-5" style={{ marginLeft: '200px', width: 'calc(100% - 250px)' }}>
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Select a menu from the sidebar to manage different sections of the system.</p>
      </div>
    </div>
  );
}

export default ManagementDashboard;
