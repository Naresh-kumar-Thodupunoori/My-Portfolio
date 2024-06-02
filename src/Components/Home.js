import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import BoyImage from '../Assets/Boy-image.png';
import BoyGif from '../Assets/20200630_162659.gif';
import './Home.css';
import Data_Analysis from '../Assets/Data_Analysis.svg';
import numpy from '../Assets/numpy-ar21.svg';
import pandas from '../Assets/kindpng_5747046.png';
import website from '../Assets/website.svg';
import coding from '../Assets/Coding.svg';
import './WhatIDo.css';

const Home = () => {
    return (
        <>
            <section id="Home">
                <div className="row-column1">
                    <div className="col-lg-6 col-md-6 first-image">
                        <img className="boyimage" src={BoyGif} alt="Naresh" />
                    </div>
                    <div className="col-lg-6 section-1">
                        <h1 className="Hello">Hello All! I'm Naresh Kumar <span className="wave">👋</span></h1>
                        <p>
                            I am a dedicated student with a passion for Data Analytics,
                            Machine Learning, and Web Development. I aim to develop sustainable and
                            scalable systems that can make a meaningful impact on both social and technical fronts.
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
                    <div className="Image-boy col-lg-6">
                        <img className="boy" src={BoyImage} alt="Naresh" />
                    </div>
                </div>
            </section>
            <section id="WhatIDo">
                <h1 className='title'>What I Do?</h1>
                <div className="row feature-1">
                    <div className="col-lg-6 col-md-6 Feature-first-image">
                        <img className="Feature-svg-image" src={Data_Analysis} alt="Data Analysis" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1 className="Feature-Heading">Data Analytics & ML</h1>
                        <ul className="dev-icon">
                            <li><i className="fab fa-python fa-5x" style={{ color: '#3776ab' }}></i></li>
                            <li><img className="numpy" src={numpy} alt="Numpy" /></li>
                            <li><img className="pandas" src={pandas} alt="Pandas" /></li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 Developing models that clean, transform, and analyze raw data to discover useful information, in order to make conclusions about the data.
                            </p>
                            <p className="Features-paragraph">
                                💥 Experience working with different Python libraries like Numpy, Pandas, Matplotlib, Seaborn, and knowledge of data analysis algorithms and techniques.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row feature-2">
                    <div className="col-lg-6 col-md-6 feature-web">
                        <h1 className="Feature-Heading">Web Development</h1>
                        <ul className="dev-icon">
                            <li><i className="fab fa-html5 fa-5x" style={{ color: '#e34f26' }}></i></li>
                            <li><i className="fab fa-css3-alt fa-5x" style={{ color: '#1572b6' }}></i></li>
                            <li><i className="fab fa-bootstrap fa-5x" style={{ color: '#543b79' }}></i></li>
                            <li><i className="fab fa-js-square fa-5x" style={{ color: '#f7df1e' }}></i></li>
                            <li><i className="fab fa-react fa-5x" style={{ color: '#61dafb' }}></i></li>
                            <li><i className="fab fa-node fa-5x" style={{ color: '#679e63' }}></i></li>
                            <li><i className="fab fa-figma fa-5x" style={{ color: '#f24e1e' }}></i></li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 Building fully responsive website frontends using HTML, CSS, React and JavaScript.
                            </p>
                            <p className="Features-paragraph">
                                💥 Currently, I have knowledge of frontend development and am excited to explore more technologies like BootStrap, Node.js, Django, Flask, and more in the near future.
                            </p>
                            <p className="Features-paragraph">
                                💥 I also use Adobe Photoshop, Illustrator, and Figma to design user interfaces for websites and mobile applications, and create logos.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 Feature-second-image">
                        <img className="Feature-svg-image" src={website} alt="Web Development" />
                    </div>
                </div>
                <div className="row feature-3">
                    <div className="col-lg-6 col-md-6 Feature-third-image">
                        <img className="Feature-svg-image-3" src={coding} alt="Coding" />
                    </div>
                    <div className="col-lg-6 col-md-6 feature-coding">
                        <h1 className="Feature-Heading">Data Structures and Algorithms</h1>
                        <ul className="dev-icon">
                            <li></li>
                            <li><i className="fas fa-laptop-code fa-4x"></i></li>
                            <li><i className="fas fa-file-code fa-4x" style={{ color: '#a8afcb' }}></i></li>
                        </ul>
                        <div className="Data-Analytic">
                            <p className="Features-paragraph">
                                💥 I have knowledge of data structures like hash tables, trees, tries, graphs, and various algorithms for solving problems efficiently.
                            </p>
                            <p className="Features-paragraph">
                                💥 I enjoy solving programming challenges on platforms like Codeforces, CodeChef, HackerRank, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                Made with ❤️ by Naresh Kumar Thodupunoori
            </footer>
        </>
    );
}

export default Home;
