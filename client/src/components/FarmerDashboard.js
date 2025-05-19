import React from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  return (
    <div className="farmer-dashboard-bg">
      <aside className="farmer-sidebar">
        <div className="farmer-profile">
          <div className="profile-icon"> {/* You can use an SVG or icon here */} 
            <span role="img" aria-label="profile" style={{fontSize: '2.5rem'}}>🧑‍🌾</span>
          </div>
        </div>
        <nav>
          <a href="#" className="farmer-nav-link active">
            <span role="img" aria-label="home" style={{fontSize: '2rem'}}>🏠</span>
          </a>
        </nav>
        <div className="farmer-logout">
          <a href="#" className="farmer-nav-link">
            <span role="img" aria-label="logout" style={{fontSize: '1.2rem'}}>↩️</span> Logout
          </a>
        </div>
      </aside>
      <main className="farmer-main">
        <header className="farmer-header">
          <div className="farmer-header-title">Smart Stock-Farmer Dashboard</div>
        </header>
        <section className="farmer-table-section">
          <table className="farmer-table">
            <thead>
              <tr>
                <th>Storage Conditions</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>22°C</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>75%</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>Pest Detection</td>
                <td></td>
                <td>No pest detected</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="farmer-alerts">
          <div className="alerts-title">Alerts</div>
          <div className="alerts-content">All conditions are Optimal</div>
        </section>
      </main>
    </div>
  );
};

export default FarmerDashboard;
