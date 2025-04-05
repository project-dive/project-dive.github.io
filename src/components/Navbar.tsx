import { AppBar, Box, Button, Divider, ListItemIcon, Menu, MenuItem, Toolbar } from '@mui/material';
import * as React from 'react';
import ProjectDive from 'assets/ProjectDive.svg?react';


function MobileNavbar({ routes }) {
  // const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ width: '50vw', minWidth: '200px'}}
      >
        <MenuItem key={'diveLogo'} color="inherit" sx={style.mobileButton} component={"a"} href='/' onClick={handleClose}>
          <ListItemIcon> <ProjectDive /> </ListItemIcon> {routes[0].title}
        </MenuItem>
        {routes.map((route, index) => {
          if (route.path === "/") return;
          return ([
              <Divider variant="middle" style={{ width: '80%' }} />,
              <MenuItem key={index} sx={style.mobileButton} component={"a"} href={"/#" + route.path} onClick={handleClose}>
                {route.title}
              </MenuItem>
          ])
        })}
      </Menu>
      <AppBar position="fixed">
        <Toolbar sx={style.mobileNavbar}>
          <Button key={'bigboii'} sx={style.mobileLogo} color="inherit" onClick={handleClick}>
            <ProjectDive />
            <>{routes[0].title}</>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

function DesktopNavbar({ routes }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      { isDesktop ? <DesktopNavbar routes={routes} /> : <MobileNavbar routes={routes} /> }
    </>
  );
}

const style = {
  Button: {
    fontSize: '1.1em',
    fontWeight: 'bold',    
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
    fontSize: '2em',
    fontWeight: 'bold',
    margin: '10px',
    '&:hover': {
      color: '#6C2C86',
    },
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
    minHeight: '164px',
  },
}