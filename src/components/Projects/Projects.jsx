import React, { Component } from 'react';

// Components
import Project from "./Project"

// Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

//Markdown Converter
import MDReactComponent from 'markdown-react-js';

// Styling
import "./Projects.css"


const projects = [
    {
        title: "Tempo",
        image: "assets/images/box-logo.png",
        description: "Tempo is a virtual booking agent that allows musicians to stay independent by mitigating the friction in the booking and gigging industry.",
        readme: "assets/READMEs/Tempo.md"
    },
    {
        title: "Dev Lab",
        image: "assets/images/DevLab.png",
        description: "DevLab is a crowd-sourced platform for learning how to code. As developers, we are often bombarded with an overwhelming flood of resources. DevLab seeks to wade through the flood by providing a robust, user-driven tool to pool the best resources!",
        readme: "assets/READMEs/DevLab.md"

    },
    {
        title: "Mt. Sutro",
        image: "assets/images/MtSutro.png",
        description: "Mt. Sutro Music Company is a platform that allows its associates to grow and excel in the emerging music industry by connecting, engaging, and conducting business in and around the San Francisco music scene.",
        readme: "assets/READMEs/MtSutro.md"
    }, {
        title: "Tempo",
        image: "assets/images/box-logo.png",
        description: "Tempo is a virtual booking agent that allows musicians to stay independent by mitigating the friction in the booking and gigging industry."
    },
    {
        title: "Dev Lab",
        image: "assets/images/DevLab.gif",
        description: "DevLab is a crowd-sourced platform for learning how to code. As developers, we are often bombarded with an overwhelming flood of resources. DevLab seeks to wade through the flood by providing a robust, user-driven tool to pool the best resources!"
    },
    {
        title: "Mt. Sutro",
        image: "assets/images/MtSutro.gif",
        description: "Mt. Sutro Music Company is a platform that allows its associates to grow and excel in the emerging music industry by connecting, engaging, and conducting business in and around the San Francisco music scene."
    },

]


const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    markdown: {
        display: "inline-block",
        maxWidth: "100%",
        width: "100%",
        overflow: "none"
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Projects extends Component {

    state = {
        open: false,
        readmeText: "",
        projectTitle: ""
    };

    handleClickOpen = (title, text) => {
        const readme = require("../../../public/" + text);

        fetch(readme)
        .then(response => {
          return response.text()
        })
        .then(text => {
          this.setState({
            readmeText: (text)
          })
        })

        this.setState({
            open: true,
            // readmeText: readme,
            projectTitle: title
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { classes } = this.props;
        let keyCount = 0;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="title">
                        <h1 className="screen" id="portfolio">Portfolio
                </h1>
                    </div>
                    <div id="featured-project">
                        {/* {console.log(projects.slice(0, 1))} */}
                        <h2 style={{ textAlign: "left" }}>Featured</h2>
                        {projects.slice(0, 1).map(elem => {
                            keyCount++;
                            return <Project key={keyCount} title={elem.title} image={elem.image} description={elem.description} featured={true} click={() => this.handleClickOpen(elem.title, elem.readme)} />
                        })}
                    </div>
                    {/* <hr></hr> */}
                    <div id="projects">
                        {projects.slice(1, projects.length).map(elem => {
                            keyCount++;
                            return <Project key={keyCount} title={elem.title} image={elem.image} description={elem.description} featured={false} click={() => this.handleClickOpen(elem.title, elem.readme)} />
                        })}
                    </div>

                </div>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h5" color="inherit" className={classes.flex}>
                                {this.state.projectTitle}
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                back to portfolio
                                </Button>
                        </Toolbar>
                    </AppBar>
                    <div className = "container">
                        <MDReactComponent className = {classes.markdown} text={this.state.readmeText} />
                    </div>
                </Dialog>
            </React.Fragment>

        )
    }

}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);