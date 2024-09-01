import React, { useEffect, useState } from 'react';
import './StudentList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://levon-tech-backend.onrender.com/api/students')
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error('Error fetching students:', error));
    }, []);

    return (
        <div className="list-container">
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.name} - Grade: {student.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
