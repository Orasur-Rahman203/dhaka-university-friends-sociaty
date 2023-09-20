import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import swal from 'sweetalert';
import Avatar from '@mui/material/Avatar';
// import fbLogo from '../../Assets/images/dufs9495/facebook logo.png';
// import gLogo from '../../Assets/images/dufs9495/facebook logo.png';
import { GlobalContextCreate } from '../../GlobalContext/GlobalContext';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';



const SignUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const {setUser, createUser, signInWithGoogle, signInWithFacebook } = React.useContext(GlobalContextCreate);
 

  const [name,setName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [userError, setUserError]=React.useState();
  const navigate= useNavigate()


  const handleSubmitSignUp=(event)=>{
    event.preventDefault();
  // const form = event.target;
  // const email = form.email.value;
  // const password = form.password.value;
    createUser(email, password)
    .then(result => {
        const setUser = result.user;
        if(result.user){
          navigate('/profile')
          }
        swal("Account Create Successfully!", "You clicked the button!", "success");
        // form.reset();
        // setUserError('Successfully new account created');
    })
    .catch(error => {
      swal("Something Is Wrong!", "You clicked the button!", "warning");
        // setUserError(error.message);
    })
  }


  // hall name section here
  const [hall, setHall] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setHall(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // Log In with google account
  const handleClickGoogle = () => {
  signInWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            // console.log(user);
            if(result.user){
              navigate('/profile')
              }
              swal("Account Create Successfully!", "You clicked the button!", "success");
        })
        .catch(error => {
          swal("Something Is Wrong!", "You clicked the button!", "warning");
        })
}


// Log In with Facebook account
  const handleClickFacebook = () => {
    signInWithFacebook(FacebookProvider)
        .then(result => {
            const user = result.user;
            // console.log(user);
            if(result.user){
              navigate('/profile')
              }
              swal("Account Create Successfully!", "You clicked the button!", "success");
        })
        .catch(error => {
          swal("Something Is Wrong!", "You clicked the button!", "warning");
        })
}

  return (
    <div>
      <form>
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
                <LockOpenIcon style={{color:'#fff'}}/>
                </Box>
          <Typography variant='h3' padding={3} textAlign="center">Sign Up</Typography>
          {/* <Typography>Username</Typography> */}

          <Button onClick={handleClickGoogle} variant="contained" style={{justifyContent: "flex-start"}} sx={{ width: 260, paddingLeft: 3, margin: 1 }}><GoogleIcon/> LOGIN WITH GOOGLE</Button>
          <Button onClick={handleClickFacebook} variant="contained" style={{justifyContent: "flex-start"}} sx={{ width: 260, paddingLeft: 3, margin: 1 }}><FacebookOutlinedIcon/>LOGIN WITH FACEBOOK</Button>
          {/* <Button variant="contained" style={{justifyContent: "flex-start"}} sx={{ width: 240, paddingLeft: 3, margin: 1 }}><TwitterIcon/> LOGIN WITH TWITTER</Button> */}
          {/* <Button variant="contained" style={{justifyContent: "flex-start"}} sx={{ width: 240, paddingLeft: 3, margin: 1 }}><AppleIcon/> LOGIN WITH APPLE</Button> */}
          <image src='gLogo' ></image>
          <TextField sx={{width: 260}} margin='normal' type={'text'} variant="outlined" placeholder='Full Name' onChange={(event) => setName((event.target.value))}/>
          <TextField sx={{width: 260}} margin='normal' type={'text'} variant="outlined" placeholder='Subject'/>
          {/* <Typography>password</Typography> */}

          {/* select your hall name */}
          <FormControl sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="demo-controlled-open-select-label">Hall Name</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={hall}
          label="Hall Name"
          onChange={handleChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>Salimullah Muslim Hall</MenuItem>
          <MenuItem value={2}>Shahidullah Hall </MenuItem>
          <MenuItem value={3}>Jagannath Hall</MenuItem>
          <MenuItem value={4}>Fazlul Haq Hall</MenuItem>
          <MenuItem value={5}>Zahurul Haq Hall</MenuItem>
          <MenuItem value={6}>Ruqayyah Hall</MenuItem>
          <MenuItem value={7}>Surjasen Hall</MenuItem>
          <MenuItem value={8}>Sir P. J Hartog  International  Hall</MenuItem>
          <MenuItem value={9}>Haji Muhammad Mohsin Hall</MenuItem>
          <MenuItem value={10}>Shamsun Nahar Hall</MenuItem>
          <MenuItem value={11}>Kabi Jasimuddin Hall</MenuItem>
          <MenuItem value={12}>Sir A. F Rahman Hall</MenuItem>
          <MenuItem value={13}>Bangabandhu Sheikh Mujibur Rahman Hall</MenuItem>
          <MenuItem value={14}>Muktijoddha Ziaur Rahman Hall</MenuItem>
          <MenuItem value={15}>Bangladesh-Kuwait Maitree Hall</MenuItem>
        </Select>
      </FormControl>

      {/* <TextField sx={{width: 260}} margin='normal' name='email' type={'text'}  placeholder='Email' onChange={(event) => setEmail((event.target.value))}/> */}

      <TextField sx={{width: 260}} margin='normal' name='email' type={'text'}  placeholder='Email' onChange={(e) => setEmail((e.target.value))}/>

          <TextField sx={{width: 260}} margin='normal' name='password' type={'password'} variant='outlined' placeholder='password' onChange={(event) => setPassword((event.target.value))}/>

          <Button onClick={handleSubmitSignUp} variant='contained' sx={{ width: 260, padding: 1, margin: 2 }} type="submit">Sign Up</Button>

          
          <Button ><Link
                    to={"/signin"}
                    style={{ textDecoration: "none", color:'#0066FF'  }}>
                      Have an account? Sign In
                      </Link>
                </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;