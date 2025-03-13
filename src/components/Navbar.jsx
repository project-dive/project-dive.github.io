import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import DiveLogo from "../assets/ProjectDive.svg";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/">Project Dive!</Button>
          <Button color="inherit" href="about">Om oss</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
