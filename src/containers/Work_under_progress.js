import React from 'react';
import NavControls from './NavControls';
import Aux from './../hoc/Auxil/Auxil';
import { Jumbotron, Container } from 'react-bootstrap';
import './Home/Home.css';
const WorkUnderProgress = () => {
  return (
    <Aux>
      <Jumbotron
        style={{ paddingTop: '0rem', marginBottom: '0rem' }}
        className="Jumbotron"
      >
        <NavControls />
        <Container>
          <div className="text">
            <h2 className="mainHeading">The page will come out soon</h2>
            <h2 className="mainHeading">We are working on it</h2>
          </div>
        </Container>
      </Jumbotron>
    </Aux>
  );
};

export default WorkUnderProgress;
