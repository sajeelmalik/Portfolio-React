import React, { Component } from 'react';

// Components
import Splash from "../../components/Splash";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

import About from "../../pages/About";


import scrollToComponent from 'react-scroll-to-component';

// STYLING
import anime from "animejs";
import Fade from 'react-reveal/Fade';
import "./Main.css";


class Main extends Component {

    state = {
        showPortfolio: false,
        dividerAnimationPlayed: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
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

    handleScrolltoAbout = () => {
        scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500 })
    }

    handleScroll = () => {
        if(!this.state.dividerAnimationPlayed && window.pageYOffset > 2.2 * window.innerHeight){
            this.stagger();

            this.setState({
                dividerAnimationPlayed: true
            })
        }

    }

    stagger() {
        anime({
            targets: '#divider .divider-el',
            translateX: "100vw",
            transform: "skew(0deg, -3deg)",
            opacity: "1",
            delay: anime.stagger(100), // increase delay by 100ms for each elements.
            // delay: ((el, i) => 1000 * i), // increase delay by 100ms for each elements.
            easing: "easeInQuad"
          });
    }

    render() {

        console.log("showPortfolio", this.state.showPortfolio)
        return (
            <React.Fragment >
                <Splash showPortfolio={this.handlePortfolioOpen} scrollToPortfolio={this.handleScrolltoPortfolio} scrollToSkills={this.handleScrolltoSkills} scrollToAbout={this.handleScrolltoAbout} scrollToFooter={this.handleScrolltoFooter}></Splash>

                <Skills show={this.state.showPortfolio ? "block" : "none"} ref={(section) => { this.Skills = section; }}></Skills>

                <div id="divider" style={{ display: this.state.showPortfolio ? "block" : "none" }}>
                    <div className="divider-el" id = "el1"></div>
                    <div className="divider-el" id = "el2" ></div>
                    <div className="divider-el" id = "el3" ></div>
                    <div className="divider-el" id = "el4" ></div>
                    <div className="divider-el" id = "el5" ></div>
                    <div className="divider-el" id = "el6" ></div>
                    <div className="divider-el" id = "el7" ></div>
                    <div className="divider-el" id = "el8" ></div>
                    <div className="divider-el" id = "el9" ></div>
                    <div className="divider-el" id = "el10" ></div>
                </div>

                <Projects show={this.state.showPortfolio ? "block" : "none"} ref={(section) => { this.Portfolio = section; }}></Projects>
                <About show={this.state.showPortfolio ? "block" : "none"} ref={(section) => { this.About = section; }} />
                <footer id="footer" style={{ display: this.state.showPortfolio ? "flex" : "none" }}>
                    <div id="footer-container">
                        <Fade cascade>
                            <div id="footer-content">
                                <img id="footer-logo" src="assets/images/SM.png" alt="SM Logo"></img>
                                <h2 style={{ color: "rgb(220, 250, 236)", marginTop: "0" }}>Let's Chat</h2>
                                <div className="footer-social-buttons">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                                        <p className="footer-contact"><i className="fab fa-linkedin fa-3x footer-icons"></i></p>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sajeelmalik">
                                        <p className="footer-contact"><i className="fab fa-github fa-3x footer-icons"></i></p>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/smak23/">
                                        <p className="footer-contact"><i className="fab fa-instagram fa-3x footer-icons"></i></p>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@sajeel23">
                                        <p className="footer-contact"><i className="fab fa-medium fa-3x footer-icons"></i></p>
                                    </a>

                                </div>
                            </div>
                        </Fade>
                    </div>
                </footer>
                <div id="copyright" style={{ display: this.state.showPortfolio ? "flex" : "none" }}><p>Developed in San Francisco. Copyright © 2019. Sajeel Malik.</p></div>
                <div style = {{height: "1px ", backgroundColor: "transparent"}} ref={(section) => { this.Footer = section; }}></div>
            </React.Fragment>
        )
    }

}

export default Main;