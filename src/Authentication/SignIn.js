import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';

import {app} from '../firebase-config';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message on new submission
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Pass user data to parent component
        props.onSignIn(userCredential.user);
      })
      .catch((error) => {
        setError('Failed to sign in. Check your credentials.');
      });
      console.log('User signed in');
      // Redirect or do something upon successful sign-in
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Check your credentials.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In To New Gen Laptop
        </Typography>
        {error && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
