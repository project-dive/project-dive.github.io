import React from "react";

import Home from "./views/HomeView";
import About from "./views/AboutView";
import ChapterInfo from "./views/ChapterInfoView";
// import GuestBook from "./views/GuestBookView";
import Events from "./views/EventsView";
import FAQ from "./views/FAQView";

import Navbar from "./components/Navbar";
import { ThemeProvider } from '@mui/material/styles';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const routes = [
    {
      component: Home,
      path: "/",
      title: "Project Dive",
      icon: "home",
    },
    {
      component: ChapterInfo,
      path: "/chapter",
      title: "Datasektionen",
      icon: "info",
    },
    // {
      //   component: GuestBook,
      //   path: "/guestbook",
    //   title: "Guest Book",
    //   icon: "book",
    // },
    {
      component: Events,
      path: "/events",
      title: "Event",
      icon: "book",
    },
    {
      component: FAQ,
      path: "/faq",
      title: "FAQ",
      icon: "book",
    },
    {
      component: About,
      path: "/about",
      title: "Om oss",
      icon: "info",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <img style={style.img} src='assets/borggardencrop.jpg'/>
        <Navbar routes={routes} />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App


import { ThemeOptions } from "@mui/material";
import { createTheme } from '@mui/material/styles';


const style = {
  img: {
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      // zIndex: '-1',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // fade out the image gradually
      /* Mask gradient */
      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%)',
      maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%)',
    },
}

const Theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6d2c86',
    },
    secondary: {
      main: '#FABF36',
    },
    background: {
      default: '#FFF5C2',
      paper: '#ffffff',
    },
    error: {
      main: '#FF521B',
    },
    info: {
      main: '#7C9EB2',
    },
  },
  typography: {
    fontFamily: 'Figtree',
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontWeightLight: 400,
    h1: {
      fontSize: '4rem',
      fontWeight: 800,
      color: '#6D2C86'
      
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 3,
          height: 48,
          padding: "0 30px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          minHeight: "20px",
          zIndex: 100,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          flexGrow: 1,
              color: '#6C2C86',
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              position: 'relative',
              justifyContent: 'space-between',
              minHeight: '20px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF5C2",
          color: "#6d2c86",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontSize: "1.3em",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          fontSize: "1.2em",
        },
      },
    },
  },
});
