import React, { useState } from "react";
import { adminsignup } from "../ApiUtility";

const AdminSignup = () => {
    const [formData, setFormData] = useState({
        mobile_number: "",
        first_name: "",
        last_name: "",
        role: "admin", // Default role
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await adminsignup(formData); // Use the correct function name
        if (response.token) {
            setMessage("Signup successful!");
        } else {
            setMessage("Signup failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="mobile_number"
                placeholder="Mobile Number"
                onChange={handleChange}
                value={formData.mobile_number}
            />
            <input
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.first_name}
            />
            <input
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.last_name}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
            />

            {/* Role selection */}
            <select
                name="role"
                onChange={handleChange}
                value={formData.role}
            >
                <option value="admin">Admin</option>
                <option value="management">Management Staff</option>
            </select>

            <button type="submit">Signup</button>
            <p>{message}</p>
        </form>
    );
};

export default AdminSignup;
