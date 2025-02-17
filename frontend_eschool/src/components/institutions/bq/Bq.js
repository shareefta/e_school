import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import bq from '../../../images/bq.JPG';

const Bq = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        // Simulate login/logout action
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        // Simulate logout action
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const [activeMenu, setActiveMenu] = useState("overview");
    const handleMenuClick = (menu) => {
            setActiveMenu(menu);
        };
    
    const [show, setShow] = useState(false); // Control visibility of the modal
    const [formData, setFormData] = useState({
        studentName: "",
        dob: "",
        grade_school: "",
        guardianName: "",
        contactNumber: "",
        place: "",
        district: "",
    });

    const [errors, setErrors] = useState({});
    
    // Modal visibility handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validate = () => {
        const newErrors = {};
        if (!formData.studentName) newErrors.studentName = "Student name is required.";
        if (!formData.dob) newErrors.dob = "Date of birth is required.";
        if (!formData.grade_school) newErrors.grade_school = "Grade selection is required.";
        if (!formData.guardianName) newErrors.guardianName = "Guardian name is required.";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required.";
        if (!formData.place) newErrors.place = "Place is required.";
        if (!formData.district) newErrors.district = "District is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
    
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/students/api/bq_register_student/",
                {
                    student_name: formData.studentName,
                    dob: formData.dob,
                    grade_school: formData.grade_school,
                    guardian_name: formData.guardianName,
                    contact_number: formData.contactNumber,
                    place: formData.place,
                    district: formData.district,
                },
                { headers: { "Content-Type": "application/json" } }
            );
    
            if (response.status === 201) {
                alert("Registration successful!");
                setShow(false); // Close the modal
                window.location.reload(); // Refresh the page
            }
        } catch (error) {
            console.error("Registration error:", error.response?.data || error);
            alert("Failed to register. Please try again.");
        }
    };    

    return (
        <>
            <div id='heading' className="container-fluid bg-info p-2 fixed-top">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-1 d-flex justify-content-start">
                        <a className="nav-link" href="/#home" style={{ fontSize: '18px' }}>
                            <i className="bi bi-house-fill fs-3 ms-3" ></i>
                        </a>
                    </div>
                    
                    {/* Center Section */}
                    <div className="col-10 d-flex justify-content-center">
                        <h3 className="text-center" style={{ fontFamily: "Lora" }}>
                            <b>BQ World</b>
                        </h3>
                    </div>
                    
                    {/* Right Section */}
                    <div className="col-1 d-flex justify-content-end">
                        {isLoggedIn ? (
                            <div className="d-flex align-items-center me-3">
                                <button
                                    className="btn btn-success d-flex align-items-center me-1"
                                    style={{ borderRadius: '20px', padding: '5px 15px' }}
                                >
                                    <a className="nav-link" href="/admindashboard" style={{ fontSize: '18px', backgroundColor: 'green' }} title="Dashboard">
                                        <i className="bi bi-grid-fill" style={{ color: 'white' }}></i>
                                    </a>
                                </button>
                                <button
                                    className="btn btn-danger d-flex align-items-center me-2"
                                    onClick={handleLogoutClick}
                                    style={{ borderRadius: '10px', padding: '5px 15px' }}
                                >
                                    <i className="bi bi-power me-2"></i>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                            className="btn btn-success d-flex align-items-center me-3"
                            onClick={handleLoginClick}
                            style={{ borderRadius: '10px', padding: '5px 15px' }}
                            >
                            <i className="bi bi-power me-2"></i>
                            Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <section id='about' className='container mt-5'>
                <div className='row align-items-center mt-3'>
                    <div className='col-md-5'>
                        <h4 className="text-center" style={{ fontFamily: "Lora" }}>
                            <b>BQ World<br></br> Hifzul Qur'an College</b>
                        </h4>
                        <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                        The parents always think which institution is to be selected for the education of their ‎lovely kids. If the parents wish getting education with Islamic traditional values and ‎perfect disciplines, no doubt ZQ Pre school is the suitable solution. ZQ Pre school The is ‎able to motivate the material, psychological, mental skills through the application of this ‎educational curriculum. The classrooms of Zahrathul Quran; is able to form a moral ‎generation by cultivating the seeds of spirituality and social values in the hearts of the ‎kids in their childhood.
                        </p>
                    </div>
                    <div className="col-md-7 mt-3 d-flex justify-content-center align-items-center">
                        <img src={bq} alt="ZQ" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </section>
            <section id='details'>
                <div className="container">
                    <div className="row mt-3 bg-info" style={{ borderRadius: "8px" }}>
                        <div className="col-md-10 p-3">
                            <div className="d-flex align-items-center flex-wrap">
                                <div className="col-md-2 d-flex flex-wrap">
                                    <button
                                    className={`btn ${activeMenu === "overview" ? "active" : ""}`}
                                    onClick={() => handleMenuClick("overview")}
                                    style={{
                                        background: activeMenu === "overview" ? "blue" : "",
                                        color: activeMenu === "overview" ? "white" : "black",
                                        fontSize: "18px",
                                    }}
                                    >
                                    Overview
                                    </button>
                                </div>
                                <div className="col-md-2 d-flex flex-wrap">
                                    <button
                                        className={`btn ${activeMenu === "outcome" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("outcome")}
                                        style={{
                                            background: activeMenu === "outcome" ? "blue" : "",
                                            color: activeMenu === "outcome" ? "white" : "black",
                                            fontSize: "18px",
                                        }}
                                        >
                                        Outcome
                                    </button>
                                </div>
                                <div className="col-md-2 d-flex flex-wrap">
                                    <button
                                        className={`btn ${activeMenu === "curriculum" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("curriculum")}
                                        style={{
                                            background: activeMenu === "curriculum" ? "blue" : "",
                                            color: activeMenu === "curriculum" ? "white" : "black",
                                            fontSize: "18px",
                                        }}
                                        >
                                        Curriculum
                                    </button>
                                </div>
                                {/* <div className="col-md-2 d-flex flex-wrap">
                                    <button
                                        className={`btn ${activeMenu === "fee" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("fee")}
                                        style={{
                                            background: activeMenu === "fee" ? "blue" : "",
                                            color: activeMenu === "fee" ? "white" : "black",
                                            fontSize: "18px",
                                        }}
                                        >
                                        Fee
                                    </button>
                                </div>                           */}
                            </div>
                        </div>
                        <div className="align-items-center flex-wrap col-md-2 p-3">
                            <Button
                                className="btn"
                                style={{ background: "green", borderRadius: "5px", color: "white", fontSize: "18px" }}
                                onClick={handleShow}
                            >
                                Register Now
                            </Button>

                            {/* Modal for registration form */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Student Registration</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="studentName">
                                            <Form.Label>Student Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="studentName"
                                                value={formData.studentName}
                                                onChange={handleChange}
                                                isInvalid={!!errors.studentName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.studentName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="dob">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="dob"
                                                value={formData.dob}
                                                onChange={handleChange}
                                                isInvalid={!!errors.dob}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.dob}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="grade_school">
                                            <Form.Label>Grade - School</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="grade_school"
                                                value={formData.grade_school}
                                                onChange={handleChange}
                                                isInvalid={!!errors.grade_school}
                                            >
                                                <option value="">Select Grade</option>
                                                <option value="VI">VI</option>
                                                <option value="VII">VII</option>
                                                <option value="VIII">VIII</option>
                                                <option value="IX">IX</option>
                                                <option value="X">X</option>
                                                <option value="XI">XI</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">{errors.grade_school}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="guardianName">
                                            <Form.Label>Guardian Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="guardianName"
                                                value={formData.guardianName}
                                                onChange={handleChange}
                                                isInvalid={!!errors.guardianName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.guardianName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="contactNumber">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                                isInvalid={!!errors.contactNumber}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.contactNumber}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="place">
                                            <Form.Label>Place</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="place"
                                                value={formData.place}
                                                onChange={handleChange}
                                                isInvalid={!!errors.place}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.place}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="district">
                                            <Form.Label>District</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="district"
                                                value={formData.district}
                                                onChange={handleChange}
                                                isInvalid={!!errors.district}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.district}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="mt-3">
                                            <Button type="submit" className="btn btn-primary w-100">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-4">
                        {activeMenu === "overview" && (
                        <div className='col-12 col-md-8'>
                            <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        )}
                        {activeMenu === "outcome" && (
                        <div className='col-12 col-md-8'>
                            <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        )}
                        {activeMenu === "curriculum" && (
                        <div className='col-12 col-md-8'>
                            <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        )}
                    </div>
                </div>
            </section>
            <footer>
                <div className="container-fluid col-md-12 text-center bg-info p-2" style={{ height: "40px" }}>
                    <small>&copy; 2024 Badrulhuda Educational Center. All rights reserved.</small>
                </div>
            </footer>
        </> 
    );
};

export default Bq;
