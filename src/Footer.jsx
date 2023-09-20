import { AppBar, Box, Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../src/Assets/images/dufs9495.png';
// import { createTheme } from '@mui/material/styles';


const Footer = () => {
    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            textAlign="center"
            // bgcolor="#2979ff"
            // color="white"
        >
            {/* <AppBar> */}
            <Container maxWidth="lg" alignContent={'center'}>
                <Grid container spacing={5}  p='1rem' >
                    <Grid item xs={12} sm={3}>
                        <Box
                            component="img"
                            sx={{
                                height: 64,
                                mt:4
                            }}
                            alt="Your logo."
                            src={logo}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box><Typography>UNIVERSITY</Typography></Box>
                        <Box>
                            <Link to={'/student'} style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}> STUDENTS</Link>
                        </Box>
                        <Box>
                            <Link to={'/events'} style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>EVENTS</Link>
                        </Box>
                        <Box>
                            <Link to={"/gallery"}style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>GELLARY</Link>
                        </Box>
                        <Box>
                            <Link to={'/news'} style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>NEWS</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box><Typography>ALUMNI</Typography></Box>
                        <Box>
                            <Link to="/" style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>CONTACTS</Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>CAREER</Link>
                        </Box>
                        <Box>
                            <Link to='/about' style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>ABOUT US</Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>APPLY TO JOB</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box><Typography>ACCOUNT</Typography></Box>
                        <Box>
                            <Link to={"/profile"} style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>PROFILE</Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>STORIES</Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer' }}>PASSWORD</Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{ textDecoration: "none", color:'#0066FF', cursor:'pointer'}}>DOWNLOADS</Link>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <Divider/>
            <Typography
          sx={{
            padding:'1rem',
            variant:"h6", 
            //  textAlign:"center", 
             fontSize:'.8rem',
             color:"primary.main"
            }}
            >©2023 Dhaka University Friends Society (DUFS-9495) <br/>
            <strong>Powered By Tech Analytica Limited</strong></Typography>
            {/* </AppBar> */}
        </Box>
    );
};

export default Footer;