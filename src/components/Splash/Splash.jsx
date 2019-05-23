import React, { Component } from 'react';

// Animations
import Fade from 'react-reveal/Fade';
import scrollToComponent from 'react-scroll-to-component';

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
        showBio: false,
        mousex: 0,
        mousey: 0,
        windowWidth: 0,
        windowHeight: 0,
        mouseXpercentage: 0,
        mouseYpercentage: 0
    }

    componentDidMount() {
        // this.updateWindowDimensions();
        // window.addEventListener('resize', this.updateWindowDimensions);
        // window.addEventListener('load', function() {
        //     fireworks.render.play();
        //     fireworks.setCanvasSize();
        //   }, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        // this.setState({
        //     windowWidth: window.innerWidth,
        //     windowHeight: window.innerHeight
        // });
    }

    handleMouseMove = (event) => {
        this.setState({
            mousex: event.screenX,
            mousey: event.screenY,
            mouseXpercentage: Math.round(this.state.mousex / this.state.windowWidth * 100),
            mouseYpercentage: Math.round(this.state.mousey / this.state.windowHeight * 100)
        });

        // console.log(this.state.event)


    }

    handleNameClick = () => {
        this.setState({
            nameClicked: true
        });

        setTimeout(() => {
            this.setState({
                showBio: true
            });

            this.props.showPortfolio();

        }, 2000)


    }

    render() {

        // console.log(this.state.mouseXpercentage, this.state.mouseYpercentage);
        return (
            <div>
                <canvas className="fireworks" width = {"100%"} style={{width: this.state.showBio ? "100% !important" : "100% !important"}}></canvas>
                <div className="introduction" onMouseMove={(event) => this.handleMouseMove(event)}>
                    <div className="radial-gradient" style={{ background: 'radial-gradient(at ' + this.state.mouseXpercentage + '% ' + this.state.mouseYpercentage + '%,  #f5f5f5, #f8f0cd)' }}></div>
                    <div className="title">

                        <Fade top><h1 className="name" id="sajeel" onClick={this.handleNameClick} style={{ width: this.state.nameClicked ? "80%" : "", textAlign: this.state.nameClicked ? "left" : "" }}>
                            Sajeel Malik
                        </h1></Fade>

                    </div>

                    <div id="loading" style={{ backgroundColor: this.state.showBio ? "#ffe880" : "transparent", width: this.state.showBio ? "80%" : "" }}></div>

                    <div className="bio" style={{ display: this.state.showBio ? "block" : "none" }}>
                        <Fade>
                            <p style={{color: "rgb(91, 90, 104)"}}>Hey, I'm Sajeel! I'm a full-stack software engineer with a passion for teaching, research, and medicine. Read
                    more <a onClick={()=>this.props.scrollToAbout()} className="bio-links" id="about-link">About Me</a>, see my <a onClick={() => this.props.scrollToPortfolio()} className="bio-links"
                                    id="portfolio-link"  >Portfolio</a> and <a className="bio-links" id="skills-link" onClick={() => this.props.scrollToSkills()}> Stack</a>, or <a className="bio-links" id="contact-link" onClick={() => this.props.scrollToFooter()}
                                    >Contact Me</a>.</p>
                        </Fade>
                    </div>

                    {/* <!-- Placeholder to assess transition area --> */}

                    {/* <!-- <div id="box-animation"></div> --> */}
                    {/* {this.state.showBio ? <Fade out> : ""} */}
                    <div className={`social-buttons ${this.state.nameClicked ? "fadeOut" : ""}`} style={{ display: this.state.showBio ? "none" : "black" }}><Fade bottom>
                        <a href="https://www.linkedin.com/in/sajeel-malik-545a838b/" target="_blank">
                            <p><i className="fab fa-linkedin fa-3x linkedin-icon"></i></p>
                        </a>
                        <a href="https://github.com/sajeelmalik" target="_blank">
                            <p><i className="fab fa-github fa-3x github-icon"></i></p>
                        </a>
                        <a href="https://www.instagram.com/smak23/" target="_blank">
                            <p><i className="fab fa-instagram fa-3x instagram-icon"></i></p>
                        </a>
                        <a href="https://medium.com/@sajeel23" target="_blank">
                            <p><i className="fab fa-medium fa-3x  medium-icon"></i></p>
                        </a>
                    </Fade>
                    </div>
                    {/* {this.state.showBio ? </Fade> : ""} */}


                </div>

            </div>
        )
    }

}

export default Splash;