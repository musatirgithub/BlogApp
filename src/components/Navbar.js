import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {AuthContext} from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../helpers/firebase';


export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = ()=>{
    handleClose();
    navigate('/login');
  }
  
  const handleRegister = ()=>{
    handleClose();
    navigate('/register');
  }

  const handleLogout = ()=>{
    handleClose();
    logOut();
    navigate('/about');
  }

  const handleProfile = ()=>{
    handleClose();
    navigate('/profile');
  }

  const handleNewBlog = ()=>{
    handleClose();
    navigate('/newblog');
  }

  const handleDashboard = ()=>{
    handleClose();
    navigate('/');
  }

  const handleDetails = ()=>{
    handleClose();
    navigate('/details');
  }

  const handleAbout = ()=>{
    handleClose();
    navigate('/about');
  }



  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>

          <Typography onClick={()=>navigate('/')} variant="h6" component="div"  style={{cursor:'pointer', width:'7.2rem'}}>
            Shutter Blog
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right', paddingRight:'1rem' }}>
            {currentUser.displayName}
            </Typography>
            <div>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              {currentUser ? <div>
                <MenuItem onClick={handleDashboard}>Home</MenuItem>
                <MenuItem onClick={handleAbout}>About</MenuItem>
                <MenuItem onClick={handleNewBlog}>NewBlog</MenuItem>
                <MenuItem onClick={handleProfile}>My Posts</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>

              </div> :
              <div>
              <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
              </div>}
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
