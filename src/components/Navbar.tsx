import * as React from 'react';
import {AppBar, Box, Button, Toolbar, Divider, Menu, MenuItem, ListItemIcon, IconButton, ListItem, Drawer, List, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ProjectDive from '../assets/ProjectDive.svg?react';
import { useEffect, useState } from 'react';

function MobileNavbar({ routes }) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <>
      <AppBar position="static" sx={{background: open? '#FFF5C2': 'transparent'}}>
        <Toolbar sx={style.mobileNavbar}>
          <Button key={'bigboii'} sx={style.mobileLogo} color="inherit" href="/">
            <ProjectDive />
            <>{routes[0].title}</>
          </Button>
          <IconButton edge="end" color="inherit" onClick={handleToggle} sx={style.mobileKebab}>
            {open ? <CloseIcon sx={{fontSize:60}}/> : <MenuIcon sx={{fontSize:60}}/>}
        </IconButton>
        </Toolbar>
      </AppBar>
      {open && (
        <Paper elevation={0} sx={style.mobileDropdown}>
          {routes.map((route, index) => {
          if (route.path === "/") return;
          return ([
              <MenuItem key={index} sx={style.mobileButton} component={"a"} href={"/#" + route.path} onClick={handleClose}>
                {route.title}
              </MenuItem>,
              <Divider variant="middle" style={{ width: '80%' }} />
          ])
        })}
        </Paper>
      )}
      
      
      
    </>
  )
}
function DesktopNavbar({ routes }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={style.middle}>
            <div style={style.middlemiddle}>
              {routes.map((route, index) => {
                if (route.path === "/") return;
                return (
                  <Button key={index} sx={style.Button} href={"/#" + route.path}>{route.title}</Button>
                )
              })}
            </div>
          </div>
          <Button sx={style.logo} color="inherit" href="/">
            <ProjectDive />
            <>{routes[0].title}</>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default function Navbar({ routes }) {
  const breakpoint = 1000;
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > breakpoint);
  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpoint);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {
        isDesktop ? <DesktopNavbar routes={routes} /> : <MobileNavbar routes={routes} />
      }

    </>
  );
}

const style = {
  Button: {
    fontSize: '1.1em',
    fontWeight: 'bold',    
  },
  middle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  middlemiddle: {
    display: 'flex',
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'center',
    backgroundColor: '#FFF5C2',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  mobileNavbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  mobileButton: {
    color: '#6C2C86',
    fontSize: '3em',
    fontWeight: 'bold',
    margin: '20px',
    '&:hover': {
      color: '#6C2C86',
    },
  },
  logo: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '164px',
  },
  mobileLogo: {
    color: '#6C2C86',
    fontSize: '2em',
    fontWeight: 'bold',
    '&:hover': {
      color: '#6C2C86',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    minHeight: '20vh',
  },
  mobileDropdown: {
    position: 'absolute',
    zIndex: 1200,
    width: '100vw',
    height: '100vh',
    paddingTop: '20px',
    paddingLeft: '10px',
    backgroundColor: '#FFF5C2',
  },
  mobileKebab: {
    marginLeft: 'auto', 
    marginRight: 2, '&:focus':{outline:'none'}
  }
}