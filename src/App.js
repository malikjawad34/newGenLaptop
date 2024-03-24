import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard'; // Make sure this path is correct
import './App.css';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = (user) => {
    if (user) {
      setIsSignedIn(true);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isSignedIn ? <Navigate replace to="/dashboard" /> : <SignIn onSignIn={handleSignIn} />} />
          <Route path="/dashboard" element={isSignedIn ? <Dashboard setIsSignedIn={setIsSignedIn} /> : <Navigate replace to="/" />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
