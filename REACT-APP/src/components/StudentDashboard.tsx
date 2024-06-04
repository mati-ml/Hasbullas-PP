import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard: React.FC = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/student/dashboard/courses">My Courses</Link></li>
          <li><Link to="/student/dashboard/grades">My Grades</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentDashboard;
