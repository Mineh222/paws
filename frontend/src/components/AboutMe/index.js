import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-left">
                <div className="about-me-top-left">
                    <div class="about-img">
                        <img id="my-pic"src="https://i.postimg.cc/FKHJkSMs/12-F0951-E-6-A3-D-4881-8962-FF5-C33403-F43.jpg" alt="developers-photo"></img>
                    </div>
                    <div class="about-info">
                        <p><span className="title-s" id="bold">Name: </span> <span>Mineh Gharabegi</span></p>
                        <p><span className="title-s" id="bold">Profile: </span> <span>Full Stack Developer</span></p>
                        <p><span className="title-s" id="bold">Email: </span> <span>minehgharabegi@gmail.com</span></p>
                        <p> <span className="title-s" id="bold">Resume: </span>
                          <a className="resume" href="https://docs.google.com/document/d/1U1FFa_8QGIZ06uBLj7zRj74qPL7gB2GaQdcvnydMzN4/edit?usp=sharing" target="_blank"> View Resume</a>
                        </p>
                    </div>
                </div>
                <div className="about-me-bottom-left">
                    <div className="skill-mf">
                        <p className="title-socials" id="bold">Socials</p>
                        <div id="social-about">
                            <div id="about-socials">
                              <a className="github-icon" href="https://github.com/Mineh222" target="_blank"><span><i className="fa-brands fa-github" aria-hidden="true" id="github-icon"
                                target="_blank"></i></span>
                                </a>
                                <p id="icon-title">GitHub</p>
                              </div>

                            <div id="about-socials">
                              <a className="linkedin-icon" href="https://www.linkedin.com/in/minehgharabegi/" target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" height="30" width="30" className="linkedin-icon"/>
                                <i className="devicon-linkedin-plain" id="linkedin-icon"></i>
                              </a>
                              <p id="icon-title">LinkedIn</p>
                            </div>

                            <div id="about-socials">
                              <a className="angel-list-icon" href="https://angel.co/u/mineh-gharabegi" target="_blank"><span><i className="fa-brands fa-angellist"></i>
                                  </span></a>
                              <p id="icon-title">AngelList</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-me-right'>
                <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h3 className="title-left">
                        About me
                      </h3>
                    </div>
                    <p className="lead">
                      I'm Mineh! I'm a full stack software engineer with solid experience, knowledge, and skills with Javascript, Node.Js, Python, Flask, React, Redux, HTML, CSS, SQL, and Git workflow. I gained these skills by attending App Academy, an immersive software development course with focus on full stack web development. Driven by my passion to learn how to code, I dedicated 1500+ hours to learning and developing new skills.
                    </p>
                    <p className="lead">
                      During my time at App Academy, I built several full stack applications using a variety of technologies. Paws is my very first solo project I built as a software engineer, and I'm really proud of what I was able to accomplish and how far I've come since. Paws was built with the following technologies: Express, React, Redux, Javascript / JSX, PostgreSQL, and HTML / CSS.
                    </p>
                    <p className="lead">
                      On a more personal note, I absolutely love the beach, spending time with my family, and anything matcha! I have a passion for challenging myself to think logically and creatively, and I'm always finding time to learn more!
                    </p>
                </div>
            </div>
        </div>
    )
}
