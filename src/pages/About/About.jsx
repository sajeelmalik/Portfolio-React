import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

// Components
import Splash from "../../components/Splash";

import "./About.css";

const styles = theme => ({
  section: {
    backgroundImage: "url('assets/images/pinkyellowgradient.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // paddingTop: "10%",
    // paddingBottom: "5%",
    // transform: "skew(0deg, 5deg)",
    // marginBottom: "360px",\
    marginBottom: "-30px",
    zIndex: "-3",
    paddingTop: "10%",
    paddingBottom: "5%"
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section} style={{ display: this.props.show }}>
        <div className="container">
          <div className="title" style={{ marginTop: "0" }}>
            <h1 className="screen" id="about">
              About Me
            </h1>
          </div>

          <div className="about-me">
            <div className="pic-container">
              <img className="profile-pic" src="assets/images/Head.jpg" />
            </div>
            <div className="about-me-body">
              <p className="about-me-text">
                I am a full-stack software engineer specializing in a MERN
                stack.
              </p>
              <p className="about-me-text">
                I am a graduate of the University of California, Berkeley, with
                a degree in Cognitive Neuroscience.
              </p>
              <p className="about-me-text">
                Not unlike Childish Gambino, I have a medley of diverse experiences. I have
                worked as a Prototype Engineer and a Clinical Research Assistant
                and designed a surgical robot for minimally-invasive surgery. I
                have tutored high-school students extensively to improve their
                SAT, ACT, and SAT II scores to succesfully earn admission to
                their top colleges.
              </p>
              <p className="about-me-text">
                In the past few years, I have developed an unwavering passion
                for people, for software, and for teaching. I hope to develop
                products that influence positive change in the world.
              </p>
              <p className="about-me-text">
                I am an avid, and often disappointed, Houston Rockets fan, an
                amateur chef, and clearly, a jazz enthusiast.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
