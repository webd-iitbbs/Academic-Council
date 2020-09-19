import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
import './Navbar.css';
import Aux from './../../../hoc/Auxil/Auxil';
class NavBar extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = './navScript.js';
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
          <nav className="navbar">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <button className="navbar-nav-toggle">
                  <span />
                </button>
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a href="http://localhost:3000/">Home</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/resources">
                        Academic Resources
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">Research </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">Alumni</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <script src="./navScript.js" />
        </div>
      </Aux>
    );
  }
}

export default NavBar;
