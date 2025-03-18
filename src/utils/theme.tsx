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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 3,
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
    }
  }
});


export default {Theme}