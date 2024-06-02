// src/components/Contact.js
import React from 'react';
import './Contact.css';
import ProfilePic from '../Assets/Profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <div className="row first-section">
        <div className="col-lg-6 col-md-6">
          <img className="Profilepic" src={ProfilePic} alt="Naresh" />
        </div>
        <div className="col-lg-6 col-md-6 context">
          <h1>Reach out to me!</h1>
          <p>I am available on almost every social media platform.<br />
            You want to discuss a project or just want to say hi? My Inbox is always open for you.
          </p>
          <div className="social_media_icon">
            <a className="btn" href="https://www.instagram.com/nareshkumarthodupunoori/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a className="btn" href="https://www.linkedin.com/in/naresh-kumar-thodupunoori-073a7b277/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a className="btn" href="https://github.com/Naresh-kumar-Thodupunoori" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a className="btn" href="mailto:nareshkumarthodupunoori@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
