import React from "react";
import AdminLayout from "../../admin/AdminLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIndianRupeeSign, faCalendar, faEdit, faBook, faImage, faBus } from '@fortawesome/free-solid-svg-icons';

function BqHome() {
    const menus = [
        { title: "Students", link: "/bqstudents", icon: <FontAwesomeIcon icon={faUser} /> },
        { title: "Fee", link: "/fee", icon: <FontAwesomeIcon icon={faIndianRupeeSign} /> },
        { title: "Attendance", link: "/attendance", icon: <FontAwesomeIcon icon={faCalendar} /> },
        { title: "Exam", link: "/exam", icon: <FontAwesomeIcon icon={faEdit} /> },
        { title: "Diary", link: "/diary", icon: <FontAwesomeIcon icon={faBook} /> },
        { title: "Vehicle", link: "/diary", icon: <FontAwesomeIcon icon={faBus} /> },
        { title: "Gallery", link: "/gallery", icon: <FontAwesomeIcon icon={faImage} /> },
    ];

    return (
        <>
            <AdminLayout>
            <div className="row justify-content-start mt-3 gx-2 gy-2">
                {menus.map((menu, index) => (
                    <div className="col-md-3 col-sm-6 p-3" key={index}>
                        <Link to={menu.link} className="text-decoration-none">
                            <div
                                className="card text-center shadow-lg text-white"
                                style={{
                                    background: 'linear-gradient(to right, rgb(255, 179, 0), rgb(235, 49, 28))',
                                    borderRadius: '10px',
                                    width: '100%', // Ensure the card fills its column
                                    height: '100px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
                                    e.currentTarget.style.background = 'linear-gradient(to right, rgb(235, 49, 28), rgb(255, 179, 0))';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.background = 'linear-gradient(to right, rgb(255, 179, 0), rgb(235, 49, 28))';
                                }}
                            >
                                <div
                                    className="p-1"
                                    style={{
                                        fontSize: '30px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {menu.icon}
                                </div>
                                <h5 className="card-title mt-2">
                                    <b>{menu.title}</b>
                                </h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </AdminLayout>
        </>
    )
}

export default BqHome;