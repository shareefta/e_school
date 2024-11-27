import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import zq from '../../images/zq.jpg';

const Zq = () => {
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
        gender: "",
        grade: "",
        guardianName: "",
        contactNumber: "",
        place: "",
        transportationMode: "",
    });

    const [errors, setErrors] = useState({});
    
    // Modal visibility handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validate = () => {
        const newErrors = {};
        if (!formData.studentName) newErrors.studentName = "Student name is required.";
        if (!formData.dob) newErrors.dob = "Date of birth is required.";
        if (!formData.gender) newErrors.gender = "Gender is required.";
        if (!formData.grade) newErrors.grade = "Grade selection is required.";
        if (!formData.guardianName) newErrors.guardianName = "Guardian name is required.";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required.";
        if (!formData.place) newErrors.place = "Place is required.";
        if (!formData.transportationMode) newErrors.transportationMode = "Mode of transportation is required.";
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
                "http://127.0.0.1:8000/students/api/zq_register_student/",
                {
                    student_name: formData.studentName,
                    dob: formData.dob,
                    gender: formData.gender,
                    grade: formData.grade,
                    guardian_name: formData.guardianName,
                    contact_number: formData.contactNumber,
                    place: formData.place,
                    transportation_mode: formData.transportationMode,
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
                            <b>Zahratul Qur'an - The Qur'anic Pre School</b>
                        </h3>
                    </div>
                    
                    {/* Right Section */}
                    <div className="col-1 d-flex justify-content-end">
                        {isLoggedIn ? (
                            <i className="bi bi-box-arrow-right fs-2 me-3" onClick={handleLogoutClick}></i>
                        ) : (
                            <i className="bi bi-box-arrow-in-right fs-2 me-3" onClick={handleLoginClick}></i>
                        )}
                    </div>
                </div>
            </div>
            <section id='about' className='container mt-5'>
                <div className='row align-items-center mt-3'>
                    <div className='col-5'>
                        <h4 className="text-center" style={{ fontFamily: "Lora" }}>
                            <b>Zahratul Qur'an <br></br> The Qur'anic Pre School</b>
                        </h4>
                        <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-7 mt-3 d-flex justify-content-center align-items-center">
                        <img src={zq} alt="ZQ" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
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
                                <div className="col-md-2 d-flex flex-wrap">
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
                                </div>                          
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
                                        <Form.Group>
                                        <Form.Label>Name of Student</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.studentName}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.studentName}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            isInvalid={!!errors.dob}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            isInvalid={!!errors.gender}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Grade</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="grade"
                                            value={formData.grade}
                                            onChange={handleChange}
                                            isInvalid={!!errors.grade}
                                        >
                                            <option value="">Select Grade</option>
                                            <option value="LZQ">LZA</option>
                                            <option value="MZQ">MZQ</option>
                                            <option value="UZQ">UZQ</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Name of Guardian</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="guardianName"
                                            value={formData.guardianName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.guardianName}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.guardianName}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            isInvalid={!!errors.contactNumber}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Place</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="place"
                                            value={formData.place}
                                            onChange={handleChange}
                                            isInvalid={!!errors.place}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.place}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                        <Form.Label>Mode of Transportation</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="transportationMode"
                                            value={formData.transportationMode}
                                            onChange={handleChange}
                                            isInvalid={!!errors.transportationMode}
                                        >
                                            <option value="">Select Mode</option>
                                            <option value="Walking">Walking</option>
                                            <option value="School Vehicle">School Vehicle</option>
                                            <option value="Private Vehicle">Private Vehicle</option>
                                            <option value="Public Vehicle">Public Vehicle</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">{errors.transportationMode}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mt-3">Submit</Button>
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
                        {activeMenu === "fee" && (
                        <div className="col-12 col-md-8">
                            <table className="table table-striped table-bordered">
                                <thead className="thead-dark">
                                    <tr className='text-center'>
                                        <th scope="col">Fee Type</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tuition Fee</td>
                                        <td className='text-center'>$500</td>
                                        <td className='text-center'>2024-12-01</td>
                                        <td>Payable every semester</td>
                                    </tr>
                                    <tr>
                                        <td>Admission Fee</td>
                                        <td className='text-center'>$100</td>
                                        <td className='text-center'>2024-11-15</td>
                                        <td>One-time payment</td>
                                    </tr>
                                    <tr>
                                        <td>Library Fee</td>
                                        <td className='text-center'>$50</td>
                                        <td className='text-center'>2024-11-30</td>
                                        <td>Annual fee</td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Zq;
