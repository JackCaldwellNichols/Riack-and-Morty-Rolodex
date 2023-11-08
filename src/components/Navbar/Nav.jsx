import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { MenuItem, Typography } from '@mui/material';

const Nav = () =>  {
  return (
    <Box sx={{ width: '100vw', display:'flex'}}>
      <AppBar position="static"> 
        <Toolbar>
            Rick and Morty Rolodex
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav