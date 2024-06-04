import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard: React.FC = () => {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/teacher/dashboard/courses">Manage Courses</Link></li>
          <li><Link to="/teacher/dashboard/grades">View Grades</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default TeacherDashboard;
