// Education.js
import React from 'react';
import './Education.css';
import ProgrammingImage from '../Assets/Programming.svg';
import leetcode from '../Assets/leetcode.png';

const Education = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand brand-name" href="#">Naresh Kumar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link headerachor" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link headerachor" href="/education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link headerachor" href="/skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link headerachor" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link headerachor" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="Section1">
        <div className="row">
          <div className="col-lg-6 col-md">
            <img className="Programming" src={ProgrammingImage} alt="Programming" />
          </div>
          <div className="col-lg-6 col-md Coding">
            <h1>Competitive Programming</h1>
            <ul className="competitive_icon">
              <li>
                <a href="https://leetcode.com/u/Naresh_Kumar_T/" target="_blank" rel="noopener noreferrer">
                  <img className="leetCode-img" src={leetcode} alt="LeetCode" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="Section2">
        <div className="container">
          <div className="Heading">
            <h1>Degrees Received</h1>
            <br />
          </div>
          <div className="timeline">
            <div className="timeline-month">Education</div>
            <div className="timeline-section">
              <div className="timeline-date">2023 - Present</div>
              <div className="row">
                <div className="col-lg">
                  <div className="timeline-box">
                    <div className="box-title">
                      <i className="fas fa-graduation-cap" aria-hidden="true"></i>Scaler School Of
                      Technology Bengaluru
                      <p className="degree">Bachelors in Computers</p>
                    </div>
                    <div className="box-content">
                      <div className="box-item">💥 I have studied software engineering subjects like Data Structures, Algorithms, DBMS, OS, etc.</div>
                      <div className="box-item"><b>💥 CGPA</b>: 7.14 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-section">
              <div className="timeline-date">2021 - 2023</div>
              <div className="row">
                <div className="col-lg">
                  <div className="timeline-box">
                    <div className="box-title">
                      <i className="fas fa-school" aria-hidden="true"></i> Narayana IIT Academy <p className="degree">Senior Secondary Education</p>
                    </div>
                    <div className="box-content">
                      <div className="box-item">💥 I have studied the subjects Physics, Chemistry, Mathematics etc. </div>
                      <div className="box-item"><b>💥 Percentage</b>: 98.5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">  Made with ❤️ by Naresh Kumar Thodupunoori</footer>
      </section>
    </>
  );
};

export default Education;
