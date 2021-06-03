import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'
import About from './About';
import Cohort from './Cohort';
import IntroSection from './IntroSection';
import Modules from './Modules';
import Navbar from './Navbar'


const Layout = () => {
    const theme = createMuiTheme({
        palette:{
            primary:{
                main:"#0A1E32"
            },
            secondary:{
                main:"#f7f5f5"
            },
            error:{
                main:"#E7F1FD"
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>

            {/* Navbar */}
            <Navbar/>

            {/* First View */}
            <section className="intro"  data-aos="fade-up" data-aos-duration={600}>
                <IntroSection/>
            </section>
            
            
            {/* About Section */}
            <section>
                <About/>
            </section>
            
            
            {/* Cohort Section */}
            <section>
                <Cohort/>
            </section>
            
        </ThemeProvider>
    )
}

export default Layout
