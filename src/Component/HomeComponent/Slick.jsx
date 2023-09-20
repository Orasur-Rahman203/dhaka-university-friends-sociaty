import { Avatar, Box } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "material-ui-image";
// import CourseCard from '../CourseCard/CourseCard';

const Slick = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       height: '50vh'
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
   
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    
    //     }
    //   }
    // ]
  };


  return (
    <Box
      textAlign="center"
      pt={0}
    >
      {/* <Container>
        <Slider {...settings}>
          {
            HeroSlider.map((item) => (
              <Box>
                <Typography>
                  {item}
                </Typography>
              </Box>
            ))
          }
        </Slider>
      </Container> */}
      <Slider {...settings}>
        <div>
          <Avatar variant={"rounded"} alt="The image 1" src={'https://dufs9495.org/wp-content/uploads/2021/01/13781901_1736728893250258_943159943051784414_n-1.jpg'} style={{
            width: '100vw',
            height: '80vh',
          }} />
        </div>
        <div>
          <Avatar variant={"rounded"} alt="The image 4" src={'https://dufs9495.org/wp-content/uploads/2021/02/bannar.png'} style={{
            width: '100vw',
            height: '80vh',
          }} />
        </div>
        <div>
          <Avatar variant={"rounded"} alt="The image 3" src={'https://dufs9495.org/wp-content/uploads/2021/01/maxresdefault.jpg'} style={{
            width: '100vw',
            height: '80vh',
          }} />
        </div>
        <div>
          <Avatar variant={"rounded"} alt="The image 2" src={'https://dufs9495.org/wp-content/uploads/2021/01/Untitled-23-samakal-5efb84bab741a.jpg'} style={{
            width: '100vw',
            height: '80vh',
          }} />
        </div>
        {/* <div>
          <img src='https://dufs9495.org/wp-content/uploads/2021/02/bannar.png' alt='image 1'></img>
          </div> */}

      </Slider>
    </Box>
  );
};

export default Slick;