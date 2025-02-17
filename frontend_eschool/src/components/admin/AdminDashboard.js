import React from "react";
import { Link } from "react-router-dom";
import "../../AdminDashboard.css";
import AdminLayout from "./AdminLayout";

function AdminDashboard() {
    return (
        <>
            <AdminLayout>
                <div className="container">
                    <div className="row d-flex justify-content-center" style={{ fontFamily: "Lora" }}>
                        <div className="col-md-9">
                            <div className="row d-flex justify-content-center">
                                {[
                                    { title: "Settings", link: "/adminsettings" },
                                    { title: "Users", link: "/users" },
                                    { title: "Profile", link: "/adminprofile" },
                                    { title: "Website", link: "/websitesettings" },
                                ].map((adminmenu, index) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 p-2" key={index}>
                                        <Link to={adminmenu.link} className="text-decoration-none">
                                            <div
                                                className="card text-center shadow-lg p-3 text-white"
                                                style={{
                                                    background: "linear-gradient(to right, #28a745, #218838)",
                                                    borderRadius: "10px",
                                                    maxWidth: "100%",
                                                    width: "100%",
                                                }}
                                            >
                                                <i
                                                    style={{ fontSize: "2rem", color: "white" }}
                                                ></i>
                                                <h5 className="card-title mt-2"><b>{adminmenu.title}</b></h5>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Charts Section */}
                    <div className="justify-content-center">
                        <h4 className="text-center">Charts</h4>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

export default AdminDashboard;
