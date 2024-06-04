import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/dashboard/users">Manage Users</Link></li>
          <li><Link to="/admin/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
