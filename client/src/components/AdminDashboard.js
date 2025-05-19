import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-bg">
      <aside className="admin-sidebar">
        <div className="sidebar-title">Smart Stock System-Admin dashboard</div>
        <nav>
          <a href="#" className="sidebar-link active">Home</a>
        </nav>
        <div className="sidebar-bottom">
          <a href="#" className="sidebar-link">Logout</a>
        </div>
      </aside>
      <main className="admin-main">
        <section className="status-section">
          <h2>Status</h2>
          <div className="status-cards">
            <div className="status-card total-farmers">
              <div>Total farmers</div>
              <div className="status-value">12,000</div>
            </div>
            <div className="status-card good-farmers">
              <div>Farmers with good storage condition</div>
              <div className="status-value">10,000</div>
            </div>
            <div className="status-card bad-farmers">
              <div>Farmers with bad condition</div>
              <div className="status-value">2000</div>
            </div>
          </div>
        </section>
        <section className="threshold-section">
          <div className="threshold-title">Threshold conditions</div>
          <div className="threshold-cards">
            <div className="threshold-card temp-card">
              <div className="threshold-label">Temperature</div>
              <div className="threshold-value">35°C</div>
            </div>
            <div className="threshold-card humidity-card">
              <div className="threshold-label">Humidity</div>
              <div className="threshold-value">75%</div>
            </div>
          </div>
        </section>
        <section className="recent-farmers-section">
          <div className="recent-title">Recent Farmers</div>
          <table className="farmers-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Telephone Number</th>
                <th>Storage Conditions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td>John Doe</td>
                <td>+1234567890</td>
                <td>Good</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
