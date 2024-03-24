import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import app from './firebase-config';

const Dashboard = (props) => {
  const auth = getAuth(app);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    signOut(auth).then(() => {
      props.setIsSignedIn(false);
      // Sign-out successful.
      // Redirect to sign-in page or update state accordingly
    }).catch((error) => {
      // An error happened.
    });
  };

  const handleSignUp = () => {
    navigate('/signup'); // Adjust the path as necessary
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New Gen Laptops
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
          <Button color="inherit" onClick={handleSignUp}>Sign Up</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Laptops 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Hard Disks 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  SSD
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Rams
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Charger
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
