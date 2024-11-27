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
        const response = await adminsignin(formData);
        console.log(response);
        if (response.token) {
            // Save token in localStorage
            localStorage.setItem("token", response.token);
            const role = response.user.role; // Accessing role correctly
            console.log("Role:", role);

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