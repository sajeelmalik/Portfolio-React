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
                                <a target = "_blank" href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                                    <p class = "footer-contact"><i className="fab fa-linkedin fa-3x footer-icons"></i></p>
                                </a>
                                <a target = "_blank" href="https://github.com/sajeelmalik">
                                    <p class = "footer-contact"><i className="fab fa-github fa-3x footer-icons"></i></p>
                                </a>
                                <a target = "_blank" href="https://www.instagram.com/smak23/">
                                    <p class = "footer-contact"><i className="fab fa-instagram fa-3x footer-icons"></i></p>
                                </a>
                                <a target = "_blank" href="https://medium.com/@sajeel23">
                                    <p class = "footer-contact"><i className="fab fa-medium fa-3x footer-icons"></i></p>
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