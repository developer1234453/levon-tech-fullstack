import React, { useEffect, useState } from 'react';
import './TeacherList.css';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('https://levon-tech-backend.onrender.com/api/teachers')
            .then((response) => response.json())
            .then((data) => setTeachers(data))
            .catch((error) => console.error('Error fetching teachers:', error));
    }, []);

    return (
        <div className="list-container">
            <h2>Teacher List</h2>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher._id}>
                        {teacher.name} - Subject: {teacher.subject}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherList;
