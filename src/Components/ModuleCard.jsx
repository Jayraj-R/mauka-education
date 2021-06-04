import React from 'react'
import {  Button, makeStyles, Paper, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles({
    root:{
        position:"relative",
        width:"13%",
        padding: "22px 30px",
        borderRadius: 8,
        paddingBottom:"40px",
        margin:"0px 15px",
        textAlign:"left",
        height:"340px",
        boxShadow:"0 0 29px 0 rgba(32, 84, 213, 0.37)",
        "&:hover":{
            "& div":{
                transform:"scaleY(1)"
            },
            "& section":{
                color:"white"
            },
            "& span":{
                color:"white"
            }
        }
    },
    icon:{
        zIndex:2,
        position:"relative",
        fontSize: 60,
        color:"#0A1E32",
        transition: "color 0.3s ease-in-out"
    },
    title:{
        zIndex:2,
        position:"relative",
        fontWeight:700,
        fontSize: 18,
        lineHeight: 1.2,
    },
    details:{
        zIndex:2,
        position:"relative",
        fontSize: "1.2rem",
        marginTop: "0.8em",
        lineHeight: "1.2sem",
        wordSpacing: "0.044em",
        fontFamily:"Open Sans",
    },
    button:{
        zIndex:2,
        position:"absolute",
        fontFamily: "Poppins",
        borderRadius: 20,
        bottom:20,
        padding: "0.7em",
        background:"#0A1E32",
        color:"white",
        textDecoration:"none",
        "&:hover":{
            background:"white",
            color:"#1a6ec2;"
        }
    },
    bgChange:{
        zIndex:1,
        position:"absolute",
        height:"100%",
        width:"100%",
        background:"#0A1E32",
        top:0,
        left:0,
        transform:"scaleY(0)",
        transformOrigin:"bottom",
        borderRadius: 8,
        transition:"transform 200ms ease-in"
    }
});

const ModuleCard = (props) => {
    const classes = useStyles();

    const Icons=()=>{
        if(props.id===1){
            return (
                <i class='bx bx-conversation'></i>
            );
        }
        if(props.id===2){
            return (
                <i class='bx bx-group' ></i>
            );
        }
        if(props.id===3){
            return (
                <i class='bx bx-trending-up' ></i>
            );
        }
        if(props.id===4){
            return (
                <i class='bx bx-brush' ></i>
            );
        }
        return(
            <>whoops</>
        )
        
    }
        
    return (
        <Paper className={classes.root} data-aos="fade-up" data-aos-duration={600} data-aos-delay={100+(props.id)*100}>

            <section className={classes.icon}>
                <Icons/>
            </section>
            
            <span>
                <Typography variant="h6" className={classes.title}>
                    {props.title}
                </Typography>

                <Typography variant="h6" className={classes.details}>
                    {props.details}
                </Typography>
            </span>

            <div className={classes.bgChange}></div>

            <a className={classes.button} href="#">
                Know More
            </a>

        </Paper>
    )
}

export default ModuleCard
