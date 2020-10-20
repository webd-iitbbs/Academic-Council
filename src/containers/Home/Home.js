import React, { Component } from 'react';
import Aux from '../../hoc/Auxil/Auxil';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import TeamPicture from '../../assets/Images/team.jpg';
import AlumniPicture from '../../assets/Images/alumni.jpg';
import AcademicResource from '../../assets/Images/academicResources.jpg';
import SES from '../../assets/Images/ses.jpg';
import NavControls from './../NavControls';
class Home extends Component {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  redirectTo = (param) => {
    this.props.history.push(`/${param}`);
  };
  render() {
    return (
      <Aux>
        <Jumbotron
          style={{ paddingTop: '0rem', marginBottom: '0rem' }}
          className="Jumbotron"
        >
          <NavControls />
          <Container>
            <div className="text">
              <h2 className="mainHeading">IIT BHUBANESWAR</h2>
              <p className="subject">
                The Academic Council of the Indian Institute of Technology,
                Bhubaneswar is a council that aims to foster all needs related
                to academics and research for the campus dwellers by experienced
                and dedicated students.
              </p>
            </div>
          </Container>
        </Jumbotron>

          <br></br>
          <div className="cards" style={{ margin: '20px' }}>
            <Card className="card">
              <Card.Img
                variant="top"
                src={AcademicResource}
                className="images"
              />
              <Card.Body className="cardBody">
                <Card.Title
                 className="cardTitle"
                >
                  Resources
                </Card.Title>
                <Card.Text className="cardText">
                  Experienced students from the final and pre-final year
                  collectively prepare materials to help extend knowledge,
                  experience and tips for the readers to gain a head-start in
                  their academic prowess and to ace their courses as well as
                  their practical applications in the laboratories.
                </Card.Text>
              </Card.Body>
              <Button
                variant="info"
                className="button"
                onClick={() => this.redirectTo('resources')}
              >
                Learn more
              </Button>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={SES} className="images" />
              <Card.Body className="cardBody">
                <Card.Title
                 className="cardTitle"
                >
                  Research
                </Card.Title>
                <Card.Text className="cardText">
                  Student researchers and research assistants guide juniors with
                  a strong interest in impactful and disruptive research,
                  achieve their potential and also help them in building
                  research contacts and choosing projects.
                </Card.Text>
              </Card.Body>
              <Button
                variant="info"
                className="button"
                onClick={() => this.redirectTo('research')}
              >
                Learn more
              </Button>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={AlumniPicture} className="images" />
              <Card.Body className="cardBody">
                <Card.Title
                 className="cardTitle"
                >
                  Alumni
                </Card.Title>
                <Card.Text className="cardText">
                  The council strives to build strong alumni relations and bring
                  them on board for their experience in academic and
                  non-academic fields accumulated during and after their stay in
                  the institute.
                </Card.Text>
              </Card.Body>
              <Button
                variant="info"
                className="button"
                onClick={() => this.redirectTo('alumni')}
              >
                Learn more
              </Button>
            </Card>

            <Card className="card">
              <Card.Img variant="top" src={TeamPicture} className="images" />
              <Card.Body className="cardBody">
                <Card.Title
                 className="cardTitle"
                >
                  Team
                </Card.Title>
                <Card.Text className="cardText">
                  Head over to see the various branches and their members who
                  work relentlessly to uphold the spirit and values of the
                  council.
                </Card.Text>
              </Card.Body>
              <Button variant="info" className="button">
                Learn more
              </Button>
            </Card>
          </div>
        
      </Aux>
    );
  }
}
export default Home;
