import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import SignIn from './Authentication/SignIn';
import Layout from './components/Layout';

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
        {isSignedIn ? (
          <Layout setIsSignedIn={setIsSignedIn} />
        ) : (
          <SignIn onSignIn={handleSignIn} />
        )
        }
      </div>
    </Router>
  );
}

export default App;
