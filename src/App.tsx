import React from "react";

import Home from "./views/HomeView";
// import About from "./views/AboutView";
import ChapterInfo from "./views/ChapterInfoView";
// import GuestBook from "./views/GuestBookView";
import Events from "./views/EventsView";
import FAQ from "./views/FAQView";

import Navbar from "./components/Navbar";
import { ThemeProvider, Box, Typography, Stack, IconButton } from '@mui/material';
import './App.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import banner from "./assets/borggardencrop.jpg";

import Themes from "./utils/theme"

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const routes = [
    {
      component: Home,
      path: "/",
      title: "Project Dive",
      icon: "home",
    },
    {
      component: Events,
      path: "/events",
      title: "Event",
      icon: "book",
    },
    {
      component: ChapterInfo,
      path: "/chapter",
      title: "Sektionen",
      icon: "info",
    },
    // {
      //   component: GuestBook,
      //   path: "/guestbook",
    //   title: "Guest Book",
    //   icon: "book",
    // },
    {
      component: FAQ,
      path: "/faq",
      title: "FAQ",
      icon: "book",
    },
    // {
    //   component: About,
    //   path: "/#/about",
    //   title: "Om oss",
    //   icon: "info",
    // },
  ];

  const Footer = (
    <Box sx={{ mt: 4, borderTop: 1, borderColor: "divider", pt: 2 }}>
      
      <Stack
        direction="row"
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
          Projekt Dive 2025
        </Typography>
        <IconButton color="primary" onClick={() => {window.open("https://www.linkedin.com/company/project-dive/");}}>
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => {window.open("https://www.instagram.com/project_dive_kth/");}}>
          <InstagramIcon />
        </IconButton>
      </Stack>
      
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; {new Date().getFullYear()} Datasektionen, KTH Sverige
      </Typography>
    </Box>
  )

  return (
    <HashRouter>
      <ThemeProvider theme={Themes}>
        <img style={style.img} src={banner}/>
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
        {Footer}
      </ThemeProvider>
    </HashRouter>
  );
}

export default App

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
