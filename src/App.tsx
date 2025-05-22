import { Box, ThemeProvider } from '@mui/material';
import React from "react";
import './App.css';

import Home from "views/HomeView";
// import About from "views/AboutView";
import ChapterInfo from "views/ChapterInfoView";
// import GuestBook from "views/GuestBookView";
import Events from "views/EventsView";
import FAQ from "views/FAQView";

import banner from "assets/borggardencrop.jpg";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Themes from "utils/theme";

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

  return (
    <HashRouter>
      <ThemeProvider theme={Themes}>  
        <Navbar routes={routes} />
        <Box component="div" style={style.imgBox} src={banner}>
            <img width={"100%"} src={banner}/>
        </Box>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
        <Footer/>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App

const style = {
  imgBox: {
    width: '100%',
    maxHeight: '25vh',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: "hidden",
    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 95%)',
  },
}
