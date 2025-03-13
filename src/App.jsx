import Home from './views/HomeView';
import About from './views/AboutView';
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App


const theme = createTheme({
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
  },
});