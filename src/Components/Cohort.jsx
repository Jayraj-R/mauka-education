import React from 'react'
import {
    Grid,
    Typography
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import cohort from '../media/cohort.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles({
    root:{
        height:"86vh",
        background: "#f6f9fe",
        padding: "0px 0",
        overflow: "hidden",
    },
    headerSection:{
        textAlign: "center",
        height:"1em",
    },
    header:{
        fontSize:"1.3em",
        letterSpacing: "1px",
        fontWeight: 700,
        padding: "5px 20px",
        margin: 0,
        background: "#e4e5e7a6",
        color: "#062b5b",
        textTransform: "uppercase",
        borderRadius: "50px",
    },
    imgSection:{
        position:"relative",
        top:"5.5%",
        left:"-2%",
    },
    cohort:{
        height: 249,
        width:540,
        borderRadius: 50
    },
    textSection:{
        textAlign:"left",
        position:"relative",
        left:"-3%",
        top:"4%"
    },
    icons:{
        background: "#fff",
        boxShadow: "0px 6px 15px rgba(16, 110, 234, 0.12)",
        fontSize: 24,
        padding: 20,
        color: "#0a1e32",
        borderRadius: 50,
        height:"1em",
        marginRight:"15px"
    }
});

const Cohort = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid xs={12} data-aos="fade-up" data-aos-duration={600}  data-aos-delay="200" className={classes.root}  container justify="center" >
                <Grid xs={12} item className={classes.headerSection} container justify="center" gutterBottom>
                    <Typography variant="h6" className={classes.header} gutterBottom>
                        Cohort Details
                    </Typography>
                </Grid>
                
                <Grid data-aos="zoom-out" data-aos-duration={600}  data-aos-delay="200" xs={12} md={5} className={classes.imgSection} item container justify="center"  alignContent="center" >
                    <img className={classes.cohort} src={cohort} alt="cohort"/>
                </Grid>

                <Grid data-aos="fade-up" data-aos-duration={600} xs={12} md={4} className={classes.textSection}>
                    <Grid xs={12} >
                        <Typography variant="h5" color="primary" gutterBottom style={{fontWeight: 600,fontSize: 26}} >
                            Join our #CohortOne
                        </Typography>

                        <Typography variant="h5" color="primary" style={{fontSize: "1.5em",fontWeight: 500,lineHeight: 1.2}} gutterBottom>
                            <em>Get exclusive access to our community of 20 highly motivated individuals like you. </em>
                        </Typography>
                    </Grid>
                    

                    <Grid xs={12} container gutterBottom style={{marginTop:"3em"}}>
                        <div className={classes.icons}>
                            <i class='bx bx-calendar'></i>
                        </div>
                        <Grid xs={10} container gutterBottom>
                            <Typography variant="h5" gutterBottom style={{fontSize: 18,color: "#555555",fontWeight: 500,lineHeight: 1.2}}>
                                Cohort Timeline    
                            </Typography>
                            <Typography variant="h5" gutterBottom style={{color: "black",fontSize: "1.2rem",lineHeight: "1.406em",fontFamily:"Open Sans"}}>
                                This cohort will run for 60 days and will focus on high-demand, transferable skills that will give you an edge in your professional career. 
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={12} container style={{marginTop:"2em"}}>
                        <div xs={2} className={classes.icons}>
                            <i class='bx bx-images' ></i>
                        </div>
                        <Grid xs={10}>
                            <Typography variant="h5" gutterBottom style={{fontSize: 18,color: "#555555",fontWeight: 500,lineHeight: 1.2}}>
                            Focus on community and networking   
                            </Typography>
                            <Typography variant="h5" style={{color: "black",fontSize: "1.2rem",lineHeight: "1.406em",fontFamily:"Open Sans"}}>
                            At Mauka, we focus on creating communities and conversations — with yourself, your peers and experts through a series of Q&As with moderators and industry veterans. 
                            </Typography>
                        </Grid>
                    </Grid>


                </Grid>
                
            </Grid>
        </div>
    )
}

export default Cohort
