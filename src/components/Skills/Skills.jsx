import React, { Component } from "react";
import PropTypes from "prop-types";
// Components

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import NavPills from "../NavPills/NavPills";

import GridContainer from "../Grid/GridContainer.jsx";
import ShareIcon from "@material-ui/icons/Share";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";

// Styling
import "./Skills.css";
import Fade from "react-reveal/Fade";

const styles = theme => ({
  root: {
    width:"95%",
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
    // margin: "0 30px 0 30px",
    margin: "0 30px 10px 30px",
    borderRadius: "15px",
    borderTop: "rgb(172, 82, 142) solid 10px",
    boxShadow: "0px 1px 4px 2px rgba(0,0,0,0.2)",
    // width: "600px"

    // "&::before": {
    //     content: "attr(data-title)",
    //     position: "absolute",
    //     top: "6px",
    //     padding: "0 10px 3px",
    //     fontSize: "10px",
    //     right: "20px",
    //     textAlign: "right",
    //     color: "#444",
    //     fontWeight: "700",
    //     letterSpacing: ".8px",
    //     textTransform: "uppercase",
    //     borderRadius: "0 0 5px 5px",
    //     background: "#ddd"
    // }
  },
  stack: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "80px"
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
        <Fade cascade>
          <div className={classes.stack}>
            <NavPills
              color="primary"
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 3 },
                contentGrid: { xs: 12, sm: 8, md: 9 }
              }}
              tabs={[
                {
                  tabButton: "Front-End",
                  tabIcon: () => <i class="fas fa-laptop" />,
                  tabContent: (
                    <Paper className={classes.paper} data-text="frontend">
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
                              src="data:image/png;base64,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"
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
                  tabIcon: () => <i class="fas fa-server" />,
                  tabContent: (
                    <Paper className={classes.paper}>
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
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEU3Za////8sX6wlW6syYq4wYa0pXawgWarZ4e/O2OojWqqWqdBsisHg5vLH0ueRp8/x9PlPdba3xd/AzOOJn8s6aLH3+fxmhb6artOesNPr8Pevv9ykttdVerkaVqldgLx6lsdFb7R2ksVhhL+Dm8nS2+oLUafd4+9oicBbfLoL5ZsIAAAPiUlEQVR4nO2daZuzqBKGZRGSdEzMop2Y1SyT7v//Bw+gMRoRweDS53qfDzPXdKY73gJFURSFA/7f5fT9AK3rH+Hf1z/Cv69/hDYUeqvd1/l6WMTxYnHZrrwOvvOllglDb7c+IIoIgTiRC9GRnNY7z2/3mzO1SRitzgvK0JySMCSTeLq9hy1++1PtEa6+MZLRZZQuJM5113qXbYlwdKPIraZ7YZJj8DVq5xlStUK4OlGogfeEpIuvFluyBcJdTBWdUwoJ4XXZ1pi0TrgLiCFf2pJ40451tUw4iydN+IQgvbXRWa0SPn5M++cbI7lFNp9HyCbhHOqYTzWjO7c9Hu0RzgLyKR8XgTtrjyRkizC8HT/qoDnRX6sTpCXCcaw/AdYKE5td1Q7h/DMLUxKJ71aei8sGYfSLrPIx4eOXhQcTskA4Cyz20EzkZGly/Jxw28iHqZeLlxb4PicML5NW+LjobQCE0cHKJFghcrDg4nxGOAo+9mKUcp1Zv4Qz1RreijDa9km4oy3zcdHph7P/B4SbLgDZYFx8Nm00J5x3A/jxYGxMeLbux1QKo30PhNPuAJnouXPCnzanQYnIqfHM2Izwuw1PVCkYN100NiEMrx23IBemDd3UJoSnHgCZ6Lwrwu67aCp0aTL5mxP+9AXIBuOpC8KurWgRcWEeFzclvPQJyBGNZw1DwlunE70MMTZFNCNc9w3IN1YNHXEjwq+unG2VMDSLNJoQ7ocAyFvRaK1hQLhrL+ZkJoxWrRAuh9GCQiYenDbhqn8jkxPV36DSJRwPCpB5cNqLYk3Ckdt2VM1UVBdRj/CBhwbIEDcWCaNgeIDaiFqEi3Yj20010dqB0yE897deUkurFTUItwOaCN800Yj51xPOBjZPFKRhUWsJo34XhHWqn/rrCMNBmtGcah24OsLpUK1MJlKz0qghnA+7j3JhqI4VqwmHtJ6oFIbKwIaScHTs6BlJHMPmKR04VkXgVIR+3I2VwYtx6Hu7U+PUVPjdkLCr4Db2gOhn41PTQUEUeSkKwq6sjDsFyyNc8xDaEsFmqxjFzF9NuOxoEDruBeyQA49TZhNH36dDjBoMSVo5Z1QSep3NE3gBQo4ESeJI+4/9NzVdzWCnyqBWEYaL7nwZsgJj0WHQZTV+iCf1pqb5nO6vIeG5w6keBz7YC//eRRN6pJcx4Fn/hnauytpUEHY71cNrwXDD44mNqtB0C+Eoj6LKCaOOV0xoDqKkV0LRd1w0jXhSmdloxNKhKCc8dB22oCuwE2z7bdKWkKfsG2Y+yid+KeGmc3+bD0WOBjdgnH455XvaZtuVE9msKCMc9bCgIHsw54hsXnuOELEbujYyCESy8yYjPPSw6GWOjfDz8e8qe79uwB74ZrIf5Eo2+iWE214CMyQEYgrGuQ6E8chw3pqUgxplwqifNSFaJt20IOywVrwaTYylhVSZ8NJP3AKfwL3ceXAcAt8xGDVkXUvYW/DwGAGJpwh/QOrSaQo96gj7MDNCcM6XGCXxuLbJ7OW+T4rvhMset7J9IAsqoDsITV77cawm7DE8SuZgJLFybHGVeQE6wgcloayfdCYyBmOJmePbvSabQ2imIuw3wk098C2rMRGCyMDY4JOCcNlvAJhKzSn36MDVZMYYVxP+9tqEbAQ9ZO4GH4krAz8EXioJJVNul2LzRdmt4ZqwRjGJ3dKoirDnzd7JDMg/cC9mNpB8VRBGPe8zEd+rMCjMBIUmjehWEO76tTM4rky8gmd+VlX/T9GxnLDDAKJM+Fr9jpnTGho8Xd7W5AirukhXYotgQYjj8mfM3zHbZQhlhN1HZ4pKCXEcBeUPA7aKMrE1Mxlhz53Uwd9gySDgCGzKJo/sjBoRriWEXt879mxiv1M+GoFfnt75rG+wlYIXYZlw3/uWPfbDo2gs2cTMcy7m+tVFXlG3F+FP78lrzMYfML2DO3iUjR5mIxHMfo+aPQ0tS4S+5cdtILHKP/pgvpQ1IhRHnh9nqMX4GogZ4XgAaRcBe89H1kdj4Em6IwzWYwbp/eg8Kf4tEX71PgxZ19qBFQbg+ziTPw6k8frO1ng6OzakRHgaQnYX9EHIPFA3DivW4hiia6S1Y3P03gjDAXRSbuQjYdThFcyqHshlLQ3WtYhZLONJOIRh6PAg90UcwSVTcKuEmHxH9dEIsnsj7H82TJUeCiA/frWPBfGyNkwM52+E095nwzfBxU7invKdG4KDwNnWLYmz5cWTcAh2pigcrCU/RL+bexqjuCgbJYu4pYRdb9zrCMfn0s/ixEJGo/F+Km3i128vioSDTubOy2fT4W3BJg1SM6xwXCQcjKGpEbcfSz3fNCgS1kXZIKIuQTJXikJIdfPQMHyX/JPsz/H/KL57suIF/rTao0io3tzBZD2L/Gj1W/rLZD7y/cfupNHJMUHX9VdRN/G17gReb7mfrn9p+jK/tkzFoAbPQgm3spf9pmIb+upRm2XFvTc1esa06iMgMJDU0RWrbvQ9fv95uFzwPxiILeu3eXHCs1C8RV1PfRuHnnLYwixN5S1oSTYVH5RFCpH2PCGSn5jgIQspIXtXPL3ru+adZptszutdViq3XVW0SPCVFiDbM8p/XxpVCP28wrv7ekvRU2lTMx9ETuhg+ssYT+pWzBaIOoRJdqroSgUHPfkj4Sh9HpWI6Ab+NQ6Kcp7JE5vcJ99iUNxpFSGf+BdjECu/8s0v1SFci+9d5/7PJBayv2sQTsT72ZRz1VPXY5uPwEDxUL5IBZMT8uKYa085MiZjY8KbOCfmvRox9fxw1oa4YOmT/4cwsR9R8Rok9ggniQXFINGEk/mBipC93+tKRXj0i4TKUZS2IX4Oj+dXiLe0Oj4J8XTOVNjKhOc9ExujZoRIh9CBB8UMkJnSlDBSAT4JjyJ8la1MU8fvhJ6ESc/f57tDYqO+oDNpgVCZSOReioS+ZKugREiS1/J0DiYCeIxgRiisybZAKNJ251C4IryLE/Lmt6gJQyWhSnBbJFT/lZQQJi3y3B9KOu0FahGmIN5+nup2xcIvaYswMzRPQuUG/pMwSTcKkx+SxPAgR4tQkmfuL3kB8LYI3WyjW8fzfhI6RMAkGyTJbM9+CIvjsILQIXHZazvDtghzaUMp4VaLEIrifiK3JZ3tqaNLyGZpdJ1vEm1XYQrWEiG8vRMq63pkhA4Sbc/DBzCZ7Yk+oSOul0kEaXKgbkVaInxtWzwJPT1CIgJY9yPfzeTiYVsDwvzfFJ/MaI4Qu1zYCiH03gmBylN/ETpH8Z0nnCyb+IZmQ8Lkk3GOEB/OFybubT4J46aEWZAmR6gK6ucIEwu6pMlfEBbYFmEaZfLZyo8+CUFDwtwWcEaoMjU5wqTjhDid7Z0yYcFvqSY8Fnspt88Yi+8Jr4iCfC9tcLxlkktP1Inq5wgdItgShyFxUV+E4qfjI3npmBFCUhBNwJYk7Yl+MGE//S+xDxfxrwilo2mMi79LMI8K839WP/EL8LX3pHhRecJcD0+zUzLCNDLi7TaZ5qOUEC7HBaWGgPnkz9c94z76JpeQxnynZ2fzCr97v0xXq9Mq/l1WPbCbDyhkhIoU/Txh7rBm6iW8COGPvDYlJ5SWkftKkkukv+SJHiM9/LpGX3MnYq+j6oELtcAywmX1fFEgzLIcnv36RejAeCdjrCD0kiKTOJCdqtsn54HRVFJ+bk3n82A12t+rVk8wf+giI4yqLRbZeUzntB+7MZ8p/GyVBFfswyhZFrIBct3slpmSW9U44cwraDTbH54nYTEJ5qtHEqPxRuOlaNNReuLZRc5lu1yNZy+NL+R2C/Zfl2UFISzUVX7lYig2Oghlyj7GExQElBQ/zd5PwSz8l1kaRIsqXjoHET0KUTqhgTgxEWVnSF1I0CQv13GZXYNulaUpJnq/CNsoyHasnC0Uwlj0zOjQMIUpNc9lwrAmKlwvF73pmISZzoYTGk6z0qbNtvxIsd5wLq/t0woD7mW2KmiWboWZtwU5Xa/X75oYbOUve1WEJhn/MkF5rebw1GB7ObnRs9FjpIsCGeGnO91ywlntDoNlqU4FfVisxT17o6LGy3WzuwI/0PuhoGKu/ofJe+7bjEAn0mtW29VkpiI0OUA1UOFS8YjimZnvoeWcGKtcnrZIOPorCQtVkhzmfju71tMhYGui5bpfb4Q9HeS2JSjZaX4/Q9r3kYTPRCRFv94Ju6y8Y13SlIDyafW/24iymhGyigO3P2tskDRUUiYMB1gVWUtUXq5VUvmjMv942KoqhSWr3lKfRD1E4YpbIWSEf9KeVlZqlVZR6q4anTXBysqJ8kpYf6JuaV6v5BJNQsVRgGFKViBKTQiahvL6kapcchXhMEvpV4io7iurrH3Zc30FE/GihA0Iu6tf+qmwq7zIS1GDdvNHWhE1r3b9NwwqqinKrqx23eM1edpSWplaQmBaJbV7qa1MPWGozqXuX287aeaEIOqoaHlTVS0o9AmBN+j1sM71ZLU3eHhdb60YSOcSFo1bWEYmhRk7lSw62oQwS4sYmtyF1tWyOrchjUyrh3ciLC/93IhwgLeucW9U8xprLcIhjkVUOtL3ESF4DA1R/xpLTUIQdb9frZLBJZa6hLksrAHI4ApLfUIQdZ02Ui3t2x3NCEUG9iBEtW4FbEAIwtMglsSoVNDaGiEA0wEgqu4F+pwQnHuP3ZBp/VN+QgjOPcf7ieryKiuEYN5rK5oDmhOCbY81zeFJaznxISHY9xYqhgdzwCaEYKlRd2MwgI0IwaMXDw7+NgFsRgj8a/cTY7MWbEpoesONBZGGgI0Jwa7bwUiuDQGbE4K702E83NiTsUFoeqPWJ0JacUPrhCC8dDQYqaGzbY2QTf6dxBm1rlBviRDMOhiMJiEL+4TAW7Q8GDHRjqq1QwjApVVPHAbv9zd1Twh2LQYayUmZZ9ERIRjpVflroI+MaCobhGzaaGVBhT+0MYmsELIFlWt/tfH5EBSyRAiiq22Dgy5NPdGibBHyIl82m9ElNnoolz1C1oz2PBx0qE+y0JRFQjYaLRlV6JpsTNTIKiEINxYsDqbf1hoQ2CZkXfVGP2Qk0joZzWWbkDGe0Qd9FaKNHROayT4hY2x8ghvCm16ChYHaIATA3x0adFZIbzYHYKp2CJnut1w5FA1hQtfW24+rNUKm1SVAmusOSOK95fH3VJuEbPaYrReI1PVXSIObbnaMudolZAq93Tk4VhZXcMkxWM8+XgQq1DqhkLdkbckaM5cDiDGECMGfvWbyVmN1Q8gV3pfrU+wQQhB0nXhxOm9nLZjOkrojFAoj7/F4eF7UZr8sqmPCHvSP8O/rH+Hf1/8AWUX8vJkEuAkAAAAASUVORK5CYII="
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
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAADxCAMAAABiSKLrAAAA+VBMVEX///8Dr+8vQGojeb0vPmcAru8ifME5SXIufsAAq+4WdbsSK154pNHf4ebl7vYaMGEuSHW/w84qWo8sUoQmbawwOmMAb7kAqe4wOGIjN2QqPGcQnN640egeg8YNouMpX5eJkKX1/P7z9Pcag7oOmdUoVoTl9v3a8vwVldcjaJnq6+8qTnqIsdcgcaQIpuQbis2nxeFGvvHB6PqL1PbH2uy14/ketfDKzdbW5PE5hcJsd5Kl3viP1fYmXo4cfbKYu9xxy/ReaoiYnrFJV3tlnM1Pj8dRwfKvtMITksxQXX+iqLmXqcITT4nS1t5hbYpWhrcAP3l8hJxTk7uJRqDfAAAQU0lEQVR4nNWdeVvbSBLGZR0ONgE7gMASkGAwhAngXCRDDiCZHJDMTHaz3//DbOvu6kvdpcNy/bf7zIj+qauqq94ueSyrHXv18kNLf6kde/pyxxu8fbPoZdRmJ58GXq/X83a+P130Umqx6YfeoJeYN/h0sujlVLdXb+MNSm3Q+zBd9Iqq2dPvNE+8TW9fLXpRFWz6yYM8CdPyhtMHb8DxpOG0lK5HAkjIE4eTt3yn0wkbQCzTkoXT9LUggJY5nD4oHI5i8l4vSTi9eql2ONr1liGc0pJHz7zBy66H0/R1T8fhaKZuF0ZvtAKIYfJeL3rZUnuqHUDQBr1u9hknn3ZQPL04nLqXyacfJSWPLlPXwgkTQNAGvY8dOp24ngG3TZ1p24U9A46pG+H0wfAEUjMtPpxg013dSDgtlOfkOzpjy5kW2GdMTUo4fVucClZnADFMC2nb9XsGjLWvgtVyAqms5T7DuGfAMbUXTnpNdw1MXjvh9LTmE0hlbahgFXoGjDUuKk8/ovcH3zt9b7AwwvcMnvcdnUy8QVMqGLbpTlOxkUgErRkVrMqCesmC8IdyA6fT9GMFpylycAW3rbnPeIPO2EwXR1ILlmnQqy+c8AEkEK7w6b+2tn1aRbV6nT2DSsFVMszbGgoj2UWdzt/PMEjf4Q0oqaeCE+9UDSfVRV0ZT3bap3tC+0yFRFNNBavQM+R/uMj6oDc9wQtI+HDSuKiTWZFrQaML7sDwrwvbZ+Cb7uI85M5UcPpXKarMw6lC052VCMLbZXg+4cVyUxWs7KZbYSQbTbPlCp8BZBH80WDUZ0xf43nyLVBkycGAcr0Kp9OOrqj8pkIAZWmoRJoE77dKiaXTtlcqedJUVr7JsPCscjqV9RkVeoaiRNDKYQOPOinxf7YknCr1DHmJoJtVwEnZzOmEd+hCAzW5TIJrwd9yeD1xOFUIIEmJoLMWqoiY4s90UThVuGcoMjbipYAGqs7TCd9aFmvCrQcWEVV6J1oFw/cMtJJ7inyIt/PCAmtBM2UuXKFnALE97O+iHnI/PgD+UiGc4jq4wgnEdCqO4+w/Nn7G7HoSQKIKl+9x1T/DB5AHu0knsudma5lfuL7NElVxm9m15ezjfKXo+D+8oYic/qnBQ47GE9sWEGG7mfkf7gNrhfjK3PzfpVWENJic1FZ0XW927Ls2TXTynWp6zMPJu7F9OyYivmLKk93rJMdYkmUyImeo4XoeeZ8JT0FEajD6WDFtao7GPnlYSuQ4Jr5SFPG59BUd2k5hw9PStdz4vm3TRMkRAo4Vk8ZzNp7ELygncvq6viJu6sj/+9yhTR2d93EAUURFQwUuV3RPp/n1JN3wgoi4npbfFk0dUyJ4vd2VIbVNikxe/P2MCDgYOBR0Ln3nF8WG00TE9UrfR65PiScET+ldEoeTB/5+ZO7kf8yqgbJXejEfJwRbTFR26hclgqypm0PXE0SnlwQwxXM84680obKnLAKOzsDzIJHaV3paTd3jfeUrmh0Dh7P98ZH4UUDZk59O98zzOCJHfuoPMi2+TGsFrgcLoyJjZxt0MZfdOcN7PfHpNL+GzxMTiTN5IcOVS0Xe8yH9uOKwu2ED6FiZYKGyx55OXs+LSijWhERDLpMXFzd6Dcx8Hzwwcb17GEDE4e7LngOUPfZ0Yt6PiigKJ1AY5U2vfqe722dcb3bNBJB7o/Mc0JvS4cS+nxIikHqLps6k1PJg1rthAsi/1iwmYW+aiTtsgtEgIkXEbvbEp/wb0rH5fhFO/Sdwg85KHY5iorsWcjpFJaGMR0kU+wql+yI6w93+UETk21oOVxgoIk4+XdhihysnImlq/hHhcIV5pzyRO/nDuHsB3f/aqpynlGj4MHnI+lu0NMkS+aREQBil0NRDNDTtoFKbXz/pAyL3zFyKSJnmV3USOcOS9kBsFxOfJdoc7uOUjaPRo1qJHIMOKl8DiWCXI+qTftCch6Tr+omiRGG2hoggJ0oOpIgoPxm0LU7XTRDpdFD0Ggoi54l9kxBuJv/bSNlLGqBmiIYrem83b8Iyoqisir1wMyuP9FpmYvdpA9QMkaOlhd0XTVhClO7InGSKzaLg09rwWd4wNEZUqpsCFSEmKvZ1djwuiDSEcrphaJBIqYV5UEVwnzBywz1dlA9LNvyIrncaJZJn8iObaeq2uHA5hf2gfMNnZxP6Wc0SkW5D9HaTjF2YPz4S/FN0Ue5IlT2uwG6YSKSbsmvw3QvJBnD9IG83XMfdOBGXyZk1uJNrxZkD5RUuk99Dh2uJCL7deyib2ZOSpm4A5RWw4WwH3yJR/nZnjMykoyIAZc8pNnwuknjaI4ozOSsz6TZ1QmXvSCKJtEc07DMZ256MdZs6VtnzoowtkxBaI3KcDehwvihj67mecyGXRFok6tNErm+qItCZvL8pB1oMkYtREbwinDpH5ApLhHLLReWuEbnHiEv3xHaH3STaRM5GkHpwq5tEG33EHE08B+B3l8h4jibp4N0uE5nNRqS3Jh0nMlD2sg6+60R6yl507ZiVCN0n0pqNoGrSZSAqFXrANd0yEDlq3ZSZA1gSIkUmv2EakKUhkmRy/p67faKh4h9SEgnCaS6459YhWq2TaPpwKGdSEnGjRnNhU1dOFAQHhzUSWdbVVylTCREcS2M7eE2icPRrLVtKTUSWdfltG0nk5OF0f8zLcDpEoy+PioXURmRZe++ETDpEcSZXDFYoiYLgr0OrESJr+mJF4HpaRCSTsxlbkygcvV8Dq6iTyLIOz3kkTaK+rchjcqLJlz+ZNdRL9OYto+4aEI0V65AR+ZMb7uPkOomS4TpmeK5BIncSTXixHyfXR1R8MfUYXAA1RuSfxVIZ+/lXbURg1mmX+tcaIvLtTCrzdsCPINVE9Oolc8Vzmq8+J/JrJIq12WJokZ7Tr6cKEgzXDfJJs4TInfxxqnqWEdGE1WapEbt6KlVh+5aOqydE0Rp2ayISXd96g5frdRJJRtvjm4WIKHH6CkTvCqJ4CJy32T+190fC9o0w9Tf8dA14In8WT+oSIpdzuGSLLvwmOj5h+7bb3zxL11CFKLqZJUQT8RD4ke8308OKP2jL11CNKNrwTeG8QDKq0dDsllKIq0pEko3gqVnJ3pjOoBDiqhPx5uVjEo0RKYS4BoioMYkGtSDpR0p4oomYCIxqNKtuiYU4NNFE+BXF/AKolE3rdaJMPthXFHZyIt8WZ2ym521cgRSE05G94UiZZESu+0ScsRcwu8UMMM7Gk2h5MiYJkbu51ec3fC6YdWpFJabCKR+HtiVMQiJ3vJXMg4Nc4wk//2pH9+6np9OcGq4jq9Qkoumpo1vy+VdbSn6cyeE3qa6QiSNy/estejdPs8E2iarX3t3E8+xXCTLz3Zs5M8EkIJoc3zNzTlGukQ3XtUrkbAiH64oPxEREmYoAv9vel8jiLROB2S17cpYf/7BJp4mokULwBWPXbsSiV+/S/TRcbUFEUffAiF3niPjhukHBlBMVslVmefXUNSL3TFBv5juQEgmHwLMRu84RbTyXyispkTu55qmjn2zo6s2ypB+MBzcjIsmXvUfjLs9uCfvByKv6Y98XDoFHP7HQ7dt/YT9ImEJBE5T9yE63iSQftD0WOlxaD3adSHvE7j7/3K/zRFq//EZ9rdR9ovIP2uCoxjIQOSUTq7AmXRIixS+/saMay0IkU/bYH9lZqtktQSb3BKMarc9uHYrnZ3SIuEwuVBHKicLRj2c1ElnWniPdpvK7ciqTS35EppQoCO6ypdR2+38rG0crJ0ozueJHZEqIwtFBsZD6JjQOz8VMWvMMcTgdSVURJRE9XFcrEUkQwlFIzQmNXdE3rjpEYLiO2KNRBSLn3RV4mHX1dZtj0iRycLNbQQiG66zDg0AFVErkDM8PIRM/Ctnk7Fa4ygzX3dlqoHIikuJeQCSLHRtskGjEDNf9+WMUqoE0iAjTu0uINIVprzGiYPQT/N1nv0t59IgcZ/vrOmQ6PKfCqSGicPU3dPifQYnDGRA5w+1z5pfo14tp6Zwo/KdGotGPf6HDPVCmOFOiKJz2mHC6+pYypUSkTPlbWf6ZEAX2Hfhjz96vljucGRFxvW9MJrf2krSXEAX2T2tPUf2ZEIX5/H3q5H+NdBzOlIi43sN1limqYCOiMPhN6sgKRP+JNzwmCkefocM9+qLncMZEkevdMuF0eOsM+xvZGvBEwdpVtOER0egBLBHWfmlkOCxRlMnZcCJp75/M6SsQ/RtveH8zGHElgrbDoYgIExdO639na6hGRM7u4X9/GZYINRBF4ST7T/RUJbKmsERYKy8R6iAiTEO2MKqLCPrzb92MXZmIZHK2MGqA6M4wgKoRCQqjakQjlkijJpURyb6TKrPhkC2MKhCNHjwDD3qGcrjIApsU0nJNpIRphQ2nS8XXfgoiNmNbP0OUw+Xt1PpDvi/Vs+1vTDitS6QIFRHX1JESAblBRTt1hXc9tjBaF7TtSiKuRHiP5QkCup1SyHFlTLeM68lej5CIOBz8tw/0a1Jo4eoBox9I5bhSJq7P2HsnepSAKBy9hxnhES5jx9XtmsWaWLrSMb7PEH3ByBGFrIqw9hmZ4UJWAMvs8ht2m7bPmXASZFCWKGqoaDs8QAcQ8yTwboX+osPEZXIu7UGicPQbOtzdA7TDMU9i3y3a9bjCiFEraSKuqfsXWyLYq58FJSF8t1/RmZwrjEDao4iCkFERdGQrobG5X2yXqssiNRNXGFHPyom4PIsuEbhiQ2ov6svkxbNSonD1B8yzf2JLBFJsqAII2lRRzahtm9X+85MuIQoYN9GXrVgeVtArs3X57zGUMXGK0WF80kVEQcCUCAayFbTgwZ1lahXCiVWM4t+r6I+5r/gfaeqkPE/Aljx6JvztAi0mTjGyLr8Ogy811aTcm9E32T1lufGFkbX3k9FJkTUcCSD29w1M7Ap/OnHhBAxdIrCKuLldrmCZHLbPKAwjWyUbxPUMGHuBbXG5q7TUcLJVzCPoGTCm/LUgpQkVoztkxg71Sh49I9kXuU3b7M00qUlRPMqeAWOSX9bRYAJ9BromDQJlz4AytApGKUbYmjRc/WVW8ugZum3PMjm6JpU13dUNr4I5t9Nn2BIhCH7WkLFltoc+nVaMb4ISC1frDyBot8jTaUsxFaTgGX1pIoCgTXGi8hYGKAibCiBoVxgVDEHEdVMNmlg1rZeoQs+AMfM7GlOiaj0DxkzvaMyIME13dTM7nUyIglp6BoyZ3NHoE5GSp80AgjY913Y9XSLSM7QdQNDkd3o4oiCst2fAmKYKpkUUBr8XFEDQtFQwDSLhRd1iTEcFKyWSXtQtxspVsDIi0nR3wuEKKwsnNVHzPQPG1Hc0KqJw1fCeoS1T9hkKoiDoUgBBW5cXRlKiNnsGjEn7DAlRGBhc1C3IbsWnk5Co4j1DWyZWwUREo4X0DBgTnU48EfaibjHGi8osETdW13XjhlcYInbKaRnsEJ5OgCgYLUsAQQNtO0UUjpYpgKBRp9NWwbPApru6FSrYVsbTqZ4BY9nplBDVfVG3GEvCaSsJoM6XPHq2Rwqjrfpuurtg09vtrTpvurtg61/bCqD/A2gGqZK3aR1sAAAAAElFTkSuQmCC"
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
                            secondary="Schema-based ORM for Mongo"
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
                  tabButton: "Frameworks",
                  tabContent: "test"
                }
              ]}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);
