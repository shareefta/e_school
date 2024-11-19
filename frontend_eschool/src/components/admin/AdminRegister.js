import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminRegister() {
  const [adminData, setAdminData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/register/', {
            email: adminData.email,
            first_name: adminData.firstName,
            last_name: adminData.lastName,
            password: adminData.password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const fullName = `${adminData.firstName} ${adminData.lastName}`;
        localStorage.setItem('fullName', fullName);

        alert('Registration successful!');
        navigate('/');
    } catch (error) {
        setError('Registration failed. Please try again.');
    }
};


  return (
    <div>
      <h2>Admin Registration</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={adminData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={adminData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={adminData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={adminData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdminRegister;
