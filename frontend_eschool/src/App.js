import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSignin from './components/admin/AdminLogin';
import AdminSignup from './components/admin/AdminRegister';
import AdminDashboard from './components/admin/AdminDashboard';
import ManagementDashboard from './components/admin/ManagementDashboard';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Zq from './components/institutions/zq/Zq';
import AdminSettings from './components/admin/Settings';
import Users from './components/admin/Users';
import AdminProfile from './components/admin/AdminProfile';
import WebsiteSettings from './components/admin/Website';
import ZqHome from './components/institutions/zq/ZqHome';
import BqHome from './components/institutions/bq/BqHome';
import EsHome from './components/institutions/es/EsHome';
import KulliyyaHome from './components/institutions/kulliyya/KulliyyaHome';
import TrustHome from './components/institutions/trust/TrustHome';
import WaHome from './components/institutions/wa/WaHome';
import Bq from './components/institutions/bq/Bq';
import Navbar from './components/Navbar';
import BqStudents from './components/institutions/bq/BqStudents';
import ZqStudents from './components/institutions/zq/ZqStudents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="navbar" element={<Navbar />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/zq" element={<Zq />} />
        <Route path="/bq" element={<Bq />} />
        <Route path="/adminlogin" element={<AdminSignin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        
        {/* Wrapping protected routes within PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/mgmdashboard" element={<ManagementDashboard />} />
          <Route path="/adminsettings" element={<AdminSettings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/websitesettings" element={<WebsiteSettings />} />
          <Route path="/zqhome" element={<ZqHome />} />
          <Route path="/kulliyyahome" element={<KulliyyaHome />} />
          <Route path="/bqhome" element={<BqHome />} />
          <Route path="/wahome" element={<WaHome />} />
          <Route path="/eshome" element={<EsHome />} />
          <Route path="/trusthome" element={<TrustHome />} />
          <Route path="/bqstudents" element={<BqStudents />} />
          <Route path="/zqstudents" element={<ZqStudents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
