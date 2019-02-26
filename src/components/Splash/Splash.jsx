import React, { Component } from 'react';

// Animations
import Fade from 'react-reveal/Fade';

import "./Splash.css";

class Splash extends Component {

    state = {
        bioReveal: false,
        mousex: 0,
        mousey: 0,
        windowWidth: 0,
        windowHeight: 0
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
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

    _onMouseMove(event) {
        this.setState({
            mousex: event.screenX,
            mousey: event.screenY
        });
    }

    handleClick = () => {
        this.setState({
            bioReveal: true
        })

    }

    render() {

        let mouseXpercentage = Math.round(this.state.mousex / this.state.windowWidth * 100);
        let mouseYpercentage = Math.round(this.state.mousey / this.state.windowHeight * 100);

        return (
            <div>
                <canvas class="fireworks"></canvas>
                <div class="introduction">
                    <div class="radial-gradient"></div>
                    <div class="title">

                        <h1 class="name" id="sajeel" onClick={this.handleClick}>
                            <Fade top>Sajeel Malik</Fade>
                        </h1>

                    </div>

                    <div class="bio" style = {{display: this.state.bioReveal ? "block" : "none"}}>
                        <Fade>
                            <p>Hey, I'm Sajeel! I'm a software engineer with a passion for teaching, research, and medicine. Read
                    more <a href="#" class="bio-links" id="about-link">About Me</a>, see my <a href="#portfolio" class="bio-links"
                                    id="portfolio-link" uk-scroll>Portfolio</a>, or <a href="#footer" class="bio-links" id="contact-link"
                                        uk-scroll>Contact Me</a>.</p>
                        </Fade>
                    </div>

                    {/* <!-- Placeholder to assess transition area --> */}
                    <div id="loading"></div>
                    {/* <!-- <div id="box-animation"></div> --> */}

                    <div class="social-buttons"><Fade bottom>
                        <a href="https://www.linkedin.com/in/sajeel-malik-545a838b/">
                            <p><i class="fab fa-linkedin fa-3x"></i></p>
                        </a>
                        <a href="https://github.com/sajeelmalik">
                            <p><i class="fab fa-github fa-3x"></i></p>
                        </a>
                        <a href="https://www.instagram.com/smak23/">
                            <p><i class="fab fa-instagram fa-3x"></i></p>
                        </a>
                        <a href="https://medium.com/@sajeel23">
                            <p><i class="fab fa-medium fa-3x"></i></p>
                        </a>
                    </Fade>
                    </div>

                </div>

            </div>
        )
    }

}

export default Splash;