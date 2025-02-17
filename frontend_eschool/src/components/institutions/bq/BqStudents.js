import React, { useEffect, useState } from "react";
import axios from "axios";

const BqStudents = () => {
    const [bqStudents, setBQStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchStudents = async () => {
        try {
            const bqResponse = await axios.get("http://127.0.0.1:8000/students/api/bq_students_reg_list");
            setBQStudents(bqResponse.data);
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
                    <h4 className="text-center">BQ Students</h4>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Sl. No.</th> 
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Guardian</th>
                            <th>District</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bqStudents.map((student, index) => (
                            <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.student_name}</td>
                            <td>{student.grade_school}</td>
                            <td>{student.guardian_name}</td>
                            <td>{student.district}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BqStudents;
