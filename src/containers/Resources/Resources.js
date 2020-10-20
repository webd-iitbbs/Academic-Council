import React, { Component } from 'react';
import Aux from '../../hoc/Auxil/Auxil';
import { Jumbotron, Container, Card } from 'react-bootstrap';
import './Resources.css';
import './../Home/Home.css';

import SMS from '../../assets/Images/SMS.jpg';

import SIF from '../../assets/Images/SIF.jpg';
import SMMS from '../../assets/Images/SMMS.jpg';
import NavControls from './../NavControls';
import SES from '../../assets/Images/ses.jpg';

class Resources extends Component {
  render() {
    return (
      <Aux>
        <Jumbotron
          style={{ paddingTop: '0rem', marginBottom: '0rem' }}
          className="Jumbo"
        >
          <NavControls />
          <Container>
            <div className="text1">
              <h2 className="mainHeading">Academic Resources</h2>
              <p className="subject">
                Experienced students from the final and pre-final year
                collectively prepare materials to help extend knowledge,
                experience and tips for the readers to gain a head-start in
                their academic prowess and to ace their courses as well as their
                practical applications in the laboratories.
              </p>
            </div>
          </Container>
        </Jumbotron>
        <div className="content">
          <h2 className="heading">Objective</h2>
          <p className="subText">
            With the institute growing in number of students, age, and
            infrastructure, the council believes it is for the student community
            to step up and achieve great things by helping each other for our
            common goals.
          </p>
        </div>
        <div className="section">
          <h1 className="heading">Help guides</h1>
          <h2 className="subHeading">Schools</h2>
          <div className="cards" style={{ margin: '20px' }}>
            <Card className="card" >
              <Card.Img variant="top" src={SES} className="images1" />
              <Card.Body style={{padding:'10px'}}>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    color: 'rgb(73, 2, 2)',
                    textAlign: 'left',
                  }}
                >
                  School of Electrical Sciences
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1JSoDscO4s5mXkRUq5HQtjdMBAs1qkaVc?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Computer Science and Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1BuXd0OBEVjzzt2NORsrZ6hTRtyzHbRh6?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Electronics and Communication Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1bMRxRd86mwG1MHZttCqgkStDP7Cqdo49"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Electrical Engineering
                      </a>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={SMS} className="images1" />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    color: 'rgb(73, 2, 2)',
                    textAlign: 'left',
                  }}
                >
                  School of Mechanical Sciences
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1fxo6EBV_goofIeMtJcYpOv6qwrUwS7OV?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mechanical Engineering
                      </a>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={SIF} className="images1" />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    color: 'rgb(73, 2, 2)',
                    textAlign: 'left',
                  }}
                >
                  School of Infrastructure
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1eDnaLqn95IiOs8f-6xbR9C66fGNfkDeS?usp=sharing_eil&ts=5e33e4f2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Civil Engineering
                      </a>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="cards" style={{ margin: '20px' }}>
            <Card className="card">
              <Card.Img variant="top" src={SMMS} className="images1" />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: '24px',
                    color: 'rgb(73, 2, 2)',
                    textAlign: 'left',
                  }}
                >
                  School of Minerals, Metallurgical and Materials Engineering
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1dsrgRy1HwclQ4AhN7wN8sO_445NomEDX"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Metallurgical Engineering
                      </a>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Aux>
    );
  }
}
export default Resources;
