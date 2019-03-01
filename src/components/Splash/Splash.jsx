import React, { Component } from 'react';

// Animations
import Fade from 'react-reveal/Fade';

import "./Splash.css";


const styles = {
    translated: {
        width: "80%",
        textAlign: "left"
    },
    

}

class Splash extends Component {

    state = {
        nameClicked: false,
        mousex: 0,
        mousey: 0,
        windowWidth: 0,
        windowHeight: 0,
        mouseXpercentage: 0,
        mouseYpercentage: 0
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        // window.addEventListener('load', function() {
        //     fireworks.render.play();
        //     fireworks.setCanvasSize();
        //   }, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    handleMouseMove = (event) => {
        this.setState({
            mousex: event.screenX,
            mousey: event.screenY,
             mouseXpercentage: Math.round(this.state.mousex / this.state.windowWidth * 100),
            mouseYpercentage: Math.round(this.state.mousey / this.state.windowHeight * 100)
        });

        console.log(this.state.mouseXpercentage)

    }

    handleNameClick = () => {
        this.setState({
            nameClicked: true
        });


    }

    render() {

        return (
            <div>
                <canvas className="fireworks"></canvas>
                <div className="introduction" onMouseMove = {this.handleMouseMove}>
                    <div className="radial-gradient" style={{background: 'radial-gradient(at ' + this.state.mouseXpercentage + '% ' + this.state.mouseYpercentage + '%,  #f5f5f5, #f8f0cd)'}}></div>
                    <div className="title">

                        <h1 className="name" id="sajeel" onClick={this.handleNameClick} style = {{ width: this.state.nameClicked ? "80%" : "", textAlign: this.state.nameClicked ? "left" : ""}}>
                            <Fade top>Sajeel Malik</Fade>
                        </h1>

                    </div>

                    {/* <div className="bio" style = {{display: this.state.nameClicked ? "block" : "none"}}>
                        <Fade>
                            <p>Hey, I'm Sajeel! I'm a software engineer with a passion for teaching, research, and medicine. Read
                    more <a href="#" className="bio-links" id="about-link">About Me</a>, see my <a href="#portfolio" className="bio-links"
                                    id="portfolio-link" uk-scroll>Portfolio</a>, or <a href="#footer" className="bio-links" id="contact-link"
                                        uk-scroll>Contact Me</a>.</p>
                        </Fade>
                    </div> */}

                    {/* <!-- Placeholder to assess transition area --> */}
                    <div id="loading"></div>
                    {/* <!-- <div id="box-animation"></div> --> */}

                    <div className="social-buttons"><Fade bottom>
                        <a href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                            <p><i className="fab fa-linkedin fa-3x"></i></p>
                        </a>
                        <a href="https://github.com/sajeelmalik">
                            <p><i className="fab fa-github fa-3x"></i></p>
                        </a>
                        <a href="https://www.instagram.com/smak23/">
                            <p><i className="fab fa-instagram fa-3x"></i></p>
                        </a>
                        <a href="https://medium.com/@sajeel23">
                            <p><i className="fab fa-medium fa-3x"></i></p>
                        </a>
                    </Fade>
                    </div>

                </div>

            </div>
        )
    }

}

export default Splash;