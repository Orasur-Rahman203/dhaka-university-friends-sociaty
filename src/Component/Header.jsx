import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../Assets/images/dufs9495.png'
import { Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AboutPageManu from '../pages/AboutPageManu';
import { GlobalContextCreate } from '../GlobalContext/GlobalContext';
import swal from 'sweetalert';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const drawerWidth = 150;

function DrawerAppBar(props) {
  let navigate=useNavigate();
  const {user,setUser, LogOutAll } = React.useContext(GlobalContextCreate);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [subManu, setSubManu] = React.useState(null);
  const [subManuMessage, setSubManuMessage] = React.useState(null);
  const [subManuGellary, setSubManuGellary] = React.useState(null);
  const [subManuMembers, setSubManuMembers] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  //  about sub manu section start 
  const handleClickAbout = (event) => {
    setSubManu(event.currentTarget);
    console.log(setSubManu);
  };
  const handleCloseAbout = (id) => {
    console.log(id);
    setSubManu(null);
  };

  //  Message submanu section start
  const handleClickMessage = (event) => {
    setSubManuMessage(event.currentTarget);
  };
  const handleCloseMessage = (event) => {
    const value = event.target.value;
    setSubManuMessage(null);
    console.log(value);
  };

  // Gellary submanu section start
  const handleClickGellary = (event) => {
    setSubManuGellary(event.currentTarget);

  };
  const handleCloseGellary = (event) => {
    const value = event.target.value;
    setSubManuGellary(null);
    console.log(value);
  };
  // Members submanu section start
  const handleClickMembers = (event) => {
    setSubManuMembers(event.currentTarget);
  };
  const handleCloseMembers = () => {
    setSubManuMembers(null);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link
        to={"/about"}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAbout}
        >
          About Us
        </Typography>
      </Link>
      <br />
      <Link
        to={"/message"}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMessage}
        >
          Messages
        </Typography>
      </Link>
      <br />
      <Link
        to={"/gallery"}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickGellary}
        >
          Gallery
        </Typography>
      </Link>
      <br />
      <Link
        to={"/membersList"}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMembers}
        >
          Members List
        </Typography>
      </Link>
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

