// import { Box, FormControl, FormGroup, Input, InputLabel, makeStyles, Modal, TextField, Typography } from '@mui/material';
// import React from 'react';
// import Button from '@mui/material/Button';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { Link } from 'react-router-dom';



// const Profile = () => {

//     return (
//         <Box 
//         marginTop={5}
//         // display="block"
//         // justifyContent="center"
//         // alignItems="center"
//         >
//             <Box
//                 display="block"
//                 justifyContent="center"
//                 alignItems="center"
//                 boxShadow={'5px 5px 10px #ccc'}
//                 sx={{
//                     ":hover": {
//                         boxShadow: '10px 10px 20px #ccc'
//                     },
//                     width: "50vw",
//                     margin: "auto",
//                     padding: 5,
//                     border: '1px solid black',
//                     borderRadius: 5,

//                 }}>
//                 <FormGroup>
//                     <Typography variant='h4' align='center'>My Profile</Typography>
//                     <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                     <TextField id="outlined-basic" label="Designation" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                     <TextField id="outlined-basic" label="Hall Name" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                     <TextField id="outlined-basic" label="Workplace" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                     <TextField id="outlined-basic" label="Home District" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                     <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                     <TextField id="outlined-basic" label="Gender" variant="outlined" sx={{ marginTop: 2 }}>
//                         <Input></Input>
//                     </TextField>
//                 </FormGroup>
//                 {/* <Button variant="contained" margin='2'>Update Profile</Button> */}
//             </Box>
//             <Box
//                 sx={{
//                     height: 6,
//                     minWidth: 400,
//                     m: 4,
//                     // m: 0,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 <Button variant="contained" marginLeft='5'><Link to='/modals' style={{ textDecoration: "none", color: "#fff" }}><Typography>Update Profile</Typography></Link></Button>
//             </Box>
//             {/* <Button ><Link to='/modals'><Typography align='center'>Update Profile</Typography></Link></Button> */}
//         </Box>
//     );
// };

// export default Profile;












import { Box, FormControl, FormGroup, getDialogContentTextUtilityClass, Input, InputLabel, makeStyles, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';
import { db } from "../../Firebase/firebase.config";
import { set, ref, onValue, child, get, getDatabase, doc, getDoc } from "firebase/database";
import { useState } from 'react';
import { GlobalContextCreate } from '../../GlobalContext/GlobalContext';
import { useEffect } from 'react';
import { FirebaseError } from 'firebase/app';



const Profile = () => {
    const { user } = React.useContext(GlobalContextCreate);

    const [fullName, setFullName] = useState("")
    const [designation, setDesignation] = useState("")
    const [hallName, setHallName] = useState("")
    const [workPlace, setWorkPlace] = useState("")
    const [homeDistrict, setHomeDistrict] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [open, setOpen] = React.useState(false);


    //  open close button 
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    // write 
    const uuid = user?.uid
    console.log("user", user.uid)
    const addUserProfileData = () => {
        //  const uuid=uid()

        // set(ref(db, `users/BN/ +${uuid}`),{
        set(ref(db, `users/ +${uuid}`), {

            fullName,
            designation,
            hallName,
            workPlace,
            homeDistrict,
            phone,
            gender,
            uuid
        })

    }

    // read 

    const readUserData = () => {
        try {
            onValue(ref(db, `users/ +${uuid}`), (snapshot) => {
                console.log("read value", snapshot.val().fullName)
                setFullName(snapshot.val().fullName)
                setDesignation(snapshot.val().designation)
                setHallName(snapshot.val().hallName)
                setWorkPlace(snapshot.val().workPlace)
                setHomeDistrict(snapshot.val().homeDistrict)
                setPhone(snapshot.val().phone)
                setGender(snapshot.val().gender)
            })
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        readUserData()
    }, [])


    return (
        <Box
            marginTop={5}
        // display="block"
        // justifyContent="center"
        // alignItems="center"
        >
            <Box
                display="block"
                justifyContent="center"
                alignItems="center"
                boxShadow={'5px 5px 10px #ccc'}
                sx={{
                    ":hover": {
                        boxShadow: '10px 10px 20px #ccc'
                    },
                    width: "50vw",
                    margin: "auto",
                    padding: 5,
                    border: '1px solid black',
                    borderRadius: 5,

                }}>
                <FormGroup>
                    <Typography variant='h4' align='center'>My Profile</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        sx={{ marginTop: 2 }}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />


                    <TextField id="outlined-basic" label="Designation" variant="outlined" sx={{ marginTop: 2 }}
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                    />

                    {/* <TextField id="outlined-basic" label="Hall Name" variant="outlined" sx={{ marginTop: 2 }} 
                   value={hallName}
                   onChange={(e) => setHallName(e.target.value)}
                   /> */}
                    <FormControl sx={{ mt: 1.5, minWidth: 260 }}>
                        <InputLabel id="demo-controlled-open-select-label">Hall Name</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={hallName}
                            label="Hall Name"
                            onChange={(e) => setHallName(e.target.value)}
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

                    <TextField id="outlined-basic" label="Workplace" variant="outlined" sx={{ marginTop: 2 }}
                        value={workPlace}
                        onChange={(e) => setWorkPlace(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Home District" variant="outlined" sx={{ marginTop: 2 }}
                        value={homeDistrict}
                        onChange={(e) => setHomeDistrict(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{ marginTop: 2 }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Gender" variant="outlined" sx={{ marginTop: 2 }}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />

                </FormGroup>
                {/* <Button variant="contained" margin='2'>Update Profile</Button> */}
            </Box>
            <Box
                sx={{
                    height: 6,
                    minWidth: 400,
                    m: 4,
                    // m: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Button variant="contained" marginLeft='5'
                    onClick={addUserProfileData} >
                    {/* <Link to='/modals' style={{ textDecoration: "none", color: "#fff" }}> */}
                    <Typography>Update Profile</Typography>
                    {/* </Link> */}
                </Button>
                {/* <Button onClick={readUserData}>read</Button> */}
            </Box>
            {/* <Button ><Link to='/modals'><Typography align='center'>Update Profile</Typography></Link></Button> */}
        </Box>
    );
};

export default Profile;