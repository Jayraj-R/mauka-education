import React from 'react'
import {
    Grid,
    Paper,
    Typography
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ModuleCard from './ModuleCard';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles({
    root:{
        height:"86vh",
        paddingTop: "100px",
        overflow: "hidden",
    },
    headerSection:{
        display:"block",
        marginBottom:"2.5em",
        marginTop:"-35px"
    },
    header:{
        position:"relative",
        left:"50%",
        transform:"translateX(-50%)",
        width:"6em",
        fontSize:"1.3em",
        letterSpacing: "1px",
        fontWeight: 700,
        padding: "5px 0px",
        margin: 0,
        background: "#e4e5e7a6",
        color: "#062b5b",
        textTransform: "uppercase",
        borderRadius: "50px",
    },
    subHeaderSection:{
        display:"block"
    },
    subHeader:{
        position:"relative",
        left:"50%",
        transform:"translateX(-50%)",
        width:"9.6em",
        padding: 7,
        color: "#062b5b",
        fontSize: "1em",
        letterSpacing: 1,
        fontWeight: 500,
        margin: 0,
        background: "#E7F1FD",
        textTransform: "uppercase",
        borderRadius: 50
    },
    cardSection:{
        display:"flex",
        marginTop:30,
    },
    cards:{
    }
});

const Modules = () => {
    const classes = useStyles();
    const modules = [
        {
            id:1,
            title:"Communication",
            icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAw0lEQVRIie2WXQ3DIBRGjwQkIGESKmESJqEScFAJkzIJkzAJSGAPQNYQtvFXeCgnuUkfWk775XIpnB0JrICqLJkr1YBpVMnytaHUuC9PQu0eqmGKp7ir2ADbKLEBbqPEKnL/FANwpXx+F4kFtgtrZvVSIn7urrV7CZVRl2DtZLGvB5lna4QlV7xhIy9FOOkrVayxTRVy2Bmt+B3t/Six5H+0qf9j37ZgVNwSgU2vu9ijRonBdraPvqsYPtF3F3vCiXYi3m7o89Z3UTzGAAAAAElFTkSuQmCC",
            details:"Empower your ideas with the communication they deserve.",
            link:"#"
        },
        {
            id:2,
            title:"Collaboration",
            icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABQklEQVRIie2VW7GEMBBEjwQkIAEJSEACEpCAAyQgAQlIQAISImHvB0nRhFl2s+H+0VUpqibJdHpewIMH36ECpv9wXAMzsAArMAKl7M/Ay39vQ++dWquNiF/cpLwRh45N6RTZSoO8JBOBZI2cVUIyGrYul9h5R4OxFxQuYlu5IdwFu4Le2A/RsIhH43wSFvZcKirO0dCHZhPHxTV4p05stT/bydkmlxhPZrWSY28njYBjU38LWvZicmz5rQzS20L9LRpPpuSLPC4ZFVvuBjbFYU3e1nIeFpqa5LAXHCfUpxX3uRba1/O75pwzx1HxzJl84aheH/6xyouIdOA6VOF3aKlL6mvNT0ovamF1hj0eQAfkTp4wLpWkFZ/lu4v6d/ll8vRyP6D09v6KWCvx7aEL6HhN6t+e84tTUMv9+kcfDx7k4w9vuK5ekOhcgQAAAABJRU5ErkJggg==",
            details:"Learn to make and work in high functioning, performance driven teams.",
            link:"#"
        },
        {
            id:3,
            title:"Critical Thinking",
            icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAkklEQVRIie3TUQ2AIBSF4RPFCEYgghGMYAQaEYEoRjCCvngnuwO5IODL/TfmCzvfdBPQNC2fBeATZ+2NewBn5NjecAr/BBvhva0lTGO5gRhaDfOx1Eh47wAw4/nsxbD0DWIo5UthPrbcT46/oZSpRWlsYrgToOJyb8DxIWgMH4aG+D4abRb9b0NRyv2BapqmibsAy1RjCYS0qEEAAAAASUVORK5CYII=",
            details:"Make problem solving your forté. Regardless of the complexity or domain.",
            link:"#"
        },
        {
            id:4,
            title:"Creativity",
            icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABDUlEQVRIie3VUQ2DMBCA4V9CJUwCEpCAhEpAwhxMwiQgAQmTggT2AM2Og5a20PHCJU0IXPhaelfgjrSogeYKdABGoL8CdaM4LtEB+PwD16id7/clcR/qogi+hxbBY9HTcAO8EtHDuAE6lu3SprwgF9foyNQ2piRuRfJ7Hkdw2ec2lOigQSC5eM2yRupQ8kskbk0oFteo3Ztlg39fYvFk1IUsrlQ8G2V+mfz7VJH4YVSuuPPkabw5E+1ZfsrQyt1IRuFX0Ro1AgnteRZaRaC64PQz37YEo2VdTFuoPkbl9SMHlv373EBd9frO8SwU1i0U+kHYeVId05dKPb9XUW+gurKLhWFaUcvOoX5HSnwBlzfOzMSUuZgAAAAASUVORK5CYII=",
            details:"We don’t teach creativity. We just create the most conducive environment to foster yours",
            link:"#"
        },

    ]
    return (
        <div>
            <Grid xs={12} className={classes.root} container justify="center">
                <Grid xs={12} gutterBottom>

                    <div data-aos="fade-up" data-aos-duration={600} data-aos-delay="200">  
                        <Grid xs={12} item className={classes.headerSection} gutterBottom>
                            <Typography variant="h6" className={classes.header} gutterBottom>
                                Modules
                            </Typography>
                        </Grid>
                        <Grid xs={12} className={classes.subHeaderSection} >
                            <Typography variant="h6" className={classes.subHeader} gutterBottom>
                                Master the 4C's
                            </Typography>
                        </Grid>
                    </div>

                    <Grid className={classes.cardSection} container justify="center"  >
                        {
                            modules.map(modul=>{
                                return(
                                        <ModuleCard className={classes.cards}
                                            id={modul.id}
                                            title={modul.title}
                                            icon={modul.icon}
                                            details={modul.details}
                                            link={modul.link}
                                        />
                                )
                            })
                        }
                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}

export default Modules
