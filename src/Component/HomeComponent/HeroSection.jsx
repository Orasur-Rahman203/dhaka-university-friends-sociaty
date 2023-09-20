import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MailIcon from '@mui/icons-material/Mail';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import SignIn from './../User/SignIn'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext, GlobalContextCreate } from '../../GlobalContext/GlobalContext';



const HeroSection = () => {
    // const {hasan}=useContext(GlobalContext);
    const { user } = React.useContext(GlobalContextCreate);
    return (
        <Box sx={{ m: '2rem' }}>
            <Typography
                sx={{
                    // m:'1.8rem',
                    variant: "h6",
                    textAlign: "center",
                    fontSize: '2rem',

                }}
            >Welcome to Dhaka university friends society (DUFS)</Typography>

            <Container maxWidth="lg">
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <MailIcon />
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '1.5rem',

                                }}
                            >Checking Message</Typography>
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '.9rem',

                                }}
                            >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <PersonIcon />
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '1.5rem',

                                }}
                            >Update My Information</Typography>
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '.9rem',

                                }}
                            >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <GroupAddIcon />
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '1.5rem',

                                }}
                            >Join with Alumni Forum</Typography>
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '.9rem',

                                }}
                            >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <FindInPageIcon />
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '1.5rem',

                                }}
                            >Search Alumni Directory</Typography>
                            <Typography
                                sx={{
                                    variant: "h6",
                                    //  textAlign:"center", 
                                    fontSize: '.9rem',

                                }}
                            >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* Sign in button here */}
            {(user.uid) ?
                    <Box textAlign='center' padding='1rem' display={"none"}>
                    <Button variant='contained' ><Link
                        to={"/signin"}
                        style={{ textDecoration: "none", color: "#fff" }}
                    >
                        <Typography
                            // variant="h6"
                            noWrap
                            component="div"
                            sx={{ cursor: "pointer" }}>
                            LOG IN TO ALUMNI DASHBOARD
                        </Typography>
                    </Link>
                    </Button>
                </Box>
                
                :

                <Box textAlign='center' padding='1rem'>
                    <Button variant='contained' ><Link
                        to={"/signin"}
                        style={{ textDecoration: "none", color: "#fff" }}
                    >
                        <Typography
                            // variant="h6"
                            noWrap
                            component="div"
                            sx={{ cursor: "pointer" }}>
                            LOG IN TO ALUMNI DASHBOARD
                        </Typography>
                    </Link>
                    </Button>
                </Box>
            }
        </Box>
    );
};

export default HeroSection;