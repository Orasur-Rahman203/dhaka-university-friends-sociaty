import React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import MemberListAllData from '../AllData/MemberListAllData/MemberManuAllData.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const MembersListPage = () => {
    const { id } = useParams();
    // console.log(MemberListAllData[id].EN[0].home_district);
    let dataEN = MemberListAllData[id].EN;


    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {dataEN.map((info) => (
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={{ maxWidth: 440, margin:{xs:1,
            sm:2,
            } }}>
                         <CardMedia
                                    sx={{ height: 200 }}
                                    image="https://www.militaryimages.net/attachments/5570832698_d4179d850b_z-jpg.108742/"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">{info.name}</Typography>
                                    <Typography variant="body1" color="text.primary"> {info.designation}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary"> {info.workplace}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">{info.hall_name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">{info.home_district}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">{info.mobile}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary"> {info.mail_address}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


    //     <Box sx={{ flexGrow: 1 }}>
    //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    //       {dataEN.map((info) => (
    //         <Grid item xs={12} sm={4} md={4}>
    //           <Card sx={{ maxWidth: 440, margin:{xs:1,
    //         sm:2,
    //         } }}>
    //                      <CardMedia
    //                                 sx={{ height: 200 }}
    //                                 image="https://www.militaryimages.net/attachments/5570832698_d4179d850b_z-jpg.108742/"
    //                                 title="green iguana"
    //                             />
    //                             <CardContent>
    //                                 <Typography gutterBottom variant="h6" component="div">Name: {info.name}</Typography>
    //                                 <Typography variant="body1" color="text.primary">Designation: {info.designation}
    //                                 </Typography>
    //                                 <Typography variant="body1" color="text.secondary">Workplace: {info.workplace}
    //                                 </Typography>
    //                                 <Typography variant="body1" color="text.secondary">Hall Name: {info.hall_name}
    //                                 </Typography>
    //                                 <Typography variant="body1" color="text.secondary">Home District: {info.home_district}
    //                                 </Typography>
    //                                 <Typography variant="body1" color="text.secondary">Mobile: {info.mobile}
    //                                 </Typography>
    //                                 <Typography variant="body1" color="text.secondary">Mail Address: {info.mail_address}
    //                                 </Typography>
    //                             </CardContent>
    //                             <CardActions>
    //                                 {/* <Button size="small">Learn More</Button> */}
    //                             </CardActions>
    //                         </Card>
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Box>


    );
};;

export default MembersListPage;