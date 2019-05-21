import React, { Component } from 'react';

// Components
import Splash from "../../components/Splash";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

import About from "../../pages/About";


import scrollToComponent from 'react-scroll-to-component';

// STYLING
import Fade from 'react-reveal/Fade';
import "./Main.css";


class Main extends Component {

    state = {
        showPortfolio: false
    }

    handlePortfolioOpen = () => {
        this.setState({
            showPortfolio: true
        })

        // console.log(this.state.showPortfolio)
    }

    handleScrolltoPortfolio = () => {
        scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 1500 })
    }

    handleScrolltoSkills = () => {
        scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 1500 })
    }

    handleScrolltoFooter = () => {
        scrollToComponent(this.Footer, { offset: 0, align: 'top', duration: 1500 })
    }

    render() {

        console.log("showPortfolio", this.state.showPortfolio)
        return (
            <React.Fragment>
                <Splash showPortfolio={this.handlePortfolioOpen} scrollToPortfolio={this.handleScrolltoPortfolio} scrollToSkills={this.handleScrolltoSkills} scrollToFooter={this.handleScrolltoFooter}></Splash>
                <Skills show={this.state.showPortfolio ? "block" : "none"} ref={(section) => { this.Skills = section; }}></Skills>
                <div id="divider" style={{ display: this.state.showPortfolio ? "block" : "none" }}></div>
                <Projects show={this.state.showPortfolio ? "block" : "none"} ref={(section) => { this.Portfolio = section; }}></Projects>
                <About show={this.state.showPortfolio ? "block" : "none"} />
                <footer id="footer" style={{ display: this.state.showPortfolio ? "block" : "none" }}>
                    <div id="footer-container">
                        <Fade cascade>
                            <div id="footer-content">
                                <img id="footer-logo" src="assets/images/SM.png"></img>
                                <h2 style={{ color: "rgb(220, 250, 236)", marginTop: "0" }}>Let's Chat</h2>
                                <div className="footer-social-buttons">
                                    <a target="_blank" href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                                        <p className="footer-contact"><i className="fab fa-linkedin fa-3x footer-icons"></i></p>
                                    </a>
                                    <a target="_blank" href="https://github.com/sajeelmalik">
                                        <p className="footer-contact"><i className="fab fa-github fa-3x footer-icons"></i></p>
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/smak23/">
                                        <p className="footer-contact"><i className="fab fa-instagram fa-3x footer-icons"></i></p>
                                    </a>
                                    <a target="_blank" href="https://medium.com/@sajeel23">
                                        <p className="footer-contact"><i className="fab fa-medium fa-3x footer-icons"></i></p>
                                    </a>

                                </div>
                                {/* <div id="footer-tags">
                                    <p>Sajeel Malik</p>
                                    <p id="footer-text">© 2018 Sajeel Malik. All rights reserved. Developed in San Francisco.</p>
                                </div> */}

                            </div>
                            
                        </Fade>
                    </div>
                </footer>
                <div style = {{height: "1px ", backgroundColor: "transparent"}} ref={(section) => { this.Footer = section; }}></div>
            </React.Fragment>
        )
    }

}

export default Main;