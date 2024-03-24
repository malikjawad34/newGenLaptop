import React from 'react';

import {  Route, Routes } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import SignUp from '../Authentication/SignUp';
import Sidebar from './Sidebar';
import Laptop from './Laptop';

const Layout = (props) => {

  return (
    <div>
        <Header setIsSignedIn= {props.setIsSignedIn} />
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px', paddingLeft: '275px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/laptop" element={<Laptop />} />
          </Routes>
        </main>
    </div>
  );
};

export default Layout;
