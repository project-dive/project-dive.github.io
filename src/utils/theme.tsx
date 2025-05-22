import { ThemeOptions } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const Themes: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6d2c86',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FABF36',
    },
    tertiary: {
      main: '#FFF5C2',
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
    text: {
      primary: '#3f300e',
      secondary: '#FFF5C2',
      disabled: 'rgba(63,48,14,0.38)',
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
      
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      color: '#6D2C86'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#6D2C86'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 50,
          height: 48,
          padding: '0 30px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#6D2C86',
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
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
          backgroundColor: '#FFF5C2'
          },
        },
      },
    },
  },
});

export default Themes;