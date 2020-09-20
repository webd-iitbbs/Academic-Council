import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
import './Navbar.css';
import Aux from './../../../hoc/Auxil/Auxil';
import ScriptTag from 'react-script-tag';
class NavBar extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'srccomponentsUINavBar\navScript.js';
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
            src="./navScript.js"
          />
          <nav className="navbar">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <button
                  className="navbar-nav-toggle"
                  onClick={(event) => console.log('hrlll')}
                >
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
        </div>
      </Aux>
    );
  }
}

export default NavBar;
