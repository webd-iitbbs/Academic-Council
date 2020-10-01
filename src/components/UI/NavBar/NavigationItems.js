import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <div className="navbar-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resources">Academic Resources</Link>
        </li>
        <li>
          <Link to="/research">Research</Link>
        </li>
        <li>
          <Link to="/alumni">Alumni</Link>
        </li>
        <li>
          <Link to="/">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationItems;
