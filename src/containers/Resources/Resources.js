import React, { Component } from 'react';
import Aux from '../../hoc/Auxil/Auxil';
import { Jumbotron, Container, Card, Button } from 'react-bootstrap';
import './Resources.css';
import './../Home/Home.css';

import SMS from '../../assets/Images/SMS.jpg';

import SIF from '../../assets/Images/SIF.jpg';
import SMMS from '../../assets/Images/SMMS.jpg';

import SES from '../../assets/Images/ses.jpg';

class Resources extends Component {
  render() {
    return (
      <Aux>
        <Jumbotron style={{ marginBottom: '0rem' }} className="Jumbo">
          <Container>
            <div className="text">
              <h2 className="mainHeading">Academic Resources</h2>
              <p clasName="body">
                The Academics and Career Council of the Indian Institute of
                Technology, Bhubaneswar is a council directly placed under the
                Student's Gymkhana, that aims to foster all needs related to
                academics and research for the campus dwellers.
              </p>
            </div>
          </Container>
        </Jumbotron>
        <div className="content">
          <h2 className="heading">Our Objective</h2>
          <p className="body">
            Indian Institute of Technology Bhubaneswar (IITBBS) was established
            on 22nd July, 2008. The Institute strives to offer the best
            engineering education with unmatched novelties in curriculum. Within
            a short span of incipience, Being able to research and use materials
            which back up your study or offer different interpretations of your
            study area is an essential aspect of studying and learning.
          </p>
        </div>
        <div className="section">
          <h1 className="heading">Course Hacks</h1>
          <h2
            className="heading"
            style={{
              textAlign: 'left',
              padding: '30px 10px 0px 57px',
              fontSize: '30px',
            }}
          >
            Schools
          </h2>
          <div className="cards" style={{ margin: '20px' }}>
            <Card className="card">
              <Card.Img variant="top" src={SES} className="images1" />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
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
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
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
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
                >
                  School of Infrastructure
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1fxo6EBV_goofIeMtJcYpOv6qwrUwS7OV?usp=sharing"
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
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
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
