import React, { Component } from 'react';

// Components
import Splash from "../../components/Splash";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";


import Fade from 'react-reveal/Fade';
import "./Main.css";


class Main extends Component {

    render() {

        return (
            <React.Fragment>
                <Splash></Splash>
                <Skills></Skills>
                <Projects></Projects>
                <div id="footer">
                    <div id="footer-container">
                        <div id="footer-content">
                            <img id="footer-logo" src="assets/images/SM.png"></img>
                            <div className="footer-social-buttons">
                                <a href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                                    <p><i className="fab fa-linkedin fa-3x"></i></p>
                                </a>
                                <a href="https://github.com/sajeelmalik">
                                    <p><i className="fab fa-github fa-3x github-icon"></i></p>
                                </a>
                                <a href="https://www.instagram.com/smak23/">
                                    <p><i className="fab fa-instagram fa-3x"></i></p>
                                </a>
                                <a href="https://medium.com/@sajeel23">
                                    <p><i className="fab fa-medium fa-3x"></i></p>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Main;