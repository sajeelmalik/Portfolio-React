import React, { Component } from 'react';

// Components
import Splash from "../../components/Splash";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";


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

    render() {

        console.log("showPortfolio", this.state.showPortfolio)
        return (
            <React.Fragment>
                <Splash showPortfolio={this.handlePortfolioOpen}></Splash>
                <Skills show = {this.state.showPortfolio  ? "block" : "none"}></Skills>
                <Projects show = {this.state.showPortfolio ? "block" : "none"}></Projects>
                <div id="footer" style = {{display: this.state.showPortfolio  ? "block" : "none"}}>
                    <div id="footer-container">
                        <div id="footer-content">
                            <img id="footer-logo" src="assets/images/SM.png"></img>
                            <div className="footer-social-buttons">
                                <a target = "_blank" href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                                    <p className = "footer-contact"><i className="fab fa-linkedin fa-3x footer-icons"></i></p>
                                </a>
                                <a target = "_blank" href="https://github.com/sajeelmalik">
                                    <p className = "footer-contact"><i className="fab fa-github fa-3x footer-icons"></i></p>
                                </a>
                                <a target = "_blank" href="https://www.instagram.com/smak23/">
                                    <p className = "footer-contact"><i className="fab fa-instagram fa-3x footer-icons"></i></p>
                                </a>
                                <a target = "_blank" href="https://medium.com/@sajeel23">
                                    <p className = "footer-contact"><i className="fab fa-medium fa-3x footer-icons"></i></p>
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