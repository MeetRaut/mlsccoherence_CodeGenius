// sidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './sidebar.css';

// Sample logo URLs
const logos = {
  homepage: 'https://img.icons8.com/?size=256&id=i6fZC6wuprSu&format=png',
  profile: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png ',
  users: 'users_logo.png',
  products: 'products_logo.png',
  posts: 'posts_logo.png',
  notes: 'notes_logo.png',
  calendar: 'calendar_logo.png',
  settings: 'settings_logo.png',
  charts: 'charts_logo.png',
  logout: 'https://cdn-icons-png.flaticon.com/512/1286/1286853.png '
};

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="sidebar-container">
      <nav className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
        <ul className="sidebar-list">
          {/* Link to Home page */}
          <li>
            <Link to="/home">
              <img src={logos.homepage} alt="" />
              Home
            </Link>
          </li>
          {/* Link to Calendar page */}
          <li>
            <Link to="/calendar">
              <img src={logos.calendar} alt="" />
              Calendar
            </Link>
          </li>
          {/* Link to Contact Us page */}
          <li>
            <Link to="/contact">
              <img src={logos.contactus} alt="" />
              Contact Us
            </Link>
          </li>
          <li>
            <img src={logos.logout} alt="Log Out" />
            log out
          </li>
        </ul>
      </nav>
      <button className="hamburger-toggle" onClick={toggleSidebar}>
        <img className="hamburger-icon" src="https://cdn-icons-png.flaticon.com/512/12127/12127259.png" alt="Menu" />
      </button>
    </div>
  );
};

export default Sidebar;
