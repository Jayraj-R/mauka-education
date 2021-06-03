import React from 'react'
import {
    Grid,
    Typography
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        height:"86vh",
        paddingTop: "100px",
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
});

const Modules = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid xs={12} className={classes.root} container justify="center" >
                <Grid xs={12} item className={classes.headerSection} container justify="center" gutterBottom>
                    <Typography variant="h6" className={classes.header} gutterBottom>
                        Modules
                    </Typography>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Modules
