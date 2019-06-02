import React, { Component } from "react";
import PropTypes from "prop-types";
// Components

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import ShareIcon from "@material-ui/icons/Share";

const styles = (theme) => ({
  card: {
    width: "325px",
    maxWidth: 345,
    height: "500px",
    // maxheight: 345,
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    boxShadow: "0px 1px 7px 1.5px rgba(0,0,0,0.2)"
  },
  featuredCard: {
    width: "95%",
    // maxWidth: 345,
    borderRadius: "10px",
    boxShadow: "0px 1px 7px 1.5px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between"
  },
  media: {
    height: 240,
    transition: "0.4s ease-in",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  header: {
    fontFamily: "Oswald, sans-serif"
  },
  description: {
    fontFamily: "Lato, sans-serif"
  }
});

const Project = props => {
  const { classes } = props;

  return (
    <Card className={props.featured ? classes.featuredCard : classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.header}
          >
            {props.title}
          </Typography>
          <Typography component="p" className={classes.description}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div>
          <IconButton aria-label="Share" color="secondary">
            <a target="_blank" rel="noopener noreferrer" href={props.github}>
              <i className="fab fa-github" />
            </a>
          </IconButton>
          <IconButton aria-label="Share" color="secondary">
            <a target="_blank" rel="noopener noreferrer" href={props.deployed}>
              <ShareIcon />
            </a>
          </IconButton>
        </div>
        <div>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={props.click}
          >
            Learn More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

Project.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
