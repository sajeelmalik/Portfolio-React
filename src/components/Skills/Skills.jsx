import React, { Component } from "react";
import PropTypes from "prop-types";
// Components

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NavPills from "../NavPills/NavPills";

import GridContainer from "../Grid/GridContainer.jsx";
import LaptopIcon from "@material-ui/icons/LaptopTwoTone";
import CloudIcon from "@material-ui/icons/Cloud";
import DevBoard from "@material-ui/icons/DeveloperBoardTwoTone";
import Reorder from "@material-ui/icons/Reorder";

// Styling
import "./Skills.css";
import Fade from "react-reveal/Fade";

const styles = theme => ({
  root: {
    width: "95%",
    // maxWidth: 360,
    margin: "10px auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px"
  },
  section: {
    // backgroundImage: "url('assets/images/pinkyellowgradient.jpg')",
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "10%",
    paddingBottom: "5%"
  },
  paper: {
    opacity: "0.90",
    margin: "0 30px 10px 30px",
    borderRadius: "15px",
    borderTop: "rgb(172, 82, 142) solid 10px",
    boxShadow: "0px 1px 4px 2px rgba(0,0,0,0.2)",
    // width: "600px",
    [theme.breakpoints.down("xs")]: {
      margin: "0 10px 0 10px"
    }
  },
  stack: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "80px",
    maxWidth: "100vw"
  },
  skillIcon: {
    height: "100%",
    width: "100%"
    // borderRadius: "35px"
  },
  avatar: {
    backgroundColor: "transparent",
    height: "75px",
    width: "75px"
  },
  listItem: {
    width: "100%",
    margin: "auto"
    // transition: "0.15s ease-in-out",
    // "&:hover": {
    //     backgroundColor: "magenta"
    // }
  }
});

