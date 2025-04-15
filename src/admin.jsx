import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav className="sidebar-nav">
          <a href="#dashboard" className="sidebar-link">Dashboard</a>
          <a href="#users" className="sidebar-link">Users</a>
          <a href="#events" className="sidebar-link">Events</a>
          <a href="#projects" className="sidebar-link">Projects</a>
          <a href="#settings" className="sidebar-link">Settings</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="admin-header">
          <h1>Welcome to the Admin Dashboard</h1>
        </header>
        <section className="content">
          <p>This is where you can manage all aspects of the YouthInAction platform.</p>
          {/* Add more admin functionalities here */}
        </section>
      </main>
    </div>
  );
};

export default Admin;


