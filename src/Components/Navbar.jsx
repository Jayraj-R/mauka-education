import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import logo from '../media/logo.png'

const useStyles = makeStyles({
  navbar:{
    padding: "12px",
  },
  logo:{
    maxWidth:"60px",
    position:"relative"
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems:"center",
    padding:"0 180px",
    margin:0,
    height:"auto",
    '@media only screen and (max-device-width : 1280px)': { 
      padding:"0 65px",
    },
    '@media only screen and (max-device-width : 1440px)': { 
      padding:"0 12%",
    }
  },
  navbarButton:{
    display:"flex"
  },
  button:{
    color:"#f7f5f5",
    transition:"color 0.3s ease-in ",
    '&:hover':{
      backgroundColor:"#0A1E32",
        color:"#106EEA",
      '& hr':{
        transform: 'scale(1)',
        transformOrigin:"left"
      },
      '& span':{
        visibility:"visible",
        opacity:1,
        transform:"translate(-15%,10%)",
        '@media only screen and (max-device-width : 1280px)': { 
          transform:"translate(-15%,15%)",
        },
        '@media only screen and (max-device-width : 1440px)': { 
          
        }
      }
    }
  },
  dropDownMenu:{
    display: 'block',
    background:"#0A1E32",
    position:"absolute",
    transform:"translate(-15%,45%)",
    color:"#f7f7f7",
    padding:"12px 0px",
    transition:"opacity 0.3s ease-in, transform 0.3s ease-in",
    visibility:"hidden",
    opacity:0,
  },
  underline:{
    position:"relative",
    top:-10,
    marginBottom:-10,
    color:"#106EEA",
    transform:'scaleX(0)',
    transformOrigin:"left",
    transition:"transform 0.3s ease-in"
  },
  links:{
    textDecoration: "none",
    padding:0,
    margin:0,
    height:"auto",
  },
  text:{
    fontSize: "15px",
    fontWeight: "600",
    fontFamily: '"Open Sans", sans-serif',
    padding: "10px 0 10px 33px",
    textTransform:"none"

  },
  dropDown:{
    position:"relative",
  },
  modules:{
    fontWeight:"500",
    textAlign:"left",
    padding:"6px 15px",
    width:140,
    transition:"color 0.3s ease-in",
    '&:hover':{
      color:"#0b2e52"
    }
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navlinks =[
    {
        id:1,
        tag:"Home",
        anchor:"#"
    },
    {
        id:2,
        tag:"CohortOne",
        anchor:"#"
    },
    {
        id:3,
        tag:"Modules",
        anchor:"#"
    },
    {
        id:4,
        tag:"Talk to us",
        anchor:"#"
    },
    {
        id:5,
        tag:"Join Now",
        anchor:"#"
    },
    {
        id:6,
        tag:"Login",
        anchor:"#"
    }
  ]
  const modules = [
    {
      id:1,
      tag:"Communication",
      anchor:"#"
    },
    {
      id:2,
      tag:"Collboration",
      anchor:"#"
    },
    {
      id:3,
      tag:"Creativity",
      anchor:"#"
    },
    {
      id:4,
      tag:"Critical Thinking",
      anchor:"#"
    }
  ]
    
  return (
        
        <AppBar position="fixed"  style={{boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)"}}>
            
            <Toolbar className={classes.navbar} >
                
                <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
                    <a  href="#start" className={classes.links}>
                      <img className={classes.logo} src={logo} alt="Mauka"/>
                    </a>
                
                <Hidden smDown>
                    <Grid className={classes.navbarButton} alignContent="center">

                        {navlinks.map(navlink=>{
                            if(navlink.id!==3){
                                return(
                                  <a href="#about" className={classes.links}>
                                    <span className={classes.button}>
                                      <Typography variant="subtitle1" className={classes.text}>
                                        {navlink.tag}
                                        <hr className={classes.underline}/>
                                      </Typography>
                                    </span>
                                  </a>
                                )
                            }
                            if(navlink.id===3){
                              return(
                                <a href="#about" className={classes.links}>
                                      <span className={classes.button}>
                                          <Typography variant="subtitle1" className={classes.text}>
                                            <span className={classes.dropDown}>
                                              {navlink.tag} <i class='bx bx-chevron-down'  ></i>
                                              
                                              <span className={classes.dropDownMenu}>
                                                {
                                                  modules.map(modul=>{
                                                    return (
                                                      <section className={classes.modules}>
                                                        {modul.tag}
                                                      </section>
                                                    )
                                                  })
                                                }
                                              </span>
                                            </span>
                                            <hr className={classes.underline}/>
                                            
                                          </Typography>
                                      </span>
                              </a>
                              )
                            }      
                        })}
                   </Grid>
                </Hidden>
                
                {/* <Hidden mdUp>
                    <Sidebar />
                </Hidden> */}
                
                </Container>
            </Toolbar>
        </AppBar>
  );
};

export default Navbar;