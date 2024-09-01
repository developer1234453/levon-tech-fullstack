import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const role = localStorage.getItem('role');
    console.log('User role:', role);  

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            {role === 'student' && <Link to="/students">View Students</Link>}
            {role === 'teacher' && <Link to="/teachers">View Teachers</Link>}
        </div>
    );
};

export default Dashboard;
