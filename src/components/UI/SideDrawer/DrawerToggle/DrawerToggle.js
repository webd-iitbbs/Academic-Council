import React from 'react';

import './../../NavBar/Navbar.css';

const drawerToggle = (props) => (
  <button class="navbar-nav-toggle" onClick={props.clicked}>
    <span></span>
  </button>
);

export default drawerToggle;
