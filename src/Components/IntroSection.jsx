import React from 'react'
import {
    Button,
    Grid,
    Typography
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import illus from '../media/main-illus.png'
import '../App.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles({
    root:{
        height:"100vh",
        marginTop:89,
        background:"#0A1E32",
        textAlign:"left",
    },
    text:{
        position:"relative",
        top:"-9%",
        left:-20,
        padding:"5px",
    },
    text1:{
        margin: 0,
        fontSize: "3.3rem",
        fontWeight: 700,
        lineHeight: "56px",
        fontFamily: "Poppins",
    },
    text2:{
        fontWeight:300,
        maxWidth: "40ch",
        fontSize: "2rem",
        margin: "1em 0em"
    },    
    button:{
        padding: "10px 28px",   
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: 1,
        background:"#e2e2e2",
        transition:"background 0.5s",
        '&:hover':{
            background:"#247cf0"
        }
    },
    drag:{
        position:"relative",
        fontFamily:"Open Sans",
        top:"-5%"
    },
    illus:{
        position:"relative",
        top:"-10%",
        padding:"0px",
    },
    art:{
        width:"600px",
        position:"relative",
        top:"30%",
        left:"25%"
    },
});

const IntroSection = () => {
    const classes = useStyles();
    return (
        <div data-aos="fade-up" data-aos-duration={600}>
            <Grid xs={12} className={classes.root} container alignContent="center">
            
                <Grid xs={0} md={2}></Grid>
                <Grid xs={12} md={4} container alignContent="center" className={classes.text}>
                    <Typography color="secondary" variant="h2" className={classes.text1} gutterBottom>
                        Mauka is building a playground for you.
                    </Typography>
                    <Typography color="secondary" variant="h4" className={classes.text2} gutterBottom>
                    A professional playground for you to learn, discover, fail and grow with like minded people.
                    </Typography>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Join Now
                    </Button>
                </Grid>
                <Grid xs={12} md={4} container alignContent="center" justify="center" className={classes.illus}>
                    <Typography variant="subtitle1" color="secondary" className={classes.drag}>
                        Click and drag to play <i className="bx bx-down-arrow-alt tada" ></i> 
                    </Typography>
                    <img src={illus} alt="3D ilustration" className={classes.art}/>
                </Grid>
                <Grid xs={0} md={2}></Grid>

            </Grid>
        </div>
        
    )
}

export default IntroSection
