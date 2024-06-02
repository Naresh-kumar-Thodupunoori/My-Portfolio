import React from 'react';
import ProjectImage from '../Assets/Project.svg';
import JavaScript from '../Assets/JavaScript.jpg';
import './Project.css';


const Projects = () => {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        
        <a className="navbar-brand brand-name" href="#">Naresh Kumar</a>

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

    <section id="Projects" className="Section1">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <img className="projectimage" src={ProjectImage} alt="Project" />
        </div>
        <div className="col-lg-6 col-md-6 project-heading">
          <h1 className="P-heading">Projects</h1>
          <p className="p-text">
            My projects use various technologies to make the models more accurate 
            and stable. As of now, I haven't done many projects, but in the near future,
            I will make more.
          </p>
        </div>
      </div>
      <div className="row Section1">
        <div className="col-sm-6">
          <a className="Project-box" target="_blank" rel="noopener noreferrer" href="https://github.com/Naresh-kumar-Thodupunoori/tic-tac-toe">
            <div className="card boxx">
              <div className="card-body">
                <h5 className="card-title">Tic Tac Toe</h5>
                <p className="card-text project-text">
                "Developed an interactive Tic Tac Toe game using JavaScript, showcasing my skills in front-end development and user interface design."
                  <span className="iconify" data-icon="logos:python" data-inline="false"></span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-6">
          <a className="Project-box" target="_blank" rel="noopener noreferrer" href="https://github.com/Naresh-kumar-Thodupunoori/Quiz-App-Trimester-4">
            <div className="card boxx">
              <div className="card-body">
                <h5 className="card-title">Quiz App</h5>
                <p className="card-text project-text">
                    This app helps you understand your knowledge on CSS,HTML and JavaScript
                  <span className="iconify" data-icon="logos:python" data-inline="false"></span>
                  <img className="iconify" src={JavaScript} alt="Dialogflow" />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <footer className="footer">  Made with ❤️ by Naresh Kumar Thodupunoori</footer>
    </section>
    </>
  );
};

export default Projects;
