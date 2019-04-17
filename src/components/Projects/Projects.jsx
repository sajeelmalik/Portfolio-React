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

// Markdown Converter
import MDReactComponent from 'markdown-react-js';

// Styling
import "./Projects.css"
import Fade from 'react-reveal/Fade';
import scrollToComponent from 'react-scroll-to-component';


const projects = [
    {
        title: "Tempo",
        image: "assets/images/box-logo.png",
        description: "Tempo is a virtual booking agent that allows musicians to stay independent by mitigating the friction in the booking and gigging industry.",
        readme: "assets/READMEs/Tempo.md",
        github: "https://github.com/NasibNia/Tempo",
        deployed: "https://tempodemo.herokuapp.com"
    },
    {
        title: "Dev Lab",
        image: "assets/images/DevLab.png",
        description: "DevLab is a crowd-sourced platform for learning how to code. As developers, we are often bombarded with an overwhelming flood of resources. DevLab seeks to wade through the flood by providing a robust, user-driven tool to pool the best resources!",
        readme: "assets/READMEs/DevLab.md",
        github: "https://github.com/sajeelmalik/Dev-Lab",
        deployed: "http://devlab.herokuapp.com/"


    },
    {
        title: "Mt. Sutro",
        image: "assets/images/MtSutro.png",
        description: "Mt. Sutro Music Company is a platform that allows its associates to grow and excel in the emerging music industry by connecting, engaging, and conducting business in and around the San Francisco music scene.",
        readme: "assets/READMEs/MtSutro.md",
        github: "https://github.com/sajeelmalik/Mt-Sutro",
        deployed: "https://sutromusic.com"
    },
    {
        title: "Pet Package",
        image: "assets/images/Pet Package.png",
        description: "Pet Package is an API-driven platform that allows pet-seekers to search and contact local humane societies and adoption clinics by offering geographic references!",
        readme: "assets/READMEs/PetPackage.md",
        github: "https://github.com/sajeelmalik/Pet-Package",
        deployed: "https://sajeelmalik.github.io/Pet-Package/"
    },
    {
        title: "MealPal Ratings",
        image: "assets/images/MPratings.png",
        description: "Interactively add your favorite Mealpal meals from your favorite restaurants to see which meals are truly worth it! Rate your meals by how they taste and by whether or not their portion size and price is worthwhile; remember, a great tasting meal may not be worth it!",
        readme: "assets/READMEs/MPratings.md",
        github: "https://github.com/sajeelmalik/mealpal-ratings",
        deployed: "https://mealpalratings.herokuapp.com"
    },
    {
        title: "Rap God",
        image: "assets/images/RapGod.JPG",
        description: "Are you a Rap God? A front-end trivia game leveraging Javascript/jQuery and Bootstrap and unique responsive design.",
        readme: "assets/READMEs/RapGod.md",
        github: "https://github.com/sajeelmalik/Rap-Trivia",
        deployed: "https://sajeelmalik.github.io/Rap-Trivia/"
    },
    {
        title: "Legend of Zelda RPG",
        image: "assets/images/Zelda.png",
        description: "Mt. Sutro Music Company is a platform that allows its associates to grow and excel in the emerging music industry by connecting, engaging, and conducting business in and around the San Francisco music scene.",
        readme: "assets/READMEs/MtSutro.md",
        github: "https://github.com/sajeelmalik/Legend-of-Zelda-RPG",
        deployed: "https://sajeelmalik.github.io/Legend-of-Zelda-RPG/"
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
        // display: "inline-block",
        maxWidth: "100%",
        width: "100%",
        overflow: "none"
    },
    section: {
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "10%",

    },
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

    // handleProjectGeneration = () => {
    //     let keyCount = 1;
    //     let renderedProjects;
    //     projects.slice(1, projects.length).map(elem => {
    //         keyCount++;
    //         renderedProjects += <Project key={keyCount} title={elem.title} image={elem.image} description={elem.description} featured={false} github={elem.github} deployed={elem.deployed} click={() => this.handleClickOpen(elem.title, elem.readme)} />
    //     })
    //     return renderedProjects;
    // }


    render() {
        const { classes } = this.props;
        // let selectedProjects = this.handleProjectGeneration();
        let keyCount = 0;   

        return (
            <div className = {classes.section} style={{ display: this.props.show}}>
                <div className="container">
                    <div className="title" style={{ marginTop: "0" }}>
                        <h1 className="screen" id="portfolio" >Portfolio
                </h1>
                    </div>
                    <div id="featured-project">
                        {/* {console.log(projects.slice(0, 1))} */}
                        <h2 style={{ textAlign: "left" }}>Featured</h2>
                        {projects.slice(0, 1).map(elem => {
                            keyCount++;
                            return <Project key={keyCount} title={elem.title} image={elem.image} description={elem.description} featured={true} github={elem.github} deployed={elem.deployed} click={() => this.handleClickOpen(elem.title, elem.readme)} />
                        })}

                    </div>
                    {/* <hr></hr> */}
                    <h3 style={{ textAlign: "left" }}>Selected Projects</h3>
                    {/* <Fade cascade> */}
                        <div id="projects">
                            {projects.slice(1, projects.length).map(elem => {
                                keyCount++;
                                return <Fade key={keyCount}><Project key={keyCount} title={elem.title} image={elem.image} description={elem.description} featured={false} github={elem.github} deployed={elem.deployed} click={() => this.handleClickOpen(elem.title, elem.readme)} /></Fade>
                            })} 
                        </div>
                    {/* </Fade> */}
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
                    <div className="container" id="markdown">
                        <MDReactComponent text={this.state.readmeText} />
                    </div>
                </Dialog>
            </div>

        )
    }

}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);