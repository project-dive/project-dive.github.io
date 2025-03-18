import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ProjectDive from '../../public/assets/ProjectDive.svg?react';
import { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';


function MobileNavbar({ routes }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Drawer open={open} onClose={() => { setOpen(false) }} style={{ width: '50vw' }}>
        <Box sx={{ width: '50vw', minWidth: '200px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFF5C2', height: '100vh' }}>
            <Button key={'diveLogo'} sx={style.mobileLogo} color="inherit" href='/' onClick={() => setOpen(false)}>
              <ProjectDive />
              <>{routes[0].title}</>
            </Button>
            <Divider variant="middle" style={{ width: '80%' }} />
            {routes.map((route, index) => {
              if (route.path === "/") return;
              return (
                <>
                  <Button key={index} color="inherit" sx={style.mobileButton}
                    href={route.path}>{route.title}</Button>
                  <Divider variant="middle" style={{ width: '80%' }} />
                </>
              )
            })}
          </Box>
        </Box>
      </Drawer>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar sx={style.mobileNavbar}>
          <Button key={'bigboii'} sx={style.mobileLogo} color="inherit" onClick={() => setOpen(true)}>
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
      <AppBar position="static" sx={style.appbar}>
        <Toolbar sx={style.navbar}>
          <Button sx={style.logo} color="inherit" href="/">
            <ProjectDive />
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
  console.log(isDesktop, window.innerWidth);

  return (
    <>
      {
        isDesktop ? <DesktopNavbar routes={routes} /> : <MobileNavbar routes={routes} />
      }

    </>
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
    marginBottom: '20px',
  },
}