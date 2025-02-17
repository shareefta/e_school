import React, { useEffect, useState } from "react";
import axios from "axios";

const ZqStudents = () => {
    const [zqStudents, setZQStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
        try {
            const zqResponse = await axios.get("http://127.0.0.1:8000/students/api/zq_students_reg_list");
            setZQStudents(zqResponse.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching student data:", error);
            setLoading(false);
        }
    };

    fetchStudents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Registered Students</h2>
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center ">ZQ Students</h4>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Grade</th>
                            <th>Guardian</th>
                        </tr>
                        </thead>
                        <tbody>
                        {zqStudents.map((student, index) => (
                            <tr key={student.id}>
                            <td>{index + 1}</td> 
                            <td>{student.student_name}</td>
                            <td>{student.gender}</td>
                            <td>{student.grade}</td>
                            <td>{student.guardian_name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ZqStudents;
