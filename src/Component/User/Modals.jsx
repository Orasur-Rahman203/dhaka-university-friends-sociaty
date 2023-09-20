import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Modals = () => {
    const rootRef = React.useRef(null);
    return (
        <Box
          sx={{
            height:1100,
            flexGrow: 1,
            // minWidth: 1000,
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
              display: 'none',
            },
          }}
          ref={rootRef}
        >
          <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            sx={{
              display: 'flex',
              p: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            container={() => rootRef.current}
          >
            <Box
                display="block"
                justifyContent="center"
                alignItems="center"
              sx={{
                position: 'relative',
                // display:{xs:400, sm:680, lg:1000},
                width: 400,
                bgcolor: '#fff',
                border: '1px solid #000',
                borderRadius:5,
                boxShadow: (theme) => theme.shadows[5],
                p: 4,
              }}>
                <FormGroup>
                    <Typography variant='h4' align='center'>Update Profile</Typography>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Blood Group" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Date of Birth" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Designation" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Workplace" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Hall Name" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    {/* <TextField id="outlined-basic" label="Home District" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField> */}
                    <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Current Location" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <TextField id="outlined-basic" label="Address" variant="outlined" sx={{ marginTop: 2 }}>
                        <Input></Input>
                    </TextField>
                    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ marginTop: 2 , display:'flex'}}>Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
                  
                </FormGroup>
                <Box
                sx={{
                    height: 6,
                    minWidth: 400,
                    // m: 4,
                    // m: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Button variant="contained" marginLeft='5'><Link style={{ textDecoration: "none", color: "#fff" }}><Typography>Update now</Typography></Link></Button>
            </Box>
            </Box>
          </Modal>
        </Box>
      );
};

export default Modals;