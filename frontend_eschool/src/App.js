import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminRegister from './components/admin/AdminRegister';
import AdminDashboard from './components/admin/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import AdminNavbar from './components/admin/AdminNavbar';
import HomePage from './components/HomePage';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <AdminNavbar/> */}
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegister />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
