import React from 'react'
import {
    Grid,
    Typography
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import gif from '../media/door-gif.gif'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const useStyles = makeStyles({
    root:{
        height:"86vh",
        background: "#f6f9fe",
        paddingTop: "30px",
    },
    headerSection:{
        textAlign: "center",
        padding: 30,
        height:"1.5em",
    },
    header:{
        fontSize:"1.4em",
        letterSpacing: "1px",
        fontWeight: 700,
        padding: "4px 20px",
        margin: 0,
        background: "#e4e5e7a6",
        color: "#062b5b",
        textTransform: "uppercase",
        borderRadius: "50px",
    },
    textSection:{
        position: "relative",
        top:-66,
        left:20,
        width: "100%",
        textAlign:"left",
        padding:"0 3.7em",
    },
    gifSection:{
    },
    gif:{
        height:370,
        position: "relative",
        top:-30,
        left:35
    }
});

const About = () => {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
            <Grid xs={12} data-aos="fade-up" data-aos-duration={600}  data-aos-delay="200" className={classes.root} container justify="center" >
                <Grid xs={12} item className={classes.headerSection} container justify="center" gutterBottom>
                    <Typography variant="h6" className={classes.header} gutterBottom>
                        About Mauka
                    </Typography>
                </Grid>
                
                <Grid data-aos="fade-up" data-aos-duration={600}  data-aos-delay="200" xs={12} md={5} className={classes.textSection} container alignContent="center" >
                    <Typography variant="h5" color="primary" gutterBottom style={{marginBottom:"1.3em",lineHeight:"1.4em"}}>
                        At Mauka, we believe there is always room to grow — for you and for us.
                    </Typography>
                    <Typography variant="h5" color="primary" style={{lineHeight:"1.4em"}}>
                        CohortOne will be the first of many communities for students to fail, learn, and improve. 
                    </Typography>
                </Grid>

                <Grid data-aos="zoom-out" data-aos-duration={600}  data-aos-delay="200" xs={12} md={5} className={classes.gifSection} item container justify="left" >
                    <img className={classes.gif} src={gif} alt="Go beyound the clouds"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
