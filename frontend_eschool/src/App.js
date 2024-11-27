import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSignin from './components/admin/AdminLogin';
import AdminSignup from './components/admin/AdminRegister';
import AdminDashboard from './components/admin/AdminDashboard';
import ManagementDashboard from './components/admin/ManagementDashboard';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Zq from './components/institutions/Zq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zq" element={<Zq />} />
        <Route path="/adminlogin" element={<AdminSignin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        
        {/* Wrapping protected routes within PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/mgmdashboard" element={<ManagementDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
