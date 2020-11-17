import React, { Component } from 'react';
import './Team.css';
import Aux from '../../hoc/Auxil/Auxil';
import { Jumbotron, Container } from 'react-bootstrap';
import NavControls from './../NavControls';
import ProfilePic from './fakeimg.png';
import './../Resources/Resources.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Aneri from '../../assets/Images/Aneri.jpeg';
import Chanakya from '../../assets/Images/Chanakya.png';
import Jatin from '../../assets/Images/Jatin.jpg';
import Rahul from '../../assets/Images/Rahul.jpg';
import Niranjan from '../../assets/Images/Niranjan.jpg';
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
            <div className="text1" style={{ marginTop: '60px' }}>
              <h2 className="mainHeading">Team</h2>
              <p className="subject">
                Head over to see the various branches and their members who work
                relentlessly to uphold the spirit and values of the council.
              </p>
            </div>
          </Container>
        </Jumbotron>
        <div style={{ textAlign: 'center' }}>
          <h1 className="heading">Team</h1>
        </div>
        <Container className="container1">
          <div className="profileCard">
            <div className="profile-image">
              <img src={Niranjan} alt="" />
            </div>
            <div className="card-content">
              <h2>S.Niranjan</h2>
            </div>
            <div className="data">
              <p>
                <span style={{ fontWeight: 'bold' }}>Vice President</span>{' '}
                <br />
                Email: vpresident.sg@iitbbs.ac.in <br />
                Contact: 9444707109 <br />
              </p>
            </div>
          </div>
        </Container>
        <Container className="container1">
          <div className="profileCard">
            <div className="profile-image">
              <img src={Jatin} alt="" />
            </div>
            <div className="card-content">
              <h2>Jatin Khare</h2>
            </div>
            <div className="data">
              <p>
                <span style={{ fontWeight: 'bold' }}>
                  Mentorship program head
                </span>{' '}
                <br />
                Email: jk13@iitbbs.ac.in <br />
                Contact: 9406618301 <br />
              </p>
            </div>
          </div>
          <div className="profileCard">
            <div className="profile-image">
              <img src={Rahul} alt="" />
            </div>
            <div className="card-content">
              <h2>Rahul R</h2>
            </div>
            <div className="data">
              <p>
                <span style={{ fontWeight: 'bold' }}>
                  Mentorship program head
                </span>{' '}
                <br />
                Email: rr21@iitbbs.ac.in <br />
                Contact: 9447577224 <br />
              </p>
            </div>
          </div>
        </Container>
        <Container className="container1">
          <div className="profileCard">
            <div className="profile-image">
              <img src={Aneri} alt="" />
            </div>
            <div className="card-content">
              <h2>Aneri Gandhi</h2>
            </div>
            <div className="data">
              <p>
                <span style={{ fontWeight: 'bold' }}>G.Soc head</span> <br />
                Email: amg10@iitbbs.ac.in <br />
                Contact: 8169328343 <br />
              </p>
            </div>
          </div>

          <div className="profileCard">
            <div className="profile-image">
              <img src={Chanakya} alt="" />
            </div>
            <div className="card-content">
              <h2>Chanakya Ekbote</h2>
            </div>
            <div className="data">
              <p>
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  Alumni Mentorship head{' '}
                </span>
                <br />
                Email: ca10@iitbbs.ac.in <br />
                Contact: 9113662833 <br />
              </p>
            </div>
          </div>
        </Container>
      </Aux>
    );
  }
}
export default Team;
