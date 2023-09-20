import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AboutPage from '../AllData/AboutUsAllData/AboutManu.json'
import Profile from '../Component/User/Profile';
import Modals from '../Component/User/Modals';
import { Button } from '@mui/material';




const AboutPageManu = () => {
    const { id } = useParams();
    // console.log(id);
    let data = AboutPage.about[id];
    console.log(data);
    const { idNumber, name, description } = data;
    return (
        <div>
            <p align='center'>{idNumber + 1}</p>
            <h2 align='center'>{name}</h2>
            <Typography align='center'>This is aboutUs manu id : {idNumber}</Typography>
      <Typography textAlign="justify" padding='2'>{description}</Typography>
        </div>
    );
};

export default AboutPageManu;