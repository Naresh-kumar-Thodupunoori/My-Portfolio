import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
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
  );
}

export default Header;
