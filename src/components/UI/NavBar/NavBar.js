import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
import './Navbar.css';
import Aux from './../../../hoc/Auxil/Auxil';
import NavigationItems from './NavigationItems.js';
import Logo from './../../../assets/Images/logo.png';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';
class NavBar extends Component {
  render() {
    return (
      <Aux>
        <nav className="navbar">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <img src={Logo} alt="iitbs" />
              <h3>IIT Bhubaneswar</h3>

              <div className="DesktopOnly">
                <NavigationItems />
              </div>
            </div>
            <DrawerToggle clicked={this.props.clicked} />
          </div>
        </nav>
      </Aux>
    );
  }
}

export default NavBar;
