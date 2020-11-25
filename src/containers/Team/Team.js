import React, { Component } from 'react';
import './Team.css';
import Aux from '../../hoc/Auxil/Auxil';
import { Jumbotron, Container, Table } from 'react-bootstrap';
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
const Team = () => {
  const mentorship_Tech = [
    'Gandi Yaswanth Sai',
    'Vatsalya Chaubey',
    'Arth P. Sojitra',
    'Kalash Patle',
    'Aryaman Sinha',
    'A SAI MADHAV',
    'Milind Milan Singh',
    'Shibu Meher',
    'Rajil Kansal',
    'Jatin Khare',
    'Souvik Ray',
    'Tarun sai',
    'Omkar subhasish khuntia',
    'M V Satya Sai Chandra',
    'Amit Kumar',
    'Rishi Gurjar',
    'Aneri Gandhi',
    'Challa Sai',
    'Dharmendra C Patel',
    'Abhishek Kumar',
    'Nidamaneni Harish',
    'Himanshu Goyal',
    'Ramit Ashutosh Machhan',
    'SWAGAT LENKA',
    'Mohammad Abduraab',
    'Saif Ali Khan',
    'Sai Prasath S',
    'guddy satpathy',
    'SASWAT KUMAR PANDA',
    'Advait Deshmukh',
    'Tellam Rambabu',
    'Divesh Jain',
    'Abhishek Barwar',
    'Meenakshi Sundaram',
    'Nawaz NM',
    'Raghavendra Dheeraj',
    'Aneri Gandhi',
    'Tarun Sai',
  ];
  const mentorship_acad = [
    'Bhanu Meena',
    'Gaurav Pandey',
    'KSHITIJ AGRAWAL',
    'Romit Kesharwani',
    'Gorantla Ravi Teja',
    'Devasmit Dutta',
    'Harshwardhan Meena',
    'Nikhil Singh',
    'K Kishorereddy',
    'Raj Shah',
    'Sreekanth Vadigi',
    'K. Poornima',
    'Utsav Tiwari',
    'Manish Kausik H',
    'Snehitha Gunda',
    'Geetha Kiran',
    'Ashutossh Gupta (Lead)',
    'Venkatesh R Shenoy',
    'KONAKANDLA ROHITH',
    'BUKKE SAI DINESH NAIK',
    'Dhruv Ajay Ray',
    'Madhula Sathwik Reddy',
    'Ankit Anand',
    'Chebrolu Sravanth',
    'Aniket Shah',
    'Agastya Rao',
    'Harsha vardhan',
    'Rahul Rajeev',
    'M Sadhana',
    'Sagnik Acharya',
    'Saharsh J',
    'Ruturaj Patil',
    'K R R Tanmayi',
    'Kartik Tewari',
    'Ayushi Kohli',
    'Chaitra Vardhan',
    'S N Pranav',
    'Dewal Choudhary',
  ];
  const branch = [
    'CE',
    'CE',
    'CE',
    'CE',
    'CE',
    'CE',
    'CE',
    'CE DD',
    'CSE',
    'CSE',
    'CSE',
    'CSE',
    'CSE',
    'CSE DD',
    'ECE',
    'ECE',
    'EE',
    'EE',
    'EE',
    'EE',
    'EE',
    'EE',
    'EE',
    'EE DD',
    'ME',
    'ME',
    'ME',
    'ME',
    'ME',
    'ME',
    'ME',
    'ME DD',
    'ME DD',
    'ME DD',
    'ME DD',
    'MM',
    'MM',
    'MM',
  ];

  const gsoc_project = ['Aneri', 'Nikhil', 'Aakanksha'];

  const alumni_mentorship = [
    'Sadhana',
    'Dhruv Ray',
    'Ayushi Kohli',
    'Karthik Tewari',
    'Chanakya',
  ];

  const tableHeadings = [
    'Mentorship (Technologies and Skillsets)',
    'Mentorship (Academic development)',
    'G.Soc project',
    'Alumni Mentorship',
  ];
  const maxLength = Math.max(
    mentorship_Tech.length,
    mentorship_acad.length,
    gsoc_project.length,
    alumni_mentorship.length
  );
  var resultant = [];
  for (var i = 0; i < maxLength; i++) {
    var first = mentorship_Tech[i] || ' ';
    var second = mentorship_acad[i] + ' (' + branch[i] + ')' || ' ';
    var third = gsoc_project[i] || ' ';
    var fourth = alumni_mentorship[i] || ' ';
    resultant[i] = [first, second, third, fourth];
  }

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
              <span style={{ fontWeight: 'bold' }}>Vice President</span> <br />
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
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 className="heading" style={{ fontSize: '25px' }}>
          Academic Council Members
        </h1>
      </div>
      <Container>
        <Table responsive bordered>
          <thead>
            <tr>
              {tableHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resultant.map((value, index) => (
              <tr>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
                <td>{value[2]}</td>
                <td>{value[3]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Aux>
  );
};
export default Team;
