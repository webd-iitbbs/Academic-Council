import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
import './Navbar.css';
import Aux from './../../../hoc/Auxil/Auxil';
import ScriptTag from 'react-script-tag';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'navScript.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <Aux>
        <div>
          <title>Responisve DropDown Navbar</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="style.css" />
          <ScriptTag
            isHydrating={true}
            type="text/javascript"
            src="navScript.js"
          />

          <nav className="navbar">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <img src={Logo} alt="iitbs" />
                <h3>IIT Bhubaneswar</h3>
                <button className="navbar-nav-toggle">
                  <span />
                </button>
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/resources">Academic Resources</Link>
                    </li>
                    <li>
                      <Link to="/">Research</Link>
                    </li>
                    <li>
                      <Link to="/">Alumni</Link>
                    </li>
                    <li>
                      <Link to="/">Team</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* <script src="navScript.js" /> */}
        </div>
      </Aux>
    );
  }
}

export default NavBar;
