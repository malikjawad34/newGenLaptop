import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#2C3E50', // Customize the background color
          color: 'white', // Text color
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          padding: 2,
          color: 'lightgray', // Title color
        }}
      >
        
      </Typography>
      <List>
        <ListItem
          component={Link}
          to="/"
          sx={{
            '&:hover': {
              backgroundColor: '#34495E', // Darken on hover
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: 'lightgray' }}/>
        </ListItem>
        <ListItem
          component={Link}
          to="/signup"
          sx={{
            '&:hover': {
              backgroundColor: '#34495E', // Darken on hover
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Up" sx={{ color: 'lightgray' }}/>
        </ListItem>
        {/* Add more list items here as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
