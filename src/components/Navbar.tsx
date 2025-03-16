import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ProjectDive from '../assets/ProjectDive.svg?react';

export default function Navbar({ routes }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar sx={style.navbar}>
          <Button sx={style.logo} color="inherit" href="/">
            <ProjectDive/>
            <>{routes[0].title}</>
          </Button>
          <div style={style.middle}>
          {routes.map((route, index) => {
            if (route.path === "/") return;
            return (
              <Button key={index} color="inherit" sx={style.Button}
                href={route.path}>{route.title}</Button>
            )
          })}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const style = {
  navbar: {
    flexGrow: 1,
    color: '#6C2C86',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    position: 'relative',
    justifyContent: 'space-between',
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  Button: {
    color: '#6C2C86',
    fontSize: '1.1em',
    fontWeight: 'bold',
    margin: '10px',
    '&:hover': {
      color: '#6C2C86',
    },
  },
  logo: {
    marginRight: '10px',
    alignSelf: 'start',
    fontSize: '1.1em',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '#6C2C86',
    },
  },
  middle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }
}