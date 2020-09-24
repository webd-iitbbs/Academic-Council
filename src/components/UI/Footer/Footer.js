import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
const Footer = () => {
  return (
    <div>
      <script
        src="https://kit.fontawesome.com/b8bac6fd0d.js"
        crossorigin="anonymous"
      ></script>
      <div className="page-wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">
              <span>IIT </span>Bhubaneswar
            </h1>

            <p>
              Location : Indian Institute of technology Bhubneswar <br />
              Near Argul - Jatni Rd, Kansapada, <br /> Odisha-752050
            </p>
            <br />
            <div className="social">
              <a
                href="https://www.facebook.com/iitbbs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare size="30px" />
              </a>
              <a
                href="https://www.instagram.com/iitbhubaneswar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size="30px" />
              </a>
              <a
                href="https://twitter.com/iitbbs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size="30px" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC_zUJNlSZjHyg1P_KPrY0Zg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImYoutube size="30px" />
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick links</h2>
            <ul>
              <br />
              <a
                href="http://iitbbs.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>IIT Bhubaneswar</li>
              </a>
              <br />
              <a
                href="https://gymkhana.iitbbs.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Students Gymkhana</li>
              </a>
              <br />
              <a
                href="https://www.iitbbs.ac.in/cdc/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Career Development Cell</li>
              </a>
              <br />
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Designed by Web and Design Society , IIT Bhubaneswar
        </div>
      </div>
    </div>
  );
};

export default Footer;
