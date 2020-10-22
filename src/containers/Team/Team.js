import React , {Component} from 'react';
import './Team.css';
import Aux from '../../hoc/Auxil/Auxil';
import { Jumbotron , Container } from 'react-bootstrap';
import NavControls from './../NavControls';
import ProfilePic from "./fakeimg.png"
import "./../Resources/Resources.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faFacebook,
    faInstagram,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';

class Team extends Component {
    render() {
        return (
          <Aux>
            <Jumbotron
          style={{ paddingTop: '0rem', marginBottom: '0rem' }}
          className="Jumbo1"
        >
          <NavControls />
          <Container>
            <div className="text1" style={{marginTop : "60px"}}>
              <h2 className="mainHeading">Team</h2>
              <p className="subject">
                 Head over to see the various branches and their members who
                  work relentlessly to uphold the spirit and values of the
                  council.
              </p>
            </div>
          </Container>
        </Jumbotron>
             <div style={{textAlign : 'center'}}>
             <h1 className = "heading">Team</h1>
             </div>
            <Container className="container">
             <div className="card">
              <div className="profile-image">
                <img src={ProfilePic} alt="" />
              </div>
                 <div className="card-content">
                <h2>Chanakya Ekbote</h2>
                </div>
              <div className="data">
                  <p>GSec: Academic council <br />
                  Email:xyz@iitbbs.ac.in  <br />
                  contact:+91-8888888888   <br />
                </p>
              </div>
              <div className="icons">
                <a href="dummy.com"> <FontAwesomeIcon icon={faFacebook}  /></a>
                <a href="dummy.com"> <FontAwesomeIcon icon={faInstagram}  /></a>
                <a href="dummy.com"> <FontAwesomeIcon icon={faTwitter}  /></a>
                <a href="dummy.com"> <FontAwesomeIcon icon={faLinkedin}  /></a>
                
              </div>
            </div>
            </Container>
          </Aux>
        );
      }

}
export default Team;