import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase-config';


const Header = (props) => {
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth).then(() => {
      props.setIsSignedIn(false);
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New Gen Laptops
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
