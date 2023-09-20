import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const VideoComponent = () => {
    return (
        <Box sx={{ display: {sm:'block', md: 'flex' }, gap: 2}}>
        <Grid container spacing={2}>
            <Grid item sm={12} md={6} >
                <ReactPlayer controls url='https://www.youtube.com/watch?v=mQPX0GPkes4&ab_channel=TechAnalyticaLimited'/>
            </Grid>
            <Grid item sm={12} md={6}>
                <ReactPlayer controls url='https://www.youtube.com/watch?v=OfEu7lt2po0&ab_channel=TechAnalyticaLimited' />
            </Grid>
            {/* sx={{ width: { xs: '300px', sm: '600px', }, height: { xs: '200px', sm: '480px', } }} */}
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=mQPX0GPkes4&ab_channel=TechAnalyticaLimited'/> */}
        </Grid>
        </Box>
    );
};

export default VideoComponent;