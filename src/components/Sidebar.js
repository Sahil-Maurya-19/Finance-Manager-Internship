import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Finance Dashboard</h2>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
