import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, navigate, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import {GlobalContextCreate} from '../../GlobalContext/GlobalContext';
import{FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, TwitterAuthProvider} from 'firebase/auth';
import swal from 'sweetalert';
import { IconButton, InputAdornment } from '@mui/material';

// import {useHistory} from "react-router-dom";





const LogIn = () => {
  const {auth, user, setUser ,signIn, signInWithGoogle, signInWithFacebook, signInWithTwitter } = React.useContext(GlobalContextCreate);
  const googleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const TwitterProvider = new TwitterAuthProvider();
  const [userError, setUserError]=React.useState();
  const [email, setEmail] =React.useState("");
  const [password, setPassword] =React.useState("");
  // const [errMsg, setErrMsg] =React.useState("");
  const navigate= useNavigate()

// Email/ Password login system
const handleSubmitLogin = (event) => {
  event.preventDefault();
  // console.log(email, password);

  signIn(email, password)
      .then(result => {
          // const user=result.user;
          setUser(result.user)
          if(result.user){
            navigate('/profile')
            }
          swal("Log In Successfully!", "You clicked the button!", "success");
          // setUserError('Successfully log in');
          // form.reset();
      })
      .catch(error => {
        swal("Wrong Password!", "You clicked the button!", "warning");
          // setUserError(error.message);
      })
}



  // Log In with google account
  const handleClickGoogle = () => {
    signInWithGoogle(googleProvider)
        .then(result => {
            // const user = result.user;
            setUser(result.user)
            console.log(" logged in", result.user)
            if(result.user){
            navigate('/profile')
            }
            // console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
       
}


// Log In with Facebook account
  const handleClickFacebook = () => {
    signInWithFacebook(FacebookProvider)
        .then(result => {
            // const user = result.user;
            setUser(result.user)
            if(result.user){
              navigate('/profile')
              }
            // console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
}

// Log In with Twitter account
//   const handleClickTwitter = () => {
//     signInWithTwitter(TwitterProvider)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//         })
//         .catch(error => {
//             console.error(error);
//         })
// }



  return (
      <form >
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems="center"
          justifyContent={'center'}
          margin='auto'
          maxWidth={400}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ":hover": {
              boxShadow: '10px 10px 20px #ccc'
            }
          }}
        >
               <Box
               sx={{ borderRadius:6, padding:1, bgcolor:'primary.main'}}
               >
                <LoginIcon style={{color:'#fff'}}/>
                </Box>
          <Typography variant='h3' padding={2} textAlign="center">Sign In</Typography>
          {/* <Typography>Username</Typography> */}
          <Button onClick={handleClickGoogle} style={{justifyContent: "flex-start"}} variant="contained" sx={{ width: 260, paddingLeft: 3, margin: 1 }}><GoogleIcon/> LOGIN WITH GOOGLE</Button>
          <Button onClick={handleClickFacebook} style={{justifyContent: "flex-start"}} variant="contained" sx={{ width: 260, paddingLeft: 3, margin: 1 }}><FacebookOutlinedIcon/> LOGIN WITH FACEBOOK</Button>
          {/* <Button onClick={handleClickTwitter} style={{justifyContent: "flex-start"}} variant="contained" sx={{ width: 260, paddingLeft: 3, margin: 1 }}><TwitterIcon/> LOGIN WITH TWITTER</Button> */}
          {/* <Button style={{justifyContent: "flex-start"}} variant="contained" sx={{ width: 260, paddingLeft: 3, margin: 1 }}><AppleIcon/> LOGIN WITH APPLE</Button> */}


          <Typography padding={2} textAlign="center">Or <br/>LOGIN WITH EMAIL</Typography>
          <TextField sx={{width: 260}} margin='normal' name='email' type={'text'}  placeholder='Email' onChange={(e) => setEmail((e.target.value))}/>
          {/* <Typography>password</Typography> */}

          <TextField sx={{width: 260}} margin='normal' name='password' type={'password'} variant='outlined'placeholder='Password' onChange={(e) => setPassword((e.target.value))}/>
          <Button onClick={ handleSubmitLogin} variant='contained' sx={{ width: 260, padding: 1, margin: 2 }} type="submit" >Sign In</Button>
          <Typography>{auth}</Typography>
          <Button><Link to={"/signup"}
                    style={{ textDecoration: "none", color:'#0066FF' }}>
                        Don't have an account? Sign Up
                </Link>
            </Button>
        </Box>
      </form>
  );
};

export default LogIn;