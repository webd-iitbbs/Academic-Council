import React from 'react';
import './../NavBar/Navbar.css';
import './SideDrawer.css';
// import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxil/Auxil';
import { Link } from 'react-router-dom';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }
  return (
    <Aux>
      {/* <Backdrop show={props.open} clicked={props.closed} /> */}

      <div className={attachedClasses.join(' ')}>
        <ul className="list">
          <li className="tag">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="tag">
            <Link to="/resources" className="link">
              Academic Resources
            </Link>
          </li>
          <li className="tag">
            <Link to="/" className="link">
              Research
            </Link>
          </li>
          <li className="tag">
            <Link to="/" className="link">
              Alumni
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </Aux>
  );
};

export default sideDrawer;
