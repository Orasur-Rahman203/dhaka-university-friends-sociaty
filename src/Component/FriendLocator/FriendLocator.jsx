import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import GoogleMapReact from 'google-map-react';

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Circle,
} from "@react-google-maps/api";

import one from "./image/1.jpg";
import two from "./image/2.jpg";
import three from "./image/3.jpg";
import four from "./image/4.jpg";
import five from "./image/5.jpg";
import six from "./image/6.jpg";

const myFriends = [
  {
    name: one,
    photo:one,
    position: {
      lat: 23.234,
      lng: 90.5435,
    },
  },
  {
    name: two,
    photo:two,
    position: {
      lat: 23.234,
      lng: 90.123,
    }
  },
  {
    name: three,
    photo:three,
    position: {
      lat: 23.3245,
      lng: 50.346,
    }
  },
  {
    name: four,
    photo:four,
    position: {
      lat: 23.52436456,
      lng: 90.4356,
    }
  },
  {
    name: five,
    photo:five,
    position: {
      lat: 23.234,
      lng: 90.364,
    }
  },
  {
    name: six,
    photo:six,
    position: {
      lat: 23.234,
      lng: 90.243523,
    }
  }
];

const FriendLocator = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAH3YlAGGvrX4OXz_xyPSqkzdpvDy3lEiU",
  });

  if (!isLoaded)
    return (
      <Box>
        <Typography>Map is loading....</Typography>
      </Box>
    );

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Friends locator
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoogleMap
          zoom={7}
          center={{ lat: 23.782036, lng: 90.416136 }}
          mapContainerStyle={{
            height: "800px",
            width: "800px",
          }}
        >  
         {myFriends.map((friend)=>{
            return(
                <MarkerF
                position={{ lat: friend.position.lat, lng: friend.position.lng }}
                icon={friend.photo}
                // icon={}
                title={friend.name}
                />)
         })}
        </GoogleMap>
      </Box>
    </Box>
  );
};

export default FriendLocator;