const handleClickedLogout=()=>{
  LogOutAll()
  .then(() => {setUser({}) })
  swal("Successfully LogOut!", "You clicked the button!", "success");
}



  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          {/* Responsive icons */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "flex" }, mr: 1, mt: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              <Box sx={{ display: { xs: "flex" }, mr: 1, mt: 1 }}>
                <img src={logo} alt="logo" width="140" />
              </Box>
            </Link>
          </Box>


          {/* ----------------------dufs9495 manu section start---------------- */}
          {/* about section  */}
          <Box>

              <Typography
                // variant="h6"
                noWrap
                // component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, ml:4, cursor: "pointer" }}
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAbout}
              >
                About Us
              </Typography>
            <Menu
              id="simple-menu"
              anchorEl={subManu}
              keepMounted
              open={Boolean(subManu)}
              onClose={handleCloseAbout}>
              <MenuItem onClick={()=>{navigate("aboutPageManu/" + '0'); handleCloseAbout()}} >Contact</MenuItem>
              <MenuItem onClick={()=>{navigate("aboutPageManu/" + '1'); handleCloseAbout()}} >Directory</MenuItem>
              <MenuItem onClick={()=>{navigate("aboutPageManu/" + '2') ;handleCloseAbout()}} >Gallery</MenuItem>
              <MenuItem onClick={()=>{navigate("aboutPageManu/" + '3'); handleCloseAbout()}}>News</MenuItem>
              <MenuItem onClick={()=>{navigate("aboutPageManu/" + '5'); handleCloseAbout()}}>Society Storage</MenuItem>
            </Menu>
          </Box>
          {/* message section  */}
          <Box>
            <Link
              to={"/message"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Typography
                // variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, ml: 4, cursor: "pointer" }}
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMessage}
              >
                Messages
              </Typography>
            </Link>
            {/* <Menu
              id="simple-menu"
              anchorEl={subManuMessage}
              keepMounted
              open={Boolean(subManuMessage)}
              onClose={handleCloseMessage}
            >
              <MenuItem onClick={handleCloseMessage}>VICE-CHANCELLOR DU</MenuItem>
              <MenuItem onClick={handleCloseMessage}>DEPUTY VICE-CHANCELLOR (ADMINISTRATION) DU</MenuItem>
              <MenuItem onClick={handleCloseMessage}>DEPUTY VICE-CHANCELLOR (EDUCATION) DU</MenuItem>
            </Menu> */}
          </Box>

          {/* gellary manu section   */}
          <Box>

            <Link
              to={"/gallery"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Typography
                // variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, ml: 4, cursor: "pointer" }}
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickGellary}
              >
              Gallery
              </Typography>
            </Link>
          </Box>
          {/* members manu section   */}
          <Box>
              <Typography
                // variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, m: 4, cursor: "pointer" }}
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMembers}
              >
                Members List
              </Typography>
            <Menu
              variant="p"
              id="simple-menu"
              anchorEl={subManuMembers}
              keepMounted
              open={Boolean(subManuMembers)}
              onClose={handleCloseMembers}
            >
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '0'); handleCloseMembers()}}><Typography>DEPARTMENT OF BANGLA</Typography> </MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '1'); handleCloseMembers()}}>DEPARTMENT OF ENGLISH</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '2'); handleCloseMembers()}}>DEPARTMENT OF ACCOUNTING</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '3'); handleCloseMembers()}}>DEPARTMENT OF HISTORY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '4'); handleCloseMembers()}}>DEPARTMENT OF GEOGRAPHY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '5'); handleCloseMembers()}}>DEPARTMENT OF PHARMACY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '6'); handleCloseMembers()}}>DEPARTMENT OF BIOCHEMISTRY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '7'); handleCloseMembers()}}>DEPARTMENT OF STATISTICS</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '8'); handleCloseMembers()}}>DEPARTMENT OF PHYSICS</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '9'); handleCloseMembers()}}>DEPARTMENT OF MANAGEMENT</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '10'); handleCloseMembers()}}>DEPARTMENT OF FINE ARTS</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '11'); handleCloseMembers()}}>DEPARTMENT OF PSYCHOLOGY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '12'); handleCloseMembers()}}>DEPARTMENT OF MASS COM..& JOURNALISM</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '13'); handleCloseMembers()}}>DEPARTMENT OF CULTURE</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '14'); handleCloseMembers()}}>DEPARTMENT OF ARABIC LITERATURE</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '15'); handleCloseMembers()}}>DEPARTMENT OF ANTHROPOLOGY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '16'); handleCloseMembers()}}>DEPARTMENT OF GEOLOGY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '17'); handleCloseMembers()}}>DEPARTMENT OF HISTORY & CULTURE OF ISLAM</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '18'); handleCloseMembers()}}>DEPARTMENT OF ISLAMIC STUDIES</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '19'); handleCloseMembers()}}>DEPARTMENT OF PHILOSOPHY</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '20'); handleCloseMembers()}}>DEPARTMENT OF URDU & PERSIAN</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '21'); handleCloseMembers()}}>DEPARTMENT OF LAW</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '22'); handleCloseMembers()}}>DEPARTMENT OF ECONOMICS</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '23'); handleCloseMembers()}}>DEPARTMENT OF INSTITUTE OF EDUCATION & RESEARCH</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '24'); handleCloseMembers()}}>DEPARTMENT OF MARKETING</MenuItem>
              <MenuItem onClick={()=>{navigate("membersListPageManu/" + '25'); handleCloseMembers()}}>DEPARTMENT OF INTERNATIONAL RELATIONS</MenuItem>
            </Menu>
          </Box>
          <Box display="flex">
            <Box>

              <Link
                to={"/friendLocator"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  // variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' }, m: 2, cursor: "pointer" }}
                  aria-controls="simple-menu" aria-haspopup="true"
                >
                  Friend Locator
                </Typography>
              </Link>
            </Box>

            {
              user?.uid ?
              <Box>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  // variant="h6"
                  onClick={handleClickedLogout}
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' }, m: 2, cursor: "pointer" }}
                  aria-controls="simple-menu" aria-haspopup="true"
                >
                  Sign Out
                </Typography>
              </Link>
            </Box>
              :
              <Box>
              <Box>
              <Link
                to={"/signin"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  // variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' }, m: 2, cursor: "pointer" }}
                  aria-controls="simple-menu" aria-haspopup="true"
                >
                  Sign In
                </Typography>
              </Link>
            </Box>

            <Box>

              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  // variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' }, m: 2, cursor: "pointer" }}
                  aria-controls="simple-menu" aria-haspopup="true"
                >
                  Sign Up
                </Typography>
              </Link>
            </Box> 
            </Box> 
            }
            <Box>

              <Link
                to={"/profile"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  // variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' }, m: 2, cursor: "pointer" }}
                  aria-controls="simple-menu" aria-haspopup="true"
                >
                  My Profile
                </Typography>
              </Link>
            </Box>

            <Switch {...label} defaultChecked />
          </Box>

        </Toolbar>
      </AppBar>
      {/* Mobile manu show */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

