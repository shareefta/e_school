import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { adminsignin } from "../ApiUtility";

const AdminSignin = () => {
    const [formData, setFormData] = useState({ mobile_number: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await adminsignin(formData); // Ensure this is properly implemented and tested
            if (response.token) {
                const fullName = `${response.user.first_name} ${response.user.last_name}`;
                // Save necessary details in localStorage
                localStorage.setItem("token", response.token);
                localStorage.setItem("adminName", fullName);
                localStorage.setItem("role", response.user.role); // Save role explicitly for future checks
    
                // Navigate based on role
                if (response.user.role === "admin") {
                    navigate("/admindashboard");
                } else if (response.user.role === "management") {
                    navigate("/mgmdashboard");
                } else {
                    setMessage("Unknown role. Please contact support.");
                }
            } else {
                setMessage("Signin failed. Please check your credentials.");
            }
        } catch (error) {
            setMessage("An error occurred during signin. Please try again.");
            console.error("Signin error:", error);
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
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
            />
            <button type="submit">Signin</button>
            <p>{message}</p>
        </form>
    );
};

export default AdminSignin;