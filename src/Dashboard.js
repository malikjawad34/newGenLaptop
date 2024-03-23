import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    signOut(auth).then(() => {
        navigate('/');
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
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
          <Button color="inherit" onClick={handleSignUp}>Sign Up</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card One
                </Typography>
                <Typography>
                  Details for card one...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more cards as needed */}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
