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
          <h2 className="heading">About us</h2>
          <p className="body">
            Indian Institute of Technology Bhubaneswar (IITBBS) was established
            on 22nd July, 2008. The Institute strives to offer the best
            engineering education with unmatched novelties in curriculum. Within
            a short span of incipience, IITBBS has made rapid strides towards
            becoming one of the elite technology institute of India spurred by
            sustained creation of knowledge and innovation, through high quality
            R&D activities and commitment to holistic education. The Institute
            aims to develop and pursue dynamic and flexible curricula designed
            to facilitate creativity and cognitive thinking among students
            through productive partnership with industries.
          </p>
        </div>
        <div className="section">
          <h1 className="heading"> Objective</h1>
          <div className="cards" style={{ margin: '20px' }}>
            <Card className="card">
              <Card.Img
                variant="top"
                src={AcademicResource}
                className="images"
              />
              <Card.Body className="cardBody">
                <Card.Title
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
                >
                  Resources
                </Card.Title>
                <Card.Text>
                  The UG/PG Academics Wing takes up the responsibility of the
                  academics related work of the Academic and Career Council. It
                  acts as an interface between the institute policy makers and
                  the students on matters related to academia.
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
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
                >
                  Research
                </Card.Title>
                <Card.Text>
                  The UG/PG Academics Wing takes up the responsibility of the
                  academics related work of the Academic and Career Council. It
                  acts as an interface between the institute policy makers and
                  the students on matters related to academia.
                </Card.Text>
              </Card.Body>
              <Button variant="info" className="button">
                Learn more
              </Button>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={AlumniPicture} className="images" />
              <Card.Body className="cardBody">
                <Card.Title
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
                >
                  Alumni
                </Card.Title>
                <Card.Text>
                  The UG/PG Academics Wing takes up the responsibility of the
                  academics related work of the Academic and Career Council. It
                  acts as an interface between the institute policy makers and
                  the students on matters related to academia.
                </Card.Text>
              </Card.Body>
              <Button variant="info" className="button">
                Learn more
              </Button>
            </Card>

            <Card className="card">
              <Card.Img variant="top" src={TeamPicture} className="images" />
              <Card.Body className="cardBody">
                <Card.Title
                  style={{ fontSize: '24px', color: 'rgb(73, 2, 2)' }}
                >
                  Team
                </Card.Title>
                <Card.Text>
                  The UG/PG Academics Wing takes up the responsibility of the
                  academics related work of the Academic and Career Council. It
                  acts as an interface between the institute policy makers and
                  the students on matters related to academia.
                </Card.Text>
              </Card.Body>
              <Button variant="info" className="button">
                Learn more
              </Button>
            </Card>
          </div>
        </div>
      </Aux>
    );
  }
}
export default Home;