const Skills = props => {
  const { classes } = props;

  return (
    <div className={classes.section} style={{ display: props.show }}>
      <div className="container">
        <div className="title" style={{ marginTop: "0" }}>
          <h1 className="screen" id="skills">
            Stack
          </h1>
        </div>
        <div className={classes.stack}>
          <Fade bottom>
            <NavPills
              color="primary"
              horizontal={{
                tabsGrid: { xs: 12, sm: 2, md: 3 },
                contentGrid: { xs: 12, sm: 10, md: 9 }
              }}
              tabs={[
                {
                  tabButton: "Front-End",
                  tabIcon: LaptopIcon,
                  tabContent: (
                    <Paper className={classes.paper} data-text="frontend">
                      <h3 className="skills-header">FRONT-END</h3>
                      <List className={classes.root}>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png"
                              alt="HTML5"
                            />
                          </div>
                          <ListItemText
                            primary="HTML5"
                            secondary="Latest Hypertext Markup Language"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"
                              alt="CSS3"
                            />
                          </div>
                          <ListItemText
                            primary="CSS3"
                            secondary="Cascading Style Sheets for Design"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Javascript"
                            />
                          </div>
                          <ListItemText
                            primary="Javascript"
                            secondary="ES5, ES6"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://cdn-images-1.medium.com/max/1200/1*3SVfBkNZI2f-sspiq59xcw.png"
                              alt="React"
                            />
                          </div>
                          <ListItemText
                            primary="React"
                            secondary="State-based JS Framework for UI"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///9h2vtT2Pta2ftS2Pvy/P+47f3N8v76/v/o+f7s+v6g5/zh9/7Z9f7w+//1/P+u6v103vtr3PuY5fyM4/yA4Pyp6f3B7/2T5Py27P3K8f2/7v2G4fxo3PvU9P7v06cDAAAQKUlEQVR4nO1daZuqOgweWlwBWRRX5P//zCtq03SjKTJ47jy8X84ZxdJ0SdJs/fmZMWPGjBkzZsyYMWPGjBkzZsyYMeP/gsX12JRVVdXnYrX7uLXdqjjXj9bK5nhdjNC7z3EqGeM8eoBzztg9yT5oLEvuXWvv5hgrT6P1cyhunD27I/H4INkMamuT2Bq7jdzjMGxLFlnA47oNbqutY25rjJXbX+g5ESt7n55jX63Cmqr06UPjFdbUiDjFjj69x56+ITP7WhCIv7QbV70EdjQ2tPW1bXrp60j8yixuMIH8Ba1jnBWEhgpjfZqtxcN412e4o8nizXF5uyRNxDQq2T31NJPe1Ql8yIioSS635bHh6Jv7JDQpOAIprLrCp9ubzhHjY38z6lJ/cOGbXNrXCmjk/c38AnbMRcKuiJRZ4ZV7N24rZThYVGg6kRwA9rm2FIa96Bq7ml+elJXHnazwpMw3u1ueu4qW+H7U/nuxEC9mF+v3p0jp+9n60FkZh8g+Dhd407RKavEmgNfOJzCH5JW5xnZ4hfZw3Vq8isKXxwNsQvce29VoijjXxX+GuS6r3btsC1txpL6TkDLK5rhiIuKl8t0S8VDOLXtZQmx55hM8Y0IsUtYviHM8jXGCvkkQgazOe1vZiOGccpmW786VvgeXiETWwMdYTXPwqiFvGw9rMarezv2kiKnycv36eYk+i/xrD1bM+uOeU5Ex+s5Yo5XKq2495oiJsprQa7Hr2SfWgzDcxKCSnj4iEqPdzw7NKqPpYmLJTHfcT/h71dEeP2ESW0wg8dz3XtU88T86EprAN6ZY9Mn/cir7FyPa+B8dCdW7h0v/oy9sI9NEwSOy/WX5/nU1rLsDIHZ+r6BWgNnnm8CSzhmF+k3b92MgHsDbNBKpe/gJwbvj0I4OhThYeDQaDQ0mMWxLCa1msuPFVrwwzJB5RnLefpwa+YXDIYY0DhvSEs1hmAK2ENtiKnsULJp+jVmDshGDtuFPPmhbfIBB26LROE3IRhy28T8ArNIA49BeN/qyALvLbupVOmDjF6ZVm2QtHvzCz7AIOFq8cJUHXrlYY7LCkE4tLdahp5kUCOTVQp6dYuoIwWltsgOi2BZEf0mOmEz+kyN2Q2TGq6l1GmFpo57X5Kw9N9IW9iQnqtLiPDqdte0tu4mmoYMk8LWsM0nigdSCMGNMZ6h595lmaAejtXR0Steq3wzV4W1PJI7HGBAnUqfBGyGT1EiThTRsxBRuVU9+xr8IQ7v/0QUsUWUG5MrlBAkgXkc+cX+MFZ17gzaqcRXgPgQNFaTTdL7ulCzy93KuVMkgJYh/N9NfNxrWVDPGVe43vXdSCyC3MqFFWPjwfa5n6Shmpui8yS89GrxwqE/py29o5j25CW1n+jN1KxLfNioKkpKReEiAQ79HDIinpvQ9ATPtW1+tVF3S3SbNsrZtVx0e/2ZZutlJQzHrC4PbTc9KpV/W/dJ8k0USzA70RLZxauGgd08awSd8JQarWWTXy76utP770f2gqveXa2ZoAILRTGcP7tCYettmVZzLKIYA2AF4huDGUXkuVsheUX+B0UhW8zyxrbPlvoyZHvE1HE9Cy/0yewrA946YOBZDHID49bSvRqRNp7Pan65ikU7nH+0gtJpo+JKkkgnBVxNqNB3K3n79BiaMU3is0ePd36Mn+JN5CHAB9SNiW/fjROu03RsR9W4Cm2Nxu7adeF/k+Vqss/U6zxedEtBeb8WxJrfG+D48Qj4QWS95r9m513LYSY3KBVHfWb+06Yj8xZnsIkedAfX8Icjq5NZu0QGeeKBLgW0dHupSe0vqh1h1ksnNKNSR0DYO8jriqv0tE2rXCjpMjeuFeGPQAvPstq+cZHLWjL5a10vn9N3PN2Wq1vAc/TwH65QrIiG9nR0s7TGRyzGlx/rInVqmYXBLAtdoB7CgGucoNxtivBiLxvXRMn2S4WgnKLBOBNn+YFg0awdYCWwMjrPjKDSa6RARj8tiA4qbaqCQrt6gtzgOyxBflqVFaeYg0RI6+nE1Yn04K5db1Cl1mUKEV++h1gSwJzUSDEKguz92y9JMPonoQT02bGtt/3FWFeIgCrG76EQHbCbYAg8iBjMb4akEi+O2MDLAWP3ByfiirQvO9mibtJZlKtlMUBTDj4xGUOynsEjRgkj3Go08Jjk/LFioCWWP6dMYtHiR3DobWGvhL5VpB/L0K/R71X2wXmoTycpBzuFWaeWx+4yNBcsUlgnw9iExdpV4FWzsrb5IZedKrXcDNIBCSU2La4twA24qGJpkF0N0RxCKoNlA+LOluVRNsIqDmaqSz8JKu/AW3wvlRSggLjazuRbJPimujqARYDZ6e3bBkyq7yJGX4wRWJfjdZTNM1DGGwHxrzMQmid4nRMYiay60TDV6udFgjbh0h9Udd5PizbQR2CdUIbHkOX5SUlg07m2jbRxbfmmhSgxh9u9R/7A6EkIiitDqz6QWzOFpQ5EZif096Rk5+LIbI7AF9bEtnE1Otzcm8keeYHpwBj9EYi5YkyU+XVccXs+ZYw4aUZxLYehx/aJUAEZUhaXTz8zH0gBiukTOUGPI15U+ge/mK0NxBomxl8LQpzygHDFaXPZCEnj3nqUF+4tTSDEzYw+MGG94gWE/g7gGthWHFL/+t5MMhxQXBpvQMsQGQHPbiyk09/veRaBNlIOqDQ0ShLlcJJStCD4xWsAS9BUOeLocWNn2IIy5LoggB5738C0TQCJhPCp4O0l3LrQJMr29PfTZ+n/WGyQpKzJYzjsvMIVEG0SuzZDh5Lv1TaHFwb/VKjUQDylgr/NOomAdZDuZOubmxqqifhhjrm5bclS/kMY+xgRSlmyDSJUxN3hZ2j+FlrWyUH5BjkGF3eDx4ABvpAdYYR+NqUHq+9SAuc8S/BO6P2ZJ470D0jWvaMzNTeN1SpjSBW/tkNQqWrqwiKsM0dP7ptDHSTsYv8GTGNAP4Q3v34giNjakzsYFOmRJovHVsLGFNucyLDzEGCJ4Tf/CFpmFIfmo8tRkTqEuTCywiAMZahRi8RWaer9E/PsUiozbkFVajL1KF3KVhlhfaKv073MakBZ0g64iLYxJbLzSwjgNLIZJi5wmLf6+xA/X2jKFlxjBiqlvIxpq2U5tkGx5hV94uBNo3lTv3+GXNW+qhychat7I8EwbvIXv9HTynJ50s5VxeqK5JAL6LQN3SU0bJ2BjCD1zqD9+0BskCQyZ1uHfuNKKcaeIW9kTMYm6FaPttWLobEFaMZxjYMEabFEUF82/YolKaLzxSWCQJQopWoTKFdKauANrotGjAGtiC63swJro7TSqukGT48g45hs/4DO9FmEXiZYQfqtF2MMQ0DagBrsjO7mn6qE4OHUcEebeYtW3lu9k5uTIOIdc/uE5QqHKi8SCPj8KP2NlX4Y42TNzsXhmLB2HL8memQ32zARERyBtkvdMo1a2rc+7tjto3rWDxWMAY/Ty2xMKtR2RIzgs1B0vK3fIiuYhBdOotRTB9og8pEcbDwNm9Taiej2kSrCPZdH3QqmB4CoJrHulgU84XrZdXZIkuawcLLrReRV4za2Pq8WHQ2o0vKBEKkRxbaGx1c8rwNVMiUEASArg4EWPSMxqtYMDwr9arm6c0uDEPdEmQxLpYMYI0SYrLdqED4o3zTXPLbtfVHkq1A8UMQTT8EHEENL7hCBVl2l+0WoP+yovurHU46vYAS1WoRlYo74Cq/Mg4wzmKxD1hdZPdjB69UEG9K7RzjJdkLUYYgiVwAMYpCBiNKqkeAEsE8I/szFDzePms6jvVaSrI5xVlw0ixhV9GVh1nhB9ubmYpelZ9HlW4tIMJ38QeUyBk6pKWmmbCz/gV6quegJumh4tlff5OCn6a0uUMI6CVnecPOCFCChQ27XjJaj29ijo0SK9H4JpSCR7wM0BwyLZP6YL4+S8neF+eOcJCshvyK3LnAP86TpbHpzZCNX49yUYXBre1t29cl62YrWugqP1pYwRbGPRLs93Z16jKrVGxMLCyzCZUZ0s281auvaDs4LOP+tNu0zqqCdps+Plv1gvKk3cqU/RO7Mrklbw0MyuMvJmdkXJr1fHyHqJ1DpUJ8XytJLpeW+I5LzVaVkkAdl50UcXEQUgLZzGJb1TkE8ZoxRL+JvZ7v1wNVUWU5Ys/+tZssiGwsgrdhg4VC6YONNZqGzsek3KT4oM9ND2vLMruUJ1ml9PkFWgVhxITw8y49Ho7GiLH8Sd0i9WHLBUjdi2l72X2/tJ66TN/tIiU853qkY4K3/k6eqSNCWPgyt/xLxskssqNY7rX6n84a/est6meHKsxVvwVKdbJyP5SvUWqMDTpz6h4oFpvt2krxo87av+TrrZ5qgCT58gh2KiU1bgAeN0/1NAot0uDw5wj79BjNOUVz4FV8KyeRRkTuU/WAmLWM1MOvkt5jB5fYnPffaFambkinTSFWlkYaCKkb799YWKdFDmz1ubWSYYaYEPMrTAn8rzhaqCf78yZEB1T1QBEjMK6aCk1BIWrxua0RyOgRVa5XJM3PvThukrtAr2TbKIIp4JVXb7eKwF+8nFRVilZJlz8j4AoXKDtHyR6Ssli/4RY6WlyePJfDeSQGKXp692HVqxPAI8ZMYCKdz/asXy4Krz8tpZft/KdEjyBbGTV52HK0PIEhhdHYyikcjiTYj8YLfrUAy4jGFpnocDPLffu2cmwPma6CRS8647TH6Dx6BbWLTI2KD6NV+7heXv36Tzd29DGrjx0ToNrLH0vXtmgoZUcTGFFSKZ/FayITfL6Zfn/ds3yw24HTA3SmO87iSlYfrbAUWWIvlE+uENj+LEPd0Nj6G3dOLcKPxf6iqf/pbOwJtWUVkFHmX4ptWw49eEZ/yw23KRwsbvj9MTKu5EVN0sQZC/jBDznnrjcXf8WQ++8Xj6O0oIZgx8STysanxrta+M0c9Xbq2GLno3Ir4zj0lF5oA/9g6TMAtNGasAo9q/bpTKi4qD6Yi/8FQ9TOkrZjxA1lWvreyEfaCxGml3QsHHvP/2amGro5c5GQPQb7fUVmqfmtsNb9DeGqQyqXSkvtMglqlbg1aKD/PSVNFyrKlyt5MUAqGnjcWQiWr2996UeAxHPouSl8Md0g54VXDN1w8BYcu2PXRSwt+5U0O/KsEKLLI1BZGZwVk/HwK5d7X1tdWKf7PSbbDaqWVuGdczviTPne5sKCAlHb9fQRRvLnpNao+40y6Z5XF5gXP1+oSK6U27C5/Auhevk0sXKRrpob2s8rH4tNJo5F2scbG8JDXH+t4kNKnYqnzCFilqzRM1YMkvNVqbzEKjoPWUvODxgbZ3Fgez2rqKQdl+I+DaS6Kr+LANarKkSeBnddc/QOsO3Y/N4tj9TVmq5ou2Jo4sVbCzjz2Pm/CI86yx09gnbabAyQjc5448Zj+6XGizsfFzY0JxrUXQ7DO2t/rozqLsWMWoNVZ/bQcqWK+Kc11WZb2/tJ8rj3l72T9bOxeria/pmjFjxowZM2bMmDFjxowZM2bMmDFjxowZM2bM+FX8BzA0qqTH4AqMAAAAAElFTkSuQmCC"
                              alt="React Native"
                            />
                          </div>
                          <ListItemText
                            primary="React Native"
                            secondary="JS Framework for Mobile"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA."
                              alt="jQuery"
                            />
                          </div>
                          <ListItemText
                            primary="jQuery"
                            secondary="JS Library for DOM traversal"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  )
                },
                {
                  tabButton: "Back-End",
                  tabIcon: Reorder,
                  tabContent: (
                    <Paper className={classes.paper}>
                      <h3 className="skills-header">BACK-END</h3>
                      <List className={classes.root}>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Node JS"
                            />
                          </div>
                          <ListItemText
                            primary="Node"
                            secondary="Backend JS Runtime"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmqiC1QJuTa1-JUoZrEF-t-ooj6dn2DmO3H6ZWms44QWHYXw6vA"
                              alt="Express JS"
                            />
                          </div>
                          <ListItemText
                            primary="Express"
                            secondary="Critical Server Framework for Node.js"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="MySQL"
                            />
                          </div>
                          <ListItemText
                            primary="MySQL"
                            secondary="Relational Database"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Sequelize JS"
                            />
                          </div>
                          <ListItemText
                            primary="Sequelize"
                            secondary="Promise-based ORM for SQL"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/jpeg;base64,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"
                              alt="Mongo DB"
                            />
                          </div>
                          <ListItemText
                            primary="Mongo"
                            secondary="Document-oriented (NOSQL) Databse"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Mongoose JS"
                            />
                          </div>
                          <ListItemText
                            primary="Mongooose"
                            secondary="Schema-based ODM for Mongo"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Handlebars JS"
                            />
                          </div>
                          <ListItemText
                            primary="Handlebars"
                            secondary="Minimalistic View Templating"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Passport JS"
                            />
                          </div>
                          <ListItemText
                            primary="Passport"
                            secondary="Robust Authentication Middleware"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  )
                },
                {
                  tabButton: "Additional Frameworks",
                  tabIcon: DevBoard,
                  tabContent: (
                    <Paper className={classes.paper} data-text="Frameworks">
                      <h3 className="skills-header">ADDITIONAL FRAMEWORKS</h3>
                      <List className={classes.root}>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/jpeg;base64,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"
                              alt="Python"
                            />
                          </div>
                          <ListItemText
                            primary="Python"
                            secondary="High-level, general purpose programming language. Versions 2.7 - 3.7"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://banner2.kisspng.com/20180508/qyw/kisspng-flask-python-web-framework-web-application-tutoria-5af1dbb70b6430.1030595115257998630467.jpg"
                              alt="Flask"
                            />
                          </div>
                          <ListItemText
                            primary="Flask"
                            secondary="Minimalistic Python Microframework"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://cdn.freebiesupply.com/logos/thumbs/2x/django-community-logo.png"
                              alt="Django"
                            />
                          </div>
                          <ListItemText
                            primary="Django"
                            secondary="Robust, opinionated MVT framework"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://s.wol.ph/wp-content/uploads/2014/01/jinja2.png"
                              alt="Jinja"
                            />
                          </div>
                          <ListItemText
                            primary="Jinja"
                            secondary="Python-based backend view templating"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Material Design"
                            />
                          </div>
                          <ListItemText
                            primary="Material Design"
                            secondary="Google Design Principles - Material UI (React), Materialize.css"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://www.pinclipart.com/picdir/middle/35-353932_bootstrap-bootstrap-4-logo-png-clipart.png"
                              alt="Bootstrap"
                            />
                          </div>
                          <ListItemText
                            primary="Bootstrap"
                            secondary="Open-source CSS Framework designed by Twitter"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  )
                },
                {
                  tabButton: "Cloud and Compilers",
                  tabIcon: CloudIcon,
                  tabContent: (
                    <Paper className={classes.paper} data-text="Cloud">
                      <h3 className="skills-header">CLOUD AND COMPILERS</h3>
                      <List className={classes.root}>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png"
                              alt="Google Cloud Platform"
                            />
                          </div>
                          <ListItemText
                            primary="Google Cloud Platform"
                            secondary="Suite of Google cloud computing services; proficient in App Engine, Datastore, Cloud SQL, etc."
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Amazon Web Services (AWS)"
                            />
                          </div>
                          <ListItemText
                            primary="Amazon Web Services (AWS)"
                            secondary="Cloud Computing provided by Amazon; proficient in Lambda and S3, as well as Alexa"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://img.icons8.com/color/420/firebase.png"
                              alt="Firebase"
                            />
                          </div>
                          <ListItemText
                            primary="Firebase"
                            secondary="Real-time Cloud Database"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://img.icons8.com/color/420/heroku.png"
                              alt="Heroku"
                            />
                          </div>
                          <ListItemText
                            primary="Heroku"
                            secondary="Cloud PaaS supporting several programming languages. Full-stack Node.js deployments"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Git"
                            />
                          </div>
                          <ListItemText
                            primary="Git"
                            secondary="Distributed version-control system; GitHub"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://img.icons8.com/color/420/npm.png"
                              alt="NPM (Node Package Manager)"
                            />
                          </div>
                          <ListItemText
                            primary="NPM (Node Package Manager)"
                            secondary="Default package manager for Node.js"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="https://cdn.auth0.com/blog/yarn-logo.png"
                              alt="Yarn"
                            />
                          </div>
                          <ListItemText
                            primary="Yarn"
                            secondary="Package/dependency manager for Node.js"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Pip"
                            />
                          </div>
                          <ListItemText
                            primary="Pip"
                            secondary="Package management system for Python"
                          />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <div className={classes.avatar}>
                            <img
                              className={classes.skillIcon}
                              src="data:image/png;base64,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"
                              alt="Anaconda"
                            />
                          </div>
                          <ListItemText
                            primary="Anaconda"
                            secondary="Cross-platform, language-agnostic package manager"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  )
                }
              ]}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);
