import React from 'react';

import Home from './views/HomeView';
import About from './views/AboutView';
import ChapterInfo from './views/ChapterInfoView';
import GuestBook from './views/GuestBookView';
import Events from './views/EventsView';

import Navbar from "./components/Navbar";
import Theme from "./utils/theme";
import { ThemeProvider } from '@mui/material/styles';
import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom";

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
  ]


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar routes={routes}/>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component/>}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
