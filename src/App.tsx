import React from "react";

import Home from "./views/HomeView";
import About from "./views/AboutView";
import ChapterInfo from "./views/ChapterInfoView";
import GuestBook from "./views/GuestBookView";
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
      component: About,
      path: "/about",
      title: "Om oss",
      icon: "info",
    },
    {
      component: ChapterInfo,
      path: "/chapter",
      title: "Chapter Info",
      icon: "info",
    },
    {
      component: GuestBook,
      path: "/guestbook",
      title: "Guest Book",
      icon: "book",
    },
    {
      component: Events,
      path: "/events",
      title: "Events",
      icon: "book",
    },
    {
      component: FAQ,
      path: "/faq",
      title: "FAQ",
      icon: "book",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
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
          color: '#6C2C86',
          height: 48,
          padding: "0 30px",
          '&:hover': {
            color: '#6C2C86',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          minHeight: "20px",
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
  },
});
